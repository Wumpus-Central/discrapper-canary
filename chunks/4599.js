t.d(n, { Z: () => Z }), t(388685), t(953529);
var o = t(255367),
    i = t(73800),
    c = t(442837),
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
    g = t(388032),
    j = t(829441),
    v = t(161068);
function O(e) {
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
    let { user: n, guildId: t, channelId: Z, messageId: A, roleId: P, transitionState: N, openedAt: w, onHide: C, showGuildProfile: E = !0, sourceAnalyticsLocations: T = [] } = e,
        S = t === x.ME ? void 0 : t,
        M = (0, c.e7)([s.Z], () => s.Z.isBlocked(n.id)),
        { analyticsLocations: D } = (0, l.ZP)([...T, M ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        L = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: S,
            channelId: Z,
            messageId: A,
            roleId: P,
            showGuildProfile: E
        }),
        R = [
            {
                icon: r.owK,
                description: g.intl.string(g.t.kcuWvb)
            },
            {
                icon: r.owK,
                description: g.intl.string(M ? g.t.QxrDY2 : g.t.W6fjkZ)
            }
        ],
        G = (0, _.ZP)(n.id, E ? S : void 0),
        B = i.useRef(null);
    return (0, o.jsx)(l.Gt, {
        value: D,
        children: (0, o.jsx)(f.Mt, {
            value: L,
            openedAt: w,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, o.jsx)(r.Y0X, {
                transitionState: N,
                className: j.root,
                hideShadow: !0,
                'aria-label': g.intl.string(g.t['3N/J2t']),
                children: (0, o.jsx)(b.Z, {
                    user: n,
                    displayProfile: G,
                    themeType: y.lY.MODAL,
                    ref: B,
                    children: (0, o.jsxs)('div', {
                        className: j.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: v,
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
                                            (0, o.jsx)(r.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: g.intl.string(g.t.b33pLC)
                                            }),
                                            (0, o.jsx)(r.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: g.intl.format(M ? g.t['8F+WNz'] : g.t['/cZp5u'], { username: u.ZP.getName(S, Z, n) })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: j.safetyTable,
                                        children: R.map((e, n) => {
                                            let { icon: t, description: i } = e;
                                            return (0, o.jsx)(
                                                d.ZP,
                                                {
                                                    icon: t,
                                                    title: i,
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
                                                    C(),
                                                        (0, p.pQ)(
                                                            O(
                                                                {
                                                                    action: M ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: D
                                                                },
                                                                L
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, o.jsx)(I.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    C(),
                                                        (0, p.pQ)(
                                                            O(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: D
                                                                },
                                                                L
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
