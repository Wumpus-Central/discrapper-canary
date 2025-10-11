n.d(t, { u: () => L }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    o = n(442837),
    a = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(864682),
    d = n(975298),
    p = n(550385),
    h = n(899740),
    f = n(849862),
    g = n(460181),
    m = n(155409),
    b = n(944486),
    _ = n(594174),
    y = n(431),
    O = n(774343),
    v = n(417363),
    j = n(941128),
    x = n(780570),
    C = n(278464),
    E = n(276952),
    S = n(682662),
    I = n(662146),
    P = n(674552),
    N = n(981631),
    Z = n(474936),
    w = n(871465),
    T = n(388032),
    A = n(815141);
let R = {
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
function D(e) {
    var t, n;
    let { selected: o, user: d, badge: h, link: f, showProgressBadge: b } = e,
        [_, y] = i.useState(!1),
        [O, v] = i.useState(!1),
        [j, x] = i.useState(null),
        [C, Z] = i.useState(0),
        D = (0, l.Ie)("home"),
        L = (0, p.oq)().activePanel === p.wh.APP_ICON,
        M = () => {
            x(null), Z(0), clearTimeout(j);
        };
    if (null == d) return null;
    let k = T.intl.string(T.t.YUU0RE);
    O && (k = a.K.get(N.wli) ? T.intl.string(T.t.nkq1l5) : T.intl.string(T.t.Be8Q5O));
    let U = null;
    !o &&
        b &&
        (U = (0, r.jsx)(c.Z, {
            className: A.downloadProgress,
            determineOwnVisibility: !1,
        }));
    let G = o || _ || L,
        B = (0, r.jsx)(s.aRk, {
            selected: !0,
            lowerBadge: h > 0 ? (0, P.Ne)(h) : null,
            upperBadge: U,
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
                        onMouseEnter: () => y(!0),
                        onMouseLeave: () => y(!1),
                        onClick: () => {
                            if (
                                !__OVERLAY__ &&
                                (null != j && clearTimeout(j), x(setTimeout(M, 500)), Z(C + 1), 15 === C)
                            ) {
                                M();
                                let e = !a.K.get(N.wli);
                                a.K.set(N.wli, e),
                                    e && a.K.set(w.O, !0),
                                    e ? (0, g.GN)("discodo") : (0, g.GN)("user_leave"),
                                    v(!0),
                                    setTimeout(() => {
                                        v(!1);
                                    }, 1000);
                            }
                        },
                        selected: G,
                        ariaLabel: T.intl.string(T.t.YUU0RE),
                        "aria-owns": "guild-list-unread-dms",
                        "aria-selected": o,
                    },
                    D,
                )),
                (n = n =
                    {
                        to: {
                            pathname: f,
                            state: {
                                analyticsSource: {
                                    page: N.ZY5.GUILD_CHANNEL,
                                    section: N.jXE.NAVIGATION,
                                    object: N.qAy.BUTTON_HOME,
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
        className: A.tutorialContainer,
        children: (0, r.jsx)(m.Z, {
            inlineSpecs: R,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(S.H, {
                children: [
                    (0, r.jsx)(E.Z, {
                        selected: o,
                        hovered: _,
                        className: A.pill,
                    }),
                    (0, r.jsx)(I.Z, {
                        color: s.aML.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: k,
                        selected: o,
                        children: B,
                    }),
                ],
            }),
        }),
    });
}
function L() {
    let e = (0, C.n)(),
        t = (0, o.e7)([j.Z, v.Z], () => {
            let e = (0, c.E)(j.Z.activeItems, v.Z),
                { total: t, progress: n } = x.lK(e),
                r = x.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, f.If)(),
        i = Object.keys(Z.nG),
        l = (0, d.Z)(),
        { unviewedTrialCount: a, unviewedDiscountCount: s } = (0, o.cj)([y.Z], () => ({
            unviewedTrialCount: y.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: y.Z.getUnacknowledgedDiscountOffers().length,
        })),
        u = l.fractionalState === Z.a$.NONE ? a + s : 0,
        p = (0, o.e7)([_.default], () => _.default.getCurrentUser()),
        g = (0, h.q)(),
        m = n + u + g,
        E = m === u && u > 0 && n + g === 0,
        S = O.Z.getHomeLink();
    return (
        E && (S = N.Z5c.APPLICATION_STORE),
        (0, r.jsx)(D, {
            selected: e,
            user: p,
            selectedChannelId: b.Z.getChannelId(N.ME),
            badge: m,
            link: S,
            showProgressBadge: t,
        })
    );
}
