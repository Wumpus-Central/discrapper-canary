n.d(t, {
    Z: () => U,
    i: () => W
}),
    n(47120),
    n(653041);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(748780),
    s = n(442837),
    c = n(704215),
    u = n(481060),
    d = n(211266),
    p = n(699682),
    h = n(367907),
    f = n(540059),
    m = n(644914),
    g = n(434404),
    b = n(330010),
    _ = n(978946),
    C = n(314897),
    v = n(430824),
    y = n(594174),
    x = n(259580),
    j = n(585483),
    O = n(63063),
    N = n(358085),
    E = n(709054),
    P = n(967128),
    I = n(981631),
    S = n(231873),
    Z = n(388032),
    T = n(884612),
    A = n(881454),
    w = n(435921),
    R = n(538548),
    k = n(753033),
    M = n(15717);
function L(e) {
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
function D(e, t) {
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
function W(e) {
    let { className: t, iconUrl: n, icon: l, header: a, completed: s, onClick: c } = e,
        [d, h] = i.useState(!1),
        f = (0, p.Z)(s);
    return (
        i.useEffect(() => {
            null != f && s !== f && (h(!0), setTimeout(() => h(!1), 1000));
        }, [s, f]),
        (0, r.jsxs)(u.P3F, {
            className: o()(t, T.card, { [T.completed]: s }),
            onClick: c,
            children: [
                null != l
                    ? l
                    : (0, r.jsx)('img', {
                          className: T.icon,
                          src: n,
                          alt: ''
                      }),
                (0, r.jsx)(u.Text, {
                    color: 'header-primary',
                    className: o()(T.cardTextContainer, T.cardHeader),
                    variant: 'text-sm/normal',
                    children: a
                }),
                s
                    ? (0, r.jsx)(u.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: o()(T.checkmark, { [T.animate]: d })
                      })
                    : (0, r.jsx)(x.Z, {
                          className: T.arrow,
                          direction: x.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function U(e) {
    let { channel: t } = e,
        l = (0, s.e7)([v.Z], () => (null != t ? v.Z.getGuild(t.getGuildId()) : null), [t]),
        p = null != l && E.default.extractTimestamp(l.id) < Date.now() - I._8R,
        x = (0, s.e7)([C.default], () => (null == l ? void 0 : l.ownerId) === C.default.getId(), [l]),
        { canInvite: U, canManageGuild: B, canMessage: F } = (0, m.TE)(t, l),
        H = (0, s.e7)([y.default], () => {
            var e, t;
            return (null === (e = y.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = y.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: G, guildMessaged: V, guildPersonalized: z } = (0, m.h_)(l),
        {
            handleInvite: q,
            handleMessage: Y,
            handlePersonalize: K,
            handleDownload: X,
            handleAddApplication: J
        } = (function (e) {
            let t = i.useCallback(() => {
                    h.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.INVITE
                    }),
                        null != e &&
                            (0, u.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('33781')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        D(L({}, n), {
                                            guild: e,
                                            source: I.t4x.CHANNEL_WELCOME,
                                            analyticsLocation: { section: I.jXE.CHANNEL_WELCOME_CTA }
                                        })
                                    );
                            });
                }, [e]),
                l = i.useCallback(() => {
                    h.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.SEND_MESSAGE
                    }),
                        j.S.dispatch(I.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: I.lds
                        });
                }, []),
                o = i.useCallback(() => {
                    h.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.PERSONALIZE_SERVER
                    }),
                        null != e && g.Z.open(e.id, (0, _.r)(e.id), { section: I.jXE.CHANNEL_WELCOME_CTA });
                }, [e]);
            return {
                handleInvite: t,
                handleMessage: l,
                handlePersonalize: o,
                handleDownload: i.useCallback(() => {
                    h.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.DOWNLOAD
                    }),
                        (0, u.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) => (0, r.jsx)(e, L({ source: I.jXE.CHANNEL_WELCOME_CTA }, t));
                        });
                }, []),
                handleAddApplication: i.useCallback(() => {
                    null != e &&
                        (h.ZP.trackWithMetadata(I.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: S.Ft.CHANNEL_WELCOME,
                            action: S.j7.ADD_APP
                        }),
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e('77875').then(n.bind(n, 657300));
                            return (n) => {
                                var i;
                                return (0, r.jsx)(t, D(L({ guildId: null !== (i = e.id) && void 0 !== i ? i : '' }, n), { analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL }));
                            };
                        }));
                }, [e])
            };
        })(l),
        Q = !(H || G || V || z),
        { titleAnimatedStyle: $, opacities: ee } = (function (e) {
            let t = (0, d.Z)(() => new a.Z.Value(0)),
                n = (0, d.Z)(() => new a.Z.Value(0)),
                r = (0, d.Z)(() => [new a.Z.Value(0), new a.Z.Value(0), new a.Z.Value(0), new a.Z.Value(0)]);
            return (
                i.useEffect(() => {
                    a.Z.stagger(300, [
                        a.Z.parallel([
                            a.Z.timing(n, {
                                toValue: 1,
                                duration: 450
                            }),
                            a.Z.timing(t, {
                                toValue: 1,
                                duration: 450
                            })
                        ]),
                        a.Z.stagger(100, [
                            a.Z.timing(r[0], {
                                toValue: 1,
                                duration: 300
                            }),
                            a.Z.timing(r[1], {
                                toValue: 1,
                                duration: 300
                            }),
                            a.Z.timing(r[2], {
                                toValue: 1,
                                duration: 300
                            }),
                            a.Z.timing(r[3], {
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
        })(Q),
        [et, en] = i.useState([]),
        er = et.length > 0,
        ei = (0, f.Q3)('WelcomeArea');
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, b.i)(null !== (e = null == l ? void 0 : l.id) && void 0 !== e ? e : I.lds);
                    en(t.map((e) => e.id));
                } catch (e) {}
            })();
        }, [null == l ? void 0 : l.id]),
        null == l)
    )
        return null;
    let el = [];
    p ||
        (U &&
            el.push(
                (0, r.jsx)(
                    a.Z.div,
                    {
                        className: T.cardWrapper,
                        style: Q ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.YvY : R,
                            header: Z.NW.string(Z.t.q9n0TU),
                            completed: G,
                            onClick: q
                        })
                    },
                    'invite'
                )
            ),
        B &&
            el.push(
                (0, r.jsx)(
                    a.Z.div,
                    {
                        className: T.cardWrapper,
                        style: Q ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.$_T : k,
                            header: Z.NW.string(Z.t.c5kxPj),
                            completed: z,
                            onClick: K
                        })
                    },
                    'customize'
                )
            ),
        F &&
            el.push(
                (0, r.jsx)(
                    a.Z.div,
                    {
                        className: T.cardWrapper,
                        style: Q ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.qMX : M,
                            header: Z.NW.string(Z.t['SoP7+v']),
                            completed: V,
                            onClick: Y
                        })
                    },
                    'message'
                )
            ),
        (0, N.isWeb)() &&
            el.push(
                (0, r.jsx)(
                    a.Z.div,
                    {
                        className: T.cardWrapper,
                        style: Q ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.yIb : w,
                            header: Z.NW.string(Z.t.pGVNIy),
                            completed: H,
                            onClick: X
                        })
                    },
                    'download'
                )
            ),
        el.push(
            (0, r.jsx)(
                a.Z.div,
                {
                    className: T.cardWrapper,
                    style: Q ? { opacity: ee[el.length] } : {},
                    children: (0, r.jsx)(W, {
                        iconUrl: ei ? u.vdZ : A,
                        header: Z.NW.string(Z.t.IhHDEB),
                        completed: er,
                        onClick: J
                    })
                },
                'addapp'
            )
        ));
    let eo = x ? Z.NW.string(Z.t['1ach9P']) : Z.NW.string(Z.t['ezm+/v']);
    p && (eo = Z.NW.string(Z.t['gwyU/P']));
    let ea = ''.concat(O.Z.getArticleURL(I.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, r.jsx)(P.ZP, {
        channelId: t.id,
        children: (0, r.jsx)('div', {
            className: T.container,
            children: (0, r.jsxs)('div', {
                className: T.inner,
                children: [
                    (0, r.jsxs)(a.Z.div, {
                        style: $,
                        children: [
                            (0, r.jsx)(u.X6q, {
                                className: T.titleName,
                                variant: 'heading-xxl/semibold',
                                children: Z.NW.format(Z.t.rkHVKS, { guildName: l.name })
                            }),
                            (0, r.jsxs)(u.Text, {
                                color: 'header-secondary',
                                className: o()({
                                    [T.subtitle]: !0,
                                    [T.noChildren]: 0 === el.length
                                }),
                                variant: 'text-sm/normal',
                                children: [eo, ' ', el.length > 0 ? Z.NW.format(Z.t.UOtD39, { guideURL: ea }) : null]
                            })
                        ]
                    }),
                    el
                ]
            })
        })
    });
}
