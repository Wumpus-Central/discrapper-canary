t.d(n, { Z: () => _ }), t(388685), t(953529);
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
    m = t(687158),
    b = t(316027),
    h = t(502762),
    g = t(848780),
    j = t(907179),
    v = t(228168),
    x = t(981631),
    y = t(388032),
    I = t(829441),
    O = t(161068);
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
function _(e) {
    let { user: n, guildId: t, channelId: _, messageId: P, roleId: E, transitionState: N, openedAt: A, onHide: T, showGuildProfile: C = !0, sourceAnalyticsLocations: S = [] } = e,
        w = t === x.ME ? void 0 : t,
        M = (0, i.e7)([d.Z], () => d.Z.isBlocked(n.id)),
        { analyticsLocations: R } = (0, c.ZP)([...S, M ? s.Z.BLOCKED_PROFILE_MODAL : s.Z.IGNORED_PROFILE_MODAL]),
        L = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: w,
            channelId: _,
            messageId: P,
            roleId: E,
            showGuildProfile: C
        }),
        D = [
            {
                icon: l.owK,
                description: y.intl.string(y.t.kcuWvb)
            },
            {
                icon: l.owK,
                description: y.intl.string(M ? y.t.QxrDY2 : y.t.W6fjkZ)
            }
        ],
        B = (0, m.ZP)(n.id, C ? w : void 0),
        G = o.createRef();
    return (0, r.jsx)(c.Gt, {
        value: R,
        children: (0, r.jsx)(f.Mt, {
            value: L,
            openedAt: A,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                transitionState: N,
                className: I.root,
                hideShadow: !0,
                'aria-label': y.intl.string(y.t['3N/J2t']),
                children: (0, r.jsx)(h.Z, {
                    user: n,
                    displayProfile: B,
                    themeType: v.lY.MODAL,
                    ref: G,
                    children: (0, r.jsxs)('div', {
                        className: I.container,
                        children: [
                            (0, r.jsx)('img', {
                                alt: '',
                                src: O,
                                className: I.preview,
                                'aria-hidden': !0
                            }),
                            (0, r.jsxs)('div', {
                                className: I.body,
                                children: [
                                    (0, r.jsx)(b.Z, {
                                        user: n,
                                        guildId: w
                                    }),
                                    (0, r.jsxs)('div', {
                                        className: I.headerContainer,
                                        children: [
                                            (0, r.jsx)(l.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: y.intl.string(y.t.b33pLC)
                                            }),
                                            (0, r.jsx)(l.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: y.intl.format(M ? y.t['8F+WNz'] : y.t['/cZp5u'], { username: u.ZP.getName(w, _, n) })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)('div', {
                                        className: I.safetyTable,
                                        children: D.map((e, n) => {
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
                                            (0, r.jsx)(j.Z, {
                                                size: l.PhG.MEDIUM,
                                                isBlocked: M,
                                                onClick: () => {
                                                    T(),
                                                        (0, p.pQ)(
                                                            Z(
                                                                {
                                                                    action: M ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: R
                                                                },
                                                                L
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
