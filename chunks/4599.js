(t.d(n, { Z: () => g }), t(388685), t(953529));
var o = t(255367),
    c = t(442837),
    i = t(755721),
    a = t(481060),
    r = t(100527),
    d = t(906732),
    l = t(138201),
    s = t(699516),
    u = t(5192),
    p = t(785717),
    f = t(221292),
    _ = t(687158),
    m = t(316027),
    I = t(502762),
    h = t(848780),
    x = t(907179),
    y = t(228168),
    b = t(981631),
    v = t(388032),
    j = t(829441),
    Z = t(161068);
function A(e) {
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
function g(e) {
    let { user: n, guildId: t, channelId: g, messageId: O, roleId: N, transitionState: C, openedAt: P, onHide: T, showGuildProfile: E = !0, sourceAnalyticsLocations: S = [] } = e,
        M = t === b.ME ? void 0 : t,
        w = (0, c.e7)([s.Z], () => s.Z.isBlocked(n.id)),
        { analyticsLocations: L } = (0, d.ZP)([...S, w ? r.Z.BLOCKED_PROFILE_MODAL : r.Z.IGNORED_PROFILE_MODAL]),
        D = (0, p.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: M,
            channelId: g,
            messageId: O,
            roleId: N,
            showGuildProfile: E
        }),
        B = [
            {
                icon: a.owK,
                description: v.intl.string(v.t.kcuWvb)
            },
            {
                icon: a.owK,
                description: v.intl.string(w ? v.t.QxrDY2 : v.t.W6fjkZ)
            }
        ],
        R = (0, _.ZP)(n.id, E ? M : void 0),
        k = u.ZP.getName(null == R ? void 0 : R.guildId, g, n),
        G = v.intl.formatToPlainString(v.t.KRe1Fh, { name: k });
    return (0, o.jsx)(d.Gt, {
        value: L,
        children: (0, o.jsx)(p.Mt, {
            value: D,
            openedAt: P,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, o.jsx)(a.Y0X, {
                transitionState: C,
                className: j.root,
                hideShadow: !0,
                'aria-label': G,
                parentComponent: 'RestrictedUserProfileModal',
                children: (0, o.jsx)(I.Z, {
                    user: n,
                    displayProfile: R,
                    themeType: y.lY.MODAL,
                    children: (0, o.jsxs)('div', {
                        className: j.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: Z,
                                className: j.preview,
                                'aria-hidden': !0
                            }),
                            (0, o.jsxs)('div', {
                                className: j.body,
                                children: [
                                    (0, o.jsx)(m.Z, {
                                        user: n,
                                        guildId: M
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: j.headerContainer,
                                        children: [
                                            (0, o.jsx)(a.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: v.intl.string(v.t.b33pLC)
                                            }),
                                            (0, o.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: v.intl.format(w ? v.t['8F+WNz'] : v.t['/cZp5u'], { username: k })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: j.safetyTable,
                                        children: B.map((e, n) => {
                                            let { icon: t, description: c } = e;
                                            return (0, o.jsx)(
                                                l.JZ,
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
                                            (0, o.jsx)(x.Z, {
                                                size: i.Ph.MEDIUM,
                                                isBlocked: w,
                                                onClick: () => {
                                                    (T(),
                                                        (0, f.pQ)(
                                                            A(
                                                                {
                                                                    action: w ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                D
                                                            )
                                                        ));
                                                }
                                            }),
                                            (0, o.jsx)(h.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    (T(),
                                                        (0, f.pQ)(
                                                            A(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                D
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
