n.d(t, { u: () => M }), n(388685);
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
    p = n(849862),
    g = n(460181),
    b = n(155409),
    m = n(944486),
    y = n(594174),
    O = n(431),
    v = n(774343),
    j = n(417363),
    C = n(941128),
    x = n(780570),
    E = n(278464),
    S = n(276952),
    _ = n(682662),
    I = n(662146),
    P = n(674552),
    N = n(981631),
    Z = n(474936),
    w = n(871465),
    T = n(388032),
    A = n(992397);
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
    let { selected: a, user: d, badge: h, link: p, showProgressBadge: m } = e,
        [y, O] = i.useState(!1),
        [v, j] = i.useState(!1),
        [C, x] = i.useState(null),
        [E, Z] = i.useState(0),
        D = (0, l.Ie)("home"),
        M = (0, f.oq)().activePanel === f.wh.APP_ICON,
        L = () => {
            x(null), Z(0), clearTimeout(C);
        };
    if (null == d) return null;
    let k = T.intl.string(T.t.YUU0RF);
    v && (k = o.K.get(N.wli) ? T.intl.string(T.t["nkq1l+"]) : T.intl.string(T.t.Be8Q5E));
    let G = null;
    !a &&
        m &&
        (G = (0, r.jsx)(c.Z, {
            className: A.downloadProgress,
            determineOwnVisibility: !1,
        }));
    let U = a || y || M,
        B = (0, r.jsx)(s.aRk, {
            selected: !0,
            lowerBadge: h > 0 ? (0, P.Ne)(h) : null,
            upperBadge: G,
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
                                (null != C && clearTimeout(C), x(setTimeout(L, 500)), Z(E + 1), 15 === E)
                            ) {
                                L();
                                let e = !o.K.get(N.wli);
                                o.K.set(N.wli, e),
                                    e && o.K.set(w.O, !0),
                                    e ? (0, g.GN)("discodo") : (0, g.GN)("user_leave"),
                                    j(!0),
                                    setTimeout(() => {
                                        j(!1);
                                    }, 1000);
                            }
                        },
                        selected: U,
                        ariaLabel: T.intl.string(T.t.YUU0RF),
                        "aria-owns": "guild-list-unread-dms",
                        "aria-selected": a,
                    },
                    D,
                )),
                (n = n =
                    {
                        to: {
                            pathname: p,
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
        children: (0, r.jsx)(b.Z, {
            inlineSpecs: R,
            tutorialId: "friends-list",
            position: "right",
            children: (0, r.jsxs)(_.H, {
                children: [
                    (0, r.jsx)(S.Z, {
                        selected: a,
                        hovered: y,
                        className: A.pill,
                    }),
                    (0, r.jsx)(I.Z, {
                        hideOnClick: !0,
                        text: k,
                        selected: a,
                        children: B,
                    }),
                ],
            }),
        }),
    });
}
function M() {
    let e = (0, E.n)(),
        t = (0, a.e7)([C.Z, j.Z], () => {
            let e = (0, c.E)(C.Z.activeItems, j.Z),
                { total: t, progress: n } = x.lK(e),
                r = x.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, p.If)(),
        i = Object.keys(Z.nG),
        l = (0, d.Z)(),
        { unviewedTrialCount: o, unviewedDiscountCount: s } = (0, a.cj)([O.Z], () => ({
            unviewedTrialCount: O.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: O.Z.getUnacknowledgedDiscountOffers().length,
        })),
        u = l.fractionalState === Z.a$.NONE ? o + s : 0,
        f = (0, a.e7)([y.default], () => y.default.getCurrentUser()),
        g = (0, h.q)(),
        b = n + u + g,
        S = b === u && u > 0 && n + g === 0,
        _ = v.Z.getHomeLink();
    return (
        S && (_ = N.Z5c.APPLICATION_STORE),
        (0, r.jsx)(D, {
            selected: e,
            user: f,
            selectedChannelId: m.Z.getChannelId(N.ME),
            badge: b,
            link: _,
            showProgressBadge: t,
        })
    );
}
