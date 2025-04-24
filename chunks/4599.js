t.d(n, { Z: () => A }), t(388685), t(953529);
var i = t(200651),
    o = t(192379),
    l = t(442837),
    r = t(481060),
    s = t(100527),
    c = t(906732),
    a = t(138201),
    d = t(699516),
    u = t(5192),
    f = t(785717),
    p = t(221292),
    m = t(687158),
    h = t(316027),
    I = t(502762),
    x = t(848780),
    b = t(907179),
    _ = t(228168),
    j = t(981631),
    v = t(388032),
    g = t(829441),
    Z = t(161068);
function y(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            i = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            i.forEach(function (n) {
                var i;
                (i = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = i);
            });
    }
    return e;
}
function A(e) {
    let { user: n, guildId: t, channelId: A, messageId: T, roleId: O, transitionState: N, openedAt: E, onHide: C, showGuildProfile: P = !0, sourceAnalyticsLocations: S = [] } = e,
        M = t === j.ME ? void 0 : t,
        w = (0, l.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: L } = (0, c.ZP)([...S, w ? s.Z.BLOCKED_PROFILE_MODAL : s.Z.IGNORED_PROFILE_MODAL]),
        R = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: M,
            channelId: A,
            messageId: T,
            roleId: O,
            showGuildProfile: P
        }),
        D = [
            {
                icon: r.owK,
                description: v.intl.string(v.t.kcuWvb)
            },
            {
                icon: r.owK,
                description: v.intl.string(w ? v.t.QxrDY2 : v.t.W6fjkZ)
            }
        ],
        B = (0, m.ZP)(n.id, P ? M : void 0),
        U = o.createRef();
    return (0, i.jsx)(c.Gt, {
        value: L,
        children: (0, i.jsx)(f.Mt, {
            value: R,
            openedAt: E,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, i.jsx)(r.Y0X, {
                transitionState: N,
                className: g.root,
                hideShadow: !0,
                'aria-label': v.intl.string(v.t['3N/J2t']),
                children: (0, i.jsx)(I.Z, {
                    user: n,
                    displayProfile: B,
                    themeType: _.lY.MODAL,
                    ref: U,
                    children: (0, i.jsxs)('div', {
                        className: g.container,
                        children: [
                            (0, i.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: g.preview,
                                'aria-hidden': !0
                            }),
                            (0, i.jsxs)('div', {
                                className: g.body,
                                children: [
                                    (0, i.jsx)(h.Z, {
                                        user: n,
                                        guildId: M
                                    }),
                                    (0, i.jsxs)('div', {
                                        className: g.headerContainer,
                                        children: [
                                            (0, i.jsx)(r.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: v.intl.string(v.t.b33pLC)
                                            }),
                                            (0, i.jsx)(r.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: v.intl.format(w ? v.t['8F+WNz'] : v.t['/cZp5u'], { username: u.ZP.getName(M, A, n) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: g.safetyTable,
                                        children: D.map((e, n) => {
                                            let { icon: t, description: o } = e;
                                            return (0, i.jsx)(
                                                a.ZP,
                                                {
                                                    icon: t,
                                                    title: o,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, i.jsxs)(r.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, i.jsx)(b.Z, {
                                                size: r.PhG.MEDIUM,
                                                isBlocked: w,
                                                onClick: () => {
                                                    C(),
                                                        (0, p.pQ)(
                                                            y(
                                                                {
                                                                    action: w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                R
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, i.jsx)(x.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    C(),
                                                        (0, p.pQ)(
                                                            y(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                R
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
