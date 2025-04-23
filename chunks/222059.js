n.d(t, { u: () => L }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(91192),
    o = n(442837),
    s = n(433517),
    a = n(481060),
    c = n(339149),
    u = n(327943),
    d = n(864682),
    h = n(540059),
    p = n(899740),
    f = n(849862),
    g = n(460181),
    m = n(155409),
    b = n(944486),
    y = n(594174),
    _ = n(431),
    O = n(774343),
    v = n(417363),
    C = n(941128),
    j = n(780570),
    x = n(278464),
    S = n(276952),
    E = n(682662),
    P = n(662146),
    I = n(674552),
    w = n(981631),
    N = n(474936),
    Z = n(871465),
    T = n(388032),
    A = n(823306);
let R = {
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
function D(e) {
    var t, n;
    let { selected: p, user: f, badge: b, link: y, showProgressBadge: _ } = e,
        O = (0, o.e7)([u.Z], () => u.Z.isEditorOpen),
        [v, C] = i.useState(!1),
        [j, x] = i.useState(!1),
        [N, D] = i.useState(null),
        [L, k] = i.useState(0),
        M = (0, l.Ie)('home'),
        U = (0, h.Q3)('DefaultHomeButton'),
        G = () => {
            D(null), k(0), clearTimeout(N);
        };
    if (null == f) return null;
    let B = T.intl.string(T.t.YUU0RE);
    j && (B = s.K.get(w.wli) ? T.intl.string(T.t.nkq1l5) : T.intl.string(T.t.Be8Q5O));
    let V = null;
    !p &&
        _ &&
        (V = (0, r.jsx)(c.Z, {
            className: A.downloadProgress,
            determineOwnVisibility: !1
        }));
    let F = p || v || O,
        H = (0, r.jsx)(a.aRk, {
            selected: U || F,
            lowerBadge: b > 0 ? (0, I.Ne)(b) : null,
            upperBadge: V,
            lowerBadgeSize: { width: (0, a.OVM)(b) },
            children: (0, r.jsx)(
                a.LYs,
                ((t = (function (e) {
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
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })(
                    {
                        onMouseEnter: () => C(!0),
                        onMouseLeave: () => C(!1),
                        onClick: () => {
                            if (!__OVERLAY__ && (null != N && clearTimeout(N), D(setTimeout(G, 500)), k(L + 1), 15 === L)) {
                                G();
                                let e = !s.K.get(w.wli);
                                s.K.set(w.wli, e),
                                    e && s.K.set(Z.O5, !0),
                                    e ? (0, g.GN)('discodo') : (0, g.GN)('user_leave'),
                                    x(!0),
                                    setTimeout(() => {
                                        x(!1);
                                    }, 1000);
                            }
                        },
                        selected: F,
                        ariaLabel: T.intl.string(T.t.YUU0RE),
                        'aria-owns': 'guild-list-unread-dms',
                        'aria-selected': p
                    },
                    M
                )),
                (n = n =
                    {
                        to: {
                            pathname: y,
                            state: {
                                analyticsSource: {
                                    page: w.ZY5.GUILD_CHANNEL,
                                    section: w.jXE.NAVIGATION,
                                    object: w.qAy.BUTTON_HOME
                                }
                            }
                        },
                        children: (0, r.jsx)(d.Z, {})
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
        className: A.tutorialContainer,
        children: (0, r.jsx)(m.Z, {
            inlineSpecs: R,
            tutorialId: 'friends-list',
            position: 'right',
            children: (0, r.jsxs)(E.H, {
                children: [
                    (0, r.jsx)(S.Z, {
                        selected: p,
                        hovered: v,
                        className: A.pill
                    }),
                    (0, r.jsx)(P.Z, {
                        color: a.ua7.Colors.PRIMARY,
                        hideOnClick: !0,
                        text: B,
                        selected: p,
                        children: H
                    })
                ]
            })
        })
    });
}
function L() {
    let e = (0, x.n)(),
        t = (0, o.e7)([C.Z, v.Z], () => {
            let e = (0, c.E)(C.Z.activeItems, v.Z),
                { total: t, progress: n } = j.lK(e),
                r = j.xI(n, t);
            return r > 0 && r < 100;
        }),
        n = (0, f.If)(),
        i = Object.keys(N.nG),
        { unviewedTrialCount: l, unviewedDiscountCount: s } = (0, o.cj)([_.Z], () => ({
            unviewedTrialCount: _.Z.getUnacknowledgedOffers(i).length,
            unviewedDiscountCount: _.Z.getUnacknowledgedDiscountOffers().length
        })),
        a = l + s,
        u = (0, o.e7)([y.default], () => y.default.getCurrentUser()),
        d = (0, p.q)(),
        h = n + a + d,
        g = h === a && a > 0 && n + d === 0,
        m = O.Z.getHomeLink();
    return (
        g && (m = w.Z5c.APPLICATION_STORE),
        (0, r.jsx)(D, {
            selected: e,
            user: u,
            selectedChannelId: b.Z.getChannelId(w.ME),
            badge: h,
            link: m,
            showProgressBadge: t
        })
    );
}
