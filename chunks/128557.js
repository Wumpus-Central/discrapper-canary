n.d(t, {
    Z: () => D,
    i: () => O
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
    C = n(314897),
    x = n(430824),
    v = n(594174),
    E = n(259580),
    I = n(585483),
    b = n(63063),
    Z = n(358085),
    N = n(709054),
    T = n(967128),
    S = n(981631),
    j = n(231873),
    A = n(388032),
    y = n(567522),
    P = n(881454),
    R = n(435921),
    M = n(538548),
    L = n(753033),
    k = n(15717);
function O(e) {
    let { className: t, iconUrl: n, icon: a, header: s, completed: o, onClick: c } = e,
        [u, p] = l.useState(!1),
        m = (0, h.Z)(o);
    return (
        l.useEffect(() => {
            null != m && o !== m && (p(!0), setTimeout(() => p(!1), 1000));
        }, [o, m]),
        (0, i.jsxs)(d.P3F, {
            className: r()(t, y.card, { [y.completed]: o }),
            onClick: c,
            children: [
                null != a
                    ? a
                    : (0, i.jsx)('img', {
                          className: y.icon,
                          src: n,
                          alt: ''
                      }),
                (0, i.jsx)(d.Text, {
                    color: 'header-primary',
                    className: r()(y.cardTextContainer, y.cardHeader),
                    variant: 'text-sm/normal',
                    children: s
                }),
                o
                    ? (0, i.jsx)(d.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          className: r()(y.checkmark, { [y.animate]: u })
                      })
                    : (0, i.jsx)(E.Z, {
                          className: y.arrow,
                          direction: E.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function D(e) {
    let { channel: t } = e,
        a = (0, o.e7)([x.Z], () => (null != t ? x.Z.getGuild(t.getGuildId()) : null), [t]),
        h = null != a && N.default.extractTimestamp(a.id) < Date.now() - S._8R,
        E = (0, o.e7)([C.default], () => (null == a ? void 0 : a.ownerId) === C.default.getId(), [a]),
        { canInvite: D, canManageGuild: w, canMessage: U } = (0, f.TE)(t, a),
        B = (0, o.e7)([v.default], () => {
            var e, t;
            return (null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: F, guildMessaged: H, guildPersonalized: G } = (0, f.h_)(a),
        {
            handleInvite: V,
            handleMessage: z,
            handlePersonalize: W,
            handleDownload: Y,
            handleAddApplication: q
        } = (function (e) {
            let t = l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.INVITE
                    }),
                        null != e &&
                            (0, d.ZDy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        guild: e,
                                        source: S.t4x.CHANNEL_WELCOME,
                                        analyticsLocation: { section: S.jXE.CHANNEL_WELCOME_CTA }
                                    });
                            });
                }, [e]),
                a = l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.SEND_MESSAGE
                    }),
                        I.S.dispatch(S.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: S.lds
                        });
                }, []),
                r = l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.PERSONALIZE_SERVER
                    }),
                        null != e && g.Z.open(e.id, S.pNK.OVERVIEW, { section: S.jXE.CHANNEL_WELCOME_CTA });
                }, [e]);
            return {
                handleInvite: t,
                handleMessage: a,
                handlePersonalize: r,
                handleDownload: l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.DOWNLOAD
                    }),
                        (0, d.ZDy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    source: S.jXE.CHANNEL_WELCOME_CTA,
                                    ...t
                                });
                        });
                }, []),
                handleAddApplication: l.useCallback(() => {
                    null != e &&
                        (p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: j.Ft.CHANNEL_WELCOME,
                            action: j.j7.ADD_APP
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
        K = !(B || F || H || G),
        { titleAnimatedStyle: X, opacities: J } = (function (e) {
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
        })(K),
        [Q, $] = l.useState([]),
        ee = Q.length > 0,
        et = (0, m.Q3)('WelcomeArea');
    if (
        (l.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, _.i)(null !== (e = null == a ? void 0 : a.id) && void 0 !== e ? e : S.lds);
                    $(t.map((e) => e.id));
                } catch {}
            })();
        }, [null == a ? void 0 : a.id]),
        null == a)
    )
        return null;
    let en = [];
    h ||
        (D &&
            en.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: y.cardWrapper,
                        style: K ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.YvY : M,
                            header: A.intl.string(A.t.q9n0TU),
                            completed: F,
                            onClick: V
                        })
                    },
                    'invite'
                )
            ),
        w &&
            en.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: y.cardWrapper,
                        style: K ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.$_T : L,
                            header: A.intl.string(A.t.c5kxPj),
                            completed: G,
                            onClick: W
                        })
                    },
                    'customize'
                )
            ),
        U &&
            en.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: y.cardWrapper,
                        style: K ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.qMX : k,
                            header: A.intl.string(A.t['SoP7+v']),
                            completed: H,
                            onClick: z
                        })
                    },
                    'message'
                )
            ),
        (0, Z.isWeb)() &&
            en.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: y.cardWrapper,
                        style: K ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.yIb : R,
                            header: A.intl.string(A.t.pGVNIy),
                            completed: B,
                            onClick: Y
                        })
                    },
                    'download'
                )
            ),
        en.push(
            (0, i.jsx)(
                s.Z.div,
                {
                    className: y.cardWrapper,
                    style: K ? { opacity: J[en.length] } : {},
                    children: (0, i.jsx)(O, {
                        iconUrl: et ? d.vdZ : P,
                        header: A.intl.string(A.t.IhHDEB),
                        completed: ee,
                        onClick: q
                    })
                },
                'addapp'
            )
        ));
    let ei = E ? A.intl.string(A.t['1ach9P']) : A.intl.string(A.t['ezm+/v']);
    h && (ei = A.intl.string(A.t['gwyU/P']));
    let el = ''.concat(b.Z.getArticleURL(S.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, i.jsx)(T.ZP, {
        channelId: t.id,
        children: (0, i.jsx)('div', {
            className: y.container,
            children: (0, i.jsxs)('div', {
                className: y.inner,
                children: [
                    (0, i.jsxs)(s.Z.div, {
                        style: X,
                        children: [
                            (0, i.jsx)(d.X6q, {
                                className: y.titleName,
                                variant: 'heading-xxl/semibold',
                                children: A.intl.format(A.t.rkHVKS, { guildName: a.name })
                            }),
                            (0, i.jsxs)(d.Text, {
                                color: 'header-secondary',
                                className: r()({
                                    [y.subtitle]: !0,
                                    [y.noChildren]: 0 === en.length
                                }),
                                variant: 'text-sm/normal',
                                children: [ei, ' ', en.length > 0 ? A.intl.format(A.t.UOtD39, { guideURL: el }) : null]
                            })
                        ]
                    }),
                    en
                ]
            })
        })
    });
}
