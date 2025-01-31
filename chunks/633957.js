n.d(t, { Z: () => w }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(846519),
    s = n(481060),
    o = n(2052),
    c = n(607070),
    d = n(317381),
    u = n(638880),
    m = n(122613),
    h = n(527805),
    _ = n(884338),
    p = n(100527),
    g = n(906732),
    f = n(783097),
    x = n(895924),
    E = n(311819),
    C = n(321231),
    v = n(758199),
    I = n(429551),
    N = n(973616),
    S = n(314897),
    T = n(592125),
    b = n(158776),
    A = n(594174),
    j = n(768581),
    y = n(70956),
    Z = n(823379),
    R = n(506071),
    L = n(226378),
    P = n(981631),
    k = n(701488),
    M = n(388032),
    O = n(273641);
let D = l.memo((e) => {
    let { start: t } = e,
        [n, i] = l.useState(0),
        s = (0, R.n)(),
        o = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        d = !1 === s || o;
    return (
        l.useEffect(() => {
            let e = new r.Xp();
            return (
                e.start(d ? 15 * y.Z.Millis.SECOND : y.Z.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / y.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [d, t]),
        (0, I.m)(n)
    );
});
D.displayName = 'ActivityRuntimeCounter';
let w = l.memo(function (e) {
    var t, n, r, c;
    let { application: I, channelId: y, guildId: R } = e,
        { analyticsLocations: w } = (0, g.ZP)(p.Z.ACTIVITY_INSTANCE_EMBED),
        F = (0, o.O)(),
        U = (0, a.e7)([T.Z], () => T.Z.getChannel(y), [y]),
        B = (null == U ? void 0 : null === (t = U.isThread) || void 0 === t ? void 0 : t.call(U)) ? (null == U ? void 0 : U.parent_id) : y,
        G = (0, a.e7)([S.default], () => S.default.getId()),
        {
            embeddedActivity: H,
            currentEmbeddedActivity: V,
            activityLaunchState: z
        } = (0, a.cj)(
            [d.ZP],
            () => ({
                embeddedActivity: d.ZP.getEmbeddedActivitiesForChannel(null != B ? B : '').find((e) => e.applicationId === I.id),
                currentEmbeddedActivity: d.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: d.ZP.getLaunchState(I.id, null != B ? B : void 0)
            }),
            [B, I.id]
        ),
        W = null == H ? void 0 : H.userIds,
        K = (0, a.Wu)(
            [A.default],
            () =>
                Array.from(null != W ? W : [])
                    .map((e) => A.default.getUser(e))
                    .filter(Z.lm),
            [W]
        ),
        Y = (0, a.e7)(
            [b.Z],
            () => {
                if (null == W) return null;
                for (let e of W) {
                    let t = b.Z.findActivity(e, (e) => e.application_id === I.id);
                    if (null != t) return t;
                }
                return null;
            },
            [I.id, W]
        ),
        X = null == Y ? void 0 : Y.details,
        q = l.useMemo(() => {
            let e = new N.ZP(I);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.wT), e;
        }, [I]),
        Q = (0, h.s5)({
            userId: G,
            channelId: y,
            application: q
        }),
        J = null == H,
        $ = (0, L.NL)({
            embeddedActivity: H,
            joinability: Q,
            currentEmbeddedActivity: V,
            channel: U
        }),
        ee = l.useId(),
        et = null != z && z.isLaunching && z.componentId === ee,
        en = async () => {
            J
                ? await (0, m.Z)({
                      targetApplicationId: I.id,
                      channelId: y,
                      locationObject: F.location,
                      analyticsLocations: w,
                      componentId: ee,
                      commandOrigin: x.bB.ACTIVITY_INSTANCE_EMBED
                  })
                : await (0, u.Z)({
                      applicationId: H.applicationId,
                      activityChannelId: y,
                      locationObject: F.location,
                      analyticsLocations: w,
                      componentId: ee
                  });
        },
        ei = $.disabled ? M.intl.string(M.t.JBnc7O) : M.intl.string(M.t.cX9uLS),
        { enabled: el } = C.G.useExperiment({ location: 'EmbeddedActivityInstanceEmbed' });
    if (el) {
        let e;
        let t = j.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: I.bot
        });
        $.disabled && (e = null !== (r = $.tooltip) && void 0 !== r ? r : $.text);
        let l = A.default.getCurrentUser(),
            a = K.length,
            o = null !== (c = null == Y ? void 0 : null === (n = Y.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== c ? c : null == Y ? void 0 : Y.created_at,
            d = J ? ei : null != X ? X : M.intl.string(M.t.oQn0h4),
            u = (function (e) {
                switch (null == e ? void 0 : e.type) {
                    case P.IIU.STREAMING:
                        return {
                            text: M.intl.string(M.t['Jpkr/v']),
                            Icon: s.m3e
                        };
                    case P.IIU.LISTENING:
                        return {
                            text: M.intl.string(M.t.kUEnxM),
                            Icon: s.RZG
                        };
                    default:
                        return {
                            text: M.intl.string(M.t.BMTj29),
                            Icon: s.iWm
                        };
                }
            })(Y);
        return (0, i.jsx)(v.W, {
            header: I.name,
            title: d,
            iconSrc: t,
            embedUrl: (0, E.H)({
                applicationId: I.id,
                referrerId: null == l ? void 0 : l.id
            }),
            info: (0, i.jsxs)('div', {
                className: O.infoWrapper,
                children: [
                    null != X &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != o &&
                                (0, i.jsxs)('div', {
                                    className: O.activityTimer,
                                    children: [
                                        (0, i.jsx)(u.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, i.jsx)(D, { start: o })
                                    ]
                                })
                        }),
                    a > 0 &&
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(_.Z, {
                                guildId: R,
                                users: K,
                                max: 6,
                                size: _.u.SIZE_16,
                                extraDetail: (0, i.jsxs)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    className: O.activePlayingText,
                                    children: [a, ' ', u.text]
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
                        (0, f.X)(I.id);
                    }
                }
            ]
        });
    }
    return (0, i.jsx)('div', {
        className: O.container,
        children: (0, i.jsxs)('div', {
            className: O.contentContainer,
            children: [
                (0, i.jsx)('div', {
                    className: O.headerContainer,
                    children: J
                        ? (0, i.jsx)('div', {
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  children: ei
                              })
                          })
                        : (0, i.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != X ? X : M.intl.string(M.t.oQn0h4)
                          })
                }),
                (0, i.jsxs)('div', {
                    className: O.footerContainer,
                    children: [
                        (0, i.jsx)(s.ua7, {
                            text: $.tooltip,
                            tooltipContentClassName: O.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, l.createElement)(
                                    s.zxk,
                                    {
                                        ...n,
                                        key: ''.concat($.isJoinAction),
                                        onClick: () => {
                                            en(), null == t || t();
                                        },
                                        color: $.isJoinAction ? s.Ttl.GREEN : s.Ttl.PRIMARY,
                                        submitting: et,
                                        disabled: $.disabled
                                    },
                                    $.text
                                );
                            }
                        }),
                        !J &&
                            (0, i.jsx)(_.Z, {
                                guildId: R,
                                users: K,
                                max: 4,
                                size: _.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
});
