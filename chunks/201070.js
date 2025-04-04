n.d(t, {
    $j: () => W,
    M3: () => Y,
    ZP: () => z
}),
    n(47120),
    n(230036),
    n(411104);
var r = n(348327),
    i = n.n(r),
    o = n(392711),
    a = n(230383),
    s = n(259443),
    l = n(731965),
    c = n(379649),
    u = n(147913),
    d = n(823379),
    f = n(709054),
    _ = n(823596),
    p = n(733026),
    h = n(588215),
    m = n(496135),
    g = n(893966);
function E(e, t, n) {
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
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function v(e, t) {
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
let O = -1,
    I = new s.Yd('MemberSafetySearchManager');
function S(e) {
    return 'guild_'.concat(e);
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
        elasticSearchCursor: null
    };
}
let N = (0, a.U)((e) => ({}));
function A(e, t) {
    let n = N.getState()[e];
    return (
        null == n && (n = T(1)),
        (n = b({}, n, t)),
        (0, l.j)(() => {
            N.setState((t) => v(b({}, t), { [e]: n }));
        }),
        n
    );
}
function C(e) {
    return N.getState()[e];
}
function R(e) {
    let t = C(e);
    return null == t && A(e, (t = T(1))), t;
}
function P(e) {
    (0, l.j)(() => {
        N.setState((t) => {
            let n = b({}, t);
            return delete n[e], n;
        });
    });
}
function w(e, t, n, r, i) {
    let o = C(e);
    if ((null == o ? void 0 : o.requestState) === 2) {
        var a;
        null == (a = o.abortController) || a.abort();
    }
    return A(e, {
        requestState: 2,
        abortController: new AbortController(),
        lastUpdated: Date.now(),
        query: t,
        cursor: n,
        previousPagination: r,
        sort: i
    });
}
function D(e) {
    null != C(e) &&
        A(e, {
            requestState: 0,
            abortController: null,
            lastUpdated: Date.now()
        });
}
async function L(e) {
    await (0, c._v)(200),
        null != C(e) &&
            A(e, {
                requestState: 3,
                abortController: null,
                lastUpdated: Date.now()
            });
}
function x(e) {
    A(e, {
        requestState: 4,
        abortController: null,
        lastUpdated: Date.now()
    });
}
function M(e) {
    P(S(e));
}
function k(e) {
    return null != e && e.length > 1;
}
function j(e) {
    let t = {},
        n = {},
        { query: r } = e;
    if (k(r)) {
        let [e, n] = (0, p.C)(r);
        e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
    }
    let { requireUnusualDmActivity: i, requireCommunicationDisabled: o, requireUnusualAccountActivity: a, requireUsernameQuarantined: s } = e,
        l = {};
    i && (l.unusual_dm_activity_until = { range: { gte: Date.now() - h.rL } }), o && (l.communication_disabled_until = { range: { gte: Date.now() } }), a && (l.unusual_account_activity = a), s && (l.automod_quarantined_username = s), Object.keys(l).length > 0 && (n.safety_signals = l);
    let { selectedRoleIds: c } = e;
    c.size > 0 && (t.role_ids = { and_query: Array.from(c) });
    let { selectedJoinDateOption: u } = e;
    if (null != u.afterDate) {
        var d;
        t.guild_joined_at = {
            range: {
                gte: u.afterDate,
                lte: null != (d = u.beforeDate) ? d : void 0
            }
        };
    }
    let { selectedAccountAgeOption: _ } = e;
    if (null != _.afterDate) {
        let e = t.user_id;
        t.user_id = v(b({}, e), {
            range: {
                gte: f.default.fromTimestamp(_.afterDate),
                lte: null != _.beforeDate ? f.default.fromTimestamp(_.beforeDate) : void 0
            }
        });
    }
    let { selectedSourceInviteCode: m } = e;
    null != m && (t.source_invite_code = { or_query: [m] });
    let { selectedJoinSourceType: g } = e;
    null != g && (t.join_source_type = { or_query: [g] });
    let E = {
            or_query: n,
            and_query: t
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
function B(e) {
    let t = (0, _.t3)(e),
        n = e.pageSize * (e.currentPage - 1),
        r = e.pageSize * e.currentPage,
        i = e.pageSize * (e.currentPage + 1);
    return {
        previousPageChunkNumber: G(n, t),
        currentPageChunkNumber: G(r, t),
        nextPageChunkNumber: G(i, t)
    };
}
function F(e, t) {
    var n;
    let { currentPageChunkNumber: r, previousPageChunkNumber: i, nextPageChunkNumber: o } = B(t),
        { previousPagination: a } = R(S(e)),
        s = t.currentPage,
        l = null != (n = null == a ? void 0 : a.currentPage) ? n : 0,
        c = g.Z.getElasticSearchPaginationByGuildId(e);
    switch (!0) {
        case null == c:
        case r === o && 0 === r:
            return 0;
        case r === o && r === i:
            return 1;
        case l < s && r < o:
            return 2;
        case l > s && r >= i:
            if (0 < r) return 3;
            return 0;
        default:
            return 1;
    }
}
function V(e, t, n) {
    var r, i, o, a, s, l;
    let c = F(e, n),
        u = g.Z.getElasticSearchPaginationByGuildId(e),
        f = (0, _.t3)(n);
    switch (c) {
        case 0:
            return [null, { limit: f }];
        case 1:
            return [
                null != (r = t.cursor) ? r : null,
                {
                    limit: f,
                    after: null != (i = t.cursor) ? i : void 0
                }
            ];
        case 2:
            return [
                null != (o = null == u ? void 0 : u.after) ? o : null,
                {
                    limit: f,
                    after: null != (a = null == u ? void 0 : u.after) ? a : void 0
                }
            ];
        case 3:
            return [
                null != (s = null == u ? void 0 : u.before) ? s : null,
                {
                    limit: f,
                    before: null != (l = null == u ? void 0 : u.before) ? l : void 0
                }
            ];
        default:
            (0, d.vE)(c);
    }
}
function Z(e, t) {
    let n = R(e);
    return i()(n.query, t);
}
async function H(e) {
    var t, n, r;
    let i = g.Z.getSearchStateByGuildId(e),
        a = g.Z.getPaginationStateByGuildId(e),
        s = S(e),
        l = R(s),
        [c, u] = V(e, l, a),
        d = U(j(i), u),
        f = null != (t = i.selectedSort) ? t : h.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (Z(s, d) && (0, o.isEqual)(c, l.cursor)) return;
    let _ = w(s, d, c, a, f);
    try {
        if (
            (I.info('Making member search request', {
                query: _.query,
                guildId: e
            }),
            null == _.query)
        )
            throw Error('Query is null');
        await (0, m.D)(e, _.query, { signal: null != (r = null == (n = _.abortController) ? void 0 : n.signal) ? r : void 0 });
    } catch (e) {
        if (O === e.code) return;
        D(s);
        return;
    }
    await L(s);
}
function W(e) {
    return N((t) => {
        var n;
        return (null == (n = t[S(e)]) ? void 0 : n.requestState) === 2;
    });
}
function Y(e) {
    return N((t) => {
        var n;
        return (null == (n = t[S(e)]) ? void 0 : n.requestState) === 4;
    });
}
class K extends u.Z {
    handleInitialize(e) {
        let { guildId: t } = e;
        return M(t), H(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return M(t.id);
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
        return L(S(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        return x(S(t));
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return H(t);
    }
    constructor(...e) {
        super(...e),
            E(this, 'actions', {
                INITIALIZE_MEMBER_SAFETY_STORE: (e) => this.handleInitialize(e),
                GUILD_DELETE: (e) => this.handleGuildDelete(e),
                MEMBER_SAFETY_SEARCH_STATE_UPDATE: (e) => this.handleSearchStateUpdate(e),
                MEMBER_SAFETY_PAGINATION_UPDATE: (e) => this.handlePaginationUpdate(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: (e) => this.handleGuildMemberSearchSuccess(e),
                MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING: (e) => this.handleGuildMemberSearchStillIndexing(e),
                MEMBER_SAFETY_NEW_MEMBER_TIMESTAMP_REFRESH: (e) => this.handleNewMemberTimestampRefresh(e)
            });
    }
}
let z = new K();
