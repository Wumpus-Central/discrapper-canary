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
    y = n(430824),
    x = n(594174),
    v = n(259580),
    j = n(585483),
    O = n(63063),
    E = n(358085),
    N = n(709054),
    I = n(967128),
    P = n(981631),
    S = n(231873),
    Z = n(388032),
    T = n(646863),
    A = n(881454),
    w = n(435921),
    R = n(538548),
    M = n(753033),
    k = n(15717);
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
                    : (0, r.jsx)(v.Z, {
                          className: T.arrow,
                          direction: v.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function U(e) {
    let { channel: t } = e,
        l = (0, s.e7)([y.Z], () => (null != t ? y.Z.getGuild(t.getGuildId()) : null), [t]),
        p = null != l && N.default.extractTimestamp(l.id) < Date.now() - P._8R,
        v = (0, s.e7)([C.default], () => (null == l ? void 0 : l.ownerId) === C.default.getId(), [l]),
        { canInvite: U, canManageGuild: B, canMessage: H } = (0, m.TE)(t, l),
        F = (0, s.e7)([x.default], () => {
            var e, t;
            return (null == (e = x.default.getCurrentUser()) ? void 0 : e.desktop) === !0 || (null == (t = x.default.getCurrentUser()) ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: G, guildMessaged: V, guildPersonalized: z } = (0, m.h_)(l),
        {
            handleInvite: Y,
            handleMessage: q,
            handlePersonalize: K,
            handleDownload: X,
            handleAddApplication: Q
        } = (function (e) {
            let t = i.useCallback(() => {
                    h.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.INVITE
                    }),
                        null != e &&
                            (0, u.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('96814')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, r.jsx)(
                                        t,
                                        D(L({}, n), {
                                            guild: e,
                                            source: P.t4x.CHANNEL_WELCOME,
                                            analyticsLocation: { section: P.jXE.CHANNEL_WELCOME_CTA }
                                        })
                                    );
                            });
                }, [e]),
                l = i.useCallback(() => {
                    h.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.SEND_MESSAGE
                    }),
                        j.S.dispatch(P.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: P.lds
                        });
                }, []),
                o = i.useCallback(() => {
                    h.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.PERSONALIZE_SERVER
                    }),
                        null != e && g.Z.open(e.id, (0, _.r)(e.id), { section: P.jXE.CHANNEL_WELCOME_CTA });
                }, [e]);
            return {
                handleInvite: t,
                handleMessage: l,
                handlePersonalize: o,
                handleDownload: i.useCallback(() => {
                    h.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: S.Ft.CHANNEL_WELCOME,
                        action: S.j7.DOWNLOAD
                    }),
                        (0, u.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) => (0, r.jsx)(e, L({ source: P.jXE.CHANNEL_WELCOME_CTA }, t));
                        });
                }, []),
                handleAddApplication: i.useCallback(() => {
                    null != e &&
                        (h.ZP.trackWithMetadata(P.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: S.Ft.CHANNEL_WELCOME,
                            action: S.j7.ADD_APP
                        }),
                        (0, u.ZDy)(async () => {
                            let { default: t } = await n.e('77046').then(n.bind(n, 272509));
                            return (n) => {
                                var i;
                                return (0, r.jsx)(t, D(L({ guildId: null != (i = e.id) ? i : '' }, n), { analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL }));
                            };
                        }));
                }, [e])
            };
        })(l),
        J = !(F || G || V || z),
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
        })(J),
        [et, en] = i.useState([]),
        er = et.length > 0,
        ei = (0, f.Q3)('WelcomeArea');
    if (
        (i.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, b.i)(null != (e = null == l ? void 0 : l.id) ? e : P.lds);
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
                        style: J ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.YvY : R,
                            header: Z.NW.string(Z.t.q9n0TU),
                            completed: G,
                            onClick: Y
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
                        style: J ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.$_T : M,
                            header: Z.NW.string(Z.t.c5kxPj),
                            completed: z,
                            onClick: K
                        })
                    },
                    'customize'
                )
            ),
        H &&
            el.push(
                (0, r.jsx)(
                    a.Z.div,
                    {
                        className: T.cardWrapper,
                        style: J ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.qMX : k,
                            header: Z.NW.string(Z.t['SoP7+v']),
                            completed: V,
                            onClick: q
                        })
                    },
                    'message'
                )
            ),
        (0, E.isWeb)() &&
            el.push(
                (0, r.jsx)(
                    a.Z.div,
                    {
                        className: T.cardWrapper,
                        style: J ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(W, {
                            iconUrl: ei ? u.yIb : w,
                            header: Z.NW.string(Z.t.pGVNIy),
                            completed: F,
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
                    style: J ? { opacity: ee[el.length] } : {},
                    children: (0, r.jsx)(W, {
                        iconUrl: ei ? u.vdZ : A,
                        header: Z.NW.string(Z.t.IhHDEB),
                        completed: er,
                        onClick: Q
                    })
                },
                'addapp'
            )
        ));
    let eo = v ? Z.NW.string(Z.t['1ach9P']) : Z.NW.string(Z.t['ezm+/v']);
    p && (eo = Z.NW.string(Z.t['gwyU/P']));
    let ea = ''.concat(O.Z.getArticleURL(P.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, r.jsx)(I.ZP, {
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
                                variant: ei ? 'heading-xxl/medium' : 'heading-xxl/bold',
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
