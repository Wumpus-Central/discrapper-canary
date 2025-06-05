t.d(n, { Z: () => N }), t(388685), t(953529);
var o = t(255367),
    c = t(73800),
    i = t(442837),
    a = t(481060),
    r = t(100527),
    d = t(906732),
    l = t(138201),
    s = t(706454),
    u = t(699516),
    f = t(5192),
    _ = t(785717),
    p = t(221292),
    m = t(687158),
    I = t(316027),
    h = t(502762),
    b = t(848780),
    x = t(907179),
    y = t(228168),
    g = t(981631),
    v = t(388032),
    Z = t(829441),
    j = t(161068);
function A(e) {
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
function N(e) {
    let { user: n, guildId: t, channelId: N, messageId: O, roleId: C, transitionState: P, openedAt: T, onHide: w, showGuildProfile: S = !0, sourceAnalyticsLocations: E = [] } = e,
        M = t === g.ME ? void 0 : t,
        L = (0, i.e7)([u.Z], () => u.Z.isBlocked(n.id)),
        { analyticsLocations: D } = (0, d.ZP)([...E, L ? r.Z.BLOCKED_PROFILE_MODAL : r.Z.IGNORED_PROFILE_MODAL]),
        R = (0, _.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: M,
            channelId: N,
            messageId: O,
            roleId: C,
            showGuildProfile: S
        }),
        B = [
            {
                icon: a.owK,
                description: v.intl.string(v.t.kcuWvb)
            },
            {
                icon: a.owK,
                description: v.intl.string(L ? v.t.QxrDY2 : v.t.W6fjkZ)
            }
        ],
        G = (0, m.ZP)(n.id, S ? M : void 0),
        k = f.ZP.getName(null == G ? void 0 : G.guildId, N, n),
        F = c.useRef(null),
        U = (0, i.e7)([s.default], () => ['en-US', 'en-GB'].includes(s.default.locale)) ? v.intl.formatToPlainString(v.t.KRe1Fh, { name: k }) : v.intl.string(v.t['3N/J2t']);
    return (0, o.jsx)(d.Gt, {
        value: D,
        children: (0, o.jsx)(_.Mt, {
            value: R,
            openedAt: T,
            fetchStartedAt: null == G ? void 0 : G.fetchStartedAt,
            fetchEndedAt: null == G ? void 0 : G.fetchEndedAt,
            isLoaded: null == G ? void 0 : G.isLoaded,
            children: (0, o.jsx)(a.Y0X, {
                transitionState: P,
                className: Z.root,
                hideShadow: !0,
                'aria-label': U,
                parentComponent: 'RestrictedUserProfileModal',
                children: (0, o.jsx)(h.Z, {
                    user: n,
                    displayProfile: G,
                    themeType: y.lY.MODAL,
                    ref: F,
                    children: (0, o.jsxs)('div', {
                        className: Z.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: j,
                                className: Z.preview,
                                'aria-hidden': !0
                            }),
                            (0, o.jsxs)('div', {
                                className: Z.body,
                                children: [
                                    (0, o.jsx)(I.Z, {
                                        user: n,
                                        guildId: M
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: Z.headerContainer,
                                        children: [
                                            (0, o.jsx)(a.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: v.intl.string(v.t.b33pLC)
                                            }),
                                            (0, o.jsx)(a.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: v.intl.format(L ? v.t['8F+WNz'] : v.t['/cZp5u'], { username: k })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: Z.safetyTable,
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
                                            (0, o.jsx)(x.Z, {
                                                size: a.PhG.MEDIUM,
                                                isBlocked: L,
                                                onClick: () => {
                                                    w(),
                                                        (0, p.pQ)(
                                                            A(
                                                                {
                                                                    action: L ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: D
                                                                },
                                                                R
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, o.jsx)(b.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    w(),
                                                        (0, p.pQ)(
                                                            A(
                                                                {
                                                                    action: 'DONT_SHOW_AGAIN_IGNORED_PROFILE',
                                                                    analyticsLocations: D
                                                                },
                                                                R
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
