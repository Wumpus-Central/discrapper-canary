n.d(t, {
    $j: () => Y,
    M3: () => W,
    ZP: () => z,
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(348327),
    i = n.n(r),
    a = n(392711),
    o = n(663042),
    s = n(731965),
    l = n(379649),
    c = n(147913),
    u = n(710845),
    d = n(823379),
    f = n(709054),
    p = n(823596),
    _ = n(733026),
    m = n(588215),
    h = n(496135),
    g = n(893966);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = -1,
    S = new u.Z("MemberSafetySearchManager");
function I(e) {
    return "guild_".concat(e);
}
function T(e) {
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
let C = (0, o.U)((e) => ({}));
function A(e, t) {
    let n = C.getState()[e];
    return (
        null == n && (n = T(1)),
        (n = b({}, n, t)),
        (0, s.j)(() => {
            C.setState((t) => O(b({}, t), { [e]: n }));
        }),
        n
    );
}
function N(e) {
    return C.getState()[e];
}
function P(e) {
    let t = N(e);
    return null == t && A(e, (t = T(1))), t;
}
function R(e) {
    (0, s.j)(() => {
        C.setState((t) => {
            let n = b({}, t);
            return delete n[e], n;
        });
    });
}
function w(e, t, n, r, i) {
    let a = N(e);
    if ((null == a ? void 0 : a.requestState) === 2) {
        var o;
        null == (o = a.abortController) || o.abort();
    }
    return A(e, {
        requestState: 2,
        abortController: new AbortController(),
        lastUpdated: Date.now(),
        query: t,
        cursor: n,
        previousPagination: r,
        sort: i,
    });
}
function D(e) {
    null != N(e) &&
        A(e, {
            requestState: 0,
            abortController: null,
            lastUpdated: Date.now(),
        });
}
async function x(e) {
    await (0, l._v)(200),
        null != N(e) &&
            A(e, {
                requestState: 3,
                abortController: null,
                lastUpdated: Date.now(),
            });
}
function L(e) {
    A(e, {
        requestState: 4,
        abortController: null,
        lastUpdated: Date.now(),
    });
}
function j(e) {
    R(I(e));
}
function M(e) {
    return null != e && e.length > 1;
}
function k(e) {
    let t = {},
        n = {},
        { query: r } = e;
    if (M(r)) {
        let [e, n] = (0, _.C)(r);
        e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
    }
    let {
            requireUnusualDmActivity: i,
            requireCommunicationDisabled: a,
            requireUnusualAccountActivity: o,
            requireUsernameQuarantined: s,
        } = e,
        l = {};
    i && (l.unusual_dm_activity_until = { range: { gte: Date.now() - m.rL } }),
        a && (l.communication_disabled_until = { range: { gte: Date.now() } }),
        o && (l.unusual_account_activity = o),
        s && (l.automod_quarantined_username = s),
        Object.keys(l).length > 0 && (n.safety_signals = l);
    let { selectedRoleIds: c } = e;
    c.size > 0 && (t.role_ids = { and_query: Array.from(c) });
    let { selectedJoinDateOption: u } = e;
    if (null != u.afterDate) {
        var d;
        t.guild_joined_at = {
            range: {
                gte: u.afterDate,
                lte: null != (d = u.beforeDate) ? d : void 0,
            },
        };
    }
    let { selectedAccountAgeOption: p } = e;
    if (null != p.afterDate) {
        let e = t.user_id;
        t.user_id = O(b({}, e), {
            range: {
                gte: f.default.fromTimestamp(p.afterDate),
                lte: null != p.beforeDate ? f.default.fromTimestamp(p.beforeDate) : void 0,
            },
        });
    }
    let { selectedSourceInviteCode: h } = e;
    null != h && (t.source_invite_code = { or_query: [h] });
    let { selectedJoinSourceType: g } = e;
    null != g && (t.join_source_type = { or_query: [g] });
    let E = {
            or_query: n,
            and_query: t,
        },
        { selectedSort: y } = e;
    return null != y && (E.sort = y), E;
}
function U(e, t) {
    return null == t ? e : b({}, e, t);
}
function G(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
function Z(e) {
    let t = (0, p.t3)(e),
        n = e.pageSize * (e.currentPage - 1),
        r = e.pageSize * e.currentPage,
        i = e.pageSize * (e.currentPage + 1);
    return {
        previousPageChunkNumber: G(n, t),
        currentPageChunkNumber: G(r, t),
        nextPageChunkNumber: G(i, t),
    };
}
function F(e, t) {
    var n;
    let { currentPageChunkNumber: r, previousPageChunkNumber: i, nextPageChunkNumber: a } = Z(t),
        { previousPagination: o } = P(I(e)),
        s = t.currentPage,
        l = null != (n = null == o ? void 0 : o.currentPage) ? n : 0,
        c = g.Z.getElasticSearchPaginationByGuildId(e);
    switch (!0) {
        case null == c:
        case r === a && 0 === r:
            return 0;
        case r === a && r === i:
            return 1;
        case l < s && r < a:
            return 2;
        case l > s && r >= i:
            if (0 < r) return 3;
            return 0;
        default:
            return 1;
    }
}
function B(e, t, n) {
    var r, i, a, o, s, l;
    let c = F(e, n),
        u = g.Z.getElasticSearchPaginationByGuildId(e),
        f = (0, p.t3)(n);
    switch (c) {
        case 0:
            return [null, { limit: f }];
        case 1:
            return [
                null != (r = t.cursor) ? r : null,
                {
                    limit: f,
                    after: null != (i = t.cursor) ? i : void 0,
                },
            ];
        case 2:
            return [
                null != (a = null == u ? void 0 : u.after) ? a : null,
                {
                    limit: f,
                    after: null != (o = null == u ? void 0 : u.after) ? o : void 0,
                },
            ];
        case 3:
            return [
                null != (s = null == u ? void 0 : u.before) ? s : null,
                {
                    limit: f,
                    before: null != (l = null == u ? void 0 : u.before) ? l : void 0,
                },
            ];
        default:
            (0, d.vE)(c);
    }
}
function V(e, t) {
    let n = P(e);
    return i()(n.query, t);
}
async function H(e) {
    var t, n, r;
    let i = g.Z.getSearchStateByGuildId(e),
        o = g.Z.getPaginationStateByGuildId(e),
        s = I(e),
        l = P(s),
        [c, u] = B(e, l, o),
        d = U(k(i), u),
        f = null != (t = i.selectedSort) ? t : m.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (V(s, d) && (0, a.isEqual)(c, l.cursor)) return;
    let p = w(s, d, c, o, f);
    try {
        if (
            (S.info("Making member search request", {
                query: p.query,
                guildId: e,
            }),
            null == p.query)
        )
            throw Error("Query is null");
        await (0, h.D)(e, p.query, {
            signal: null != (r = null == (n = p.abortController) ? void 0 : n.signal) ? r : void 0,
        });
    } catch (e) {
        if (v === e.code) return;
        D(s);
        return;
    }
    await x(s);
}
function Y(e) {
    return C((t) => {
        var n;
        return (null == (n = t[I(e)]) ? void 0 : n.requestState) === 2;
    });
}
function W(e) {
    return C((t) => {
        var n;
        return (null == (n = t[I(e)]) ? void 0 : n.requestState) === 4;
    });
}
class K extends c.Z {
    handleInitialize(e) {
        let { guildId: t } = e;
        return j(t), H(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return j(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return H(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return H(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return x(I(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        return L(I(t));
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return H(t);
    }
    constructor(...e) {
        super(...e),
            E(this, "actions", {
                INITIALIZE_MEMBER_SAFETY_STORE: (e) => this.handleInitialize(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: (e) => this.handleSearchStateUpdate(e),
                MEMBER_SAFETY_PAGINATION_UPDATE: (e) => this.handlePaginationUpdate(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: (e) => this.handleGuildMemberSearchStillIndexing(e),
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: (e) => this.handleNewMemberTimestampRefresh(e),
            });
    }
}
let z = new K();
