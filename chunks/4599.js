t.d(n, { Z: () => E }), t(388685), t(953529);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    o = t(481060),
    s = t(100527),
    a = t(906732),
    d = t(138201),
    c = t(699516),
    u = t(5192),
    f = t(785717),
    h = t(221292),
    p = t(687158),
    g = t(316027),
    j = t(502762),
    m = t(848780),
    v = t(907179),
    x = t(228168),
    Z = t(981631),
    b = t(388032),
    O = t(829441),
    y = t(161068);
function I(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function E(e) {
    let { user: n, guildId: t, channelId: E, messageId: P, roleId: T, transitionState: N, openedAt: A, onHide: S, showGuildProfile: C = !0, sourceAnalyticsLocations: _ = [] } = e,
        R = t === Z.ME ? void 0 : t,
        w = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        { analyticsLocations: M } = (0, a.ZP)([..._, w ? s.Z.BLOCKED_PROFILE_MODAL : s.Z.IGNORED_PROFILE_MODAL]),
        L = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: R,
            channelId: E,
            messageId: P,
            roleId: T,
            showGuildProfile: C
        }),
        D = [
            {
                icon: o.owK,
                description: b.intl.string(b.t.kcuWvb)
            },
            {
                icon: o.owK,
                description: b.intl.string(w ? b.t.QxrDY2 : b.t.W6fjkZ)
            }
        ],
        U = (0, p.ZP)(n.id, C ? R : void 0),
        G = r.createRef();
    return (0, l.jsx)(a.Gt, {
        value: M,
        children: (0, l.jsx)(f.Mt, {
            value: L,
            openedAt: A,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, l.jsx)(o.Y0X, {
                transitionState: N,
                className: O.root,
                hideShadow: !0,
                'aria-label': b.intl.string(b.t['3N/J2t']),
                children: (0, l.jsx)(j.Z, {
                    user: n,
                    displayProfile: U,
                    themeType: x.lY.MODAL,
                    ref: G,
                    children: (0, l.jsxs)('div', {
                        className: O.container,
                        children: [
                            (0, l.jsx)('img', {
                                alt: '',
                                src: y,
                                className: O.preview,
                                'aria-hidden': !0
                            }),
                            (0, l.jsxs)('div', {
                                className: O.body,
                                children: [
                                    (0, l.jsx)(g.Z, {
                                        user: n,
                                        guildId: R
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: O.headerContainer,
                                        children: [
                                            (0, l.jsx)(o.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: b.intl.string(b.t.b33pLC)
                                            }),
                                            (0, l.jsx)(o.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: b.intl.format(w ? b.t['8F+WNz'] : b.t['/cZp5u'], { username: u.ZP.getName(R, E, n) })
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)('div', {
                                        className: O.safetyTable,
                                        children: D.map((e, n) => {
                                            let { icon: t, description: r } = e;
                                            return (0, l.jsx)(
                                                d.ZP,
                                                {
                                                    icon: t,
                                                    title: r,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
                                            );
                                        })
                                    }),
                                    (0, l.jsxs)(o.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, l.jsx)(v.Z, {
                                                size: o.PhG.MEDIUM,
                                                isBlocked: w,
                                                onClick: () => {
                                                    S(),
                                                        (0, h.pQ)(
                                                            I(
                                                                {
                                                                    action: w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: M
                                                                },
                                                                L
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, l.jsx)(m.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    S(),
                                                        (0, h.pQ)(
                                                            I(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: M
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
