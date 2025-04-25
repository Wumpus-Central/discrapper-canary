t.d(n, { Z: () => N }), t(388685), t(953529);
var i = t(200651),
    o = t(192379),
    l = t(442837),
    r = t(481060),
    s = t(100527),
    a = t(906732),
    c = t(138201),
    d = t(699516),
    u = t(5192),
    f = t(785717),
    m = t(221292),
    p = t(687158),
    h = t(316027),
    x = t(502762),
    I = t(848780),
    v = t(907179),
    b = t(228168),
    j = t(981631),
    _ = t(388032),
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
function N(e) {
    let { user: n, guildId: t, channelId: N, messageId: A, roleId: T, transitionState: O, openedAt: C, onHide: E, showGuildProfile: P = !0, sourceAnalyticsLocations: S = [] } = e,
        M = t === j.ME ? void 0 : t,
        L = (0, l.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: w } = (0, a.ZP)([...S, L ? s.Z.BLOCKED_PROFILE_MODAL : s.Z.IGNORED_PROFILE_MODAL]),
        B = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: M,
            channelId: N,
            messageId: A,
            roleId: T,
            showGuildProfile: P
        }),
        D = [
            {
                icon: r.owK,
                description: _.intl.string(_.t.kcuWvb)
            },
            {
                icon: r.owK,
                description: _.intl.string(L ? _.t.QxrDY2 : _.t.W6fjkZ)
            }
        ],
        U = (0, p.ZP)(n.id, P ? M : void 0),
        R = o.createRef();
    return (0, i.jsx)(a.Gt, {
        value: w,
        children: (0, i.jsx)(f.Mt, {
            value: B,
            openedAt: C,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, i.jsx)(r.Y0X, {
                transitionState: O,
                className: g.root,
                hideShadow: !0,
                'aria-label': _.intl.string(_.t['3N/J2t']),
                children: (0, i.jsx)(x.Z, {
                    user: n,
                    displayProfile: U,
                    themeType: b.lY.MODAL,
                    ref: R,
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
                                                children: _.intl.string(_.t.b33pLC)
                                            }),
                                            (0, i.jsx)(r.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: _.intl.format(L ? _.t['8F+WNz'] : _.t['/cZp5u'], { username: u.ZP.getName(M, N, n) })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)('div', {
                                        className: g.safetyTable,
                                        children: D.map((e, n) => {
                                            let { icon: t, description: o } = e;
                                            return (0, i.jsx)(
                                                c.ZP,
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
                                            (0, i.jsx)(v.Z, {
                                                size: r.PhG.MEDIUM,
                                                isBlocked: L,
                                                onClick: () => {
                                                    E(),
                                                        (0, m.pQ)(
                                                            y(
                                                                {
                                                                    action: L ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: w
                                                                },
                                                                B
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, i.jsx)(I.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    E(),
                                                        (0, m.pQ)(
                                                            y(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: w
                                                                },
                                                                B
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
