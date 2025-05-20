t.d(n, { Z: () => Z }), t(388685), t(953529);
var o = t(255367),
    c = t(73800),
    i = t(442837),
    r = t(481060),
    a = t(100527),
    l = t(906732),
    d = t(138201),
    s = t(699516),
    u = t(5192),
    f = t(785717),
    p = t(221292),
    _ = t(687158),
    m = t(316027),
    b = t(502762),
    I = t(848780),
    h = t(907179),
    y = t(228168),
    x = t(981631),
    j = t(388032),
    g = t(829441),
    O = t(161068);
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
function Z(e) {
    let { user: n, guildId: t, channelId: Z, messageId: A, roleId: N, transitionState: P, openedAt: C, onHide: w, showGuildProfile: T = !0, sourceAnalyticsLocations: S = [] } = e,
        E = t === x.ME ? void 0 : t,
        M = (0, i.e7)([s.Z], () => s.Z.isBlocked(n.id)),
        { analyticsLocations: L } = (0, l.ZP)([...S, M ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        D = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: E,
            channelId: Z,
            messageId: A,
            roleId: N,
            showGuildProfile: T
        }),
        R = [
            {
                icon: r.owK,
                description: j.intl.string(j.t.kcuWvb)
            },
            {
                icon: r.owK,
                description: j.intl.string(M ? j.t.QxrDY2 : j.t.W6fjkZ)
            }
        ],
        G = (0, _.ZP)(n.id, T ? E : void 0),
        B = c.useRef(null);
    return (0, o.jsx)(l.Gt, {
        value: L,
        children: (0, o.jsx)(f.Mt, {
            value: D,
            openedAt: C,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, o.jsx)(r.Y0X, {
                transitionState: P,
                className: g.root,
                hideShadow: !0,
                'aria-label': j.intl.string(j.t['3N/J2t']),
                children: (0, o.jsx)(b.Z, {
                    user: n,
                    displayProfile: G,
                    themeType: y.lY.MODAL,
                    ref: B,
                    children: (0, o.jsxs)('div', {
                        className: g.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: O,
                                className: g.preview,
                                'aria-hidden': !0
                            }),
                            (0, o.jsxs)('div', {
                                className: g.body,
                                children: [
                                    (0, o.jsx)(m.Z, {
                                        user: n,
                                        guildId: E
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: g.headerContainer,
                                        children: [
                                            (0, o.jsx)(r.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: j.intl.string(j.t.b33pLC)
                                            }),
                                            (0, o.jsx)(r.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: j.intl.format(M ? j.t['8F+WNz'] : j.t['/cZp5u'], { username: u.ZP.getName(E, Z, n) })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: g.safetyTable,
                                        children: R.map((e, n) => {
                                            let { icon: t, description: c } = e;
                                            return (0, o.jsx)(
                                                d.ZP,
                                                {
                                                    icon: t,
                                                    title: c,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, o.jsxs)(r.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, o.jsx)(h.Z, {
                                                size: r.PhG.MEDIUM,
                                                isBlocked: M,
                                                onClick: () => {
                                                    w(),
                                                        (0, p.pQ)(
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
                                            (0, o.jsx)(I.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    w(),
                                                        (0, p.pQ)(
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
