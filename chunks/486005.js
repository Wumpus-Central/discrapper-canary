"use strict";
n.d(t, { e: () => f }), n(321073);
var r = n(735438),
    i = n(696451),
    s = n(287809),
    a = n(927813),
    o = n(157347),
    l = n(551816),
    u = n(233693),
    c = n(910117),
    d = n(230959);
let _ = 3 * a.A.Millis.SECOND;
class f {
    guildId;
    lastRefreshTimestamp = 0;
    lastCursorTimestamp = Date.now();
    _initialized;
    _pagination;
    _search;
    _members;
    _lastRefreshTimer = null;
    _defaultSearchTotalResultsCount;
    constructor(e) {
        (this.guildId = e),
            (this._initialized = !1),
            (this._members = null),
            (this._pagination = null),
            (this._search = null);
    }
    getSearchIndex() {
        return null == this._search || this._search.hasDefaultQuery
            ? l.Tu.CURRENT_GUILD_MEMBER
            : l.Tu.INCLUDED_IN_SEARCH_RESULTS;
    }
    initialize() {
        if (this._initialized) {
            this.lastCursorTimestamp = Date.now();
            return;
        }
        (this._initialized = !0),
            (this._search = new c.q(this.guildId)),
            (this._members = new l.z8(this.guildId)),
            (this._pagination = new u.qi(this.guildId, this._members.values(this.getSearchIndex())));
    }
    get isInitialized() {
        return this._initialized;
    }
    reset() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._initialized &&
            (this._members?.reset(), this._pagination?.reset(), this._search?.reset(), e && this.initialize());
    }
    get searchChunkSize() {
        return null != this._pagination && this._initialized ? (0, u.n4)(this._pagination.getPaginationState()) : 0;
    }
    getMember(e) {
        return null != this._members && this._initialized ? (this._members.getMemberByUserId(e) ?? null) : null;
    }
    getMembersByIndex(e) {
        return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [[], 0];
    }
    countMembersByIndex(e) {
        return null != this._members && this._initialized ? this._members.count(e) : 0;
    }
    _checkUpdatesForPaginationUpdate(e, t) {
        return (
            (null != t.isIncludedInSearchResults && t.isIncludedInSearchResults !== e.isIncludedInSearchResults) ||
            (null != t.isCurrentGuildMemberByTimestamp &&
                t.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp)
        );
    }
    _getIsIncludedInSearch(e, t) {
        if (null == this._search || this._search.hasDefaultQuery) return [!1, !1];
        let n = { ...e, ...t },
            r = this._search.isMemberIncludedInSearchResults(n),
            i = r !== e.isIncludedInSearchResults;
        return [r, i];
    }
    updatePaginationChunks() {
        if (null == this._pagination || null == this._members || !this._initialized) return !1;
        let e = this._members.values(this.getSearchIndex());
        return this._pagination.updateSortedMembers(e);
    }
    removeMember(e) {
        if (null == this._members || !this._initialized || null == this._members.getMemberByUserId(e)) return !1;
        let t = this._members.removeMember(e);
        return t ? this.updatePaginationChunks() : t;
    }
    _rawUpdateMember(e, t) {
        if (null == this._members) return [!1, !1];
        let n = !1,
            r = this._members.getMemberByUserId(e);
        if (null == r) {
            n = !0;
            let s = i.Ay.getTrueMember(this.guildId, e);
            if (null == s) return [!1, !1];
            r = this._members.enhanceNewMember(s, this.getSearchState(), t);
        }
        if (null == t.isIncludedInSearchResults) {
            let [e, i] = this._getIsIncludedInSearch(r, t);
            i && ((n = !0), (t.isIncludedInSearchResults = e));
        } else t.isIncludedInSearchResults !== r.isIncludedInSearchResults && (n = !0);
        let s = this._members.updateMember(r, t);
        return n || (n = this._checkUpdatesForPaginationUpdate(r, t)), [n, s];
    }
    isMemberInIndex(e) {
        return null != this._members && !!this._initialized && this._members._membersMap.has(e);
    }
    isMemberIncludedInSearchResults(e) {
        if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
        if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
        let t = this._members.getMemberByUserId(e);
        if (null == t) {
            let n = i.Ay.getTrueMember(this.guildId, e);
            if (null == n) return !1;
            t = this._members.enhanceNewMember(n, this.getSearchState());
        } else if (t.isIncludedInSearchResults) return !0;
        return this._search.isMemberIncludedInSearchResults(t);
    }
    updateMember(e, t) {
        if (null == this._members || !this._initialized) return !1;
        let [n, r] = this._rawUpdateMember(e, t);
        return n ? this.updatePaginationChunks() : r;
    }
    updateClientMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == this._members || !this._initialized) return !1;
        let r = !1,
            i = !1;
        for (let s of e) {
            if (null == s.joinedAt) continue;
            let e = s;
            if ((t && (e = { ...e, isIncludedInSearchResults: !0 }), n)) {
                let t = (0, o.vn)(s.joinedAt);
                e = {
                    ...e,
                    isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                    refreshTimestamp: this.lastRefreshTimestamp,
                };
            }
            let [a, l] = this._rawUpdateMember(s.userId, e);
            (r = a || r), (i = l || i);
        }
        return r ? this.updatePaginationChunks() : i;
    }
    updateServerMembers(e) {
        if (null == this._members || !this._initialized) return !1;
        let t = !1,
            n = !1;
        for (let r of e) {
            let e = i.Ay.getTrueMember(this.guildId, r.user.id);
            if (null == e) continue;
            let [s, a] = this._rawUpdateMember(r.user.id, e);
            (t = s || t), (n = a || n);
        }
        return t ? this.updatePaginationChunks() : n;
    }
    updateMembersByMemberIds(e) {
        if (null == this._members || !this._initialized) return !1;
        let t = e.reduce((e, t) => {
            let n = i.Ay.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t);
    }
    updateMembersSort(e) {
        return new Promise((t) => {
            [
                ...(0, r.cloneDeep)(this.getMembersByIndex(l.Tu.CURRENT_GUILD_MEMBER)[0]),
                ...(0, r.cloneDeep)(this.getMembersByIndex(l.Tu.NEW_GUILD_MEMBER)[0]),
            ].forEach((t) => {
                let n = (0, d.R)(t, e),
                    r = this._search?.isMemberIncludedInSearchResults(t) ?? !1;
                this._members?.updateMember(t, { sort: n, isIncludedInSearchResults: r });
            }),
                t();
        });
    }
    sortMembersBySelectedSort(e) {
        null != this._search &&
            null != this._members &&
            this._initialized &&
            null != e &&
            (this.updatePaginationState({ sort: e }, !0),
            this.updateMembersSort(e).then(() => {
                this.updatePaginationChunks();
            }));
    }
    updateSearchedMembersByMemberIds(e) {
        if (null == this._search || null == this._members || !this._initialized) return !1;
        let t = e.reduce((e, t) => {
            let n = i.Ay.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp);
    }
    rebuildAllMembers() {
        if (null == this._members || !this._initialized) return !1;
        let e = i.Ay.getMembers(this.guildId);
        return this.updateClientMembers(e);
    }
    _scheduleRefresh(e) {
        (this.lastRefreshTimestamp = e),
            (this.lastCursorTimestamp = Date.now()),
            null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer),
            (this._lastRefreshTimer = setTimeout(() => {
                (this._lastRefreshTimer = null), (this.lastRefreshTimestamp = 0);
            }, _));
    }
    refreshNewMembersAndSearchResults() {
        if (null == this._search || null == this._members || !this._initialized) return !1;
        let e = Number(Date.now());
        this._scheduleRefresh(e);
        let t = (0, r.cloneDeep)(this._members.values(l.Tu.NEW_GUILD_MEMBER)),
            n = !1;
        for (let r of t)
            n =
                this._members.updateMember(r, {
                    isCurrentGuildMemberByTimestamp: !0,
                    refreshTimestamp: e,
                    user: s.default.getUser(r.userId),
                }) || n;
        this._members.resetNewMemberTimestamp(), this.resetSearchState() && (n = !1);
        let [i, a] = this.updatePaginationState({ currentPage: 1 }, !1);
        return a && (n = !1), n && this.updatePaginationChunks(), !0;
    }
    getNewMemberTimestamp() {
        return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0;
    }
    updateSearchState(e) {
        if (null == this._members || null == this._search || !this._initialized) return !1;
        let t = !!this._search.hasDefaultQuery;
        null != e.selectedSort &&
            e.selectedSort !== this._search.getSearchState().selectedSort &&
            this.sortMembersBySelectedSort(e.selectedSort);
        let n = this._search.updateSearchState(e);
        if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
        let i = (0, r.cloneDeep)(this._members.values(l.Tu.CURRENT_GUILD_MEMBER)),
            s = t !== this._search.hasDefaultQuery;
        for (let e of i) {
            if (!e.isCurrentGuildMemberByTimestamp) continue;
            let t = this._search.isMemberIncludedInSearchResults(e);
            t !== e.isIncludedInSearchResults &&
                ((s = !0), (n = !0), this._members.updateMember(e, { isIncludedInSearchResults: t }));
        }
        return s ? (this.updatePaginationChunks(), this.updatePaginationState({ currentPage: 1 }), !0) : n;
    }
    getSearchState() {
        return null != this._search && this._initialized ? this._search.getSearchState() : (0, c.l)();
    }
    hasDefaultSearchState() {
        return null == this._search || !this._initialized || this._search.hasDefaultQuery;
    }
    resetSearchState() {
        return (
            null != this._search &&
            !!this._initialized &&
            !!this._search.resetSearchState() &&
            this.updatePaginationChunks()
        );
    }
    getTotalResultsCount() {
        return null != this._search && null != this._pagination && this._initialized
            ? this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount
                ? this._defaultSearchTotalResultsCount
                : this._pagination.getPaginationState().totalResultsCount
            : 0;
    }
    updatePaginationState(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != this._search && null != this._pagination && this._initialized
            ? (t && (this.lastRefreshTimestamp = 0),
              this._search.hasDefaultQuery &&
                  null != e.totalResultsCount &&
                  (this._defaultSearchTotalResultsCount = e.totalResultsCount),
              this._pagination.updatePaginationState(e))
            : [!1, !1];
    }
    clearPaginationState() {
        this._pagination?.reset();
    }
    getPaginationState() {
        return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, u.vg)();
    }
    getPaginatedMembers() {
        return null != this._pagination && this._initialized
            ? [this._pagination.paginatedMembers, this._pagination.version]
            : [{}, 0];
    }
    updatePaginationToken(e) {
        return null != this._pagination && !!this._initialized && this._pagination.updatePaginationToken(e);
    }
    getElasticSearchPagination() {
        return null != this._pagination && this._initialized ? this._pagination.getElasticSearchPagination() : null;
    }
    removeRoleFromSearchState(e) {
        let t = new Set(this.getSearchState().selectedRoleIds);
        return t.delete(e), this.updateSearchState({ selectedRoleIds: t });
    }
}
