n.d(t, { u: () => M }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(91192),
    o = n(442837),
    a = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(864682),
    d = n(975298),
    p = n(550385),
    h = n(899740),
    f = n(365113),
    g = n(849862),
    m = n(460181),
    b = n(155409),
    _ = n(944486),
    y = n(594174),
    O = n(431),
    v = n(774343),
    j = n(417363),
    C = n(941128),
    x = n(780570),
    E = n(278464),
    S = n(276952),
    I = n(682662),
    P = n(662146),
    N = n(674552),
    Z = n(981631),
    w = n(474936),
    T = n(871465),
    A = n(388032),
    R = n(815141);
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
function L(e) {
    var t, n;
    let { selected: o, user: d, badge: h, link: g, showProgressBadge: _ } = e,
        [y, O] = i.useState(!1),
        [v, j] = i.useState(!1),
        [C, x] = i.useState(null),
        [E, w] = i.useState(0),
        L = (0, l.Ie)("home"),
        M = (0, p.oq)().activePanel === p.wh.APP_ICON,
        k = () => {
            x(null), w(0), clearTimeout(C);
        },
        G = f.o.useConfig({ location: "home button" }).dmsTab;
    if (null == d) return null;
    let U = G ? A.intl.string(A.t.Ym2Ri6) : A.intl.string(A.t.YUU0RF);
    v && (U = a.K.get(Z.wli) ? A.intl.string(A.t["nkq1l+"]) : A.intl.string(A.t.Be8Q5E));
    let B = null;
    !o &&
        _ &&
        (B = (0, r.jsx)(c.Z, {
            className: R.downloadProgress,
            determineOwnVisibility: !1,
        }));
    let F = o || y || M,
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
                        onMouseEnter: () => O(!0),
                        onMouseLeave: () => O(!1),
                        onClick: () => {
                            if (
                                !__OVERLAY__ &&
                                (null != C && clearTimeout(C), x(setTimeout(k, 500)), w(E + 1), 15 === E)
                            ) {
                                k();
                                let e = !a.K.get(Z.wli);
                                a.K.set(Z.wli, e),
                                    e && a.K.set(T.O, !0),
                                    e ? (0, m.GN)("discodo") : (0, m.GN)("user_leave"),
                                    j(!0),
                                    setTimeout(() => {
                                        j(!1);
                                    }, 1000);
                            }
                        },
                        selected: F,
                        ariaLabel: A.intl.string(A.t.YUU0RF),
                        "aria-owns": "guild-list-unread-dms",
                        "aria-selected": o,
                    },
                    L,
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
        children: (0, r.jsx)(b.Z, {
            inlineSpecs: D,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(I.H, {
                children: [
                    (0, r.jsx)(S.Z, {
                        selected: o,
                        hovered: y,
                        className: R.pill,
                    }),
                    (0, r.jsx)(P.Z, {
                        hideOnClick: !0,
                        text: U,
                        selected: o,
                        children: V,
                    }),
                ],
            }),
        }),
    });
}
function M() {
    let e = (0, E.n)(),
        t = (0, o.e7)([C.Z, j.Z], () => {
            let e = (0, c.E)(C.Z.activeItems, j.Z),
                { total: t, progress: n } = x.lK(e),
                r = x.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, g.If)(),
        i = Object.keys(w.nG),
        l = (0, d.Z)(),
        { unviewedTrialCount: a, unviewedDiscountCount: s } = (0, o.cj)([O.Z], () => ({
            unviewedTrialCount: O.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: O.Z.getUnacknowledgedDiscountOffers().length,
        })),
        u = l.fractionalState === w.a$.NONE ? a + s : 0,
        p = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        f = (0, h.q)(),
        m = n + u + f,
        b = m === u && u > 0 && n + f === 0,
        S = v.Z.getHomeLink();
    return (
        b && (S = Z.Z5c.APPLICATION_STORE),
        (0, r.jsx)(L, {
            selected: e,
            user: p,
            selectedChannelId: _.Z.getChannelId(Z.ME),
            badge: m,
            link: S,
            showProgressBadge: t,
        })
    );
}
