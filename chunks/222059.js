n.d(t, { u: () => L }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    a = n(442837),
    o = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(864682),
    d = n(975298),
    f = n(550385),
    h = n(899740),
    p = n(365113),
    g = n(849862),
    b = n(460181),
    m = n(155409),
    y = n(944486),
    O = n(594174),
    v = n(431),
    j = n(774343),
    C = n(417363),
    x = n(941128),
    E = n(780570),
    S = n(278464),
    I = n(276952),
    _ = n(682662),
    P = n(662146),
    N = n(674552),
    Z = n(981631),
    w = n(474936),
    T = n(871465),
    A = n(388032),
    R = n(992397);
let D = {
    origin: {
        x: -16,
        y: 0,
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0,
    },
};
function M(e) {
    var t, n;
    let { selected: a, user: d, badge: h, link: g, showProgressBadge: y } = e,
        [O, v] = i.useState(!1),
        [j, C] = i.useState(!1),
        [x, E] = i.useState(null),
        [S, w] = i.useState(0),
        M = (0, l.Ie)("home"),
        L = (0, f.oq)().activePanel === f.wh.APP_ICON,
        k = () => {
            E(null), w(0), clearTimeout(x);
        },
        G = p.o.useConfig({ location: "home button" }).dmsTab;
    if (null == d) return null;
    let U = G ? A.intl.string(A.t.Ym2Ri6) : A.intl.string(A.t.YUU0RF);
    j && (U = o.K.get(Z.wli) ? A.intl.string(A.t["nkq1l+"]) : A.intl.string(A.t.Be8Q5E));
    let B = null;
    !a &&
        y &&
        (B = (0, r.jsx)(c.Z, {
            className: R.downloadProgress,
            determineOwnVisibility: !1,
        }));
    let F = a || O || L,
        V = (0, r.jsx)(s.aRk, {
            selected: !0,
            lowerBadge: h > 0 ? (0, N.Ne)(h) : null,
            upperBadge: B,
            lowerBadgeSize: { width: (0, s.OVM)(h) },
            children: (0, r.jsx)(
                s.LYs,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        onMouseEnter: () => v(!0),
                        onMouseLeave: () => v(!1),
                        onClick: () => {
                            if (
                                !__OVERLAY__ &&
                                (null != x && clearTimeout(x), E(setTimeout(k, 500)), w(S + 1), 15 === S)
                            ) {
                                k();
                                let e = !o.K.get(Z.wli);
                                o.K.set(Z.wli, e),
                                    e && o.K.set(T.O, !0),
                                    e ? (0, b.GN)("discodo") : (0, b.GN)("user_leave"),
                                    C(!0),
                                    setTimeout(() => {
                                        C(!1);
                                    }, 1000);
                            }
                        },
                        selected: F,
                        ariaLabel: A.intl.string(A.t.YUU0RF),
                        "aria-owns": "guild-list-unread-dms",
                        "aria-selected": a,
                    },
                    M,
                )),
                (n = n =
                    {
                        to: {
                            pathname: g,
                            state: {
                                analyticsSource: {
                                    page: Z.ZY5.GUILD_CHANNEL,
                                    section: Z.jXE.NAVIGATION,
                                    object: Z.qAy.BUTTON_HOME,
                                },
                            },
                        },
                        children: (0, r.jsx)(u.Z, {}),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        });
    return (0, r.jsx)("div", {
        className: R.tutorialContainer,
        children: (0, r.jsx)(m.Z, {
            inlineSpecs: D,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(_.H, {
                children: [
                    (0, r.jsx)(I.Z, {
                        selected: a,
                        hovered: O,
                        className: R.pill,
                    }),
                    (0, r.jsx)(P.Z, {
                        hideOnClick: !0,
                        text: U,
                        selected: a,
                        children: V,
                    }),
                ],
            }),
        }),
    });
}
function L() {
    let e = (0, S.n)(),
        t = (0, a.e7)([x.Z, C.Z], () => {
            let e = (0, c.E)(x.Z.activeItems, C.Z),
                { total: t, progress: n } = E.lK(e),
                r = E.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, g.If)(),
        i = Object.keys(w.nG),
        l = (0, d.Z)(),
        { unviewedTrialCount: o, unviewedDiscountCount: s } = (0, a.cj)([v.Z], () => ({
            unviewedTrialCount: v.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: v.Z.getUnacknowledgedDiscountOffers().length,
        })),
        u = l.fractionalState === w.a$.NONE ? o + s : 0,
        f = (0, a.e7)([O.default], () => O.default.getCurrentUser()),
        p = (0, h.q)(),
        b = n + u + p,
        m = b === u && u > 0 && n + p === 0,
        I = j.Z.getHomeLink();
    return (
        m && (I = Z.Z5c.APPLICATION_STORE),
        (0, r.jsx)(M, {
            selected: e,
            user: f,
            selectedChannelId: y.Z.getChannelId(Z.ME),
            badge: b,
            link: I,
            showProgressBadge: t,
        })
    );
}
