t.d(n, { Z: () => A }), t(388685), t(953529);
var o = t(255367),
    c = t(73800),
    i = t(442837),
    a = t(481060),
    r = t(100527),
    d = t(906732),
    l = t(138201),
    s = t(699516),
    u = t(5192),
    _ = t(785717),
    f = t(221292),
    p = t(687158),
    m = t(316027),
    I = t(502762),
    h = t(848780),
    b = t(907179),
    x = t(228168),
    y = t(981631),
    Z = t(388032),
    j = t(829441),
    g = t(161068);
function v(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function A(e) {
    let { user: n, guildId: t, channelId: A, messageId: N, roleId: O, transitionState: C, openedAt: T, onHide: P, showGuildProfile: w = !0, sourceAnalyticsLocations: E = [] } = e,
        S = t === y.ME ? void 0 : t,
        M = (0, i.e7)([s.Z], () => s.Z.isBlocked(n.id)),
        { analyticsLocations: L } = (0, d.ZP)([...E, M ? r.Z.BLOCKED_PROFILE_MODAL : r.Z.IGNORED_PROFILE_MODAL]),
        D = (0, _.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: S,
            channelId: A,
            messageId: N,
            roleId: O,
            showGuildProfile: w
        }),
        B = [
            {
                icon: a.owK,
                description: Z.intl.string(Z.t.kcuWvb)
            },
            {
                icon: a.owK,
                description: Z.intl.string(M ? Z.t.QxrDY2 : Z.t.W6fjkZ)
            }
        ],
        R = (0, p.ZP)(n.id, w ? S : void 0),
        G = c.useRef(null);
    return (0, o.jsx)(d.Gt, {
        value: L,
        children: (0, o.jsx)(_.Mt, {
            value: D,
            openedAt: T,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, o.jsx)(a.Y0X, {
                transitionState: C,
                className: j.root,
                hideShadow: !0,
                'aria-label': Z.intl.string(Z.t['3N/J2t']),
                children: (0, o.jsx)(I.Z, {
                    user: n,
                    displayProfile: R,
                    themeType: x.lY.MODAL,
                    ref: G,
                    children: (0, o.jsxs)('div', {
                        className: j.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: g,
                                className: j.preview,
                                'aria-hidden': !0
                            }),
                            (0, o.jsxs)('div', {
                                className: j.body,
                                children: [
                                    (0, o.jsx)(m.Z, {
                                        user: n,
                                        guildId: S
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: j.headerContainer,
                                        children: [
                                            (0, o.jsx)(a.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: Z.intl.string(Z.t.b33pLC)
                                            }),
                                            (0, o.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: Z.intl.format(M ? Z.t['8F+WNz'] : Z.t['/cZp5u'], { username: u.ZP.getName(S, A, n) })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: j.safetyTable,
                                        children: B.map((e, n) => {
                                            let { icon: t, description: c } = e;
                                            return (0, o.jsx)(
                                                l.ZP,
                                                {
                                                    icon: t,
                                                    title: c,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, o.jsxs)(a.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, o.jsx)(b.Z, {
                                                size: a.PhG.MEDIUM,
                                                isBlocked: M,
                                                onClick: () => {
                                                    P(),
                                                        (0, f.pQ)(
                                                            v(
                                                                {
                                                                    action: M ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                D
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, o.jsx)(h.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    P(),
                                                        (0, f.pQ)(
                                                            v(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                D
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
