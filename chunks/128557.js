n.d(t, {
    Z: function () {
        return P;
    },
    i: function () {
        return y;
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
    m = n(644914),
    f = n(434404),
    g = n(330010),
    C = n(314897),
    x = n(430824),
    v = n(594174),
    _ = n(259580),
    I = n(585483),
    E = n(63063),
    b = n(358085),
    Z = n(709054),
    N = n(967128),
    S = n(981631),
    T = n(231873),
    j = n(388032),
    A = n(567522);
function y(e) {
    let { className: t, iconUrl: n, icon: r, header: s, completed: o, onClick: c } = e,
        [u, p] = l.useState(!1),
        m = (0, h.Z)(o);
    return (
        l.useEffect(() => {
            null != m && o !== m && (p(!0), setTimeout(() => p(!1), 1000));
        }, [o, m]),
        (0, i.jsxs)(d.Clickable, {
            className: a()(t, A.card, { [A.completed]: o }),
            onClick: c,
            children: [
                null != r
                    ? r
                    : (0, i.jsx)('div', {
                          className: A.icon,
                          style: { backgroundImage: "url('".concat(n, "')") }
                      }),
                (0, i.jsx)(d.Text, {
                    color: 'header-primary',
                    className: a()(A.cardTextContainer, A.cardHeader),
                    variant: 'text-sm/normal',
                    children: s
                }),
                o
                    ? (0, i.jsx)(d.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          className: a()(A.checkmark, { [A.animate]: u })
                      })
                    : (0, i.jsx)(_.Z, {
                          className: A.arrow,
                          direction: _.Z.Directions.RIGHT
                      })
            ]
        })
    );
}
function P(e) {
    let { channel: t } = e,
        r = (0, o.e7)([x.Z], () => (null != t ? x.Z.getGuild(t.getGuildId()) : null), [t]),
        h = null != r && Z.default.extractTimestamp(r.id) < Date.now() - S._8R,
        _ = (0, o.e7)([C.default], () => (null == r ? void 0 : r.ownerId) === C.default.getId(), [r]),
        { canInvite: P, canManageGuild: M, canMessage: R } = (0, m.TE)(t, r),
        L = (0, o.e7)([v.default], () => {
            var e, t;
            return (null === (e = v.default.getCurrentUser()) || void 0 === e ? void 0 : e.desktop) === !0 || (null === (t = v.default.getCurrentUser()) || void 0 === t ? void 0 : t.mobile) === !0;
        }),
        { guildPopulated: k, guildMessaged: O, guildPersonalized: D } = (0, m.h_)(r),
        {
            handleInvite: w,
            handleMessage: B,
            handlePersonalize: U,
            handleDownload: H,
            handleAddApplication: G
        } = (function (e) {
            let t = l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: T.Ft.CHANNEL_WELCOME,
                        action: T.j7.INVITE
                    }),
                        null != e &&
                            (0, d.openModalLazy)(async () => {
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
                r = l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: T.Ft.CHANNEL_WELCOME,
                        action: T.j7.SEND_MESSAGE
                    }),
                        I.S.dispatch(S.CkL.TEXTAREA_FOCUS, {
                            highlight: !0,
                            channelId: S.lds
                        });
                }, []),
                a = l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: T.Ft.CHANNEL_WELCOME,
                        action: T.j7.PERSONALIZE_SERVER
                    }),
                        null != e && f.Z.open(e.id, S.pNK.OVERVIEW, { section: S.jXE.CHANNEL_WELCOME_CTA });
                }, [e]),
                s = l.useCallback(() => {
                    p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: T.Ft.CHANNEL_WELCOME,
                        action: T.j7.DOWNLOAD
                    }),
                        (0, d.openModalLazy)(async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 431583));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    source: S.jXE.CHANNEL_WELCOME_CTA,
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
                        (p.ZP.trackWithMetadata(S.rMx.SERVER_SETUP_CTA_CLICKED, {
                            setup_type: T.Ft.CHANNEL_WELCOME,
                            action: T.j7.ADD_APP
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
        F = !(L || k || O || D),
        { titleAnimatedStyle: V, opacities: z } = (function (e) {
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
        })(F),
        [W, K] = l.useState([]),
        Y = W.length > 0;
    if (
        (l.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, g.i)(null !== (e = null == r ? void 0 : r.id) && void 0 !== e ? e : S.lds);
                    K(t.map((e) => e.id));
                } catch {}
            })();
        }, [null == r ? void 0 : r.id]),
        null == r)
    )
        return null;
    let q = [];
    !h &&
        (P &&
            q.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: A.cardWrapper,
                        style: F ? { opacity: z[q.length] } : {},
                        children: (0, i.jsx)(y, {
                            iconUrl: n(538548),
                            header: j.intl.string(j.t.q9n0TU),
                            completed: k,
                            onClick: w
                        })
                    },
                    'invite'
                )
            ),
        M &&
            q.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: A.cardWrapper,
                        style: F ? { opacity: z[q.length] } : {},
                        children: (0, i.jsx)(y, {
                            iconUrl: n(753033),
                            header: j.intl.string(j.t.c5kxPj),
                            completed: D,
                            onClick: U
                        })
                    },
                    'customize'
                )
            ),
        R &&
            q.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: A.cardWrapper,
                        style: F ? { opacity: z[q.length] } : {},
                        children: (0, i.jsx)(y, {
                            iconUrl: n(15717),
                            header: j.intl.string(j.t['SoP7+v']),
                            completed: O,
                            onClick: B
                        })
                    },
                    'message'
                )
            ),
        (0, b.isWeb)() &&
            q.push(
                (0, i.jsx)(
                    s.Z.div,
                    {
                        className: A.cardWrapper,
                        style: F ? { opacity: z[q.length] } : {},
                        children: (0, i.jsx)(y, {
                            iconUrl: n(435921),
                            header: j.intl.string(j.t.pGVNIy),
                            completed: L,
                            onClick: H
                        })
                    },
                    'download'
                )
            ),
        q.push(
            (0, i.jsx)(
                s.Z.div,
                {
                    className: A.cardWrapper,
                    style: F ? { opacity: z[q.length] } : {},
                    children: (0, i.jsx)(y, {
                        iconUrl: n(881454),
                        header: j.intl.string(j.t.IhHDEB),
                        completed: Y,
                        onClick: G
                    })
                },
                'addapp'
            )
        ));
    let X = _ ? j.intl.string(j.t['1ach9P']) : j.intl.string(j.t['ezm+/v']);
    h && (X = j.intl.string(j.t['gwyU/P']));
    let J = ''.concat(E.Z.getArticleURL(S.BhN.GUILD_GETTING_STARTED), '?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm');
    return (0, i.jsx)(N.ZP, {
        channelId: t.id,
        children: (0, i.jsx)('div', {
            className: A.container,
            children: (0, i.jsxs)('div', {
                className: A.inner,
                children: [
                    (0, i.jsxs)(s.Z.div, {
                        style: V,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                className: A.titleName,
                                variant: 'heading-xxl/semibold',
                                children: j.intl.format(j.t.rkHVKS, { guildName: r.name })
                            }),
                            (0, i.jsxs)(d.Text, {
                                color: 'header-secondary',
                                className: a()({
                                    [A.subtitle]: !0,
                                    [A.noChildren]: 0 === q.length
                                }),
                                variant: 'text-sm/normal',
                                children: [X, ' ', q.length > 0 ? j.intl.format(j.t.UOtD39, { guideURL: J }) : null]
                            })
                        ]
                    }),
                    q
                ]
            })
        })
    });
}
