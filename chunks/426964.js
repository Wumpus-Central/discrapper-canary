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
    p = n(314897),
    _ = n(271383),
    h = n(594174),
    m = n(970606),
    g = n(645896),
    E = n(905362),
    v = n(353093),
    b = n(900681),
    y = n(284019),
    O = n(308083),
    S = n(981631),
    I = n(388032),
    T = n(901197);
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
        x = null == n ? void 0 : n.identityGuildId,
        L = (0, g.Cc)(null != x ? x : null),
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
        U = (0, a.e7)([p.default], () => p.default.getId()),
        G = (0, a.e7)([_.ZP], () => (null != x ? _.ZP.getMember(x, U) : null), [x, U]),
        B = (0, a.e7)([u.Z], () => {
            var e;
            return (null == L ? void 0 : L.id) != null && (null === (e = u.Z.getRequest(L.id)) || void 0 === e ? void 0 : e.applicationStatus) === c.wB.SUBMITTED;
        }),
        Z = null != L && L.memberCount >= O.Du,
        F = (0, a.e7)([h.default], () => h.default.getUser(U), [U]),
        V = (null == G ? void 0 : G.joinedAt) != null,
        H = (0, v.Z4)(x, null == F ? void 0 : F.primaryGuild),
        W = null != (0, d.Z)(x);
    i.useEffect(() => {
        null != x &&
            (0, m.u0)(
                R(
                    A(
                        {
                            guildId: x,
                            hasJoinRequest: W
                        },
                        j
                    ),
                    { location: s.Z.CLAN_GUILD_PROFILE }
                )
            );
    }, [x, W, j]);
    let Y = i.useCallback(
            (e) => {
                null != x && (e.stopPropagation(), e.preventDefault(), null == C || C(), (0, m.hM)(x, m.UE.TAG_ADOPTION), (0, E.SJ)(x));
            },
            [x, C]
        ),
        K = i.useCallback(() => {
            null != x && ((0, m.hM)(x, m.UE.APPLICATION), (0, f.uL)(S.Z5c.GUILD_MEMBER_VERIFICATION(x)));
        }, [x]),
        z = i.useCallback(() => {
            null != x && ((0, m.hM)(x, m.UE.GUILD), (0, f.XU)(x));
        }, [x]),
        q = i.useMemo(() => {
            var e, t;
            return {
                color: o.zxk.Colors.BRAND,
                size: o.zxk.Sizes.SMALL,
                fullWidth: !0,
                className: T.button,
                themeColor: null !== (t = null == L ? void 0 : null === (e = L.branding) || void 0 === e ? void 0 : e.primaryColor) && void 0 !== t ? t : null
            };
        }, [null == L ? void 0 : null === (t = L.branding) || void 0 === t ? void 0 : t.primaryColor]),
        Q = i.useMemo(() => {
            var e;
            switch (!0) {
                case !V && W:
                    return (0, r.jsx)(y.Z, R(A({ onClick: K }, q), { children: I.NW.string(I.t.dXvKgY) }));
                case !V && (null == L ? void 0 : null === (e = L.discoveryProfileFeatures) || void 0 === e ? void 0 : e.has(S.oNc.CLAN_DISCOVERY_DISABLED)):
                    return null;
                case V && !H:
                    return (0, r.jsx)(y.Z, R(A({ onClick: Y }, q), { children: I.NW.string(I.t['1keBy8']) }));
                case V && H:
                    return (0, r.jsx)(y.Z, R(A({ onClick: z }, q), { children: I.NW.string(I.t.muzrLS) }));
                default:
                    return null;
            }
        }, [V, W, null == L ? void 0 : L.discoveryProfileFeatures, H, K, q, Y, z]),
        X = i.useMemo(
            () => ({
                className: T.container,
                onClick: P
            }),
            []
        );
    if (null == M || null == L || null == x || N) return (0, r.jsx)('div', R(A({}, X), { children: (0, r.jsx)(o.$jN, {}) }));
    let J = null != Q;
    return (0, r.jsxs)(
        'div',
        R(A({}, X), {
            children: [
                (0, r.jsx)(b.x, {
                    clan: L,
                    className: T.cardContainer,
                    isMember: V,
                    hasPendingJoinRequest: B,
                    atMaxMemberCapacity: Z
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
