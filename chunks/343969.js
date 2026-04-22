"use strict";
n.d(t, { Ay: () => w, Ms: () => b, Wl: () => D });
var r = n(812729),
    i = n.n(r),
    s = n(735438),
    a = n(353640),
    o = n(121894),
    l = n(499979),
    u = n(439372),
    d = n(626584),
    c = n(403362),
    _ = n(661191),
    f = n(233693),
    E = n(859126),
    h = n(70738),
    p = n(902822),
    m = n(266047);
let g = new d.A("MemberSafetySearchManager");
function A(e) {
    return `guild_${e}`;
}
function I(e) {
    return {
        requestState: e,
        abortController: null,
        lastUpdated: Date.now(),
        query: null,
        cursor: null,
        previousPagination: null,
        sort: null,
        elasticSearchCursor: null,
    };
}
let T = (0, a.v)((e) => ({}));
function S(e, t) {
    let n = T.getState()[e];
    return (
        null == n && (n = I(1)),
        (n = { ...n, ...t }),
        (0, o.r)(() => {
            T.setState((t) => ({ ...t, [e]: n }));
        }),
        n
    );
}
function y(e) {
    return T.getState()[e];
}
function N(e) {
    let t = y(e);
    return null == t && S(e, (t = I(1))), t;
}
async function O(e) {
    await (0, l.yy)(200), null != y(e) && S(e, { requestState: 3, abortController: null, lastUpdated: Date.now() });
}
function R(e) {
    var t;
    (t = A(e)),
        (0, o.r)(() => {
            T.setState((e) => {
                let n = { ...e };
                return delete n[t], n;
            });
        });
}
function v(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
async function C(e) {
    var t;
    let n,
        r,
        a = m.A.getSearchStateByGuildId(e),
        o = m.A.getPaginationStateByGuildId(e),
        l = A(e),
        u = N(l),
        [d, I] = (function (e, t, n) {
            let r = (function (e, t) {
                    let n,
                        r,
                        i,
                        s,
                        {
                            currentPageChunkNumber: a,
                            previousPageChunkNumber: o,
                            nextPageChunkNumber: l,
                        } = ((n = (0, f.n4)(t)),
                        (r = t.pageSize * (t.currentPage - 1)),
                        (i = t.pageSize * t.currentPage),
                        (s = t.pageSize * (t.currentPage + 1)),
                        {
                            previousPageChunkNumber: v(r, n),
                            currentPageChunkNumber: v(i, n),
                            nextPageChunkNumber: v(s, n),
                        }),
                        { previousPagination: u } = N(A(e)),
                        d = t.currentPage,
                        c = u?.currentPage ?? 0,
                        _ = m.A.getElasticSearchPaginationByGuildId(e);
                    switch (!0) {
                        case null == _:
                        case a === l && 0 === a:
                            return 0;
                        case a === l && a === o:
                            return 1;
                        case c < d && a < l:
                            return 2;
                        case c > d && a >= o:
                            if (0 < a) return 3;
                            return 0;
                        default:
                            return 1;
                    }
                })(e, n),
                i = m.A.getElasticSearchPaginationByGuildId(e),
                s = (0, f.n4)(n);
            switch (r) {
                case 0:
                    return [null, { limit: s }];
                case 1:
                    return [t.cursor ?? null, { limit: s, after: t.cursor ?? void 0 }];
                case 2:
                    return [i?.after ?? null, { limit: s, after: i?.after ?? void 0 }];
                case 3:
                    return [i?.before ?? null, { limit: s, before: i?.before ?? void 0 }];
                default:
                    (0, c.xb)(r);
            }
        })(e, u, o),
        T =
            ((t = (function (e) {
                let t = {},
                    n = {},
                    { query: r } = e;
                if (null != r && r.length > 1) {
                    let [e, n] = (0, E.H)(r);
                    e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
                }
                let {
                        requireUnusualDmActivity: i,
                        requireCommunicationDisabled: s,
                        requireUnusualAccountActivity: a,
                        requireUsernameQuarantined: o,
                    } = e,
                    l = {};
                i && (l.unusual_dm_activity_until = { range: { gte: Date.now() - h.tX } }),
                    s && (l.communication_disabled_until = { range: { gte: Date.now() } }),
                    a && (l.unusual_account_activity = a),
                    o && (l.automod_quarantined_username = o),
                    Object.keys(l).length > 0 && (n.safety_signals = l);
                let { selectedRoleIds: u } = e;
                u.size > 0 && (t.role_ids = { and_query: Array.from(u) });
                let { selectedJoinDateOption: d } = e;
                null != d.afterDate &&
                    (t.guild_joined_at = { range: { gte: d.afterDate, lte: d.beforeDate ?? void 0 } });
                let { selectedAccountAgeOption: c } = e;
                if (null != c.afterDate) {
                    let e = t.user_id;
                    t.user_id = {
                        ...e,
                        range: {
                            gte: _.default.fromTimestamp(c.afterDate),
                            lte: null != c.beforeDate ? _.default.fromTimestamp(c.beforeDate) : void 0,
                        },
                    };
                }
                let { selectedSourceInviteCode: f } = e;
                null != f && (t.source_invite_code = { or_query: [f] });
                let { selectedJoinSourceType: p } = e;
                null != p && (t.join_source_type = { or_query: [p] });
                let m = { or_query: n, and_query: t },
                    { selectedSort: g } = e;
                return null != g && (m.sort = g), m;
            })(a)),
            null == I ? t : { ...t, ...I }),
        R = a.selectedSort ?? h.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (((n = N(l)), i()(n.query, T) && (0, s.isEqual)(d, u.cursor))) return;
    let C =
        ((r = y(l)),
        r?.requestState === 2 && r.abortController?.abort(),
        S(l, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: T,
            cursor: d,
            previousPagination: o,
            sort: R,
        }));
    try {
        if ((g.info("Making member search request", { query: C.query, guildId: e }), null == C.query))
            throw Error("Query is null");
        await (0, p.N)(e, C.query, { signal: C.abortController?.signal ?? void 0 });
    } catch (e) {
        if (-1 === e.code) return;
        null != y(l) && S(l, { requestState: 0, abortController: null, lastUpdated: Date.now() });
        return;
    }
    await O(l);
}
function b(e) {
    return T((t) => {
        let n = A(e);
        return t[n]?.requestState === 2;
    });
}
function D(e) {
    return T((t) => {
        let n = A(e);
        return t[n]?.requestState === 4;
    });
}
class L extends u.A {
    actions = {
        INITIALIZE_MEMBER_SAFETY_STORE: (e) => this.handleInitialize(e),
        GUILD_DELETE: (e) => this.handleGuildDelete(e),
        MEMBER_SAFETY_SEARCH_STATE_UPDATE: (e) => this.handleSearchStateUpdate(e),
        MEMBER_SAFETY_PAGINATION_UPDATE: (e) => this.handlePaginationUpdate(e),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
        MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: (e) => this.handleGuildMemberSearchStillIndexing(e),
        MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: (e) => this.handleNewMemberTimestampRefresh(e),
    };
    handleInitialize(e) {
        let { guildId: t } = e;
        return R(t), C(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return R(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return C(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return C(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return O(A(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        S(A(t), { requestState: 4, abortController: null, lastUpdated: Date.now() });
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return C(t);
    }
}
let w = new L();
