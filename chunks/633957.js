n.d(t, { Z: () => F }), n(47120);
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
    _ = n(527805),
    h = n(884338),
    p = n(100527),
    g = n(906732),
    f = n(783097),
    x = n(895924),
    C = n(311819),
    v = n(321231),
    E = n(758199),
    I = n(429551),
    N = n(973616),
    S = n(314897),
    T = n(592125),
    b = n(158776),
    A = n(594174),
    j = n(626135),
    y = n(768581),
    Z = n(70956),
    R = n(823379),
    L = n(506071),
    P = n(226378),
    k = n(981631),
    M = n(701488),
    O = n(388032),
    D = n(194804);
let w = l.memo((e) => {
    let { start: t } = e,
        [n, i] = l.useState(0),
        s = (0, L.n)(),
        o = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        d = !1 === s || o;
    return (
        l.useEffect(() => {
            let e = new r.Xp();
            return (
                e.start(d ? 15 * Z.Z.Millis.SECOND : Z.Z.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / Z.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [d, t]),
        (0, I.m)(n)
    );
});
w.displayName = 'ActivityRuntimeCounter';
let F = l.memo(function (e) {
    var t, n, r, c;
    let { application: I, channelId: Z, guildId: L } = e,
        { analyticsLocations: F } = (0, g.ZP)(p.Z.ACTIVITY_INSTANCE_EMBED),
        U = (0, o.O)(),
        B = (0, a.e7)([T.Z], () => T.Z.getChannel(Z), [Z]),
        G = (null == B ? void 0 : null === (t = B.isThread) || void 0 === t ? void 0 : t.call(B)) ? (null == B ? void 0 : B.parent_id) : Z,
        H = (0, a.e7)([S.default], () => S.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: z,
            activityLaunchState: W
        } = (0, a.cj)(
            [d.ZP],
            () => ({
                embeddedActivity: d.ZP.getEmbeddedActivitiesForChannel(null != G ? G : '').find((e) => e.applicationId === I.id),
                currentEmbeddedActivity: d.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: d.ZP.getLaunchState(I.id, null != G ? G : void 0)
            }),
            [G, I.id]
        ),
        K = null == V ? void 0 : V.userIds,
        Y = (0, a.Wu)(
            [A.default],
            () =>
                Array.from(null != K ? K : [])
                    .map((e) => A.default.getUser(e))
                    .filter(R.lm),
            [K]
        ),
        X = (0, a.e7)(
            [b.Z],
            () => {
                if (null == K) return null;
                for (let e of K) {
                    let t = b.Z.findActivity(e, (e) => e.application_id === I.id);
                    if (null != t) return t;
                }
                return null;
            },
            [I.id, K]
        ),
        q = null == X ? void 0 : X.details,
        Q = l.useMemo(() => {
            let e = new N.ZP(I);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.wT), e;
        }, [I]),
        J = (0, _.s5)({
            userId: H,
            channelId: Z,
            application: Q
        }),
        $ = null == V,
        ee = (0, P.NL)({
            embeddedActivity: V,
            joinability: J,
            currentEmbeddedActivity: z,
            channel: B
        }),
        et = l.useId(),
        en = null != W && W.isLaunching && W.componentId === et,
        ei = async () => {
            j.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: I.id,
                channel_id: Z,
                channel_type: null == B ? void 0 : B.type,
                is_activity_start: $,
                cta: 'Play'
            }),
                $
                    ? await (0, m.Z)({
                          targetApplicationId: I.id,
                          channelId: Z,
                          locationObject: U.location,
                          analyticsLocations: F,
                          componentId: et,
                          commandOrigin: x.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, u.Z)({
                          applicationId: V.applicationId,
                          activityChannelId: Z,
                          locationObject: U.location,
                          analyticsLocations: F,
                          componentId: et
                      });
        },
        el = ee.disabled ? O.intl.string(O.t.JBnc7O) : O.intl.string(O.t.cX9uLS),
        { enabled: ea } = v.G.useExperiment({ location: 'EmbeddedActivityInstanceEmbed' });
    if (ea) {
        let e;
        let t = y.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: I.bot
        });
        ee.disabled && (e = null !== (r = ee.tooltip) && void 0 !== r ? r : ee.text);
        let l = A.default.getCurrentUser(),
            a = Y.length,
            o = null !== (c = null == X ? void 0 : null === (n = X.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== c ? c : null == X ? void 0 : X.created_at,
            d = $ ? el : null != q ? q : O.intl.string(O.t.oQn0h4),
            u = (function (e) {
                switch (null == e ? void 0 : e.type) {
                    case k.IIU.STREAMING:
                        return {
                            text: O.intl.string(O.t['Jpkr/v']),
                            Icon: s.m3e
                        };
                    case k.IIU.LISTENING:
                        return {
                            text: O.intl.string(O.t.kUEnxM),
                            Icon: s.RZG
                        };
                    default:
                        return {
                            text: O.intl.string(O.t.BMTj29),
                            Icon: s.iWm
                        };
                }
            })(X);
        return (0, i.jsx)(E.W, {
            header: I.name,
            title: d,
            iconSrc: t,
            embedUrl: (0, C.H)({
                applicationId: I.id,
                referrerId: null == l ? void 0 : l.id
            }),
            info: (0, i.jsxs)('div', {
                className: D.infoWrapper,
                children: [
                    null != q &&
                        (0, i.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != o &&
                                (0, i.jsxs)('div', {
                                    className: D.activityTimer,
                                    children: [
                                        (0, i.jsx)(u.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, i.jsx)(w, { start: o })
                                    ]
                                })
                        }),
                    a > 0 &&
                        (0, i.jsx)('div', {
                            children: (0, i.jsx)(h.Z, {
                                guildId: L,
                                users: Y,
                                max: 6,
                                size: h.u.SIZE_16,
                                extraDetail: (0, i.jsxs)(s.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    className: D.activePlayingText,
                                    children: [a, ' ', u.text]
                                })
                            })
                        })
                ]
            }),
            actions: [
                {
                    label: $ ? O.intl.string(O.t.RscU7O) : O.intl.string(O.t.VJlc0d),
                    onClick: ei,
                    disabledReason: e,
                    submitting: en
                },
                {
                    label: 'View',
                    onClick() {
                        j.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                            application_id: I.id,
                            channel_id: Z,
                            channel_type: null == B ? void 0 : B.type,
                            cta: 'View'
                        }),
                            (0, f.X)(I.id);
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
                    children: $
                        ? (0, i.jsx)('div', {
                              children: (0, i.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  children: el
                              })
                          })
                        : (0, i.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != q ? q : O.intl.string(O.t.oQn0h4)
                          })
                }),
                (0, i.jsxs)('div', {
                    className: D.footerContainer,
                    children: [
                        (0, i.jsx)(s.ua7, {
                            text: ee.tooltip,
                            tooltipContentClassName: D.tooltipContent,
                            children: (e) => {
                                let { onClick: t, ...n } = e;
                                return (0, l.createElement)(
                                    s.zxk,
                                    {
                                        ...n,
                                        key: ''.concat(ee.isJoinAction),
                                        onClick: () => {
                                            ei(), null == t || t();
                                        },
                                        color: ee.isJoinAction ? s.Ttl.GREEN : s.Ttl.PRIMARY,
                                        submitting: en,
                                        disabled: ee.disabled
                                    },
                                    ee.text
                                );
                            }
                        }),
                        !$ &&
                            (0, i.jsx)(h.Z, {
                                guildId: L,
                                users: Y,
                                max: 4,
                                size: h.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
});
