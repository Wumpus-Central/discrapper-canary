n.d(t, {
    Z: function () {
        return D;
    },
    i: function () {
        return O;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
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
    C = n(330010),
    x = n(314897),
    v = n(430824),
    _ = n(594174),
    I = n(259580),
    E = n(585483),
    b = n(63063),
    Z = n(358085),
    N = n(709054),
    S = n(967128),
    T = n(981631),
    j = n(231873),
    A = n(388032),
    y = n(567522),
    P = n(881454),
    M = n(435921),
    R = n(538548),
    L = n(753033),
    k = n(15717);
function O(e) {
    let { className: t, iconUrl: n, icon: r, header: s, completed: o, onClick: c } = e,
        [u, p] = l.useState(!1),
        m = (0, h.Z)(o);
    return (
        l.useEffect(() => {
            null != m && o !== m && (p(!0), setTimeout(() => p(!1), 1000));
        }, [o, m]),
        (0, i.jsxs)(d.Clickable, {
            className: a()(t, y.card, { [y.completed]: o }),
            onClick: c,
            children: [
                null != r
                    ? r
                    : (0, i.jsx)('img', {
                          className: y.icon,
                          src: n,
                          alt: ''
                      }),
                (0, i.jsx)(d.Text, {
                    color: 'header-primary',
                    className: a()(y.cardTextContainer, y.cardHeader),
                    variant: 'text-sm/normal',
                    children: s
                }),
                o
                    ? (0, i.jsx)(d.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(y.checkmark, { [y.animate]: u })
                      })
                    : (0, i.jsx)(I.Z, {
                          className: y.arrow,
                          direction: I.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function D(e) {
    let { channel: t } = e,
        r = (0, o.e7)([v.Z], () => (null != t ? v.Z.getGuild(t.getGuildId()) : null), [t]),
        h = null != r && N.default.extractTimestamp(r.id) < Date.now() - T._8R,
        I = (0, o.e7)([x.default], () => (null == r ? void 0 : r.ownerId) === x.default.getId(), [r]),
        { canInvite: D, canManageGuild: w, canMessage: B } = (0, f.TE)(t, r),
        U = (0, o.e7)([_.default], () => {
            var e, t;
            return (null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = _.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: H, guildMessaged: G, guildPersonalized: F } = (0, f.h_)(r),
        {
            handleInvite: V,
            handleMessage: z,
            handlePersonalize: W,
            handleDownload: K,
            handleAddApplication: Y
        } = (function (e) {
            let t = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.INVITE
                    }),
                        null != e &&
                            (0, d.openModalLazy)(async () => {
                                let { default: t } = await Promise.all([n.e('7654'), n.e('86004')]).then(n.bind(n, 560114));
                                return (n) =>
                                    (0, i.jsx)(t, {
                                        ...n,
                                        guild: e,
                                        source: T.t4x.CHANNEL_WELCOME,
                                        analyticsLocation: { section: T.jXE.CHANNEL_WELCOME_CTA }
                                    });
                            });
                }, [e]),
                r = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.SEND_MESSAGE
                    }),
                        E.S.dispatch(T.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: T.lds
                        });
                }, []),
                a = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.PERSONALIZE_SERVER
                    }),
                        null != e && g.Z.open(e.id, T.pNK.OVERVIEW, { section: T.jXE.CHANNEL_WELCOME_CTA });
                }, [e]),
                s = l.useCallback(() => {
                    p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: j.Ft.CHANNEL_WELCOME,
                        action: j.j7.DOWNLOAD
                    }),
                        (0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    source: T.jXE.CHANNEL_WELCOME_CTA,
                                    ...t
                                });
                        });
                }, []);
            return {
                handleInvite: t,
                handleMessage: r,
                handlePersonalize: a,
                handleDownload: s,
                handleAddApplication: l.useCallback(() => {
                    null != e &&
                        (p.ZP.trackWithMetadata(T.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: j.Ft.CHANNEL_WELCOME,
                            action: j.j7.ADD_APP
                        }),
                        (0, d.openModalLazy)(async () => {
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
        })(r),
        q = !(U || H || G || F),
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
        })(q),
        [Q, $] = l.useState([]),
        ee = Q.length > 0,
        et = (0, m.Q3)('WelcomeArea');
    if (
        (l.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, C.i)(null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : T.lds);
                    $(t.map((e) => e.id));
                } catch {}
            })();
        }, [null == r ? void 0 : r.id]),
        null == r)
    )
        return null;
    let en = [];
    !h &&
        (D &&
            en.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: y.cardWrapper,
                        style: q ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.MailboxIllocon : R,
                            header: A.intl.string(A.t.q9n0TU),
                            completed: H,
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
                        style: q ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.PaintbrushIllocon : L,
                            header: A.intl.string(A.t.c5kxPj),
                            completed: F,
                            onClick: W
                        })
                    },
                    'customize'
                )
            ),
        B &&
            en.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: y.cardWrapper,
                        style: q ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.PaperAirplaneIllocon : k,
                            header: A.intl.string(A.t['SoP7+v']),
                            completed: G,
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
                        style: q ? { opacity: J[en.length] } : {},
                        children: (0, i.jsx)(O, {
                            iconUrl: et ? d.DownloadArrowIllocon : M,
                            header: A.intl.string(A.t.pGVNIy),
                            completed: U,
                            onClick: K
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
                    style: q ? { opacity: J[en.length] } : {},
                    children: (0, i.jsx)(O, {
                        iconUrl: et ? d.ActivitiesIllocon : P,
                        header: A.intl.string(A.t.IhHDEB),
                        completed: ee,
                        onClick: Y
                    })
                },
                'addapp'
            )
        ));
    let ei = I ? A.intl.string(A.t['1ach9P']) : A.intl.string(A.t['ezm+/v']);
    h && (ei = A.intl.string(A.t['gwyU/P']));
    let el = ''.concat(b.Z.getArticleURL(T.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, i.jsx)(S.ZP, {
        channelId: t.id,
        children: (0, i.jsx)('div', {
            className: y.container,
            children: (0, i.jsxs)('div', {
                className: y.inner,
                children: [
                    (0, i.jsxs)(s.Z.div, {
                        style: X,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                className: y.titleName,
                                variant: 'heading-xxl/semibold',
                                children: A.intl.format(A.t.rkHVKS, { guildName: r.name })
                            }),
                            (0, i.jsxs)(d.Text, {
                                color: 'header-secondary',
                                className: a()({
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
