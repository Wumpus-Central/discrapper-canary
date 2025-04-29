n.d(t, { Z: () => P }), n(388685), n(953529);
var l = n(255367),
    r = n(73800),
    i = n(442837),
    s = n(481060),
    o = n(100527),
    c = n(906732),
    a = n(138201),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    p = n(221292),
    h = n(687158),
    j = n(316027),
    g = n(502762),
    v = n(848780),
    m = n(907179),
    x = n(228168),
    b = n(981631),
    O = n(388032),
    Z = n(829441),
    y = n(161068);
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                var l;
                (l = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = l);
            });
    }
    return e;
}
function P(e) {
    let { user: t, guildId: n, channelId: P, messageId: E, roleId: N, transitionState: T, openedAt: S, onHide: A, showGuildProfile: C = !0, sourceAnalyticsLocations: _ = [] } = e,
        w = n === b.ME ? void 0 : n,
        R = (0, i.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: L } = (0, c.ZP)([..._, R ? o.Z.BLOCKED_PROFILE_MODAL : o.Z.IGNORED_PROFILE_MODAL]),
        M = (0, f.ZB)({
            layout: 'MODAL',
            userId: t.id,
            guildId: w,
            channelId: P,
            messageId: E,
            roleId: N,
            showGuildProfile: C
        }),
        D = [
            {
                icon: s.owK,
                description: O.intl.string(O.t.kcuWvb)
            },
            {
                icon: s.owK,
                description: O.intl.string(R ? O.t.QxrDY2 : O.t.W6fjkZ)
            }
        ],
        U = (0, h.ZP)(t.id, C ? w : void 0),
        G = r.createRef();
    return (0, l.jsx)(c.Gt, {
        value: L,
        children: (0, l.jsx)(f.Mt, {
            value: M,
            openedAt: S,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, l.jsx)(s.Y0X, {
                transitionState: T,
                className: Z.root,
                hideShadow: !0,
                'aria-label': O.intl.string(O.t['3N/J2t']),
                children: (0, l.jsx)(g.Z, {
                    user: t,
                    displayProfile: U,
                    themeType: x.lY.MODAL,
                    ref: G,
                    children: (0, l.jsxs)('div', {
                        className: Z.container,
                        children: [
                            (0, l.jsx)('img', {
                                alt: '',
                                src: y,
                                className: Z.preview,
                                'aria-hidden': !0
                            }),
                            (0, l.jsxs)('div', {
                                className: Z.body,
                                children: [
                                    (0, l.jsx)(j.Z, {
                                        user: t,
                                        guildId: w
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: Z.headerContainer,
                                        children: [
                                            (0, l.jsx)(s.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: O.intl.string(O.t.b33pLC)
                                            }),
                                            (0, l.jsx)(s.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: O.intl.format(R ? O.t['8F+WNz'] : O.t['/cZp5u'], { username: u.ZP.getName(w, P, t) })
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)('div', {
                                        className: Z.safetyTable,
                                        children: D.map((e, t) => {
                                            let { icon: n, description: r } = e;
                                            return (0, l.jsx)(
                                                a.ZP,
                                                {
                                                    icon: n,
                                                    title: r,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                t
                                            );
                                        })
                                    }),
                                    (0, l.jsxs)(s.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, l.jsx)(m.Z, {
                                                size: s.PhG.MEDIUM,
                                                isBlocked: R,
                                                onClick: () => {
                                                    A(),
                                                        (0, p.pQ)(
                                                            I(
                                                                {
                                                                    action: R ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                M
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, l.jsx)(v.Z, {
                                                userId: t.id,
                                                onClick: () => {
                                                    A(),
                                                        (0, p.pQ)(
                                                            I(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                M
                                                            )
                                                        );
                                                }
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        })
    });
}
