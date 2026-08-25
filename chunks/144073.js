"use strict";
n.d(t, { Ms: () => x, Ay: () => V, Wl: () => k });
var i,
    r = n(812729),
    a = n.n(r),
    s = n(435558),
    l = n(196765),
    o = n(121894),
    d = n(499979),
    c = n(439372),
    u = n(626584),
    _ = n(403362),
    E = n(935208),
    A = n(233693),
    h = n(859126),
    I = n(70738),
    f = n(228366),
    p = n(636537),
    T = n(913122),
    m = n(927813),
    g = (((i = {})[(i.SUCCESSFUL_QUERY = 1)] = "SUCCESSFUL_QUERY"), (i[(i.ERROR = 2)] = "ERROR"), i),
    S = n(652215);
async function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (i > 3) throw Error("Unable to search guild members after max retries");
    let { autoRetry: r = !0, signal: a } = n;
    try {
        var s;
        let l = await p.Bo.post({ url: S.Rsh.GUILD_MEMBER_SEARCH(e), body: t, signal: a, rejectWithError: !1 });
        if (202 === l.status) {
            if (null == l.body.retry_after) throw Error("Indexing response did not include retry_after");
            if (!r) throw Error("Indexing response received but autoRetry is disabled");
            return (
                await f.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", guildId: e }),
                await new Promise((e) => setTimeout(e, l.body.retry_after * m.A.Millis.SECOND)),
                N(e, t, n, i + 1)
            );
        }
        return {
            type: g.SUCCESSFUL_QUERY,
            body: {
                guild_id: (s = l.body).guild_id,
                members: s.members,
                page_result_count: s.page_result_count,
                total_result_count: s.total_result_count,
            },
        };
    } catch (t) {
        let e = new T.LG(t);
        return { type: g.ERROR, body: e };
    }
}
async function C(e, t, n) {
    let i = await N(e, t, n);
    if (i.type === g.ERROR) throw i.body;
    let { body: r } = i;
    f.h.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
        guildId: e,
        members: r.members,
        page_result_count: r.page_result_count,
        total_result_count: r.total_result_count,
    });
}
var R = n(151781);
let O = new u.A("MemberSafetySearchManager");
function L(e) {
    return `guild_${e}`;
}
function y(e) {
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
let D = (0, l.v)((e) => ({}));
function v(e, t) {
    let n = D.getState()[e];
    return (
        null == n && (n = y(1)),
        (n = { ...n, ...t }),
        (0, o.r)(() => {
            D.setState((t) => ({ ...t, [e]: n }));
        }),
        n
    );
}
function b(e) {
    return D.getState()[e];
}
function M(e) {
    let t = b(e);
    return null == t && v(e, (t = y(1))), t;
}
async function P(e) {
    await (0, d.yy)(200), null != b(e) && v(e, { requestState: 3, abortController: null, lastUpdated: Date.now() });
}
function U(e) {
    var t;
    (t = L(e)),
        (0, o.r)(() => {
            D.setState((e) => {
                let n = { ...e };
                return delete n[t], n;
            });
        });
}
function w(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
async function G(e) {
    var t;
    let n,
        i,
        r = R.A.getSearchStateByGuildId(e),
        l = R.A.getPaginationStateByGuildId(e),
        o = L(e),
        d = M(o),
        [c, u] = (function (e, t, n) {
            let i = (function (e, t) {
                    let n,
                        i,
                        r,
                        a,
                        {
                            currentPageChunkNumber: s,
                            previousPageChunkNumber: l,
                            nextPageChunkNumber: o,
                        } = ((n = (0, A.n4)(t)),
                        (i = t.pageSize * (t.currentPage - 1)),
                        (r = t.pageSize * t.currentPage),
                        (a = t.pageSize * (t.currentPage + 1)),
                        {
                            previousPageChunkNumber: w(i, n),
                            currentPageChunkNumber: w(r, n),
                            nextPageChunkNumber: w(a, n),
                        }),
                        { previousPagination: d } = M(L(e)),
                        c = t.currentPage,
                        u = d?.currentPage ?? 0,
                        _ = R.A.getElasticSearchPaginationByGuildId(e);
                    switch (!0) {
                        case null == _:
                        case s === o && 0 === s:
                            return 0;
                        case s === o && s === l:
                            return 1;
                        case u < c && s < o:
                            return 2;
                        case u > c && s >= l:
                            if (0 < s) return 3;
                            return 0;
                        default:
                            return 1;
                    }
                })(e, n),
                r = R.A.getElasticSearchPaginationByGuildId(e),
                a = (0, A.n4)(n);
            switch (i) {
                case 0:
                    return [null, { limit: a }];
                case 1:
                    return [t.cursor ?? null, { limit: a, after: t.cursor ?? void 0 }];
                case 2:
                    return [r?.after ?? null, { limit: a, after: r?.after ?? void 0 }];
                case 3:
                    return [r?.before ?? null, { limit: a, before: r?.before ?? void 0 }];
                default:
                    (0, _.xb)(i);
            }
        })(e, d, l),
        f =
            ((t = (function (e) {
                let t = {},
                    n = {},
                    { query: i } = e;
                if (null != i && i.length > 1) {
                    let [e, n] = (0, h.H)(i);
                    e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
                }
                let {
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: a,
                        requireUnusualAccountActivity: s,
                        requireUsernameQuarantined: l,
                    } = e,
                    o = {};
                r && (o.unusual_dm_activity_until = { range: { gte: Date.now() - I.tX } }),
                    a && (o.communication_disabled_until = { range: { gte: Date.now() } }),
                    s && (o.unusual_account_activity = s),
                    l && (o.automod_quarantined_username = l),
                    Object.keys(o).length > 0 && (n.safety_signals = o);
                let { selectedRoleIds: d } = e;
                d.size > 0 && (t.role_ids = { and_query: Array.from(d) });
                let { selectedJoinDateOption: c } = e;
                null != c.afterDate &&
                    (t.guild_joined_at = { range: { gte: c.afterDate, lte: c.beforeDate ?? void 0 } });
                let { selectedAccountAgeOption: u } = e;
                if (null != u.afterDate) {
                    let e = t.user_id;
                    t.user_id = {
                        ...e,
                        range: {
                            gte: E.default.fromTimestamp(u.afterDate),
                            lte: null != u.beforeDate ? E.default.fromTimestamp(u.beforeDate) : void 0,
                        },
                    };
                }
                let { selectedSourceInviteCode: _ } = e;
                null != _ && (t.source_invite_code = { or_query: [_] });
                let { selectedJoinSourceType: A } = e;
                null != A && (t.join_source_type = { or_query: [A] });
                let f = { or_query: n, and_query: t },
                    { selectedSort: p } = e;
                return null != p && (f.sort = p), f;
            })(r)),
            null == u ? t : { ...t, ...u }),
        p = r.selectedSort ?? I.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (((n = M(o)), a()(n.query, f) && (0, s.isEqual)(c, d.cursor))) return;
    let T =
        ((i = b(o)),
        i?.requestState === 2 && i.abortController?.abort(),
        v(o, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: f,
            cursor: c,
            previousPagination: l,
            sort: p,
        }));
    try {
        if ((O.info("Making member search request", { query: T.query, guildId: e }), null == T.query))
            throw Error("Query is null");
        await C(e, T.query, { signal: T.abortController?.signal ?? void 0 });
    } catch (e) {
        if (-1 === e.code) return;
        null != b(o) && v(o, { requestState: 0, abortController: null, lastUpdated: Date.now() });
        return;
    }
    await P(o);
}
function x(e) {
    return D((t) => {
        let n = L(e);
        return t[n]?.requestState === 2;
    });
}
function k(e) {
    return D((t) => {
        let n = L(e);
        return t[n]?.requestState === 4;
    });
}
class F extends c.A {
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
        return U(t), G(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return U(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return G(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return G(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return P(L(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        v(L(t), { requestState: 4, abortController: null, lastUpdated: Date.now() });
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return G(t);
    }
}
let V = new F();
