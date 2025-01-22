r.d(n, {
    P: function () {
        return E;
    }
});
var i = r(47120);
var a = r(724458);
var o = r(653041);
var s = r(392711);
var l = r(271383),
    u = r(594174),
    c = r(70956),
    d = r(815790),
    f = r(740900),
    p = r(823596),
    h = r(993374),
    _ = r(331551);
function m(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let g = 3 * c.Z.Millis.SECOND;
class E {
    getSearchIndex() {
        return null == this._search || this._search.hasDefaultQuery ? f.R_.CURRENT_GUILD_MEMBER : f.R_.INCLUDED_IN_SEARCH_RESULTS;
    }
    initialize() {
        if (this._initialized) {
            this.lastCursorTimestamp = Date.now();
            return;
        }
        (this._initialized = !0), (this._search = new h.j(this.guildId)), (this._members = new f.cm(this.guildId)), (this._pagination = new p.Rt(this.guildId, this._members.values(this.getSearchIndex())));
    }
    get isInitialized() {
        return this._initialized;
    }
    reset() {
        var e, n, r;
        let i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!!this._initialized) null === (e = this._members) || void 0 === e || e.reset(), null === (n = this._pagination) || void 0 === n || n.reset(), null === (r = this._search) || void 0 === r || r.reset(), i && this.initialize();
    }
    get searchChunkSize() {
        return null != this._pagination && this._initialized ? (0, p.t3)(this._pagination.getPaginationState()) : 0;
    }
    getMember(e) {
        var n;
        return null != this._members && this._initialized ? (null !== (n = this._members.getMemberByUserId(e)) && void 0 !== n ? n : null) : null;
    }
    getMembersByIndex(e) {
        return null != this._members && this._initialized ? [this._members.values(e), this._members.version] : [[], 0];
    }
    countMembersByIndex(e) {
        return null != this._members && this._initialized ? this._members.count(e) : 0;
    }
    _checkUpdatesForPaginationUpdate(e, n) {
        return (null != n.isIncludedInSearchResults && n.isIncludedInSearchResults !== e.isIncludedInSearchResults) || (null != n.isCurrentGuildMemberByTimestamp && n.isCurrentGuildMemberByTimestamp !== e.isCurrentGuildMemberByTimestamp) || !1;
    }
    _getIsIncludedInSearch(e, n) {
        if (null == this._search || this._search.hasDefaultQuery) return [!1, !1];
        let r = {
                ...e,
                ...n
            },
            i = this._search.isMemberIncludedInSearchResults(r),
            a = i !== e.isIncludedInSearchResults;
        return [i, a];
    }
    updatePaginationChunks() {
        if (null == this._pagination || null == this._members || !this._initialized) return !1;
        let e = this._members.values(this.getSearchIndex());
        return this._pagination.updateSortedMembers(e);
    }
    removeMember(e) {
        if (null == this._members || !this._initialized || null == this._members.getMemberByUserId(e)) return !1;
        let n = this._members.removeMember(e);
        return n ? this.updatePaginationChunks() : n;
    }
    _rawUpdateMember(e, n) {
        if (null == this._members) return [!1, !1];
        let r = !1,
            i = this._members.getMemberByUserId(e);
        if (null == i) {
            r = !0;
            let a = l.ZP.getTrueMember(this.guildId, e);
            if (null == a) return [!1, !1];
            i = this._members.enhanceNewMember(a, this.getSearchState(), n);
        }
        if (null == n.isIncludedInSearchResults) {
            let [e, a] = this._getIsIncludedInSearch(i, n);
            a && ((r = !0), (n.isIncludedInSearchResults = e));
        } else n.isIncludedInSearchResults !== i.isIncludedInSearchResults && (r = !0);
        let a = this._members.updateMember(i, n);
        return !r && (r = this._checkUpdatesForPaginationUpdate(i, n)), [r, a];
    }
    isMemberInIndex(e) {
        return null != this._members && !!this._initialized && this._members._membersMap.has(e);
    }
    isMemberIncludedInSearchResults(e) {
        if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
        if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
        let n = this._members.getMemberByUserId(e);
        if (null == n) {
            let r = l.ZP.getTrueMember(this.guildId, e);
            if (null == r) return !1;
            n = this._members.enhanceNewMember(r, this.getSearchState());
        } else if (n.isIncludedInSearchResults) return !0;
        return this._search.isMemberIncludedInSearchResults(n);
    }
    updateMember(e, n) {
        if (null == this._members || !this._initialized) return !1;
        let [r, i] = this._rawUpdateMember(e, n);
        return r ? this.updatePaginationChunks() : i;
    }
    updateClientMembers(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == this._members || !this._initialized) return !1;
        let i = !1,
            a = !1;
        for (let o of e) {
            if (null == o.joinedAt) continue;
            let e = o;
            if (
                (n &&
                    (e = {
                        ...e,
                        isIncludedInSearchResults: !0
                    }),
                r)
            ) {
                let n = (0, d.Dw)(o.joinedAt);
                e = {
                    ...e,
                    isCurrentGuildMemberByTimestamp: n <= this._members.newMemberTimestamp,
                    refreshTimestamp: this.lastRefreshTimestamp
                };
            }
            let [s, l] = this._rawUpdateMember(o.userId, e);
            (i = s || i), (a = l || a);
        }
        return i ? this.updatePaginationChunks() : a;
    }
    updateServerMembers(e) {
        if (null == this._members || !this._initialized) return !1;
        let n = !1,
            r = !1;
        for (let i of e) {
            let e = l.ZP.getTrueMember(this.guildId, i.user.id);
            if (null == e) continue;
            let [a, o] = this._rawUpdateMember(i.user.id, e);
            (n = a || n), (r = o || r);
        }
        return n ? this.updatePaginationChunks() : r;
    }
    updateMembersByMemberIds(e) {
        if (null == this._members || !this._initialized) return !1;
        let n = e.reduce((e, n) => {
            let r = l.ZP.getTrueMember(this.guildId, n);
            return null != r && e.push(r), e;
        }, []);
        return this.updateClientMembers(n);
    }
    updateMembersSort(e) {
        return new Promise((n) => {
            let r = (0, s.cloneDeep)(this.getMembersByIndex(f.R_.CURRENT_GUILD_MEMBER)[0]);
            [...r, ...(0, s.cloneDeep)(this.getMembersByIndex(f.R_.NEW_GUILD_MEMBER)[0])].forEach((n) => {
                var r, i, a;
                let o = (0, _.b)(n, e),
                    s = null !== (a = null === (r = this._search) || void 0 === r ? void 0 : r.isMemberIncludedInSearchResults(n)) && void 0 !== a && a;
                null === (i = this._members) ||
                    void 0 === i ||
                    i.updateMember(n, {
                        sort: o,
                        isIncludedInSearchResults: s
                    });
            }),
                n();
        });
    }
    sortMembersBySelectedSort(e) {
        if (null != this._search && null != this._members && !!this._initialized)
            null != e &&
                (this.updatePaginationState({ sort: e }, !0),
                this.updateMembersSort(e).then(() => {
                    this.updatePaginationChunks();
                }));
    }
    updateSearchedMembersByMemberIds(e) {
        if (null == this._search || null == this._members || !this._initialized) return !1;
        let n = e.reduce((e, n) => {
            let r = l.ZP.getTrueMember(this.guildId, n);
            return null != r && e.push(r), e;
        }, []);
        return this.updateClientMembers(n, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp);
    }
    rebuildAllMembers() {
        if (null == this._members || !this._initialized) return !1;
        let e = l.ZP.getMembers(this.guildId);
        return this.updateClientMembers(e);
    }
    _scheduleRefresh(e) {
        (this.lastRefreshTimestamp = e),
            (this.lastCursorTimestamp = Date.now()),
            null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer),
            (this._lastRefreshTimer = setTimeout(() => {
                (this._lastRefreshTimer = null), (this.lastRefreshTimestamp = 0);
            }, g));
    }
    refreshNewMembersAndSearchResults() {
        if (null == this._search || null == this._members || !this._initialized) return !1;
        let e = Number(Date.now());
        this._scheduleRefresh(e);
        let n = (0, s.cloneDeep)(this._members.values(f.R_.NEW_GUILD_MEMBER)),
            r = !1;
        for (let i of n)
            r =
                this._members.updateMember(i, {
                    isCurrentGuildMemberByTimestamp: !0,
                    refreshTimestamp: e,
                    user: u.default.getUser(i.userId)
                }) || r;
        this._members.resetNewMemberTimestamp(), this.resetSearchState() && (r = !1);
        let [i, a] = this.updatePaginationState({ currentPage: 1 }, !1);
        return a && (r = !1), r && this.updatePaginationChunks(), !0;
    }
    getNewMemberTimestamp() {
        return null != this._members && this._initialized ? this._members.newMemberTimestamp : 0;
    }
    updateSearchState(e) {
        if (null == this._members || null == this._search || !this._initialized) return !1;
        let n = !!this._search.hasDefaultQuery;
        null != e.selectedSort && e.selectedSort !== this._search.getSearchState().selectedSort && this.sortMembersBySelectedSort(e.selectedSort);
        let r = this._search.updateSearchState(e);
        if (this._search.hasDefaultQuery && n) return this.updatePaginationChunks();
        let i = (0, s.cloneDeep)(this._members.values(f.R_.CURRENT_GUILD_MEMBER)),
            a = n !== this._search.hasDefaultQuery;
        for (let e of i) {
            if (!e.isCurrentGuildMemberByTimestamp) continue;
            let n = this._search.isMemberIncludedInSearchResults(e);
            n !== e.isIncludedInSearchResults && ((a = !0), (r = !0), this._members.updateMember(e, { isIncludedInSearchResults: n }));
        }
        return a ? (this.updatePaginationChunks(), this.updatePaginationState({ currentPage: 1 }), !0) : r;
    }
    getSearchState() {
        return null != this._search && this._initialized ? this._search.getSearchState() : (0, h.I)();
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
        let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return null != this._search && null != this._pagination && this._initialized ? (n && (this.lastRefreshTimestamp = 0), this._search.hasDefaultQuery && null != e.totalResultsCount && (this._defaultSearchTotalResultsCount = e.totalResultsCount), this._pagination.updatePaginationState(e)) : [!1, !1];
    }
    clearPaginationState() {
        var e;
        null === (e = this._pagination) || void 0 === e || e.reset();
    }
    getPaginationState() {
        return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, p.IF)();
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
        let n = new Set(this.getSearchState().selectedRoleIds);
        return n.delete(e), this.updateSearchState({ selectedRoleIds: n });
    }
    constructor(e) {
        m(this, 'guildId', void 0), m(this, 'lastRefreshTimestamp', 0), m(this, 'lastCursorTimestamp', Date.now()), m(this, '_initialized', void 0), m(this, '_pagination', void 0), m(this, '_search', void 0), m(this, '_members', void 0), m(this, '_lastRefreshTimer', null), m(this, '_defaultSearchTotalResultsCount', void 0), (this.guildId = e), (this._initialized = !1), (this._members = null), (this._pagination = null), (this._search = null);
    }
}
