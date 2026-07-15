"use strict";
n.d(t, { A: () => V }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(280450),
    s = n(696451),
    l = n(71393),
    o = n(287809),
    d = n(403362),
    c = n(935208),
    u = n(435558),
    _ = n(927813),
    E = n(157347),
    A = n(551816),
    h = n(233693),
    I = n(811315),
    f = n.n(I),
    p = n(229527),
    T = n(316031),
    m = n(859126);
function g() {
    return {
        query: "",
        requireUnusualDmActivity: !1,
        requireCommunicationDisabled: !1,
        requireUnusualAccountActivity: !1,
        requireUsernameQuarantined: !1,
        selectedRoleIds: new Set(),
        selectedJoinDateOption: { optionId: 0, afterDate: null, beforeDate: null },
        selectedAccountAgeOption: { optionId: 0, afterDate: null, beforeDate: null },
        selectedJoinSourceType: void 0,
        selectedSourceInviteCode: void 0,
        selectedSort: void 0,
    };
}
let S = Object.freeze(g());
function N(e, t) {
    return null != e && !!e.toLowerCase().includes(t.toLowerCase());
}
class C {
    guildId;
    _searchState;
    hasDefaultQuery;
    constructor(e) {
        (this.guildId = e), (this._searchState = g()), (this.hasDefaultQuery = !0);
    }
    get requiresUsernameMatch() {
        return this._searchState.query.trim().length > 0;
    }
    reset() {
        (this._searchState = g()), (this.hasDefaultQuery = !0);
    }
    updateSearchState(e) {
        return (
            (this._searchState = { ...this._searchState, ...e }), (this.hasDefaultQuery = f()(this._searchState, S)), !0
        );
    }
    resetSearchState() {
        return !this.hasDefaultQuery && ((this._searchState = g()), (this.hasDefaultQuery = !0), !0);
    }
    getSearchState() {
        return this._searchState;
    }
    isMemberIncludedInSearchResults(e) {
        let {
            query: t,
            requireUnusualDmActivity: n,
            requireCommunicationDisabled: i,
            requireUnusualAccountActivity: r,
            requireUsernameQuarantined: a,
            selectedRoleIds: s,
            selectedJoinDateOption: l,
            selectedAccountAgeOption: o,
            selectedSourceInviteCode: d,
            selectedJoinSourceType: u,
        } = this._searchState;
        return (
            !(
                (t.length > 0 &&
                    !(function (e, t) {
                        if ("" === t.trim()) return !1;
                        let [n, i] = (0, m.H)(t);
                        for (let t of i) if (e.userId === t) return !0;
                        for (let t of n) if (N(e.nick, t)) return !0;
                        if (null == e.user) return !1;
                        let { globalName: r, username: a } = e.user;
                        for (let e of n) if (N(a, e)) return !0;
                        for (let e of n) if (N(r, e)) return !0;
                        return !1;
                    })(e, t)) ||
                (s.size > 0 && !(0 !== s.size && Array.from(s).every((t) => e.roles.includes(t)))) ||
                (null != l.afterDate && e.joinedAtTimestamp < l.afterDate) ||
                (null != l.beforeDate && e.joinedAtTimestamp > l.beforeDate) ||
                (null != o.afterDate && c.default.extractTimestamp(e.userId) < o.afterDate) ||
                (null != o.beforeDate && c.default.extractTimestamp(e.userId) > o.beforeDate) ||
                (null != d && e.sourceInviteCode !== d) ||
                (null != u && e.joinSourceType !== u)
            ) &&
            ((!n && !i && !r && !a) ||
                !!(
                    (n && e.hasUnusualDmActivity) ||
                    (i && (0, T.Z)(e)) ||
                    (r && e.hasUnusualAccountActivity) ||
                    (a && (0, p.TR)(e))
                ))
        );
    }
}
var O = n(230959);
let R = 3 * _.A.Millis.SECOND;
class L {
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
            ? A.Tu.CURRENT_GUILD_MEMBER
            : A.Tu.INCLUDED_IN_SEARCH_RESULTS;
    }
    initialize() {
        if (this._initialized) {
            this.lastCursorTimestamp = Date.now();
            return;
        }
        (this._initialized = !0),
            (this._search = new C(this.guildId)),
            (this._members = new A.z8(this.guildId)),
            (this._pagination = new h.qi(this.guildId, this._members.values(this.getSearchIndex())));
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
        return null != this._pagination && this._initialized ? (0, h.n4)(this._pagination.getPaginationState()) : 0;
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
            let r = s.Ay.getTrueMember(this.guildId, e);
            if (null == r) return [!1, !1];
            i = this._members.enhanceNewMember(r, this.getSearchState(), t);
        }
        if (null == t.isIncludedInSearchResults) {
            let [e, r] = this._getIsIncludedInSearch(i, t);
            r && ((n = !0), (t.isIncludedInSearchResults = e));
        } else t.isIncludedInSearchResults !== i.isIncludedInSearchResults && (n = !0);
        let r = this._members.updateMember(i, t);
        return n || (n = this._checkUpdatesForPaginationUpdate(i, t)), [n, r];
    }
    isMemberInIndex(e) {
        return null != this._members && !!this._initialized && this._members._membersMap.has(e);
    }
    isMemberIncludedInSearchResults(e) {
        if (null == this._members || null == this._search || null == this._pagination || !this._initialized) return !1;
        if (this._search.hasDefaultQuery) return this._pagination.isMemberInAnyChunk(e);
        let t = this._members.getMemberByUserId(e);
        if (null == t) {
            let n = s.Ay.getTrueMember(this.guildId, e);
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
            if ((t && (e = { ...e, isIncludedInSearchResults: !0 }), n)) {
                let t = (0, E.vn)(a.joinedAt);
                e = {
                    ...e,
                    isCurrentGuildMemberByTimestamp: t <= this._members.newMemberTimestamp,
                    refreshTimestamp: this.lastRefreshTimestamp,
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
            let e = s.Ay.getTrueMember(this.guildId, i.user.id);
            if (null == e) continue;
            let [r, a] = this._rawUpdateMember(i.user.id, e);
            (t = r || t), (n = a || n);
        }
        return t ? this.updatePaginationChunks() : n;
    }
    updateMembersByMemberIds(e) {
        if (null == this._members || !this._initialized) return !1;
        let t = e.reduce((e, t) => {
            let n = s.Ay.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t);
    }
    updateMembersSort(e) {
        return new Promise((t) => {
            [
                ...(0, u.cloneDeep)(this.getMembersByIndex(A.Tu.CURRENT_GUILD_MEMBER)[0]),
                ...(0, u.cloneDeep)(this.getMembersByIndex(A.Tu.NEW_GUILD_MEMBER)[0]),
            ].forEach((t) => {
                let n = (0, O.R)(t, e),
                    i = this._search?.isMemberIncludedInSearchResults(t) ?? !1;
                this._members?.updateMember(t, { sort: n, isIncludedInSearchResults: i });
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
            let n = s.Ay.getTrueMember(this.guildId, t);
            return null != n && e.push(n), e;
        }, []);
        return this.updateClientMembers(t, this._search.requiresUsernameMatch, 0 !== this.lastRefreshTimestamp);
    }
    rebuildAllMembers() {
        if (null == this._members || !this._initialized) return !1;
        let e = s.Ay.getMembers(this.guildId);
        return this.updateClientMembers(e);
    }
    _scheduleRefresh(e) {
        (this.lastRefreshTimestamp = e),
            (this.lastCursorTimestamp = Date.now()),
            null != this._lastRefreshTimer && clearTimeout(this._lastRefreshTimer),
            (this._lastRefreshTimer = setTimeout(() => {
                (this._lastRefreshTimer = null), (this.lastRefreshTimestamp = 0);
            }, R));
    }
    refreshNewMembersAndSearchResults() {
        if (null == this._search || null == this._members || !this._initialized) return !1;
        let e = Number(Date.now());
        this._scheduleRefresh(e);
        let t = (0, u.cloneDeep)(this._members.values(A.Tu.NEW_GUILD_MEMBER)),
            n = !1;
        for (let i of t)
            n =
                this._members.updateMember(i, {
                    isCurrentGuildMemberByTimestamp: !0,
                    refreshTimestamp: e,
                    user: o.default.getUser(i.userId),
                }) || n;
        this._members.resetNewMemberTimestamp(), this.resetSearchState() && (n = !1);
        let [i, r] = this.updatePaginationState({ currentPage: 1 }, !1);
        return r && (n = !1), n && this.updatePaginationChunks(), !0;
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
        let i = (0, u.cloneDeep)(this._members.values(A.Tu.CURRENT_GUILD_MEMBER)),
            r = t !== this._search.hasDefaultQuery;
        for (let e of i) {
            if (!e.isCurrentGuildMemberByTimestamp) continue;
            let t = this._search.isMemberIncludedInSearchResults(e);
            t !== e.isIncludedInSearchResults &&
                ((r = !0), (n = !0), this._members.updateMember(e, { isIncludedInSearchResults: t }));
        }
        return r ? (this.updatePaginationChunks(), this.updatePaginationState({ currentPage: 1 }), !0) : n;
    }
    getSearchState() {
        return null != this._search && this._initialized ? this._search.getSearchState() : g();
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
        return null != this._pagination && this._initialized ? this._pagination.getPaginationState() : (0, h.vg)();
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
var D = n(70738),
    y = n(166233),
    v = n(11541),
    b = n(652215);
let M = !1,
    P = {};
function U(e) {
    return null == P[e] && (P[e] = new L(e)), P[e];
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    U(e).reset(t);
}
function G() {
    return !1;
}
function x(e) {
    let t = !1,
        n = U(e.guildId);
    return "GUILD_ROLE_DELETE" === e.type && (t = n.removeRoleFromSearchState(e.roleId)), n.rebuildAllMembers() || t;
}
function k(e) {
    let { guildId: t, userId: n } = e;
    return U(t).updateMembersByMemberIds([n]);
}
class F extends i.Ay.Store {
    static displayName = "MemberSafetyStore";
    initialize() {
        this.waitFor(a.default, s.Ay, l.A, o.default);
    }
    isInitialized(e) {
        return U(e).isInitialized;
    }
    getMembersByGuildId(e, t) {
        return U(e).getMembersByIndex(t);
    }
    getMembersCountByGuildId(e, t) {
        return U(e).countMembersByIndex(t);
    }
    getEstimatedMemberSearchCountByGuildId(e) {
        let t = U(e),
            n = t.searchChunkSize,
            i = t.countMembersByIndex(t.getSearchIndex()),
            r = t.getTotalResultsCount();
        return null == r || r < n ? i : r;
    }
    getKnownMemberSearchCountByGuildId(e) {
        let t = U(e);
        return t.countMembersByIndex(t.getSearchIndex());
    }
    getCurrentMemberSearchResultsByGuildId(e) {
        let t = U(e);
        return t.getMembersByIndex(t.getSearchIndex());
    }
    getSearchStateByGuildId(e) {
        return U(e).getSearchState();
    }
    hasDefaultSearchStateByGuildId(e) {
        return U(e).hasDefaultSearchState();
    }
    getPagedMembersByGuildId(e) {
        return U(e).getPaginatedMembers();
    }
    getPaginationStateByGuildId(e) {
        return U(e).getPaginationState();
    }
    getElasticSearchPaginationByGuildId(e) {
        return U(e).getElasticSearchPagination();
    }
    getEnhancedMember(e, t) {
        return U(e).getMember(t);
    }
    getNewMemberTimestamp(e) {
        return U(e).getNewMemberTimestamp();
    }
    getLastRefreshTimestamp(e) {
        return U(e).lastRefreshTimestamp;
    }
    getLastCursorTimestamp(e) {
        return U(e).lastCursorTimestamp;
    }
}
let V = new F(r.h, {
    CONNECTION_OPEN: function (e) {
        let t;
        return (
            M
                ? (M = !1)
                : (function () {
                      let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                      for (let t in P) w(t, e);
                  })(!0),
            (t = !1),
            e.guilds.forEach((e) => {
                let { id: n, members: i } = e;
                t = U(n).updateServerMembers(i) || t;
            }),
            t
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let t;
        return (
            (t = !1),
            e.guilds.forEach((e) => {
                let { id: n, activity_instances: i } = e,
                    r = U(n),
                    a = [];
                i?.forEach((e) => {
                    e.participants?.forEach((e) => {
                        (0, d.Vq)(e.member) && a.push(e.member);
                    });
                }),
                    (t = r.updateServerMembers(a) || t);
            }),
            t
        );
    },
    LOCAL_MESSAGES_LOADED: function (e) {
        let { guildId: t, members: n } = e;
        if (null == t || null == l.A.getGuild(t)) return !1;
        M = !0;
        let i = U(t),
            r = [];
        for (let e of n) null == i.getMember(e.userId) && r.push(e);
        return r.length > 0 && i.updateClientMembers(r);
    },
    CACHE_LOADED: function (e) {
        let { guildMembers: t } = e,
            n = !1;
        return (
            (M = !0),
            c.default.entries(t).forEach((e) => {
                let [t, i] = e;
                n = U(t).updateClientMembers(Object.values(i)) || n;
            }),
            n
        );
    },
    PASSIVE_UPDATE_V2: function (e) {
        let { members: t, guildId: n } = e;
        return t.length > 0 && U(n).updateServerMembers(t);
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e,
            n = U(t.id);
        w(t.id, n.isInitialized);
    },
    GUILD_DELETE: function (e) {
        let {
            guild: { id: t },
        } = e;
        w(t);
    },
    GUILD_MEMBERS_CHUNK_BATCH: function (e) {
        let { chunks: t } = e,
            n = !1;
        for (let e of t) n = U(e.guildId).updateServerMembers(e.members) || n;
        return n;
    },
    GUILD_MEMBER_ADD: G,
    GUILD_MEMBER_UPDATE: G,
    GUILD_MEMBER_UPDATE_LOCAL: function (e) {
        let { guildId: t } = e,
            n = a.default.getId();
        return U(t).updateMembersByMemberIds([n]);
    },
    GUILD_MEMBER_REMOVE: function (e) {
        let { guildId: t, user: n } = e;
        return U(t).removeMember(n.id);
    },
    GUILD_ROLE_UPDATE: x,
    GUILD_ROLE_DELETE: x,
    GUILD_MEMBER_PROFILE_UPDATE: function (e) {
        let { guildId: t, guildMember: n } = e;
        return U(t).updateMembersByMemberIds([n.user.id]);
    },
    GUILD_ROLE_MEMBER_REMOVE: k,
    GUILD_ROLE_MEMBER_ADD: k,
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        if (null == n || 0 === n.length) return !1;
        let i = U(t),
            r = n.reduce((e, t) => {
                if (null != t.member) {
                    let n = t.member.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return i.updateMembersByMemberIds(r);
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        if (null == n || 0 === n.length) return !1;
        let i = U(t),
            r = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return i.updateMembersByMemberIds(r);
    },
    LOAD_ARCHIVED_THREADS_SUCCESS: function (e) {
        let { guildId: t, members: n } = e;
        if (null == n || 0 === n.length) return !1;
        let i = U(t),
            r = n.reduce((e, t) => {
                let n = t.userId;
                return e.push(n), e;
            }, []);
        return i.updateMembersByMemberIds(r);
    },
    LOAD_FORUM_POSTS: function (e) {
        let { guildId: t, threads: n } = e,
            i = Object.values(n);
        if (0 === i.length) return !1;
        let r = U(t),
            a = i.reduce((e, t) => {
                if (null != t.owner) {
                    let n = t.owner.user.id;
                    e.push(n);
                }
                return e;
            }, []);
        return r.updateMembersByMemberIds(a);
    },
    INITIALIZE_MEMBER_SAFETY_STORE: function (e) {
        let { guildId: t } = e;
        return U(t).initialize();
    },
    MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: function (e) {
        let { guildId: t } = e;
        return U(t).refreshNewMembersAndSearchResults();
    },
    MEMBER_SAFETY_PAGINATION_UPDATE: function (e) {
        let { guildId: t, pagination: n } = e,
            [i] = U(t).updatePaginationState(n);
        return i;
    },
    MEMBER_SAFETY_PAGINATION_TOKEN_UPDATE: function (e) {
        let { guildId: t, continuationToken: n } = e;
        return U(t).updatePaginationToken(n);
    },
    MEMBER_SAFETY_SEARCH_STATE_UPDATE: function (e) {
        let { guildId: t, searchState: n } = e;
        return U(t).updateSearchState(n);
    },
    FETCH_GUILD_MEMBER_SUPPLEMENTAL_SUCCESS: function (e) {
        let { guildId: t, memberSupplementals: n } = e,
            i = (0, y.Ob)(t, n);
        return i && U(t).updateMembersByMemberIds(n.map((e) => e.userId)), i;
    },
    MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: function (e) {
        let t,
            n,
            { guildId: i, members: r, total_result_count: a } = e,
            s = U(i),
            { memberIds: l, memberSupplementals: o } = r.reduce(
                (e, t) => {
                    let {
                            member: n,
                            source_invite_code: i,
                            join_source_type: r,
                            join_source_application_id: a,
                            join_source_channel_id: s,
                            inviter_id: l,
                        } = t,
                        o = n.user;
                    return (
                        e.memberIds.push(o.id),
                        e.memberSupplementals.push({
                            userId: o.id,
                            sourceInviteCode: i,
                            joinSourceType: r,
                            joinSourceApplicationId: a,
                            joinSourceChannelId: s,
                            inviterId: l,
                        }),
                        e
                    );
                },
                { memberIds: [], memberSupplementals: [] },
            ),
            d = (0, y.Ob)(i, o);
        (0, v.uY)(i, l);
        let c = s.updateSearchedMembersByMemberIds(l);
        r.length > 0 && ((t = r[0]), (n = r[r.length - 1]));
        let [u] = s.updatePaginationState(
            {
                totalResultsCount: a,
                elasticSearchCursor: {
                    before: (0, D.vf)({ joinedAt: t?.member?.joined_at, userId: t?.member?.user.id ?? b.dJq }),
                    after: (0, D.vf)({ joinedAt: n?.member?.joined_at, userId: n?.member?.user.id ?? b.dJq }),
                },
            },
            !1,
        );
        return d || c || u;
    },
    MEMBER_SAFETY_GUILD_MEMBER_UPDATE_BATCH: function (e) {
        let { guildId: t, userIds: n } = e;
        return U(t).updateMembersByMemberIds(n);
    },
});
