n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    d = n(481060),
    c = n(13245),
    u = n(753972),
    s = n(812206),
    f = n(726721),
    p = n(610394),
    m = n(695346),
    h = n(390322),
    x = n(961048),
    v = n(871499),
    _ = n(786915),
    Z = n(592125),
    C = n(271383),
    b = n(594174),
    j = n(51144),
    I = n(145597),
    g = n(214629),
    S = n(317381),
    A = n(884338),
    y = n(473179),
    P = n(981631),
    N = n(388032),
    w = n(432132);
let k = A.u.SIZE_24;
function T(e) {
    let { applicationId: t, channelId: n } = e,
        l = (0, a.e7)([s.Z], () => s.Z.getApplication(t)),
        T = (0, a.e7)([S.ZP], () => S.ZP.getSelfEmbeddedActivities().get(t)),
        E = (0, a.e7)([Z.Z], () => Z.Z.getChannel(n)),
        R = m.Sb.useSetting(),
        L = (0, a.Wu)(
            [C.ZP],
            () => {
                var e;
                return null == E || null == T ? [] : Array.from(null !== (e = T.userIds) && void 0 !== e ? e : []).map((e) => C.ZP.getMember(E.guild_id, e));
            },
            [T, E]
        ),
        U = i.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((t) => {
                    null != t && void 0 !== t && e.set(t.userId, t);
                }),
                e
            );
        }, [L]),
        B = i.useCallback(
            (e, t) => {
                var n;
                if (null == e) return null;
                let i = U.get(e.id),
                    l = null !== (n = null == i ? void 0 : i.nick) && void 0 !== n ? n : j.ZP.getName(e);
                return (0, r.jsx)(
                    d.DY3,
                    {
                        text: l,
                        position: 'bottom',
                        children: (0, r.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == t ? void 0 : t.guild_id, k),
                                alt: l,
                                className: w.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [U]
        ),
        M = null == T ? void 0 : T.userIds,
        O = (0, a.Wu)(
            [b.default],
            () =>
                Array.from(null != M ? M : [])
                    .map((e) => b.default.getUser(e))
                    .filter((e) => null != e),
            [M]
        ),
        Y = f.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        z = i.useCallback(() => {
            let e = (0, I.QF)();
            c.Z.setInputLocked(!p.ZP.isInputLocked(e), e);
        }, []),
        D = (0, g.PR)();
    if (null == l || null == T) return null;
    let G = (0, r.jsx)(u.Z, {
        application: l,
        size: 24,
        className: w.appIcon
    });
    return (
        R &&
            (G = (0, r.jsx)(d.DY3, {
                text: T.compositeInstanceId,
                position: 'bottom',
                children: G
            })),
        (0, r.jsx)(d.f6W, {
            theme: P.BRd.DARK,
            children: (e) =>
                (0, r.jsxs)('div', {
                    className: o()(w.container, e),
                    children: [
                        (0, r.jsxs)('div', {
                            className: o()(w.headerSection, w.headerSectionLeft),
                            children: [
                                G,
                                (0, r.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    children: l.name
                                }),
                                (0, r.jsx)('div', {
                                    className: w.dotSpacer,
                                    children: (0, r.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, r.jsx)(A.Z, {
                                    renderIcon: !1,
                                    users: O,
                                    size: k,
                                    max: 6,
                                    className: w.userAvatars,
                                    renderUser: (e) => B(e, E)
                                })
                            ]
                        }),
                        (0, r.jsx)('div', {
                            className: o()(w.headerSection, w.headerSectionRight),
                            children: (0, r.jsxs)('div', {
                                className: w.actionButtonsContainer,
                                children: [
                                    (0, r.jsx)(_.Z, {
                                        appContext: P.IlC.POPOUT,
                                        applicationId: t,
                                        channel: E,
                                        shouldPrioritizeGroupPlusIcon: !0,
                                        embeddedActivity: T
                                    }),
                                    D
                                        ? (0, r.jsx)(v.Z, {
                                              onClick: z,
                                              iconComponent: d.epB,
                                              label: N.intl.string(N.t.mseZsL)
                                          })
                                        : null,
                                    Y &&
                                        (0, r.jsx)(
                                            d.yRy,
                                            {
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: t } = e;
                                                    return (0, r.jsx)(h.Z, {
                                                        children: (0, r.jsx)(y.Z, {
                                                            application: l,
                                                            channelId: n,
                                                            onClose: t
                                                        })
                                                    });
                                                },
                                                children: (e, t) => {
                                                    let { isShown: n } = t;
                                                    return (0, i.createElement)(x.Z, {
                                                        ...e,
                                                        key: 'more-options',
                                                        isActive: n
                                                    });
                                                }
                                            },
                                            'more-options-popout'
                                        )
                                ]
                            })
                        })
                    ]
                })
        })
    );
}
