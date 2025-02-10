n.d(t, {
    $j: () => V,
    M3: () => j,
    ZP: () => Y
}),
    n(47120),
    n(411104);
var i = n(348327),
    r = n.n(i),
    a = n(392711),
    s = n(15729),
    o = n(259443),
    l = n(731965),
    u = n(379649),
    c = n(147913),
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
let v = -1,
    y = new o.Yd('MemberSafetySearchManager');
function I(e) {
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
let b = (0, s.U)((e) => ({}));
function S(e, t) {
    let n = b.getState()[e];
    return (
        null == n && (n = T(1)),
        (n = {
            ...n,
            ...t
        }),
        (0, l.j)(() => {
            b.setState((t) => ({
                ...t,
                [e]: n
            }));
        }),
        n
    );
}
function A(e) {
    return b.getState()[e];
}
function N(e) {
    let t = A(e);
    return null == t && S(e, (t = T(1))), t;
}
function C(e) {
    (0, l.j)(() => {
        b.setState((t) => {
            let n = { ...t };
            return delete n[e], n;
        });
    });
}
function R(e, t, n, i, r) {
    let a = A(e);
    if ((null == a ? void 0 : a.requestState) === 2) {
        var s;
        null === (s = a.abortController) || void 0 === s || s.abort();
    }
    return S(e, {
        requestState: 2,
        abortController: new AbortController(),
        lastUpdated: Date.now(),
        query: t,
        cursor: n,
        previousPagination: i,
        sort: r
    });
}
function O(e) {
    null != A(e) &&
        S(e, {
            requestState: 0,
            abortController: null,
            lastUpdated: Date.now()
        });
}
async function D(e) {
    await (0, u._v)(200),
        null != A(e) &&
            S(e, {
                requestState: 3,
                abortController: null,
                lastUpdated: Date.now()
            });
}
function L(e) {
    S(e, {
        requestState: 4,
        abortController: null,
        lastUpdated: Date.now()
    });
}
function x(e) {
    C(I(e));
}
function P(e) {
    return null != e && e.length > 1;
}
function w(e) {
    let t = {},
        n = {},
        { query: i } = e;
    if (P(i)) {
        let [e, n] = (0, p.C)(i);
        e.length > 0 && (t.usernames = { or_query: e }), n.length > 0 && (t.user_id = { or_query: n });
    }
    let { requireUnusualDmActivity: r, requireCommunicationDisabled: a, requireUnusualAccountActivity: s, requireUsernameQuarantined: o } = e,
        l = {};
    r && (l.unusual_dm_activity_until = { range: { gte: Date.now() - h.rL } }), a && (l.communication_disabled_until = { range: { gte: Date.now() } }), s && (l.unusual_account_activity = s), o && (l.automod_quarantined_username = o), Object.keys(l).length > 0 && (n.safety_signals = l);
    let { selectedRoleIds: u } = e;
    u.size > 0 && (t.role_ids = { and_query: Array.from(u) });
    let { selectedJoinDateOption: c } = e;
    if (null != c.afterDate) {
        var d;
        t.guild_joined_at = {
            range: {
                gte: c.afterDate,
                lte: null !== (d = c.beforeDate) && void 0 !== d ? d : void 0
            }
        };
    }
    let { selectedAccountAgeOption: _ } = e;
    if (null != _.afterDate) {
        let e = t.user_id;
        t.user_id = {
            ...e,
            range: {
                gte: f.default.fromTimestamp(_.afterDate),
                lte: null != _.beforeDate ? f.default.fromTimestamp(_.beforeDate) : void 0
            }
        };
    }
    let { selectedSourceInviteCode: m } = e;
    null != m && (t.source_invite_code = { or_query: [m] });
    let { selectedJoinSourceType: g } = e;
    null != g && (t.join_source_type = { or_query: [g] });
    let E = {
            or_query: n,
            and_query: t
        },
        { selectedSort: v } = e;
    return null != v && (E.sort = v), E;
}
function M(e, t) {
    return null == t
        ? e
        : {
              ...e,
              ...t
          };
}
function k(e, t) {
    return Math.floor(Math.max(e - 1, 0) / t);
}
function U(e) {
    let t = (0, _.t3)(e),
        n = e.pageSize * (e.currentPage - 1),
        i = e.pageSize * e.currentPage,
        r = e.pageSize * (e.currentPage + 1);
    return {
        previousPageChunkNumber: k(n, t),
        currentPageChunkNumber: k(i, t),
        nextPageChunkNumber: k(r, t)
    };
}
function G(e, t) {
    var n;
    let { currentPageChunkNumber: i, previousPageChunkNumber: r, nextPageChunkNumber: a } = U(t),
        { previousPagination: s } = N(I(e)),
        o = t.currentPage,
        l = null !== (n = null == s ? void 0 : s.currentPage) && void 0 !== n ? n : 0,
        u = g.Z.getElasticSearchPaginationByGuildId(e);
    switch (!0) {
        case null == u:
        case i === a && 0 === i:
            return 0;
        case i === a && i === r:
            return 1;
        case l < o && i < a:
            return 2;
        case l > o && i >= r:
            if (0 < i) return 3;
            return 0;
        default:
            return 1;
    }
}
function B(e, t, n) {
    var i, r, a, s, o, l;
    let u = G(e, n),
        c = g.Z.getElasticSearchPaginationByGuildId(e),
        f = (0, _.t3)(n);
    switch (u) {
        case 0:
            return [null, { limit: f }];
        case 1:
            return [
                null !== (i = t.cursor) && void 0 !== i ? i : null,
                {
                    limit: f,
                    after: null !== (r = t.cursor) && void 0 !== r ? r : void 0
                }
            ];
        case 2:
            return [
                null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : null,
                {
                    limit: f,
                    after: null !== (s = null == c ? void 0 : c.after) && void 0 !== s ? s : void 0
                }
            ];
        case 3:
            return [
                null !== (o = null == c ? void 0 : c.before) && void 0 !== o ? o : null,
                {
                    limit: f,
                    before: null !== (l = null == c ? void 0 : c.before) && void 0 !== l ? l : void 0
                }
            ];
        default:
            (0, d.vE)(u);
    }
}
function Z(e, t) {
    let n = N(e);
    return r()(n.query, t);
}
async function F(e) {
    var t, n, i;
    let r = g.Z.getSearchStateByGuildId(e),
        s = g.Z.getPaginationStateByGuildId(e),
        o = I(e),
        l = N(o),
        [u, c] = B(e, l, s),
        d = M(w(r), c),
        f = null !== (t = r.selectedSort) && void 0 !== t ? t : h.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (Z(o, d) && (0, a.isEqual)(u, l.cursor)) return;
    let _ = R(o, d, u, s, f);
    try {
        if (
            (y.info('Making member search request', {
                query: _.query,
                guildId: e
            }),
            null == _.query)
        )
            throw Error('Query is null');
        await (0, m.D)(e, _.query, { signal: null !== (i = null === (n = _.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== i ? i : void 0 });
    } catch (e) {
        if (v === e.code) return;
        O(o);
        return;
    }
    await D(o);
}
function V(e) {
    return b((t) => {
        var n;
        return (null === (n = t[I(e)]) || void 0 === n ? void 0 : n.requestState) === 2;
    });
}
function j(e) {
    return b((t) => {
        var n;
        return (null === (n = t[I(e)]) || void 0 === n ? void 0 : n.requestState) === 4;
    });
}
class H extends c.Z {
    handleInitialize(e) {
        let { guildId: t } = e;
        return x(t), F(t);
    }
    handleGuildDelete(e) {
        let { guild: t } = e;
        return x(t.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: t } = e;
        return F(t);
    }
    handlePaginationUpdate(e) {
        let { guildId: t } = e;
        return F(t);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: t } = e;
        return D(I(t));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: t } = e;
        return L(I(t));
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: t } = e;
        return F(t);
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
let Y = new H();
