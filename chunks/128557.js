n.d(t, {
    Z: () => R,
    i: () => w
}),
    n(388685),
    n(539854);
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(748780),
    s = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(211266),
    p = n(699682),
    h = n(367907),
    f = n(644914),
    m = n(434404),
    g = n(330010),
    b = n(978946),
    _ = n(314897),
    y = n(430824),
    x = n(594174),
    C = n(259580),
    v = n(585483),
    j = n(63063),
    O = n(358085),
    E = n(709054),
    I = n(967128),
    S = n(981631),
    P = n(231873),
    Z = n(388032),
    N = n(646863);
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e) {
    let { className: t, iconUrl: n, icon: l, header: o, completed: s, onClick: c } = e,
        [d, h] = i.useState(!1),
        f = (0, p.Z)(s);
    return (
        i.useEffect(() => {
            null != f && s !== f && (h(!0), setTimeout(() => h(!1), 1000));
        }, [s, f]),
        (0, r.jsxs)(u.P3F, {
            className: a()(t, N.card, { [N.completed]: s }),
            onClick: c,
            children: [
                null != l
                    ? l
                    : (0, r.jsx)('img', {
                          className: N.icon,
                          src: n,
                          alt: ''
                      }),
                (0, r.jsx)(u.Text, {
                    color: 'header-primary',
                    className: a()(N.cardTextContainer, N.cardHeader),
                    variant: 'text-sm/normal',
                    children: o
                }),
                s
                    ? (0, r.jsx)(u.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(N.checkmark, { [N.animate]: d })
                      })
                    : (0, r.jsx)(C.Z, {
                          className: N.arrow,
                          direction: C.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function R(e) {
    let { channel: t } = e,
        l = (0, s.e7)([y.Z], () => (null != t ? y.Z.getGuild(t.getGuildId()) : null), [t]),
        p = null != l && E.default.extractTimestamp(l.id) < Date.now() - S._8R,
        C = (0, s.e7)([_.default], () => (null == l ? void 0 : l.ownerId) === _.default.getId(), [l]),
        { canInvite: R, canManageGuild: M, canMessage: k } = (0, f.TE)(t, l),
        D = (0, s.e7)([x.default], () => {
            var e, t;
            return (null == (e = x.default.getCurrentUser()) ? void 0 : e.desktop) === !0 || (null == (t = x.default.getCurrentUser()) ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: L, guildMessaged: U, guildPersonalized: B } = (0, f.h_)(l),
        {
            handleInvite: F,
            handleMessage: G,
            handlePersonalize: H,
            handleDownload: V,
            handleAddApplication: z
        } = (function (e) {
            let t = i.useCallback(() => {
                    h.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: P.Ft.CHANNEL_WELCOME,
                        action: P.j7.INVITE
                    }),
                        null != e &&
                            (0, u.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('17439')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        A(T({}, n), {
                                            guild: e,
                                            source: S.t4x.CHANNEL_WELCOME,
                                            analyticsLocation: { section: S.jXE.CHANNEL_WELCOME_CTA }
                                        })
                                    );
                            });
                }, [e]),
                l = i.useCallback(() => {
                    h.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: P.Ft.CHANNEL_WELCOME,
                        action: P.j7.SEND_MESSAGE
                    }),
                        v.S.dispatch(S.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: S.lds
                        });
                }, []),
                a = i.useCallback(() => {
                    h.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: P.Ft.CHANNEL_WELCOME,
                        action: P.j7.PERSONALIZE_SERVER
                    }),
                        null != e && m.Z.open(e.id, (0, b.r)(), { section: S.jXE.CHANNEL_WELCOME_CTA });
                }, [e]);
            return {
                handleInvite: t,
                handleMessage: l,
                handlePersonalize: a,
                handleDownload: i.useCallback(() => {
                    h.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: P.Ft.CHANNEL_WELCOME,
                        action: P.j7.DOWNLOAD
                    }),
                        (0, u.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) => (0, r.jsx)(e, T({ source: S.jXE.CHANNEL_WELCOME_CTA }, t));
                        });
                }, []),
                handleAddApplication: i.useCallback(() => {
                    null != e &&
                        (h.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: P.Ft.CHANNEL_WELCOME,
                            action: P.j7.ADD_APP
                        }),
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e('77046').then(n.bind(n, 272509));
                            return (n) => {
                                var i;
                                return (0, r.jsx)(t, A(T({ guildId: null != (i = e.id) ? i : '' }, n), { analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL }));
                            };
                        }));
                }, [e])
            };
        })(l),
        W = !(D || L || U || B),
        { titleAnimatedStyle: Y, opacities: q } = (function (e) {
            let t = (0, d.Z)(() => new o.Z.Value(0)),
                n = (0, d.Z)(() => new o.Z.Value(0)),
                r = (0, d.Z)(() => [new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0), new o.Z.Value(0)]);
            return (
                i.useEffect(() => {
                    o.Z.stagger(300, [
                        o.Z.parallel([
                            o.Z.timing(n, {
                                toValue: 1,
                                duration: 450
                            }),
                            o.Z.timing(t, {
                                toValue: 1,
                                duration: 450
                            })
                        ]),
                        o.Z.stagger(100, [
                            o.Z.timing(r[0], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(r[1], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(r[2], {
                                toValue: 1,
                                duration: 300
                            }),
                            o.Z.timing(r[3], {
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
        })(W),
        [K, X] = i.useState([]),
        J = K.length > 0;
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, g.i)(null != (e = null == l ? void 0 : l.id) ? e : S.lds);
                    X(t.map((e) => e.id));
                } catch (e) {}
            })();
        }, [null == l ? void 0 : l.id]),
        null == l)
    )
        return null;
    let Q = [];
    p ||
        (R &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: N.cardWrapper,
                        style: W ? { opacity: q[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.YvY,
                            header: Z.intl.string(Z.t.q9n0TU),
                            completed: L,
                            onClick: F
                        })
                    },
                    'invite'
                )
            ),
        M &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: N.cardWrapper,
                        style: W ? { opacity: q[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.$_T,
                            header: Z.intl.string(Z.t.c5kxPj),
                            completed: B,
                            onClick: H
                        })
                    },
                    'customize'
                )
            ),
        k &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: N.cardWrapper,
                        style: W ? { opacity: q[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.qMX,
                            header: Z.intl.string(Z.t['SoP7+v']),
                            completed: U,
                            onClick: G
                        })
                    },
                    'message'
                )
            ),
        (0, O.isWeb)() &&
            Q.push(
                (0, r.jsx)(
                    o.Z.div,
                    {
                        className: N.cardWrapper,
                        style: W ? { opacity: q[Q.length] } : {},
                        children: (0, r.jsx)(w, {
                            iconUrl: u.yIb,
                            header: Z.intl.string(Z.t.pGVNIy),
                            completed: D,
                            onClick: V
                        })
                    },
                    'download'
                )
            ),
        Q.push(
            (0, r.jsx)(
                o.Z.div,
                {
                    className: N.cardWrapper,
                    style: W ? { opacity: q[Q.length] } : {},
                    children: (0, r.jsx)(w, {
                        iconUrl: u.Tg$,
                        header: Z.intl.string(Z.t.IhHDEB),
                        completed: J,
                        onClick: z
                    })
                },
                'addapp'
            )
        ));
    let $ = C ? Z.intl.string(Z.t['1ach9P']) : Z.intl.string(Z.t['ezm+/v']);
    p && ($ = Z.intl.string(Z.t['gwyU/P']));
    let ee = ''.concat(j.Z.getArticleURL(S.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, r.jsx)(I.ZP, {
        channelId: t.id,
        children: (0, r.jsx)('div', {
            className: N.container,
            children: (0, r.jsxs)('div', {
                className: N.inner,
                children: [
                    (0, r.jsxs)(o.Z.div, {
                        style: Y,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                className: N.titleName,
                                variant: 'heading-xxl/medium',
                                children: Z.intl.format(Z.t.rkHVKS, { guildName: l.name })
                            }),
                            (0, r.jsxs)(u.Text, {
                                color: 'header-secondary',
                                className: a()({
                                    [N.subtitle]: !0,
                                    [N.noChildren]: 0 === Q.length
                                }),
                                variant: 'text-sm/normal',
                                children: [$, ' ', Q.length > 0 ? Z.intl.format(Z.t.UOtD39, { guideURL: ee }) : null]
                            })
                        ]
                    }),
                    Q
                ]
            })
        })
    });
}
