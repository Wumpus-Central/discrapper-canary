t.d(n, { Z: () => A }), t(388685), t(953529);
var o = t(255367);
t(73800);
var c = t(442837),
    i = t(481060),
    a = t(100527),
    r = t(906732),
    d = t(138201),
    l = t(706454),
    s = t(699516),
    u = t(5192),
    f = t(785717),
    _ = t(221292),
    p = t(687158),
    m = t(316027),
    I = t(502762),
    h = t(848780),
    b = t(907179),
    x = t(228168),
    y = t(981631),
    v = t(388032),
    g = t(829441),
    Z = t(161068);
function j(e) {
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
function A(e) {
    let { user: n, guildId: t, channelId: A, messageId: N, roleId: O, transitionState: C, openedAt: P, onHide: T, showGuildProfile: w = !0, sourceAnalyticsLocations: S = [] } = e,
        E = t === y.ME ? void 0 : t,
        M = (0, c.e7)([s.Z], () => s.Z.isBlocked(n.id)),
        { analyticsLocations: L } = (0, r.ZP)([...S, M ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        D = (0, f.ZB)({
            layout: 'MODAL',
            userId: n.id,
            guildId: E,
            channelId: A,
            messageId: N,
            roleId: O,
            showGuildProfile: w
        }),
        B = [
            {
                icon: i.owK,
                description: v.intl.string(v.t.kcuWvb)
            },
            {
                icon: i.owK,
                description: v.intl.string(M ? v.t.QxrDY2 : v.t.W6fjkZ)
            }
        ],
        R = (0, p.ZP)(n.id, w ? E : void 0),
        G = u.ZP.getName(null == R ? void 0 : R.guildId, A, n),
        k = (0, c.e7)([l.default], () => ['en-US', 'en-GB'].includes(l.default.locale)) ? v.intl.formatToPlainString(v.t.KRe1Fh, { name: G }) : v.intl.string(v.t['3N/J2t']);
    return (0, o.jsx)(r.Gt, {
        value: L,
        children: (0, o.jsx)(f.Mt, {
            value: D,
            openedAt: P,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, o.jsx)(i.Y0X, {
                transitionState: C,
                className: g.root,
                hideShadow: !0,
                'aria-label': k,
                parentComponent: 'RestrictedUserProfileModal',
                children: (0, o.jsx)(I.Z, {
                    user: n,
                    displayProfile: R,
                    themeType: x.lY.MODAL,
                    children: (0, o.jsxs)('div', {
                        className: g.container,
                        children: [
                            (0, o.jsx)('img', {
                                alt: '',
                                src: Z,
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
                                            (0, o.jsx)(i.X6q, {
                                                variant: 'heading-xl/bold',
                                                color: 'header-primary',
                                                children: v.intl.string(v.t.b33pLC)
                                            }),
                                            (0, o.jsx)(i.Text, {
                                                variant: 'text-md/medium',
                                                color: 'header-primary',
                                                children: v.intl.format(M ? v.t['8F+WNz'] : v.t['/cZp5u'], { username: G })
                                            })
                                        ]
                                    }),
                                    (0, o.jsx)('div', {
                                        className: g.safetyTable,
                                        children: B.map((e, n) => {
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
                                            (0, o.jsx)(b.Z, {
                                                size: i.PhG.MEDIUM,
                                                isBlocked: M,
                                                onClick: () => {
                                                    T(),
                                                        (0, _.pQ)(
                                                            j(
                                                                {
                                                                    action: M ? 'VIEW_BLOCKED_PROFILE' : 'VIEW_IGNORED_PROFILE',
                                                                    analyticsLocations: L
                                                                },
                                                                D
                                                            )
                                                        );
                                                }
                                            }),
                                            (0, o.jsx)(h.Z, {
                                                userId: n.id,
                                                onClick: () => {
                                                    T(),
                                                        (0, _.pQ)(
                                                            j(
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
