(n.d(t, { u: () => D }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(91192),
    o = n(442837),
    a = n(433517),
    s = n(481060),
    c = n(339149),
    u = n(864682),
    d = n(550385),
    h = n(899740),
    p = n(849862),
    f = n(460181),
    g = n(155409),
    m = n(944486),
    b = n(594174),
    _ = n(431),
    O = n(774343),
    y = n(417363),
    v = n(941128),
    C = n(780570),
    j = n(278464),
    S = n(276952),
    E = n(682662),
    x = n(662146),
    I = n(674552),
    P = n(981631),
    N = n(474936),
    w = n(871465),
    Z = n(388032),
    T = n(823306);
let A = {
    origin: {
        x: -16,
        y: 0
    },
    targetWidth: 48,
    targetHeight: 48,
    offset: {
        x: 0,
        y: 0
    }
};
function R(e) {
    var t, n;
    let { selected: o, user: h, badge: p, link: m, showProgressBadge: b } = e,
        [_, O] = i.useState(!1),
        [y, v] = i.useState(!1),
        [C, j] = i.useState(null),
        [N, R] = i.useState(0),
        D = (0, l.Ie)('home'),
        L = (0, d.oq)().activePanel === d.wh.APP_ICON,
        M = () => {
            (j(null), R(0), clearTimeout(C));
        };
    if (null == h) return null;
    let k = Z.intl.string(Z.t.YUU0RE);
    y && (k = a.K.get(P.wli) ? Z.intl.string(Z.t.nkq1l5) : Z.intl.string(Z.t.Be8Q5O));
    let U = null;
    !o &&
        b &&
        (U = (0, r.jsx)(c.Z, {
            className: T.downloadProgress,
            determineOwnVisibility: !1
        }));
    let G = o || _ || L,
        B = (0, r.jsx)(s.aRk, {
            selected: !0,
            lowerBadge: p > 0 ? (0, I.Ne)(p) : null,
            upperBadge: U,
            lowerBadgeSize: { width: (0, s.OVM)(p) },
            children: (0, r.jsx)(
                s.LYs,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })(
                    {
                        onMouseEnter: () => O(!0),
                        onMouseLeave: () => O(!1),
                        onClick: () => {
                            if (!__OVERLAY__ && (null != C && clearTimeout(C), j(setTimeout(M, 500)), R(N + 1), 15 === N)) {
                                M();
                                let e = !a.K.get(P.wli);
                                (a.K.set(P.wli, e),
                                    e && a.K.set(w.O5, !0),
                                    e ? (0, f.GN)('discodo') : (0, f.GN)('user_leave'),
                                    v(!0),
                                    setTimeout(() => {
                                        v(!1);
                                    }, 1000));
                            }
                        },
                        selected: G,
                        ariaLabel: Z.intl.string(Z.t.YUU0RE),
                        'aria-owns': 'guild-list-unread-dms',
                        'aria-selected': o
                    },
                    D
                )),
                (n = n =
                    {
                        to: {
                            pathname: m,
                            state: {
                                analyticsSource: {
                                    page: P.ZY5.GUILD_CHANNEL,
                                    section: P.jXE.NAVIGATION,
                                    object: P.qAy.BUTTON_HOME
                                }
                            }
                        },
                        children: (0, r.jsx)(u.Z, {})
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
                t)
            )
        });
    return (0, r.jsx)('div', {
        className: T.tutorialContainer,
        children: (0, r.jsx)(g.Z, {
            inlineSpecs: A,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, r.jsxs)(E.H, {
                children: [
                    (0, r.jsx)(S.Z, {
                        selected: o,
                        hovered: _,
                        className: T.pill
                    }),
                    (0, r.jsx)(x.Z, {
                        color: s.ua7.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: k,
                        selected: o,
                        children: B
                    })
                ]
            })
        })
    });
}
function D() {
    let e = (0, j.n)(),
        t = (0, o.e7)([v.Z, y.Z], () => {
            let e = (0, c.E)(v.Z.activeItems, y.Z),
                { total: t, progress: n } = C.lK(e),
                r = C.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, p.If)(),
        i = Object.keys(N.nG),
        { unviewedTrialCount: l, unviewedDiscountCount: a } = (0, o.cj)([_.Z], () => ({
            unviewedTrialCount: _.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: _.Z.getUnacknowledgedDiscountOffers().length
        })),
        s = l + a,
        u = (0, o.e7)([b.default], () => b.default.getCurrentUser()),
        d = (0, h.q)(),
        f = n + s + d,
        g = f === s && s > 0 && n + d === 0,
        S = O.Z.getHomeLink();
    return (
        g && (S = P.Z5c.APPLICATION_STORE),
        (0, r.jsx)(R, {
            selected: e,
            user: u,
            selectedChannelId: m.Z.getChannelId(P.ME),
            badge: f,
            link: S,
            showProgressBadge: t
        })
    );
}
