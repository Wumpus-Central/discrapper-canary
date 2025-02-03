n.d(t, {
    Z: () => w,
    i: () => D
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(748780),
    o = n(442837),
    c = n(704215),
    d = n(481060),
    u = n(211266),
    h = n(699682),
    p = n(367907),
    m = n(540059),
    f = n(644914),
    g = n(434404),
    _ = n(330010),
    C = n(978946),
    x = n(314897),
    v = n(430824),
    E = n(594174),
    I = n(259580),
    b = n(585483),
    Z = n(63063),
    N = n(358085),
    T = n(709054),
    S = n(967128),
    j = n(981631),
    A = n(231873),
    y = n(388032),
    P = n(567522),
    R = n(881454),
    M = n(435921),
    L = n(538548),
    k = n(753033),
    O = n(15717);
function D(e) {
    let { className: t, iconUrl: n, icon: a, header: s, completed: o, onClick: c } = e,
        [u, p] = l.useState(!1),
        m = (0, h.Z)(o);
    return (
        l.useEffect(() => {
            null != m && o !== m && (p(!0), setTimeout(() => p(!1), 1000));
        }, [o, m]),
        (0, i.jsxs)(d.P3F, {
            className: r()(t, P.card, { [P.completed]: o }),
            onClick: c,
            children: [
                null != a
                    ? a
                    : (0, i.jsx)('img', {
                          className: P.icon,
                          src: n,
                          alt: ''
                      }),
                (0, i.jsx)(d.Text, {
                    color: 'header-primary',
                    className: r()(P.cardTextContainer, P.cardHeader),
                    variant: 'text-sm/normal',
                    children: s
                }),
                o
                    ? (0, i.jsx)(d.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: r()(P.checkmark, { [P.animate]: u })
                      })
                    : (0, i.jsx)(I.Z, {
                          className: P.arrow,
                          direction: I.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function w(e) {
    let { channel: t } = e,
        a = (0, o.e7)([v.Z], () => (null != t ? v.Z.getGuild(t.getGuildId()) : null), [t]),
        h = null != a && T.default.extractTimestamp(a.id) < Date.now() - j._8R,
        I = (0, o.e7)([x.default], () => (null == a ? void 0 : a.ownerId) === x.default.getId(), [a]),
        { canInvite: w, canManageGuild: U, canMessage: B } = (0, f.TE)(t, a),
        F = (0, o.e7)([E.default], () => {
            var e, t;
            return (null === (e = E.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: H, guildMessaged: G, guildPersonalized: V } = (0, f.h_)(a),
        {
            handleInvite: z,
            handleMessage: W,
            handlePersonalize: Y,
            handleDownload: q,
            handleAddApplication: K
        } = (function (e) {
            let t = l.useCallback(() => {
                    p.ZP.trackWithMetadata(j.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: A.Ft.CHANNEL_WELCOME,
                        action: A.j7.INVITE
                    }),
                        null != e &&
                            (0, d.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        guild: e,
                                        source: j.t4x.CHANNEL_WELCOME,
                                        analyticsLocation: { section: j.jXE.CHANNEL_WELCOME_CTA }
                                    });
                            });
                }, [e]),
                a = l.useCallback(() => {
                    p.ZP.trackWithMetadata(j.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: A.Ft.CHANNEL_WELCOME,
                        action: A.j7.SEND_MESSAGE
                    }),
                        b.S.dispatch(j.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: j.lds
                        });
                }, []),
                r = l.useCallback(() => {
                    p.ZP.trackWithMetadata(j.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: A.Ft.CHANNEL_WELCOME,
                        action: A.j7.PERSONALIZE_SERVER
                    }),
                        null != e && g.Z.open(e.id, (0, C.r)(e.id), { section: j.jXE.CHANNEL_WELCOME_CTA });
                }, [e]);
            return {
                handleInvite: t,
                handleMessage: a,
                handlePersonalize: r,
                handleDownload: l.useCallback(() => {
                    p.ZP.trackWithMetadata(j.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: A.Ft.CHANNEL_WELCOME,
                        action: A.j7.DOWNLOAD
                    }),
                        (0, d.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    source: j.jXE.CHANNEL_WELCOME_CTA,
                                    ...t
                                });
                        });
                }, []),
                handleAddApplication: l.useCallback(() => {
                    null != e &&
                        (p.ZP.trackWithMetadata(j.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: A.Ft.CHANNEL_WELCOME,
                            action: A.j7.ADD_APP
                        }),
                        (0, d.ZDy)(async () => {
                            let { default: t } = await n.e('77875').then(n.bind(n, 657300));
                            return (n) => {
                                var l;
                                return (0, i.jsx)(t, {
                                    guildId: null !== (l = e.id) && void 0 !== l ? l : '',
                                    ...n,
                                    analyticsType: c.z.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL
                                });
                            };
                        }));
                }, [e])
            };
        })(a),
        X = !(F || H || G || V),
        { titleAnimatedStyle: J, opacities: Q } = (function (e) {
            let t = (0, u.Z)(() => new s.Z.Value(0)),
                n = (0, u.Z)(() => new s.Z.Value(0)),
                i = (0, u.Z)(() => [new s.Z.Value(0), new s.Z.Value(0), new s.Z.Value(0), new s.Z.Value(0)]);
            return (
                l.useEffect(() => {
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
                            s.Z.timing(i[0], {
                                toValue: 1,
                                duration: 300
                            }),
                            s.Z.timing(i[1], {
                                toValue: 1,
                                duration: 300
                            }),
                            s.Z.timing(i[2], {
                                toValue: 1,
                                duration: 300
                            }),
                            s.Z.timing(i[3], {
                                toValue: 1,
                                duration: 300
                            })
                        ])
                    ]).start();
                }, [n, t, i]),
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
                    opacities: i
                }
            );
        })(X),
        [$, ee] = l.useState([]),
        et = $.length > 0,
        en = (0, m.Q3)('WelcomeArea');
    if (
        (l.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, _.i)(null !== (e = null == a ? void 0 : a.id) && void 0 !== e ? e : j.lds);
                    ee(t.map((e) => e.id));
                } catch {}
            })();
        }, [null == a ? void 0 : a.id]),
        null == a)
    )
        return null;
    let ei = [];
    h ||
        (w &&
            ei.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: P.cardWrapper,
                        style: X ? { opacity: Q[ei.length] } : {},
                        children: (0, i.jsx)(D, {
                            iconUrl: en ? d.YvY : L,
                            header: y.intl.string(y.t.q9n0TU),
                            completed: H,
                            onClick: z
                        })
                    },
                    'invite'
                )
            ),
        U &&
            ei.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: P.cardWrapper,
                        style: X ? { opacity: Q[ei.length] } : {},
                        children: (0, i.jsx)(D, {
                            iconUrl: en ? d.$_T : k,
                            header: y.intl.string(y.t.c5kxPj),
                            completed: V,
                            onClick: Y
                        })
                    },
                    'customize'
                )
            ),
        B &&
            ei.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: P.cardWrapper,
                        style: X ? { opacity: Q[ei.length] } : {},
                        children: (0, i.jsx)(D, {
                            iconUrl: en ? d.qMX : O,
                            header: y.intl.string(y.t['SoP7+v']),
                            completed: G,
                            onClick: W
                        })
                    },
                    'message'
                )
            ),
        (0, N.isWeb)() &&
            ei.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: P.cardWrapper,
                        style: X ? { opacity: Q[ei.length] } : {},
                        children: (0, i.jsx)(D, {
                            iconUrl: en ? d.yIb : M,
                            header: y.intl.string(y.t.pGVNIy),
                            completed: F,
                            onClick: q
                        })
                    },
                    'download'
                )
            ),
        ei.push(
            (0, i.jsx)(
                s.Z.div,
                {
                    className: P.cardWrapper,
                    style: X ? { opacity: Q[ei.length] } : {},
                    children: (0, i.jsx)(D, {
                        iconUrl: en ? d.vdZ : R,
                        header: y.intl.string(y.t.IhHDEB),
                        completed: et,
                        onClick: K
                    })
                },
                'addapp'
            )
        ));
    let el = I ? y.intl.string(y.t['1ach9P']) : y.intl.string(y.t['ezm+/v']);
    h && (el = y.intl.string(y.t['gwyU/P']));
    let ea = ''.concat(Z.Z.getArticleURL(j.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, i.jsx)(S.ZP, {
        channelId: t.id,
        children: (0, i.jsx)('div', {
            className: P.container,
            children: (0, i.jsxs)('div', {
                className: P.inner,
                children: [
                    (0, i.jsxs)(s.Z.div, {
                        style: J,
                        children: [
                            (0, i.jsx)(d.X6q, {
                                className: P.titleName,
                                variant: 'heading-xxl/semibold',
                                children: y.intl.format(y.t.rkHVKS, { guildName: a.name })
                            }),
                            (0, i.jsxs)(d.Text, {
                                color: 'header-secondary',
                                className: r()({
                                    [P.subtitle]: !0,
                                    [P.noChildren]: 0 === ei.length
                                }),
                                variant: 'text-sm/normal',
                                children: [el, ' ', ei.length > 0 ? y.intl.format(y.t.UOtD39, { guideURL: ea }) : null]
                            })
                        ]
                    }),
                    ei
                ]
            })
        })
    });
}
