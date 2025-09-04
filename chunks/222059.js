n.d(t, { u: () => D }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(91192),
    o = n(442837),
    a = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(864682),
    d = n(550385),
    p = n(899740),
    h = n(849862),
    f = n(460181),
    g = n(155409),
    m = n(944486),
    b = n(594174),
    O = n(431),
    y = n(774343),
    _ = n(417363),
    v = n(941128),
    j = n(780570),
    x = n(278464),
    C = n(276952),
    E = n(682662),
    S = n(662146),
    P = n(674552),
    I = n(981631),
    N = n(474936),
    Z = n(871465),
    w = n(388032),
    T = n(815141);
let A = {
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
function R(e) {
    var t, n;
    let { selected: o, user: p, badge: h, link: m, showProgressBadge: b } = e,
        [O, y] = i.useState(!1),
        [_, v] = i.useState(!1),
        [j, x] = i.useState(null),
        [N, R] = i.useState(0),
        D = (0, l.Ie)("home"),
        M = (0, d.oq)().activePanel === d.wh.APP_ICON,
        L = () => {
            x(null), R(0), clearTimeout(j);
        };
    if (null == p) return null;
    let k = w.intl.string(w.t.YUU0RE);
    _ && (k = a.K.get(I.wli) ? w.intl.string(w.t.nkq1l5) : w.intl.string(w.t.Be8Q5O));
    let U = null;
    !o &&
        b &&
        (U = (0, r.jsx)(c.Z, {
            className: T.downloadProgress,
            determineOwnVisibility: !1,
        }));
    let G = o || O || M,
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
                                (null != j && clearTimeout(j), x(setTimeout(L, 500)), R(N + 1), 15 === N)
                            ) {
                                L();
                                let e = !a.K.get(I.wli);
                                a.K.set(I.wli, e),
                                    e && a.K.set(Z.O, !0),
                                    e ? (0, f.GN)("discodo") : (0, f.GN)("user_leave"),
                                    v(!0),
                                    setTimeout(() => {
                                        v(!1);
                                    }, 1000);
                            }
                        },
                        selected: G,
                        ariaLabel: w.intl.string(w.t.YUU0RE),
                        "aria-owns": "guild-list-unread-dms",
                        "aria-selected": o,
                    },
                    D,
                )),
                (n = n =
                    {
                        to: {
                            pathname: m,
                            state: {
                                analyticsSource: {
                                    page: I.ZY5.GUILD_CHANNEL,
                                    section: I.jXE.NAVIGATION,
                                    object: I.qAy.BUTTON_HOME,
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
        className: T.tutorialContainer,
        children: (0, r.jsx)(g.Z, {
            inlineSpecs: A,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(E.H, {
                children: [
                    (0, r.jsx)(C.Z, {
                        selected: o,
                        hovered: O,
                        className: T.pill,
                    }),
                    (0, r.jsx)(S.Z, {
                        color: s.ua7.Colors.PRIMARY,
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
function D() {
    let e = (0, x.n)(),
        t = (0, o.e7)([v.Z, _.Z], () => {
            let e = (0, c.E)(v.Z.activeItems, _.Z),
                { total: t, progress: n } = j.lK(e),
                r = j.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, h.If)(),
        i = Object.keys(N.nG),
        { unviewedTrialCount: l, unviewedDiscountCount: a } = (0, o.cj)([O.Z], () => ({
            unviewedTrialCount: O.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: O.Z.getUnacknowledgedDiscountOffers().length,
        })),
        s = l + a,
        u = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        d = (0, p.q)(),
        f = n + s + d,
        g = f === s && s > 0 && n + d === 0,
        C = y.Z.getHomeLink();
    return (
        g && (C = I.Z5c.APPLICATION_STORE),
        (0, r.jsx)(R, {
            selected: e,
            user: u,
            selectedChannelId: m.Z.getChannelId(I.ME),
            badge: f,
            link: C,
            showProgressBadge: t,
        })
    );
}
