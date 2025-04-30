t.d(n, { Z: () => P }), t(388685), t(953529);
var l = t(200651),
    r = t(192379),
    i = t(442837),
    s = t(481060),
    o = t(100527),
    a = t(906732),
    c = t(138201),
    d = t(699516),
    u = t(5192),
    f = t(785717),
    p = t(221292),
    h = t(687158),
    v = t(316027),
    g = t(502762),
    j = t(848780),
    m = t(907179),
    b = t(228168),
    x = t(981631),
    Z = t(388032),
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
function P(e) {
    let { user: n, guildId: t, channelId: P, messageId: E, roleId: N, transitionState: T, openedAt: S, onHide: A, showGuildProfile: C = !0, sourceAnalyticsLocations: _ = [] } = e,
        w = t === x.ME ? void 0 : t,
        R = (0, i.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: M } = (0, a.ZP)([..._, R ? o.Z.BLOCKED_PROFILE_MODAL : o.Z.IGNORED_PROFILE_MODAL]),
        L = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: w,
            channelId: P,
            messageId: E,
            roleId: N,
            showGuildProfile: C
        }),
        D = [
            {
                icon: s.owK,
                description: Z.intl.string(Z.t.kcuWvb)
            },
            {
                icon: s.owK,
                description: Z.intl.string(R ? Z.t.QxrDY2 : Z.t.W6fjkZ)
            }
        ],
        U = (0, h.ZP)(n.id, C ? w : void 0),
        k = r.createRef();
    return (0, l.jsx)(a.Gt, {
        value: M,
        children: (0, l.jsx)(f.Mt, {
            value: L,
            openedAt: S,
            fetchStartedAt: null == U ? void 0 : U.fetchStartedAt,
            fetchEndedAt: null == U ? void 0 : U.fetchEndedAt,
            isLoaded: null == U ? void 0 : U.isLoaded,
            children: (0, l.jsx)(s.Y0X, {
                transitionState: T,
                className: O.root,
                hideShadow: !0,
                'aria-label': Z.intl.string(Z.t['3N/J2t']),
                children: (0, l.jsx)(g.Z, {
                    user: n,
                    displayProfile: U,
                    themeType: b.lY.MODAL,
                    ref: k,
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
                                    (0, l.jsx)(v.Z, {
                                        user: n,
                                        guildId: w
                                    }),
                                    (0, l.jsxs)('div', {
                                        className: O.headerContainer,
                                        children: [
                                            (0, l.jsx)(s.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: Z.intl.string(Z.t.b33pLC)
                                            }),
                                            (0, l.jsx)(s.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: Z.intl.format(R ? Z.t['8F+WNz'] : Z.t['/cZp5u'], { username: u.ZP.getName(w, P, n) })
                                            })
                                        ]
                                    }),
                                    (0, l.jsx)('div', {
                                        className: O.safetyTable,
                                        children: D.map((e, n) => {
                                            let { icon: t, description: r } = e;
                                            return (0, l.jsx)(
                                                c.ZP,
                                                {
                                                    icon: t,
                                                    title: r,
                                                    titleVariant: 'text-md/normal'
                                                },
                                                n
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
                                                                    analyticsLocations: M
                                                                },
                                                                L
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, l.jsx)(j.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    A(),
                                                        (0, p.pQ)(
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
