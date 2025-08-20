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
    f = n(849862),
    h = n(460181),
    g = n(155409),
    m = n(944486),
    b = n(594174),
    O = n(431),
    _ = n(774343),
    y = n(417363),
    j = n(941128),
    v = n(780570),
    C = n(278464),
    x = n(276952),
    E = n(682662),
    S = n(662146),
    I = n(674552),
    P = n(981631),
    N = n(474936),
    w = n(871465),
    Z = n(388032),
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
    let { selected: o, user: p, badge: f, link: m, showProgressBadge: b } = e,
        [O, _] = i.useState(!1),
        [y, j] = i.useState(!1),
        [v, C] = i.useState(null),
        [N, R] = i.useState(0),
        D = (0, l.Ie)("home"),
        M = (0, d.oq)().activePanel === d.wh.APP_ICON,
        L = () => {
            C(null), R(0), clearTimeout(v);
        };
    if (null == p) return null;
    let k = Z.intl.string(Z.t.YUU0RE);
    y && (k = a.K.get(P.wli) ? Z.intl.string(Z.t.nkq1l5) : Z.intl.string(Z.t.Be8Q5O));
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
            lowerBadge: f > 0 ? (0, I.Ne)(f) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, s.OVM)(f) },
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
                        onMouseEnter: () => _(!0),
                        onMouseLeave: () => _(!1),
                        onClick: () => {
                            if (
                                !__OVERLAY__ &&
                                (null != v && clearTimeout(v), C(setTimeout(L, 500)), R(N + 1), 15 === N)
                            ) {
                                L();
                                let e = !a.K.get(P.wli);
                                a.K.set(P.wli, e),
                                    e && a.K.set(w.O5, !0),
                                    e ? (0, h.GN)("discodo") : (0, h.GN)("user_leave"),
                                    j(!0),
                                    setTimeout(() => {
                                        j(!1);
                                    }, 1000);
                            }
                        },
                        selected: G,
                        ariaLabel: Z.intl.string(Z.t.YUU0RE),
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
                                    page: P.ZY5.GUILD_CHANNEL,
                                    section: P.jXE.NAVIGATION,
                                    object: P.qAy.BUTTON_HOME,
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
                    (0, r.jsx)(x.Z, {
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
    let e = (0, C.n)(),
        t = (0, o.e7)([j.Z, y.Z], () => {
            let e = (0, c.E)(j.Z.activeItems, y.Z),
                { total: t, progress: n } = v.lK(e),
                r = v.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, f.If)(),
        i = Object.keys(N.nG),
        { unviewedTrialCount: l, unviewedDiscountCount: a } = (0, o.cj)([O.Z], () => ({
            unviewedTrialCount: O.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: O.Z.getUnacknowledgedDiscountOffers().length,
        })),
        s = l + a,
        u = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        d = (0, p.q)(),
        h = n + s + d,
        g = h === s && s > 0 && n + d === 0,
        x = _.Z.getHomeLink();
    return (
        g && (x = P.Z5c.APPLICATION_STORE),
        (0, r.jsx)(R, {
            selected: e,
            user: u,
            selectedChannelId: m.Z.getChannelId(P.ME),
            badge: h,
            link: x,
            showProgressBadge: t,
        })
    );
}
