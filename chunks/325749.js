t.d(n, { Z: () => E }), t(47120);
var i = t(200651),
    a = t(192379),
    r = t(120356),
    l = t.n(r),
    o = t(442837),
    d = t(481060),
    c = t(13245),
    u = t(753972),
    s = t(812206),
    p = t(726721),
    m = t(610394),
    v = t(695346),
    f = t(390322),
    h = t(961048),
    x = t(871499),
    _ = t(786915),
    Z = t(592125),
    j = t(271383),
    I = t(594174),
    C = t(51144),
    g = t(145597),
    b = t(214629),
    A = t(317381),
    P = t(884338),
    S = t(473179),
    N = t(981631),
    y = t(388032),
    k = t(124062);
let w = P.u.SIZE_24;
function E(e) {
    let { applicationId: n, channelId: t } = e,
        r = (0, o.e7)([s.Z], () => s.Z.getApplication(n)),
        E = (0, o.e7)([A.ZP], () => A.ZP.getSelfEmbeddedActivities().get(n)),
        R = (0, o.e7)([Z.Z], () => Z.Z.getChannel(t)),
        T = v.Sb.useSetting(),
        L = (0, o.Wu)(
            [j.ZP],
            () => {
                var e;
                return null == R || null == E ? [] : Array.from(null !== (e = E.userIds) && void 0 !== e ? e : []).map((e) => j.ZP.getMember(R.guild_id, e));
            },
            [E, R]
        ),
        B = a.useMemo(() => {
            let e = new Map();
            return (
                L.forEach((n) => {
                    null != n && void 0 !== n && e.set(n.userId, n);
                }),
                e
            );
        }, [L]),
        U = a.useCallback(
            (e, n) => {
                var t;
                if (null == e) return null;
                let a = B.get(e.id),
                    r = null !== (t = null == a ? void 0 : a.nick) && void 0 !== t ? t : C.ZP.getName(e);
                return (0, i.jsx)(
                    d.DY3,
                    {
                        text: r,
                        position: 'bottom',
                        children: (0, i.jsx)(
                            'img',
                            {
                                src: e.getAvatarURL(null == n ? void 0 : n.guild_id, w),
                                alt: r,
                                className: k.avatar
                            },
                            e.id
                        )
                    },
                    e.id
                );
            },
            [B]
        ),
        O = null == E ? void 0 : E.userIds,
        Y = (0, o.Wu)(
            [I.default],
            () =>
                Array.from(null != O ? O : [])
                    .map((e) => I.default.getUser(e))
                    .filter((e) => null != e),
            [O]
        ),
        z = p.Z.useExperiment({ location: 'activity_popout_overflow_menu' }, { autoTrackExposure: !0 }).enabled,
        D = a.useCallback(() => {
            let e = (0, g.QF)();
            c.Z.setInputLocked(!m.ZP.isInputLocked(e), e);
        }, []),
        G = (0, b.PR)();
    if (null == r || null == E) return null;
    let H = (0, i.jsx)(u.Z, {
        application: r,
        size: 24,
        className: k.appIcon
    });
    return (
        T &&
            (H = (0, i.jsx)(d.DY3, {
                text: E.compositeInstanceId,
                position: 'bottom',
                children: H
            })),
        (0, i.jsx)(d.f6W, {
            theme: N.BRd.DARK,
            children: (e) =>
                (0, i.jsxs)('div', {
                    className: l()(k.container, e),
                    children: [
                        (0, i.jsxs)('div', {
                            className: l()(k.headerSection, k.headerSectionLeft),
                            children: [
                                H,
                                (0, i.jsx)(d.Text, {
                                    variant: 'text-md/normal',
                                    color: 'header-primary',
                                    children: r.name
                                }),
                                (0, i.jsx)('div', {
                                    className: k.dotSpacer,
                                    children: (0, i.jsx)(d.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-muted',
                                        children: '.'
                                    })
                                }),
                                (0, i.jsx)(P.Z, {
                                    renderIcon: !1,
                                    users: Y,
                                    size: w,
                                    max: 6,
                                    className: k.userAvatars,
                                    renderUser: (e) => U(e, R)
                                })
                            ]
                        }),
                        (0, i.jsx)('div', {
                            className: l()(k.headerSection, k.headerSectionRight),
                            children: (0, i.jsxs)('div', {
                                className: k.actionButtonsContainer,
                                children: [
                                    (0, i.jsx)(_.Z, {
                                        appContext: N.IlC.POPOUT,
                                        applicationId: n,
                                        channel: R,
                                        shouldPrioritizeGroupPlusIcon: !0,
                                        embeddedActivity: E
                                    }),
                                    G
                                        ? (0, i.jsx)(x.Z, {
                                              onClick: D,
                                              iconComponent: d.epB,
                                              label: y.intl.string(y.t.mseZsL)
                                          })
                                        : null,
                                    z &&
                                        (0, i.jsx)(
                                            d.yRy,
                                            {
                                                position: 'bottom',
                                                renderPopout: (e) => {
                                                    let { closePopout: n } = e;
                                                    return (0, i.jsx)(f.Z, {
                                                        children: (0, i.jsx)(S.Z, {
                                                            application: r,
                                                            channelId: t,
                                                            onClose: n
                                                        })
                                                    });
                                                },
                                                children: (e, n) => {
                                                    let { isShown: t } = n;
                                                    return (0, a.createElement)(h.Z, {
                                                        ...e,
                                                        key: 'more-options',
                                                        isActive: t
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
