n.d(t, { Z: () => w });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(442837),
    s = n(100527),
    l = n(906732),
    c = n(246364),
    u = n(937111),
    d = n(741606),
    f = n(703656),
    _ = n(314897),
    p = n(271383),
    h = n(594174),
    m = n(970606),
    g = n(645896),
    E = n(905362),
    v = n(353093),
    b = n(900681),
    y = n(284019),
    O = n(308083),
    I = n(981631),
    S = n(388032),
    T = n(233639);
function N(e, t, n) {
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
function A(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e) {
    e.stopPropagation();
}
let w = i.memo(function (e) {
    var t;
    let { clan: n, isLoading: N, onClose: C, profileViewedAnalytics: w, userId: D } = e,
        L = null == n ? void 0 : n.identityGuildId,
        x = (0, g.Cc)(null != L ? L : null),
        M = null == n ? void 0 : n.tag,
        { newestAnalyticsLocation: k } = (0, l.ZP)(),
        j = i.useMemo(
            () =>
                A(
                    {
                        tagUserId: D,
                        source: k
                    },
                    w
                ),
            [D, k, w]
        ),
        U = (0, a.e7)([_.default], () => _.default.getId()),
        G = (0, a.e7)([p.ZP], () => (null != L ? p.ZP.getMember(L, U) : null), [L, U]),
        B = (0, a.e7)([u.Z], () => {
            var e;
            return (null == x ? void 0 : x.id) != null && (null === (e = u.Z.getRequest(x.id)) || void 0 === e ? void 0 : e.applicationStatus) === c.wB.SUBMITTED;
        }),
        V = null != x && x.memberCount >= O.Du,
        F = (0, a.e7)([h.default], () => h.default.getUser(U), [U]),
        Z = (null == G ? void 0 : G.joinedAt) != null,
        H = (0, v.Z4)(L, null == F ? void 0 : F.primaryGuild),
        W = null != (0, d.Z)(L);
    i.useEffect(() => {
        null != L &&
            (0, m.u0)(
                R(
                    A(
                        {
                            guildId: L,
                            hasJoinRequest: W
                        },
                        j
                    ),
                    { location: s.Z.CLAN_GUILD_PROFILE }
                )
            );
    }, [L, W, j]);
    let Y = i.useCallback(
            (e) => {
                null != L && (e.stopPropagation(), e.preventDefault(), null == C || C(), (0, m.hM)(L, m.UE.TAG_ADOPTION), (0, E.SJ)(L));
            },
            [L, C]
        ),
        K = i.useCallback(() => {
            null != L && ((0, m.hM)(L, m.UE.APPLICATION), (0, f.uL)(I.Z5c.GUILD_MEMBER_VERIFICATION(L)));
        }, [L]),
        z = i.useCallback(() => {
            null != L && ((0, m.hM)(L, m.UE.GUILD), (0, f.XU)(L));
        }, [L]),
        q = i.useMemo(() => {
            var e, t;
            return {
                color: o.zxk.Colors.BRAND,
                size: o.zxk.Sizes.SMALL,
                fullWidth: !0,
                className: T.button,
                themeColor: null !== (t = null == x ? void 0 : null === (e = x.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == x ? void 0 : null === (t = x.branding) || void 0 === t ? void 0 : t.primaryColor]),
        Q = i.useMemo(() => {
            var e;
            switch (!0) {
                case !Z && W:
                    return (0, r.jsx)(y.Z, R(A({ onClick: K }, q), { children: S.NW.string(S.t.dXvKgY) }));
                case !Z && (null == x ? void 0 : null === (e = x.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(I.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case Z && !H:
                    return (0, r.jsx)(y.Z, R(A({ onClick: Y }, q), { children: S.NW.string(S.t['1keBy8']) }));
                case Z && H:
                    return (0, r.jsx)(y.Z, R(A({ onClick: z }, q), { children: S.NW.string(S.t.muzrLS) }));
                default:
                    return null;
            }
        }, [Z, W, null == x ? void 0 : x.discoveryProfileFeatures, H, K, q, Y, z]),
        X = i.useMemo(
            () => ({
                className: T.container,
                onClick: P
            }),
            []
        );
    if (null == M || null == x || null == L || N) return (0, r.jsx)('div', R(A({}, X), { children: (0, r.jsx)(o.$jN, {}) }));
    let J = null != Q;
    return (0, r.jsxs)(
        'div',
        R(A({}, X), {
            children: [
                (0, r.jsx)(b.x, {
                    clan: x,
                    className: T.cardContainer,
                    isMember: Z,
                    hasPendingJoinRequest: B,
                    atMaxMemberCapacity: V
                }),
                J &&
                    (0, r.jsx)('div', {
                        className: T.buttonGroupContainer,
                        children: null != Q && Q
                    })
            ]
        })
    );
});
