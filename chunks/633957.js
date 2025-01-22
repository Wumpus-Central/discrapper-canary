n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(846519),
    o = n(481060),
    s = n(2052),
    c = n(607070),
    u = n(317381),
    d = n(638880),
    m = n(122613),
    h = n(527805),
    f = n(884338),
    p = n(100527),
    _ = n(906732),
    g = n(783097),
    E = n(895924),
    C = n(311819),
    I = n(321231),
    x = n(758199),
    N = n(429551),
    v = n(973616),
    T = n(314897),
    S = n(592125),
    A = n(158776),
    b = n(594174),
    j = n(768581),
    R = n(70956),
    Z = n(823379),
    P = n(506071),
    L = n(226378),
    y = n(981631),
    O = n(701488),
    M = n(388032),
    D = n(273641);
let k = r.memo((e) => {
    let { start: t } = e,
        [n, i] = r.useState(0),
        o = (0, P.n)(),
        s = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        u = !1 === o || s;
    return (
        r.useEffect(() => {
            let e = new a.Xp();
            return (
                e.start(u ? 15 * R.Z.Millis.SECOND : R.Z.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / R.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [u, t]),
        (0, N.m)(n)
    );
});
k.displayName = 'ActivityRuntimeCounter';
t.Z = r.memo(function (e) {
    var t, n, a, c;
    let { application: N, channelId: R, guildId: P } = e,
        { analyticsLocations: U } = (0, _.ZP)(p.Z.ACTIVITY_INSTANCE_EMBED),
        B = (0, s.O)(),
        w = (0, l.e7)([S.Z], () => S.Z.getChannel(R), [R]),
        F = (null == w ? void 0 : null === (t = w.isThread) || void 0 === t ? void 0 : t.call(w)) ? (null == w ? void 0 : w.parent_id) : R,
        G = (0, l.e7)([T.default], () => T.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: H,
            activityLaunchState: z
        } = (0, l.cj)(
            [u.ZP],
            () => ({
                embeddedActivity: u.ZP.getEmbeddedActivitiesForChannel(null != F ? F : '').find((e) => e.applicationId === N.id),
                currentEmbeddedActivity: u.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: u.ZP.getLaunchState(N.id, null != F ? F : void 0)
            }),
            [F, N.id]
        ),
        W = null == V ? void 0 : V.userIds,
        K = (0, l.Wu)(
            [b.default],
            () =>
                Array.from(null != W ? W : [])
                    .map((e) => b.default.getUser(e))
                    .filter(Z.lm),
            [W]
        ),
        Y = (0, l.e7)(
            [A.Z],
            () => {
                if (null == W) return null;
                for (let e of W) {
                    let t = A.Z.findActivity(e, (e) => e.application_id === N.id);
                    if (null != t) return t;
                }
                return null;
            },
            [N.id, W]
        ),
        X = null == Y ? void 0 : Y.details,
        Q = r.useMemo(() => {
            let e = new v.ZP(N);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = O.wT), e;
        }, [N]),
        q = (0, h.s5)({
            userId: G,
            channelId: R,
            application: Q
        }),
        J = null == V,
        $ = (0, L.NL)({
            embeddedActivity: V,
            joinability: q,
            currentEmbeddedActivity: H,
            channel: w
        }),
        ee = r.useId(),
        et = null != z && z.isLaunching && z.componentId === ee,
        en = async () => {
            J
                ? await (0, m.Z)({
                      targetApplicationId: N.id,
                      channelId: R,
                      locationObject: B.location,
                      analyticsLocations: U,
                      componentId: ee,
                      commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, d.Z)({
                      applicationId: V.applicationId,
                      activityChannelId: R,
                      locationObject: B.location,
                      analyticsLocations: U,
                      componentId: ee
                  });
        },
        ei = $.disabled ? M.intl.string(M.t.JBnc7O) : M.intl.string(M.t.cX9uLS),
        { enabled: er } = I.G.useExperiment({ location: 'EmbeddedActivityInstanceEmbed' });
    if (er) {
        let e;
        let t = j.ZP.getApplicationIconURL({
            id: N.id,
            icon: N.icon,
            bot: N.bot
        });
        $.disabled && (e = null !== (a = $.tooltip) && void 0 !== a ? a : $.text);
        let r = K.length,
            l = null !== (c = null == Y ? void 0 : null === (n = Y.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== c ? c : null == Y ? void 0 : Y.created_at,
            s = J ? ei : null != X ? X : M.intl.string(M.t.oQn0h4),
            u = (function (e) {
                switch (null == e ? void 0 : e.type) {
                    case y.IIU.STREAMING:
                        return {
                            text: M.intl.string(M.t['Jpkr/v']),
                            Icon: o.ScreenStreamIcon
                        };
                    case y.IIU.LISTENING:
                        return {
                            text: M.intl.string(M.t.kUEnxM),
                            Icon: o.MusicIcon
                        };
                    default:
                        return {
                            text: M.intl.string(M.t.BMTj29),
                            Icon: o.GameControllerIcon
                        };
                }
            })(Y);
        return (0, i.jsx)(x.W, {
            header: N.name,
            title: s,
            iconSrc: t,
            embedUrl: (0, C.H)({ applicationId: N.id }),
            info: (0, i.jsxs)('div', {
                className: D.infoWrapper,
                children: [
                    null != X &&
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'always-white',
                            children:
                                null != l &&
                                (0, i.jsxs)('div', {
                                    className: D.activityTimer,
                                    children: [
                                        (0, i.jsx)(u.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, i.jsx)(k, { start: l })
                                    ]
                                })
                        }),
                    r > 0 &&
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(f.Z, {
                                guildId: P,
                                users: K,
                                max: 6,
                                size: f.u.SIZE_16,
                                extraDetail: (0, i.jsxs)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'always-white',
                                    className: D.activePlayingText,
                                    children: [r, ' ', u.text]
                                })
                            })
                        })
                ]
            }),
            actions: [
                {
                    label: J ? M.intl.string(M.t.RscU7O) : M.intl.string(M.t.VJlc0d),
                    onClick: en,
                    disabledReason: e,
                    submitting: et
                },
                {
                    label: 'View',
                    onClick() {
                        (0, g.X)(N.id);
                    }
                }
            ]
        });
    }
    return (0, i.jsx)('div', {
        className: D.container,
        children: (0, i.jsxs)('div', {
            className: D.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: D.headerContainer,
                    children: J
                        ? (0, i.jsx)('div', {
                              children: (0, i.jsx)(o.Text, {
                                  variant: 'text-md/medium',
                                  children: ei
                              })
                          })
                        : (0, i.jsx)(o.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != X ? X : M.intl.string(M.t.oQn0h4)
                          })
                }),
                (0, i.jsxs)('div', {
                    className: D.footerContainer,
                    children: [
                        (0, i.jsx)(o.Tooltip, {
                            text: $.tooltip,
                            tooltipContentClassName: D.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, r.createElement)(
                                    o.Button,
                                    {
                                        ...n,
                                        key: ''.concat($.isJoinAction),
                                        onClick: () => {
                                            en(), null == t || t();
                                        },
                                        color: $.isJoinAction ? o.ButtonColors.GREEN : o.ButtonColors.PRIMARY,
                                        submitting: et,
                                        disabled: $.disabled
                                    },
                                    $.text
                                );
                            }
                        }),
                        !J &&
                            (0, i.jsx)(f.Z, {
                                guildId: P,
                                users: K,
                                max: 4,
                                size: f.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
});
