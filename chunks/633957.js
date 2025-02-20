n.d(t, { Z: () => W }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(442837),
    o = n(846519),
    l = n(481060),
    s = n(2052),
    c = n(607070),
    d = n(317381),
    u = n(638880),
    p = n(122613),
    m = n(527805),
    f = n(884338),
    h = n(100527),
    g = n(906732),
    _ = n(783097),
    b = n(895924),
    v = n(311819),
    y = n(321231),
    x = n(758199),
    O = n(429551),
    E = n(973616),
    j = n(314897),
    N = n(592125),
    C = n(158776),
    I = n(594174),
    S = n(626135),
    P = n(768581),
    T = n(70956),
    A = n(823379),
    w = n(506071),
    Z = n(226378),
    k = n(981631),
    R = n(701488),
    L = n(388032),
    D = n(956265);
let M = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        l = (0, w.n)(),
        s = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
        d = !1 === l || s;
    return (
        i.useEffect(() => {
            let e = new o.Xp();
            return (
                e.start(d ? 15 * T.Z.Millis.SECOND : T.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / T.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [d, t]),
        (0, O.m)(n)
    );
});
M.displayName = 'ActivityRuntimeCounter';
let W = i.memo(function (e) {
    var t, n, o, c;
    let { application: O, channelId: T, guildId: w } = e,
        { analyticsLocations: W } = (0, g.ZP)(h.Z.ACTIVITY_INSTANCE_EMBED),
        F = (0, s.O)(),
        U = (0, a.e7)([N.Z], () => N.Z.getChannel(T), [T]),
        B = (null == U ? void 0 : null === (t = U.isThread) || void 0 === t ? void 0 : t.call(U)) ? (null == U ? void 0 : U.parent_id) : T,
        G = (0, a.e7)([j.default], () => j.default.getId()),
        {
            embeddedActivity: H,
            currentEmbeddedActivity: V,
            activityLaunchState: z
        } = (0, a.cj)(
            [d.ZP],
            () => ({
                embeddedActivity: d.ZP.getEmbeddedActivitiesForChannel(null != B ? B : '').find((e) => e.applicationId === O.id),
                currentEmbeddedActivity: d.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: d.ZP.getLaunchState(O.id, null != B ? B : void 0)
            }),
            [B, O.id]
        ),
        K = null == H ? void 0 : H.userIds,
        Y = (0, a.Wu)(
            [I.default],
            () =>
                Array.from(null != K ? K : [])
                    .map((e) => I.default.getUser(e))
                    .filter(A.lm),
            [K]
        ),
        X = (0, a.e7)(
            [C.Z],
            () => {
                if (null == K) return null;
                for (let e of K) {
                    let t = C.Z.findActivity(e, (e) => e.application_id === O.id);
                    if (null != t) return t;
                }
                return null;
            },
            [O.id, K]
        ),
        q = null == X ? void 0 : X.details,
        Q = i.useMemo(() => {
            let e = new E.ZP(O);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = R.wT), e;
        }, [O]),
        J = (0, m.s5)({
            userId: G,
            channelId: T,
            application: Q
        }),
        $ = null == H,
        ee = (0, Z.NL)({
            embeddedActivity: H,
            joinability: J,
            currentEmbeddedActivity: V,
            channel: U
        }),
        et = i.useId(),
        en = null != z && z.isLaunching && z.componentId === et,
        er = async () => {
            S.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: O.id,
                channel_id: T,
                channel_type: null == U ? void 0 : U.type,
                is_activity_start: $,
                cta: 'Play'
            }),
                $
                    ? await (0, p.Z)({
                          targetApplicationId: O.id,
                          channelId: T,
                          locationObject: F.location,
                          analyticsLocations: W,
                          componentId: et,
                          commandOrigin: b.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, u.Z)({
                          applicationId: H.applicationId,
                          activityChannelId: T,
                          locationObject: F.location,
                          analyticsLocations: W,
                          componentId: et
                      });
        },
        ei = ee.disabled ? L.NW.string(L.t.JBnc7O) : L.NW.string(L.t.cX9uLS),
        { enabled: ea } = y.G.useExperiment({ location: 'EmbeddedActivityInstanceEmbed' });
    if (ea) {
        let e;
        let t = P.ZP.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: O.bot
        });
        ee.disabled && (e = null !== (o = ee.tooltip) && void 0 !== o ? o : ee.text);
        let i = I.default.getCurrentUser(),
            a = Y.length,
            s = null !== (c = null == X ? void 0 : null === (n = X.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== c ? c : null == X ? void 0 : X.created_at,
            d = $ ? ei : null != q ? q : L.NW.string(L.t.oQn0h4),
            u = (function (e) {
                switch (null == e ? void 0 : e.type) {
                    case k.IIU.STREAMING:
                        return {
                            text: L.NW.string(L.t['Jpkr/v']),
                            Icon: l.m3e
                        };
                    case k.IIU.LISTENING:
                        return {
                            text: L.NW.string(L.t.kUEnxM),
                            Icon: l.RZG
                        };
                    default:
                        return {
                            text: L.NW.string(L.t.BMTj29),
                            Icon: l.iWm
                        };
                }
            })(X);
        return (0, r.jsx)(x.W, {
            header: O.name,
            title: d,
            iconSrc: t,
            embedUrl: (0, v.H)({
                applicationId: O.id,
                referrerId: null == i ? void 0 : i.id
            }),
            info: (0, r.jsxs)('div', {
                className: D.infoWrapper,
                children: [
                    null != q &&
                        (0, r.jsx)(l.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != s &&
                                (0, r.jsxs)('div', {
                                    className: D.activityTimer,
                                    children: [
                                        (0, r.jsx)(u.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(M, { start: s })
                                    ]
                                })
                        }),
                    a > 0 &&
                        (0, r.jsxs)('div', {
                            className: D.activePlayingWrapper,
                            children: [
                                (0, r.jsx)(f.Z, {
                                    guildId: w,
                                    users: Y,
                                    max: 6,
                                    size: f.u.SIZE_16
                                }),
                                (0, r.jsxs)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'none',
                                    children: [a, ' ', u.text]
                                })
                            ]
                        })
                ]
            }),
            actions: [
                {
                    label: $ ? L.NW.string(L.t.RscU7O) : L.NW.string(L.t.VJlc0d),
                    onClick: er,
                    disabledReason: e,
                    submitting: en
                },
                {
                    label: 'View',
                    onClick() {
                        S.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                            application_id: O.id,
                            channel_id: T,
                            channel_type: null == U ? void 0 : U.type,
                            cta: 'View'
                        }),
                            (0, _.X)(O.id);
                    }
                }
            ]
        });
    }
    return (0, r.jsx)('div', {
        className: D.container,
        children: (0, r.jsxs)('div', {
            className: D.contentContainer,
            children: [
                (0, r.jsx)('div', {
                    className: D.headerContainer,
                    children: $
                        ? (0, r.jsx)('div', {
                              children: (0, r.jsx)(l.Text, {
                                  variant: 'text-md/medium',
                                  children: ei
                              })
                          })
                        : (0, r.jsx)(l.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != q ? q : L.NW.string(L.t.oQn0h4)
                          })
                }),
                (0, r.jsxs)('div', {
                    className: D.footerContainer,
                    children: [
                        (0, r.jsx)(l.ua7, {
                            text: ee.tooltip,
                            tooltipContentClassName: D.tooltipContent,
                            children: (e) => {
                                var t,
                                    n,
                                    { onClick: r } = e,
                                    a = (function (e, t) {
                                        if (null == e) return {};
                                        var n,
                                            r,
                                            i = (function (e, t) {
                                                if (null == e) return {};
                                                var n,
                                                    r,
                                                    i = {},
                                                    a = Object.keys(e);
                                                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                return i;
                                            })(e, t);
                                        if (Object.getOwnPropertySymbols) {
                                            var a = Object.getOwnPropertySymbols(e);
                                            for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                        }
                                        return i;
                                    })(e, ['onClick']);
                                return (0, i.createElement)(
                                    l.zxk,
                                    ((t = (function (e) {
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
                                    })({}, a)),
                                    (n = n =
                                        {
                                            key: ''.concat(ee.isJoinAction),
                                            onClick: () => {
                                                er(), null == r || r();
                                            },
                                            color: ee.isJoinAction ? l.Ttl.GREEN : l.Ttl.PRIMARY,
                                            submitting: en,
                                            disabled: ee.disabled
                                        }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(n)).forEach(function (e) {
                                              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                          }),
                                    t),
                                    ee.text
                                );
                            }
                        }),
                        !$ &&
                            (0, r.jsx)(f.Z, {
                                guildId: w,
                                users: Y,
                                max: 4,
                                size: f.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
});
