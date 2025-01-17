r.d(n, {
    $j: function () {
        return K;
    },
    M3: function () {
        return z;
    }
});
var i,
    a,
    s = r(47120);
var o = r(411104);
var l = r(348327),
    u = r.n(l),
    c = r(392711);
var d = r(15729),
    f = r(259443),
    _ = r(731965),
    h = r(379649),
    p = r(147913),
    m = r(823379),
    g = r(709054),
    E = r(823596),
    v = r(733026),
    I = r(588215),
    T = r(496135),
    b = r(893966);
function y(e, n, r) {
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
let S = -1,
    A = new f.Yd('MemberSafetySearchManager');
function N(e) {
    return 'guild_'.concat(e);
}
function C(e) {
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
!(function (e) {
    (e[(e.FAILED = 0)] = 'FAILED'), (e[(e.UNFETCHED = 1)] = 'UNFETCHED'), (e[(e.PENDING = 2)] = 'PENDING'), (e[(e.SUCCEEDED = 3)] = 'SUCCEEDED'), (e[(e.STILL_INDEXING = 4)] = 'STILL_INDEXING');
})(i || (i = {}));
let R = (0, d.U)((e) => ({}));
function O(e, n) {
    let r = R.getState()[e];
    return (
        null == r && (r = C(1)),
        (r = {
            ...r,
            ...n
        }),
        (0, _.j)(() => {
            R.setState((n) => ({
                ...n,
                [e]: r
            }));
        }),
        r
    );
}
function D(e) {
    return R.getState()[e];
}
function L(e) {
    let n = D(e);
    return null == n && O(e, (n = C(1))), n;
}
function x(e) {
    (0, _.j)(() => {
        R.setState((n) => {
            let r = { ...n };
            return delete r[e], r;
        });
    });
}
function w(e, n, r, i, a) {
    let s = D(e);
    if ((null == s ? void 0 : s.requestState) === 2) {
        var o;
        null === (o = s.abortController) || void 0 === o || o.abort();
    }
    return O(e, {
        requestState: 2,
        abortController: new AbortController(),
        lastUpdated: Date.now(),
        query: n,
        cursor: r,
        previousPagination: i,
        sort: a
    });
}
function P(e) {
    if (null != D(e))
        O(e, {
            requestState: 0,
            abortController: null,
            lastUpdated: Date.now()
        });
}
async function M(e) {
    if ((await (0, h._v)(200), null != D(e)))
        O(e, {
            requestState: 3,
            abortController: null,
            lastUpdated: Date.now()
        });
}
function k(e) {
    O(e, {
        requestState: 4,
        abortController: null,
        lastUpdated: Date.now()
    });
}
function U(e) {
    x(N(e));
}
function B(e) {
    return null != e && e.length > 1;
}
function G(e) {
    let n = {},
        r = {},
        { query: i } = e;
    if (B(i)) {
        let [e, r] = (0, v.C)(i);
        e.length > 0 && (n.usernames = { or_query: e }), r.length > 0 && (n.user_id = { or_query: r });
    }
    let { requireUnusualDmActivity: a, requireCommunicationDisabled: s, requireUnusualAccountActivity: o, requireUsernameQuarantined: l } = e,
        u = {};
    a && (u.unusual_dm_activity_until = { range: { gte: Date.now() - I.rL } }), s && (u.communication_disabled_until = { range: { gte: Date.now() } }), o && (u.unusual_account_activity = o), l && (u.automod_quarantined_username = l), Object.keys(u).length > 0 && (r.safety_signals = u);
    let { selectedRoleIds: c } = e;
    c.size > 0 && (n.role_ids = { and_query: Array.from(c) });
    let { selectedJoinDateOption: d } = e;
    if (null != d.afterDate) {
        var f;
        n.guild_joined_at = {
            range: {
                gte: d.afterDate,
                lte: null !== (f = d.beforeDate) && void 0 !== f ? f : void 0
            }
        };
    }
    let { selectedAccountAgeOption: _ } = e;
    if (null != _.afterDate) {
        let e = n.user_id;
        n.user_id = {
            ...e,
            range: {
                gte: g.default.fromTimestamp(_.afterDate),
                lte: null != _.beforeDate ? g.default.fromTimestamp(_.beforeDate) : void 0
            }
        };
    }
    let { selectedSourceInviteCode: h } = e;
    null != h && (n.source_invite_code = { or_query: [h] });
    let { selectedJoinSourceType: p } = e;
    null != p && (n.join_source_type = { or_query: [p] });
    let m = {
            or_query: r,
            and_query: n
        },
        { selectedSort: E } = e;
    return null != E && (m.sort = E), m;
}
function Z(e, n) {
    return null == n
        ? e
        : {
              ...e,
              ...n
          };
}
function F(e, n) {
    return Math.floor(Math.max(e - 1, 0) / n);
}
function V(e) {
    let n = (0, E.t3)(e),
        r = e.pageSize * (e.currentPage - 1),
        i = e.pageSize * e.currentPage,
        a = e.pageSize * (e.currentPage + 1);
    return {
        previousPageChunkNumber: F(r, n),
        currentPageChunkNumber: F(i, n),
        nextPageChunkNumber: F(a, n)
    };
}
function j(e, n) {
    var r;
    let { currentPageChunkNumber: i, previousPageChunkNumber: a, nextPageChunkNumber: s } = V(n),
        { previousPagination: o } = L(N(e)),
        l = n.currentPage,
        u = null !== (r = null == o ? void 0 : o.currentPage) && void 0 !== r ? r : 0,
        c = b.Z.getElasticSearchPaginationByGuildId(e);
    switch (!0) {
        case null == c:
        case i === s && 0 === i:
            return 0;
        case i === s && i === a:
            return 1;
        case u < l && i < s:
            return 2;
        case u > l && i >= a:
            if (0 < i) return 3;
            return 0;
        default:
            return 1;
    }
}
function H(e, n, r) {
    var i, a, s, o, l, u;
    let c = j(e, r),
        d = b.Z.getElasticSearchPaginationByGuildId(e),
        f = (0, E.t3)(r);
    switch (c) {
        case 0:
            return [null, { limit: f }];
        case 1:
            return [
                null !== (i = n.cursor) && void 0 !== i ? i : null,
                {
                    limit: f,
                    after: null !== (a = n.cursor) && void 0 !== a ? a : void 0
                }
            ];
        case 2:
            return [
                null !== (s = null == d ? void 0 : d.after) && void 0 !== s ? s : null,
                {
                    limit: f,
                    after: null !== (o = null == d ? void 0 : d.after) && void 0 !== o ? o : void 0
                }
            ];
        case 3:
            return [
                null !== (l = null == d ? void 0 : d.before) && void 0 !== l ? l : null,
                {
                    limit: f,
                    before: null !== (u = null == d ? void 0 : d.before) && void 0 !== u ? u : void 0
                }
            ];
        default:
            (0, m.vE)(c);
    }
}
function Y(e, n) {
    let r = L(e);
    return u()(r.query, n);
}
async function W(e) {
    var n, r, i;
    let a = b.Z.getSearchStateByGuildId(e),
        s = b.Z.getPaginationStateByGuildId(e),
        o = N(e),
        l = L(o),
        [u, d] = H(e, l, s),
        f = Z(G(a), d),
        _ = null !== (n = a.selectedSort) && void 0 !== n ? n : I.d$.ORDER_BY_GUILD_JOINED_AT_DESC;
    if (Y(o, f) && (0, c.isEqual)(u, l.cursor)) return;
    let h = w(o, f, u, s, _);
    try {
        if (
            (A.info('Making member search request', {
                query: h.query,
                guildId: e
            }),
            null == h.query)
        )
            throw Error('Query is null');
        await (0, T.D)(e, h.query, { signal: null !== (i = null === (r = h.abortController) || void 0 === r ? void 0 : r.signal) && void 0 !== i ? i : void 0 });
    } catch (e) {
        if (S === e.code) return;
        P(o);
        return;
    }
    await M(o);
}
function K(e) {
    return R((n) => {
        var r;
        return (null === (r = n[N(e)]) || void 0 === r ? void 0 : r.requestState) === 2;
    });
}
function z(e) {
    return R((n) => {
        var r;
        return (null === (r = n[N(e)]) || void 0 === r ? void 0 : r.requestState) === 4;
    });
}
!(function (e) {
    (e[(e.FIRST_PAGE_CHUNK = 0)] = 'FIRST_PAGE_CHUNK'), (e[(e.CURRENT_SEARCH_CHUNK = 1)] = 'CURRENT_SEARCH_CHUNK'), (e[(e.NEXT_SEARCH_CHUNK = 2)] = 'NEXT_SEARCH_CHUNK'), (e[(e.PREVIOUS_SEARCH_CHUNK = 3)] = 'PREVIOUS_SEARCH_CHUNK');
})(a || (a = {}));
class q extends p.Z {
    handleInitialize(e) {
        let { guildId: n } = e;
        return U(n), W(n);
    }
    handleGuildDelete(e) {
        let { guild: n } = e;
        return U(n.id);
    }
    handleSearchStateUpdate(e) {
        let { guildId: n } = e;
        return W(n);
    }
    handlePaginationUpdate(e) {
        let { guildId: n } = e;
        return W(n);
    }
    handleGuildMemberSearchSuccess(e) {
        let { guildId: n } = e;
        return M(N(n));
    }
    handleGuildMemberSearchStillIndexing(e) {
        let { guildId: n } = e;
        return k(N(n));
    }
    handleNewMemberTimestampRefresh(e) {
        let { guildId: n } = e;
        return W(n);
    }
    constructor(...e) {
        super(...e),
            y(this, 'actions', {
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
n.ZP = new q();
