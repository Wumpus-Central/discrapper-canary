n.d(t, { Ay: () => k, Ms: () => w, Wl: () => G });
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
    E = n(811091),
    A = n(233693),
    h = n(859126),
    f = n(70738),
    I = n(73153),
    p = n(620632),
    m = n(627784),
    T = n(927813),
    g = (((i = {})[(i.SUCCESSFUL_QUERY = 1)] = "SUCCESSFUL_QUERY"), (i[(i.ERROR = 2)] = "ERROR"), i),
    S = n(652215),
    N = n(406318);
let C = new u.A("MemberSafetySearchManager");
function O(e) {
    return `guild_${e}`;
}
function R(e) {
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
let L = (0, l.v)((e) => ({}));
function y(e, t) {
    let n = L.getState()[e];
    return (
        null == n && (n = R(1)),
        (n = { ...n, ...t }),
        (0, o.r)(() => {
            L.setState((t) => ({ ...t, [e]: n }));
        }),
        n
    );
}
function D(e) {
    return L.getState()[e];
}
function b(e) {
    let t = D(e);
    return (null == t && y(e, (t = R(1))), t);
}
async function v(e) {
    (await (0, d.yy)(200), null != D(e) && y(e, { requestState: 3, abortController: null, lastUpdated: Date.now() }));
}
function P(e) {
    var t;
    ((t = O(e)),
        (0, o.r)(() => {
            L.setState((e) => {
                let n = { ...e };
                return (delete n[t], n);
            });
        }));
}
function M(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
async function U(e) {
    var t;
    let n,
        i,
        r = N.A.getSearchStateByGuildId(e),
        l = N.A.getPaginationStateByGuildId(e),
        o = O(e),
        d = b(o),
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
                            previousPageChunkNumber: M(i, n),
                            currentPageChunkNumber: M(r, n),
                            nextPageChunkNumber: M(a, n),
                        }),
                        { previousPagination: d } = b(O(e)),
                        c = t.currentPage,
                        u = d?.currentPage ?? 0,
                        _ = N.A.getElasticSearchPaginationByGuildId(e);
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
                r = N.A.getElasticSearchPaginationByGuildId(e),
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
        R =
            ((t = (function (e) {
                let t = {},
                    n = {},
                    { query: i } = e;
                if (null != i && i.length > 1) {
                    let [e, n] = (0, h.H)(i);
                    (e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n }));
                }
                let {
                        requireUnusualDmActivity: r,
                        requireCommunicationDisabled: a,
                        requireUnusualAccountActivity: s,
                        requireUsernameQuarantined: l,
                    } = e,
                    o = {};
                (r && (o.unusual_dm_activity_until = { range: { gte: Date.now() - f.tX } }),
                    a && (o.communication_disabled_until = { range: { gte: Date.now() } }),
                    s && (o.unusual_account_activity = s),
                    l && (o.automod_quarantined_username = l),
                    Object.keys(o).length > 0 && (n.safety_signals = o));
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
                let I = { or_query: n, and_query: t },
                    { selectedSort: p } = e;
                return (null != p && (I.sort = p), I);
            })(r)),
            null == u ? t : { ...t, ...u }),
        L = r.selectedSort ?? f.mF.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (((n = b(o)), a()(n.query, R) && (0, s.isEqual)(c, d.cursor))) return;
    let P =
        ((i = D(o)),
        i?.requestState === 2 && i.abortController?.abort(),
        y(o, {
            requestState: 2,
            abortController: new AbortController(),
            lastUpdated: Date.now(),
            query: R,
            cursor: c,
            previousPagination: l,
            sort: L,
        }));
    try {
        if ((C.info("Making member search request", { query: P.query, guildId: e }), null == P.query))
            throw Error("Query is null");
        await (async function (e, t, n) {
            let i = await (async function e(t, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (r > 3) throw Error("Unable to search guild members after max retries");
                let { autoRetry: a = !0, signal: s } = i;
                try {
                    var l;
                    let o = await p.Bo.post({
                        url: S.Rsh.GUILD_MEMBER_SEARCH(t),
                        body: n,
                        signal: s,
                        rejectWithError: !1,
                    });
                    if (202 === o.status) {
                        if (null == o.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!a) throw Error("Indexing response received but autoRetry is disabled");
                        return (
                            await I.h.dispatch({
                                type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                                guildId: t,
                            }),
                            await new Promise((e) => setTimeout(e, o.body.retry_after * T.A.Millis.SECOND)),
                            e(t, n, i, r + 1)
                        );
                    }
                    return {
                        type: g.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (l = o.body).guild_id,
                            members: l.members,
                            page_result_count: l.page_result_count,
                            total_result_count: l.total_result_count,
                        },
                    };
                } catch (t) {
                    let e = new m.LG(t);
                    return { type: g.ERROR, body: e };
                }
            })(e, t, n);
            if (i.type === g.ERROR) throw i.body;
            let { body: r } = i;
            I.h.dispatch({
                type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                guildId: e,
                members: r.members,
                page_result_count: r.page_result_count,
                total_result_count: r.total_result_count,
            });
        })(e, P.query, { signal: P.abortController?.signal ?? void 0 });
    } catch (e) {
        if (-1 === e.code) return;
        null != D(o) && y(o, { requestState: 0, abortController: null, lastUpdated: Date.now() });
        return;
    }
    await v(o);
}
function w(e) {
    return L((t) => {
        let n = O(e);
        return t[n]?.requestState === 2;
    });
}
function G(e) {
    return L((t) => {
        let n = O(e);
        return t[n]?.requestState === 4;
    });
}
class x extends c.A {
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
        return (P(t), U(t));
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return P(t.id);
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
        return v(O(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        y(O(t), { requestState: 4, abortController: null, lastUpdated: Date.now() });
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return U(t);
    }
}
let k = new x();
