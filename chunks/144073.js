"use strict";
n.d(t, { Ms: () => U, Ay: () => V, Wl: () => G });
var i,
    r = n(812729),
    s = n.n(r),
    a = n(735438),
    o = n(353640),
    l = n(121894),
    u = n(499979),
    c = n(439372),
    d = n(626584),
    _ = n(403362),
    h = n(935208),
    f = n(233693),
    p = n(859126),
    E = n(70738),
    m = n(228366),
    g = n(636537),
    A = n(913122),
    I = n(927813),
    T = (((i = {})[(i.SUCCESSFUL_QUERY = 1)] = "SUCCESSFUL_QUERY"), (i[(i.ERROR = 2)] = "ERROR"), i),
    S = n(652215);
async function y(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
    if (i > 3) throw Error("Unable to search guild members after max retries");
    let { autoRetry: r = !0, signal: s } = n;
    try {
        var a;
        let o = await g.Bo.post({ url: S.Rsh.GUILD_MEMBER_SEARCH(e), body: t, signal: s, rejectWithError: !1 });
        if (202 === o.status) {
            if (null == o.body.retry_after) throw Error("Indexing response did not include retry_after");
            if (!r) throw Error("Indexing response received but autoRetry is disabled");
            return (
                await m.h.dispatch({ type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING", guildId: e }),
                await new Promise((e) => setTimeout(e, o.body.retry_after * I.A.Millis.SECOND)),
                y(e, t, n, i + 1)
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
    let i = await y(e, t, n);
    if (i.type === T.ERROR) throw i.body;
    let { body: r } = i;
    m.h.dispatch({
        type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
        guildId: e,
        members: r.members,
        page_result_count: r.page_result_count,
        total_result_count: r.total_result_count,
    });
}
var N = n(151781);
let v = new d.A("MemberSafetySearchManager");
function R(e) {
    return `guild_${e}`;
}
function O(e) {
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
let b = (0, o.v)((e) => ({}));
function D(e, t) {
    let n = b.getState()[e];
    return (
        null == n && (n = O(1)),
        (n = { ...n, ...t }),
        (0, l.r)(() => {
            b.setState((t) => ({ ...t, [e]: n }));
        }),
        n
    );
}
function L(e) {
    return b.getState()[e];
}
function w(e) {
    let t = L(e);
    return null == t && D(e, (t = O(1))), t;
}
async function M(e) {
    await (0, u.yy)(200), null != L(e) && D(e, { requestState: 3, abortController: null, lastUpdated: Date.now() });
}
function P(e) {
    var t;
    (t = R(e)),
        (0, l.r)(() => {
            b.setState((e) => {
                let n = { ...e };
                return delete n[t], n;
            });
        });
}
function x(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
async function k(e) {
    var t;
    let n,
        i,
        r = N.A.getSearchStateByGuildId(e),
        o = N.A.getPaginationStateByGuildId(e),
        l = R(e),
        u = w(l),
        [c, d] = (function (e, t, n) {
            let i = (function (e, t) {
                    let n,
                        i,
                        r,
                        s,
                        {
                            currentPageChunkNumber: a,
                            previousPageChunkNumber: o,
                            nextPageChunkNumber: l,
                        } = ((n = (0, f.n4)(t)),
                        (i = t.pageSize * (t.currentPage - 1)),
                        (r = t.pageSize * t.currentPage),
                        (s = t.pageSize * (t.currentPage + 1)),
                        {
                            previousPageChunkNumber: x(i, n),
                            currentPageChunkNumber: x(r, n),
                            nextPageChunkNumber: x(s, n),
                        }),
                        { previousPagination: u } = w(R(e)),
                        c = t.currentPage,
                        d = u?.currentPage ?? 0,
                        _ = N.A.getElasticSearchPaginationByGuildId(e);
                    switch (!0) {
                        case null == _:
                        case a === l && 0 === a:
                            return 0;
                        case a === l && a === o:
                            return 1;
                        case d < c && a < l:
                            return 2;
                        case d > c && a >= o:
                            if (0 < a) return 3;
                            return 0;
                        default:
                            return 1;
                    }
                })(e, n),
                r = N.A.getElasticSearchPaginationByGuildId(e),
                s = (0, f.n4)(n);
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
                    (0, _.xb)(i);
            }
        })(e, u, o),
        m =
            ((t = (function (e) {
                let t = {},
                    n = {},
                    { query: i } = e;
                if (null != i && i.length > 1) {
                    let [e, n] = (0, p.H)(i);
                    e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
                }
                let {
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: s,
                        requireUnusualAccountActivity: a,
                        requireUsernameQuarantined: o,
                    } = e,
                    l = {};
                r && (l.unusual_dm_activity_until = { range: { gte: Date.now() - E.tX } }),
                    s && (l.communication_disabled_until = { range: { gte: Date.now() } }),
                    a && (l.unusual_account_activity = a),
                    o && (l.automod_quarantined_username = o),
                    Object.keys(l).length > 0 && (n.safety_signals = l);
                let { selectedRoleIds: u } = e;
                u.size > 0 && (t.role_ids = { and_query: Array.from(u) });
                let { selectedJoinDateOption: c } = e;
                null != c.afterDate &&
                    (t.guild_joined_at = { range: { gte: c.afterDate, lte: c.beforeDate ?? void 0 } });
                let { selectedAccountAgeOption: d } = e;
                if (null != d.afterDate) {
                    let e = t.user_id;
                    t.user_id = {
                        ...e,
                        range: {
                            gte: h.default.fromTimestamp(d.afterDate),
                            lte: null != d.beforeDate ? h.default.fromTimestamp(d.beforeDate) : void 0,
                        },
                    };
                }
                let { selectedSourceInviteCode: _ } = e;
                null != _ && (t.source_invite_code = { or_query: [_] });
                let { selectedJoinSourceType: f } = e;
                null != f && (t.join_source_type = { or_query: [f] });
                let m = { or_query: n, and_query: t },
                    { selectedSort: g } = e;
                return null != g && (m.sort = g), m;
            })(r)),
            null == d ? t : { ...t, ...d }),
        g = r.selectedSort ?? E.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (((n = w(l)), s()(n.query, m) && (0, a.isEqual)(c, u.cursor))) return;
    let A =
        ((i = L(l)),
        i?.requestState === 2 && i.abortController?.abort(),
        D(l, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: m,
            cursor: c,
            previousPagination: o,
            sort: g,
        }));
    try {
        if ((v.info("Making member search request", { query: A.query, guildId: e }), null == A.query))
            throw Error("Query is null");
        await C(e, A.query, { signal: A.abortController?.signal ?? void 0 });
    } catch (e) {
        if (-1 === e.code) return;
        null != L(l) && D(l, { requestState: 0, abortController: null, lastUpdated: Date.now() });
        return;
    }
    await M(l);
}
function U(e) {
    return b((t) => {
        let n = R(e);
        return t[n]?.requestState === 2;
    });
}
function G(e) {
    return b((t) => {
        let n = R(e);
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
        return P(t), k(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return P(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return k(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return k(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return M(R(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        D(R(t), { requestState: 4, abortController: null, lastUpdated: Date.now() });
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return k(t);
    }
}
let V = new F();
