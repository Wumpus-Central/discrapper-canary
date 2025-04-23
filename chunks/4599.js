t.d(n, { Z: () => O }), t(388685), t(953529);
var o = t(200651),
    c = t(192379),
    r = t(442837),
    a = t(481060),
    i = t(100527),
    d = t(906732),
    s = t(138201),
    l = t(699516),
    u = t(5192),
    f = t(785717),
    _ = t(221292),
    m = t(687158),
    x = t(316027),
    h = t(502762),
    b = t(848780),
    p = t(907179),
    I = t(228168),
    j = t(981631),
    y = t(388032),
    A = t(829441),
    v = t(161068);
function g(e) {
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
function O(e) {
    let { user: n, guildId: t, channelId: O, messageId: N, roleId: Z, transitionState: C, openedAt: P, onHide: T, showGuildProfile: w = !0, sourceAnalyticsLocations: L = [] } = e,
        S = t === j.ME ? void 0 : t,
        M = (0, r.e7)([l.Z], () => l.Z.isBlocked(n.id)),
        { analyticsLocations: B } = (0, d.ZP)([...L, M ? i.Z.BLOCKED_PROFILE_MODAL : i.Z.IGNORED_PROFILE_MODAL]),
        E = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: S,
            channelId: O,
            messageId: N,
            roleId: Z,
            showGuildProfile: w
        }),
        D = [
            {
                icon: a.owK,
                description: y.intl.string(y.t.kcuWvb)
            },
            {
                icon: a.owK,
                description: y.intl.string(M ? y.t.QxrDY2 : y.t.W6fjkZ)
            }
        ],
        k = (0, m.ZP)(n.id, w ? S : void 0),
        R = c.createRef();
    return (0, o.jsx)(d.Gt, {
        value: B,
        children: (0, o.jsx)(f.Mt, {
            value: E,
            openedAt: P,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, o.jsx)(a.Y0X, {
                transitionState: C,
                className: A.root,
                hideShadow: !0,
                'aria-label': y.intl.string(y.t['3N/J2t']),
                children: (0, o.jsx)(h.Z, {
                    user: n,
                    displayProfile: k,
                    themeType: I.lY.MODAL,
                    ref: R,
                    children: (0, o.jsxs)('div', {
                        className: A.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: v,
                                className: A.preview,
                                'aria-hidden': !0
                            }),
                            (0, o.jsxs)('div', {
                                className: A.body,
                                children: [
                                    (0, o.jsx)(x.Z, {
                                        user: n,
                                        guildId: S
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: A.headerContainer,
                                        children: [
                                            (0, o.jsx)(a.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: y.intl.string(y.t.b33pLC)
                                            }),
                                            (0, o.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: y.intl.format(M ? y.t['8F+WNz'] : y.t['/cZp5u'], { username: u.ZP.getName(S, O, n) })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: A.safetyTable,
                                        children: D.map((e, n) => {
                                            let { icon: t, description: c } = e;
                                            return (0, o.jsx)(
                                                s.ZP,
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
                                            (0, o.jsx)(p.Z, {
                                                size: a.PhG.MEDIUM,
                                                isBlocked: M,
                                                onClick: () => {
                                                    T(),
                                                        (0, _.pQ)(
                                                            g(
                                                                {
                                                                    action: M ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: B
                                                                },
                                                                E
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, o.jsx)(b.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    T(),
                                                        (0, _.pQ)(
                                                            g(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: B
                                                                },
                                                                E
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
