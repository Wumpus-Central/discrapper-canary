(n.d(t, {
    Z: () => U,
    i: () => k
}),
    n(388685),
    n(539854));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(748780),
    l = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(211266),
    f = n(699682),
    _ = n(367907),
    p = n(644914),
    h = n(434404),
    m = n(330010),
    g = n(978946),
    E = n(314897),
    b = n(430824),
    y = n(594174),
    O = n(259580),
    v = n(585483),
    I = n(63063),
    T = n(358085),
    S = n(709054),
    A = n(967128),
    N = n(981631),
    C = n(231873),
    w = n(388032),
    R = n(646863);
function P(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                P(e, t, n[t]);
            }));
    }
    return e;
}
function L(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function k(e) {
    let { className: t, iconUrl: n, icon: a, header: s, completed: l, onClick: c } = e,
        [d, _] = i.useState(!1),
        p = (0, f.Z)(l);
    return (
        i.useEffect(() => {
            null != p && l !== p && (_(!0), setTimeout(() => _(!1), 1000));
        }, [l, p]),
        (0, r.jsxs)(u.P3F, {
            className: o()(t, R.card, { [R.completed]: l }),
            onClick: c,
            children: [
                null != a
                    ? a
                    : (0, r.jsx)('img', {
                          className: R.icon,
                          src: n,
                          alt: ''
                      }),
                (0, r.jsx)(u.Text, {
                    color: 'header-primary',
                    className: o()(R.cardTextContainer, R.cardHeader),
                    variant: 'text-sm/normal',
                    children: s
                }),
                l
                    ? (0, r.jsx)(u.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: o()(R.checkmark, { [R.animate]: d })
                      })
                    : (0, r.jsx)(O.Z, {
                          className: R.arrow,
                          direction: O.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function j(e) {
    let t = i.useCallback(() => {
            (_.ZP.trackWithMetadata(N.rMx.SERVER_SETUP_CTA_CLICKED, {
                setup_type: C.Ft.CHANNEL_WELCOME,
                action: C.j7.INVITE
            }),
                null != e &&
                    (0, u.ZDy)(async () => {
                        let { default: t } = await Promise.all([n.e('7654'), n.e('49049'), n.e('29328')]).then(n.bind(n, 560114));
                        return (n) =>
                            (0, r.jsx)(
                                t,
                                x(D({}, n), {
                                    guild: e,
                                    source: N.t4x.CHANNEL_WELCOME,
                                    analyticsLocation: { section: N.jXE.CHANNEL_WELCOME_CTA }
                                })
                            );
                    }));
        }, [e]),
        a = i.useCallback(() => {
            (_.ZP.trackWithMetadata(N.rMx.SERVER_SETUP_CTA_CLICKED, {
                setup_type: C.Ft.CHANNEL_WELCOME,
                action: C.j7.SEND_MESSAGE
            }),
                v.S.dispatch(N.CkL.TEXTAREA_FOCUS, {
                    highlight: !0,
                    channelId: N.lds
                }));
        }, []),
        o = i.useCallback(() => {
            (_.ZP.trackWithMetadata(N.rMx.SERVER_SETUP_CTA_CLICKED, {
                setup_type: C.Ft.CHANNEL_WELCOME,
                action: C.j7.PERSONALIZE_SERVER
            }),
                null != e && h.Z.open(e.id, (0, g.r)(), { section: N.jXE.CHANNEL_WELCOME_CTA }));
        }, [e]);
    return {
        handleInvite: t,
        handleMessage: a,
        handlePersonalize: o,
        handleDownload: i.useCallback(() => {
            (_.ZP.trackWithMetadata(N.rMx.SERVER_SETUP_CTA_CLICKED, {
                setup_type: C.Ft.CHANNEL_WELCOME,
                action: C.j7.DOWNLOAD
            }),
                (0, u.ZDy)(async () => {
                    let { default: e } = await n.e('74023').then(n.bind(n, 431583));
                    return (t) => (0, r.jsx)(e, D({ source: N.jXE.CHANNEL_WELCOME_CTA }, t));
                }));
        }, []),
        handleAddApplication: i.useCallback(() => {
            null != e &&
                (_.ZP.trackWithMetadata(N.rMx.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: C.Ft.CHANNEL_WELCOME,
                    action: C.j7.ADD_APP
                }),
                (0, u.ZDy)(async () => {
                    let { default: t } = await n.e('77046').then(n.bind(n, 272509));
                    return (n) => {
                        var i;
                        return (0, r.jsx)(t, x(D({ guildId: null != (i = e.id) ? i : '' }, n), { analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL }));
                    };
                }));
        }, [e])
    };
}
function M(e) {
    let t = (0, d.Z)(() => new s.Z.Value(0)),
        n = (0, d.Z)(() => new s.Z.Value(0)),
        r = (0, d.Z)(() => [new s.Z.Value(0), new s.Z.Value(0), new s.Z.Value(0), new s.Z.Value(0)]);
    return (
        i.useEffect(() => {
            s.Z.stagger(300, [
                s.Z.parallel([
                    s.Z.timing(n, {
                        toValue: 1,
                        duration: 450
                    }),
                    s.Z.timing(t, {
                        toValue: 1,
                        duration: 450
                    })
                ]),
                s.Z.stagger(100, [
                    s.Z.timing(r[0], {
                        toValue: 1,
                        duration: 300
                    }),
                    s.Z.timing(r[1], {
                        toValue: 1,
                        duration: 300
                    }),
                    s.Z.timing(r[2], {
                        toValue: 1,
                        duration: 300
                    }),
                    s.Z.timing(r[3], {
                        toValue: 1,
                        duration: 300
                    })
                ])
            ]).start();
        }, [n, t, r]),
        {
            titleAnimatedStyle: e
                ? {
                      transform: [
                          {
                              translateY: t.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: ['-20px', '0px']
                              })
                          }
                      ],
                      opacity: n
                  }
                : {},
            opacities: r
        }
    );
}
function U(e) {
    let { channel: t } = e,
        n = (0, l.e7)([b.Z], () => (null != t ? b.Z.getGuild(t.getGuildId()) : null), [t]),
        a = null != n && S.default.extractTimestamp(n.id) < Date.now() - N._8R,
        c = (0, l.e7)([E.default], () => (null == n ? void 0 : n.ownerId) === E.default.getId(), [n]),
        { canInvite: d, canManageGuild: f, canMessage: _ } = (0, p.TE)(t, n),
        h = (0, l.e7)([y.default], () => {
            var e, t;
            return (null == (e = y.default.getCurrentUser()) ? void 0 : e.desktop) === !0 || (null == (t = y.default.getCurrentUser()) ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: g, guildMessaged: O, guildPersonalized: v } = (0, p.h_)(n),
        { handleInvite: C, handleMessage: P, handlePersonalize: D, handleDownload: L, handleAddApplication: x } = j(n),
        U = !(h || g || O || v),
        { titleAnimatedStyle: G, opacities: B } = M(U),
        [Z, F] = i.useState([]),
        V = Z.length > 0;
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, m.i)(null != (e = null == n ? void 0 : n.id) ? e : N.lds);
                    F(t.map((e) => e.id));
                } catch (e) {}
            })();
        }, [null == n ? void 0 : n.id]),
        null == n)
    )
        return null;
    let H = [];
    a ||
        (d &&
            H.push(
                (0, r.jsx)(
                    s.Z.div,
                    {
                        className: R.cardWrapper,
                        style: U ? { opacity: B[H.length] } : {},
                        children: (0, r.jsx)(k, {
                            iconUrl: u.YvY,
                            header: w.intl.string(w.t.q9n0TU),
                            completed: g,
                            onClick: C
                        })
                    },
                    'invite'
                )
            ),
        f &&
            H.push(
                (0, r.jsx)(
                    s.Z.div,
                    {
                        className: R.cardWrapper,
                        style: U ? { opacity: B[H.length] } : {},
                        children: (0, r.jsx)(k, {
                            iconUrl: u.$_T,
                            header: w.intl.string(w.t.c5kxPj),
                            completed: v,
                            onClick: D
                        })
                    },
                    'customize'
                )
            ),
        _ &&
            H.push(
                (0, r.jsx)(
                    s.Z.div,
                    {
                        className: R.cardWrapper,
                        style: U ? { opacity: B[H.length] } : {},
                        children: (0, r.jsx)(k, {
                            iconUrl: u.qMX,
                            header: w.intl.string(w.t['SoP7+v']),
                            completed: O,
                            onClick: P
                        })
                    },
                    'message'
                )
            ),
        (0, T.isWeb)() &&
            H.push(
                (0, r.jsx)(
                    s.Z.div,
                    {
                        className: R.cardWrapper,
                        style: U ? { opacity: B[H.length] } : {},
                        children: (0, r.jsx)(k, {
                            iconUrl: u.yIb,
                            header: w.intl.string(w.t.pGVNIy),
                            completed: h,
                            onClick: L
                        })
                    },
                    'download'
                )
            ),
        H.push(
            (0, r.jsx)(
                s.Z.div,
                {
                    className: R.cardWrapper,
                    style: U ? { opacity: B[H.length] } : {},
                    children: (0, r.jsx)(k, {
                        iconUrl: u.Tg$,
                        header: w.intl.string(w.t.IhHDEB),
                        completed: V,
                        onClick: x
                    })
                },
                'addapp'
            )
        ));
    let Y = c ? w.intl.string(w.t['1ach9P']) : w.intl.string(w.t['ezm+/v']);
    a && (Y = w.intl.string(w.t['gwyU/P']));
    let W = ''.concat(I.Z.getArticleURL(N.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, r.jsx)(A.ZP, {
        channelId: t.id,
        children: (0, r.jsx)('div', {
            className: R.container,
            children: (0, r.jsxs)('div', {
                className: R.inner,
                children: [
                    (0, r.jsxs)(s.Z.div, {
                        style: G,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                className: R.titleName,
                                variant: 'heading-xxl/medium',
                                children: w.intl.format(w.t.rkHVKS, { guildName: n.name })
                            }),
                            (0, r.jsxs)(u.Text, {
                                color: 'header-secondary',
                                className: o()({
                                    [R.subtitle]: !0,
                                    [R.noChildren]: 0 === H.length
                                }),
                                variant: 'text-sm/normal',
                                children: [Y, ' ', H.length > 0 ? w.intl.format(w.t.UOtD39, { guideURL: W }) : null]
                            })
                        ]
                    }),
                    H
                ]
            })
        })
    });
}
