"use strict";
n.d(t, { Ms: () => x, Ay: () => F, Wl: () => G });
var i,
    r = n(812729),
    s = n.n(r),
    a = n(735438),
    o = n(353640),
    l = n(121894),
    d = n(499979),
    _ = n(439372),
    u = n(626584),
    c = n(403362),
    E = n(935208),
    h = n(233693),
    m = n(859126),
    f = n(70738),
    g = n(228366),
    p = n(636537),
    A = n(845584),
    I = n(927813),
    T = (((i = {})[(i.SUCCESSFUL_QUERY = 1)] = "SUCCESSFUL_QUERY"), (i[(i.ERROR = 2)] = "ERROR"), i),
    S = n(652215);
async function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (i > 3) throw Error("Unable to search guild members after max retries");
    let { autoRetry: r = !0, signal: s } = n;
    try {
        var a;
        let o = await p.Bo.post({ url: S.Rsh.GUILD_MEMBER_SEARCH(e), body: t, signal: s, rejectWithError: !1 });
        if (202 === o.status) {
            if (null == o.body.retry_after) throw Error("Indexing response did not include retry_after");
            if (!r) throw Error("Indexing response received but autoRetry is disabled");
            return (
                await g.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", guildId: e }),
                await new Promise((e) => setTimeout(e, o.body.retry_after * I.A.Millis.SECOND)),
                N(e, t, n, i + 1)
            );
        }
        return {
            type: T.SUCCESSFUL_QUERY,
            body: {
                guild_id: (a = o.body).guild_id,
                members: a.members,
                page_result_count: a.page_result_count,
                total_result_count: a.total_result_count,
            },
        };
    } catch (t) {
        let e = new A.LG(t);
        return { type: T.ERROR, body: e };
    }
}
async function C(e, t, n) {
    let i = await N(e, t, n);
    if (i.type === T.ERROR) throw i.body;
    let { body: r } = i;
    g.h.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
        guildId: e,
        members: r.members,
        page_result_count: r.page_result_count,
        total_result_count: r.total_result_count,
    });
}
var R = n(151781);
let O = new u.A("MemberSafetySearchManager");
function y(e) {
    return `guild_${e}`;
}
function v(e) {
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
let D = (0, o.v)((e) => ({}));
function L(e, t) {
    let n = D.getState()[e];
    return (
        null == n && (n = v(1)),
        (n = { ...n, ...t }),
        (0, l.r)(() => {
            D.setState((t) => ({ ...t, [e]: n }));
        }),
        n
    );
}
function b(e) {
    return D.getState()[e];
}
function w(e) {
    let t = b(e);
    return null == t && L(e, (t = v(1))), t;
}
async function P(e) {
    await (0, d.yy)(200), null != b(e) && L(e, { requestState: 3, abortController: null, lastUpdated: Date.now() });
}
function k(e) {
    var t;
    (t = y(e)),
        (0, l.r)(() => {
            D.setState((e) => {
                let n = { ...e };
                return delete n[t], n;
            });
        });
}
function M(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
async function U(e) {
    var t;
    let n,
        i,
        r = R.A.getSearchStateByGuildId(e),
        o = R.A.getPaginationStateByGuildId(e),
        l = y(e),
        d = w(l),
        [_, u] = (function (e, t, n) {
            let i = (function (e, t) {
                    let n,
                        i,
                        r,
                        s,
                        {
                            currentPageChunkNumber: a,
                            previousPageChunkNumber: o,
                            nextPageChunkNumber: l,
                        } = ((n = (0, h.n4)(t)),
                        (i = t.pageSize * (t.currentPage - 1)),
                        (r = t.pageSize * t.currentPage),
                        (s = t.pageSize * (t.currentPage + 1)),
                        {
                            previousPageChunkNumber: M(i, n),
                            currentPageChunkNumber: M(r, n),
                            nextPageChunkNumber: M(s, n),
                        }),
                        { previousPagination: d } = w(y(e)),
                        _ = t.currentPage,
                        u = d?.currentPage ?? 0,
                        c = R.A.getElasticSearchPaginationByGuildId(e);
                    switch (!0) {
                        case null == c:
                        case a === l && 0 === a:
                            return 0;
                        case a === l && a === o:
                            return 1;
                        case u < _ && a < l:
                            return 2;
                        case u > _ && a >= o:
                            if (0 < a) return 3;
                            return 0;
                        default:
                            return 1;
                    }
                })(e, n),
                r = R.A.getElasticSearchPaginationByGuildId(e),
                s = (0, h.n4)(n);
            switch (i) {
                case 0:
                    return [null, { limit: s }];
                case 1:
                    return [t.cursor ?? null, { limit: s, after: t.cursor ?? void 0 }];
                case 2:
                    return [r?.after ?? null, { limit: s, after: r?.after ?? void 0 }];
                case 3:
                    return [r?.before ?? null, { limit: s, before: r?.before ?? void 0 }];
                default:
                    (0, c.xb)(i);
            }
        })(e, d, o),
        g =
            ((t = (function (e) {
                let t = {},
                    n = {},
                    { query: i } = e;
                if (null != i && i.length > 1) {
                    let [e, n] = (0, m.H)(i);
                    e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
                }
                let {
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: s,
                        requireUnusualAccountActivity: a,
                        requireUsernameQuarantined: o,
                    } = e,
                    l = {};
                r && (l.unusual_dm_activity_until = { range: { gte: Date.now() - f.tX } }),
                    s && (l.communication_disabled_until = { range: { gte: Date.now() } }),
                    a && (l.unusual_account_activity = a),
                    o && (l.automod_quarantined_username = o),
                    Object.keys(l).length > 0 && (n.safety_signals = l);
                let { selectedRoleIds: d } = e;
                d.size > 0 && (t.role_ids = { and_query: Array.from(d) });
                let { selectedJoinDateOption: _ } = e;
                null != _.afterDate &&
                    (t.guild_joined_at = { range: { gte: _.afterDate, lte: _.beforeDate ?? void 0 } });
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
                let { selectedSourceInviteCode: c } = e;
                null != c && (t.source_invite_code = { or_query: [c] });
                let { selectedJoinSourceType: h } = e;
                null != h && (t.join_source_type = { or_query: [h] });
                let g = { or_query: n, and_query: t },
                    { selectedSort: p } = e;
                return null != p && (g.sort = p), g;
            })(r)),
            null == u ? t : { ...t, ...u }),
        p = r.selectedSort ?? f.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (((n = w(l)), s()(n.query, g) && (0, a.isEqual)(_, d.cursor))) return;
    let A =
        ((i = b(l)),
        i?.requestState === 2 && i.abortController?.abort(),
        L(l, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: g,
            cursor: _,
            previousPagination: o,
            sort: p,
        }));
    try {
        if ((O.info("Making member search request", { query: A.query, guildId: e }), null == A.query))
            throw Error("Query is null");
        await C(e, A.query, { signal: A.abortController?.signal ?? void 0 });
    } catch (e) {
        if (-1 === e.code) return;
        null != b(l) && L(l, { requestState: 0, abortController: null, lastUpdated: Date.now() });
        return;
    }
    await P(l);
}
function x(e) {
    return D((t) => {
        let n = y(e);
        return t[n]?.requestState === 2;
    });
}
function G(e) {
    return D((t) => {
        let n = y(e);
        return t[n]?.requestState === 4;
    });
}
class V extends _.A {
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
        return k(t), U(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return k(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return U(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return U(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return P(y(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        L(y(t), { requestState: 4, abortController: null, lastUpdated: Date.now() });
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return U(t);
    }
}
let F = new V();
