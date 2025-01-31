n.d(t, { P: () => p }), n(47120), n(724458), n(653041);
var i = n(392711),
    r = n(271383),
    a = n(594174),
    s = n(70956),
    o = n(815790),
    l = n(740900),
    u = n(823596),
    c = n(993374),
    d = n(331551);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let _ = 3 * s.Z.Millis.SECOND;
class p {
    getSearchIndex() {
        return null == this._search || this._search.hasDefaultQuery ? l.R_.CURRENT_GUILD_MEMBER : l.R_.INCLUDED_IN_SEARCH_RESULTS;
    }
    initialize() {
        if (this._initialized) {
            this.lastCursorTimestamp = Date.now();
            return;
        }
        (this._initialized = !0), (this._search = new c.j(this.guildId)), (this._members = new l.cm(this.guildId)), (this._pagination = new u.Rt(this.guildId, this._members.values(this.getSearchIndex())));
    }
    get isInitialized() {
        return this._initialized;
    }
    reset() {
        var e, t, n;
        let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        this._initialized && (null === (e = this._members) || void 0 === e || e.reset(), null === (t = this._pagination) || void 0 === t || t.reset(), null === (n = this._search) || void 0 === n || n.reset(), i && this.initialize());
    }
    get searchChunkSize() {
        return null != this._pagination && this._initialized ? (0, u.t3)(this._pagination.getPaginationState()) : 0;
    }
    getMember(e) {
        var t;
        return null != this._members && this._initialized && null !== (t = this._members.getMemberByUserId(e)) && void 0 !== t ? t : null;
    }
    getMembersByIndex(e) {
        return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [[], 0];
    }
    countMembersByIndex(e) {
        return null != this._members && this._initialized ? this._members.count(e) : 0;
    }
    _checkUpdatesForPaginationUpdate(e, t) {
        return (null != t.isIncludedInSearchResults && t.isIncludedInSearchResults !== e.isIncludedInSearchResults) || (null != t.isCurrentGuildMemberByTimestamp && t.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp);
    }
    _getIsIncludedInSearch(e, t) {
        if (null == this._search || this._search.hasDefaultQuery) return [!1, !1];
        let n = {
                ...e,
                ...t
            },
            i = this._search.isMemberIncludedInSearchResults(n),
            r = i !== e.isIncludedInSearchResults;
        return [i, r];
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
            i = this._members.getMemberByUserId(e);
        if (null == i) {
            n = !0;
            let a = r.ZP.getTrueMember(this.guildId, e);
            if (null == a) return [!1, !1];
            i = this._members.enhanceNewMember(a, this.getSearchState(), t);
        }
        if (null == t.isIncludedInSearchResults) {
            let [e, r] = this._getIsIncludedInSearch(i, t);
            r && ((n = !0), (t.isIncludedInSearchResults = e));
        } else t.isIncludedInSearchResults !== i.isIncludedInSearchResults && (n = !0);
        let a = this._members.updateMember(i, t);
        return n || (n = this._checkUpdatesForPaginationUpdate(i, t)), [n, a];
    }
    isMemberInIndex(e) {
        return null != this._members && !!this._initialized && this._members._membersMap.has(e);
    }
    isMemberIncludedInSearchResults(e) {
        if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
        if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
        let t = this._members.getMemberByUserId(e);
        if (null == t) {
            let n = r.ZP.getTrueMember(this.guildId, e);
            if (null == n) return !1;
            t = this._members.enhanceNewMember(n, this.getSearchState());
        } else if (t.isIncludedInSearchResults) return !0;
        return this._search.isMemberIncludedInSearchResults(t);
    }
    updateMember(e, t) {
        if (null == this._members || !this._initialized) return !1;
        let [n, i] = this._rawUpdateMember(e, t);
        return n ? this.updatePaginationChunks() : i;
    }
    updateClientMembers(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == this._members || !this._initialized) return !1;
        let i = !1,
            r = !1;
        for (let a of e) {
            if (null == a.joinedAt) continue;
            let e = a;
            if (
                (t &&
                    (e = {
                        ...e,
                        isIncludedInSearchResults: !0
                    }),
                n)
            ) {
                let t = (0, o.Dw)(a.joinedAt);
                e = {
                    ...e,
                    isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                    refreshTimestamp: this.lastRefreshTimestamp
                };
            }
            let [s, l] = this._rawUpdateMember(a.userId, e);
            (i = s || i), (r = l || r);
        }
        return i ? this.updatePaginationChunks() : r;
    }
    updateServerMembers(e) {
        if (null == this._members || !this._initialized) return !1;
        let t = !1,
            n = !1;
        for (let i of e) {
            let e = r.ZP.getTrueMember(this.guildId, i.user.id);
            if (null == e) continue;
            let [a, s] = this._rawUpdateMember(i.user.id, e);
            (t = a || t), (n = s || n);
        }
        return t ? this.updatePaginationChunks() : n;
    }
    updateMembersByMemberIds(e) {
        if (null == this._members || !this._initialized) return !1;
        let t = e.reduce((e, t) => {
            let n = r.ZP.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t);
    }
    updateMembersSort(e) {
        return new Promise((t) => {
            [...(0, i.cloneDeep)(this.getMembersByIndex(l.R_.CURRENT_GUILD_MEMBER)[0]), ...(0, i.cloneDeep)(this.getMembersByIndex(l.R_.NEW_GUILD_MEMBER)[0])].forEach((t) => {
                var n, i, r;
                let a = (0, d.b)(t, e),
                    s = null !== (r = null === (n = this._search) || void 0 === n ? void 0 : n.isMemberIncludedInSearchResults(t)) && void 0 !== r && r;
                null === (i = this._members) ||
                    void 0 === i ||
                    i.updateMember(t, {
                        sort: a,
                        isIncludedInSearchResults: s
                    });
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
            let n = r.ZP.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp);
    }
    rebuildAllMembers() {
        if (null == this._members || !this._initialized) return !1;
        let e = r.ZP.getMembers(this.guildId);
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
        let t = (0, i.cloneDeep)(this._members.values(l.R_.NEW_GUILD_MEMBER)),
            n = !1;
        for (let i of t)
            n =
                this._members.updateMember(i, {
                    isCurrentGuildMemberByTimestamp: !0,
                    refreshTimestamp: e,
                    user: a.default.getUser(i.userId)
                }) || n;
        this._members.resetNewMemberTimestamp(), this.resetSearchState() && (n = !1);
        let [r, s] = this.updatePaginationState({ currentPage: 1 }, !1);
        return s && (n = !1), n && this.updatePaginationChunks(), !0;
    }
    getNewMemberTimestamp() {
        return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0;
    }
    updateSearchState(e) {
        if (null == this._members || null == this._search || !this._initialized) return !1;
        let t = !!this._search.hasDefaultQuery;
        null != e.selectedSort && e.selectedSort !== this._search.getSearchState().selectedSort && this.sortMembersBySelectedSort(e.selectedSort);
        let n = this._search.updateSearchState(e);
        if (this._search.hasDefaultQuery && t) return this.updatePaginationChunks();
        let r = (0, i.cloneDeep)(this._members.values(l.R_.CURRENT_GUILD_MEMBER)),
            a = t !== this._search.hasDefaultQuery;
        for (let e of r) {
            if (!e.isCurrentGuildMemberByTimestamp) continue;
            let t = this._search.isMemberIncludedInSearchResults(e);
            t !== e.isIncludedInSearchResults && ((a = !0), (n = !0), this._members.updateMember(e, { isIncludedInSearchResults: t }));
        }
        return a ? (this.updatePaginationChunks(), this.updatePaginationState({ currentPage: 1 }), !0) : n;
    }
    getSearchState() {
        return null != this._search && this._initialized ? this._search.getSearchState() : (0, c.I)();
    }
    hasDefaultSearchState() {
        return null == this._search || !this._initialized || this._search.hasDefaultQuery;
    }
    resetSearchState() {
        return !!(null != this._search && this._initialized && this._search.resetSearchState()) && this.updatePaginationChunks();
    }
    getTotalResultsCount() {
        return null != this._search && null != this._pagination && this._initialized ? (this._search.hasDefaultQuery && null != this._defaultSearchTotalResultsCount ? this._defaultSearchTotalResultsCount : this._pagination.getPaginationState().totalResultsCount) : 0;
    }
    updatePaginationState(e) {
        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != this._search && null != this._pagination && this._initialized ? (t && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1];
    }
    clearPaginationState() {
        var e;
        null === (e = this._pagination) || void 0 === e || e.reset();
    }
    getPaginationState() {
        return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, u.IF)();
    }
    getPaginatedMembers() {
        return null != this._pagination && this._initialized ? [this._pagination.paginatedMembers, this._pagination.version] : [{}, 0];
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
    constructor(e) {
        f(this, 'guildId', void 0), f(this, 'lastRefreshTimestamp', 0), f(this, 'lastCursorTimestamp', Date.now()), f(this, '_initialized', void 0), f(this, '_pagination', void 0), f(this, '_search', void 0), f(this, '_members', void 0), f(this, '_lastRefreshTimer', null), f(this, '_defaultSearchTotalResultsCount', void 0), (this.guildId = e), (this._initialized = !1), (this._members = null), (this._pagination = null), (this._search = null);
    }
}
