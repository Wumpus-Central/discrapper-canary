t.d(n, { Z: () => O }), t(388685), t(953529);
var r = t(200651),
    o = t(192379),
    i = t(442837),
    l = t(481060),
    s = t(100527),
    c = t(906732),
    a = t(138201),
    d = t(699516),
    u = t(5192),
    f = t(785717),
    p = t(221292),
    b = t(687158),
    m = t(316027),
    h = t(502762),
    g = t(848780),
    y = t(907179),
    I = t(228168),
    j = t(981631),
    v = t(388032),
    x = t(829441),
    _ = t(161068);
function Z(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            r.forEach(function (n) {
                var r;
                (r = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = r);
            });
    }
    return e;
}
function O(e) {
    let { user: n, guildId: t, channelId: O, messageId: N, roleId: P, transitionState: E, openedAt: S, onHide: T, showGuildProfile: A = !0, sourceAnalyticsLocations: C = [] } = e,
        L = t === j.ME ? void 0 : t,
        w = (0, i.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: R } = (0, c.ZP)([...C, w ? s.Z.BLOCKED_PROFILE_MODAL : s.Z.IGNORED_PROFILE_MODAL]),
        M = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: L,
            channelId: O,
            messageId: N,
            roleId: P,
            showGuildProfile: A
        }),
        U = [
            {
                icon: l.owK,
                description: v.NW.string(v.t.kcuWvb)
            },
            {
                icon: l.owK,
                description: v.NW.string(w ? v.t.QxrDY2 : v.t.W6fjkZ)
            }
        ],
        B = (0, b.ZP)(n.id, A ? L : void 0),
        D = o.createRef();
    return (0, r.jsx)(c.Gt, {
        value: R,
        children: (0, r.jsx)(f.Mt, {
            value: M,
            openedAt: S,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                transitionState: E,
                className: x.root,
                hideShadow: !0,
                'aria-label': v.NW.string(v.t['3N/J2t']),
                children: (0, r.jsx)(h.Z, {
                    user: n,
                    displayProfile: B,
                    profileType: I.y0.FULL_SIZE,
                    ref: D,
                    children: (0, r.jsxs)('div', {
                        className: x.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: _,
                                className: x.preview,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: x.body,
                                children: [
                                    (0, r.jsx)(m.Z, {
                                        user: n,
                                        guildId: L
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: x.headerContainer,
                                        children: [
                                            (0, r.jsx)(l.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: v.NW.string(v.t.b33pLC)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: v.NW.format(w ? v.t['8F+WNz'] : v.t['/cZp5u'], { username: u.ZP.getName(L, O, n) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: x.safetyTable,
                                        children: U.map((e, n) => {
                                            let { icon: t, description: o } = e;
                                            return (0, r.jsx)(
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
                                    (0, r.jsxs)(l.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, r.jsx)(y.Z, {
                                                size: l.PhG.MEDIUM,
                                                isBlocked: w,
                                                onClick: () => {
                                                    T(),
                                                        (0, p.pQ)(
                                                            Z(
                                                                {
                                                                    action: w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: R
                                                                },
                                                                M
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, r.jsx)(g.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    T(),
                                                        (0, p.pQ)(
                                                            Z(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: R
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
