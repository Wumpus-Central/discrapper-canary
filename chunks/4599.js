(t.d(n, { Z: () => j }), t(388685), t(953529));
var o = t(255367);
t(73800);
var c = t(442837),
    i = t(481060),
    a = t(100527),
    r = t(906732),
    d = t(138201),
    l = t(699516),
    s = t(5192),
    u = t(785717),
    _ = t(221292),
    f = t(687158),
    p = t(316027),
    m = t(502762),
    I = t(848780),
    h = t(907179),
    b = t(228168),
    x = t(981631),
    y = t(388032),
    v = t(829441),
    Z = t(161068);
function g(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                ((o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o));
            }));
    }
    return e;
}
function j(e) {
    let { user: n, guildId: t, channelId: j, messageId: A, roleId: O, transitionState: N, openedAt: C, onHide: P, showGuildProfile: T = !0, sourceAnalyticsLocations: w = [] } = e,
        S = t === x.ME ? void 0 : t,
        E = (0, c.e7)([l.Z], () => l.Z.isBlocked(n.id)),
        { analyticsLocations: M } = (0, r.ZP)([...w, E ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        L = (0, u.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: S,
            channelId: j,
            messageId: A,
            roleId: O,
            showGuildProfile: T
        }),
        D = [
            {
                icon: i.owK,
                description: y.intl.string(y.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: y.intl.string(E ? y.t.QxrDY2 : y.t.W6fjkZ)
            }
        ],
        R = (0, f.ZP)(n.id, T ? S : void 0),
        B = s.ZP.getName(null == R ? void 0 : R.guildId, j, n),
        G = y.intl.formatToPlainString(y.t.KRe1Fh, { name: B });
    return (0, o.jsx)(r.Gt, {
        value: M,
        children: (0, o.jsx)(u.Mt, {
            value: L,
            openedAt: C,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, o.jsx)(i.Y0X, {
                transitionState: N,
                className: v.root,
                hideShadow: !0,
                'aria-label': G,
                parentComponent: 'RestrictedUserProfileModal',
                children: (0, o.jsx)(m.Z, {
                    user: n,
                    displayProfile: R,
                    themeType: b.lY.MODAL,
                    children: (0, o.jsxs)('div', {
                        className: v.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: v.preview,
                                'aria-hidden': !0
                            }),
                            (0, o.jsxs)('div', {
                                className: v.body,
                                children: [
                                    (0, o.jsx)(p.Z, {
                                        user: n,
                                        guildId: S
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: v.headerContainer,
                                        children: [
                                            (0, o.jsx)(i.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: y.intl.string(y.t.b33pLC)
                                            }),
                                            (0, o.jsx)(i.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: y.intl.format(E ? y.t['8F+WNz'] : y.t['/cZp5u'], { username: B })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: v.safetyTable,
                                        children: D.map((e, n) => {
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
                                    (0, o.jsxs)(i.Kqy, {
                                        align: 'center',
                                        children: [
                                            (0, o.jsx)(h.Z, {
                                                size: i.PhG.MEDIUM,
                                                isBlocked: E,
                                                onClick: () => {
                                                    (P(),
                                                        (0, _.pQ)(
                                                            g(
                                                                {
                                                                    action: E ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: M
                                                                },
                                                                L
                                                            )
                                                        ));
                                                }
                                            }),
                                            (0, o.jsx)(I.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (P(),
                                                        (0, _.pQ)(
                                                            g(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: M
                                                                },
                                                                L
                                                            )
                                                        ));
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
