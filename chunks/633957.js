n.d(t, { Z: () => U }), n(47120);
var r = n(200651),
    i = n(192379),
    a = n(115911),
    o = n(442837),
    l = n(846519),
    s = n(481060),
    c = n(2052),
    d = n(607070),
    u = n(317381),
    p = n(638880),
    m = n(122613),
    f = n(527805),
    h = n(884338),
    g = n(100527),
    _ = n(906732),
    b = n(783097),
    v = n(895924),
    y = n(311819),
    x = n(321231),
    O = n(758199),
    E = n(943762),
    j = n(429551),
    N = n(973616),
    C = n(314897),
    I = n(592125),
    S = n(158776),
    T = n(594174),
    P = n(626135),
    A = n(768581),
    w = n(70956),
    Z = n(823379),
    k = n(506071),
    R = n(226378),
    L = n(981631),
    D = n(701488),
    M = n(388032),
    W = n(332463);
let F = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        a = (0, k.n)(),
        s = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        c = !1 === a || s;
    return (
        i.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(c ? 15 * w.Z.Millis.SECOND : w.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / w.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, j.m)(n)
    );
});
F.displayName = 'ActivityRuntimeCounter';
let U = i.memo(function (e) {
    var t, n, l, d;
    let { application: j, channelId: w, guildId: k } = e,
        { analyticsLocations: U } = (0, _.ZP)(g.Z.ACTIVITY_INSTANCE_EMBED),
        B = (0, c.O)(),
        G = (0, o.e7)([I.Z], () => I.Z.getChannel(w), [w]),
        H = (null == G ? void 0 : null === (t = G.isThread) || void 0 === t ? void 0 : t.call(G)) ? (null == G ? void 0 : G.parent_id) : w,
        V = (0, o.e7)([C.default], () => C.default.getId()),
        {
            embeddedActivity: z,
            currentEmbeddedActivity: K,
            activityLaunchState: Y
        } = (0, o.cj)(
            [u.ZP],
            () => ({
                embeddedActivity: u.ZP.getEmbeddedActivitiesForChannel(null != H ? H : '').find((e) => e.applicationId === j.id),
                currentEmbeddedActivity: u.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: u.ZP.getLaunchState(j.id, null != H ? H : void 0)
            }),
            [H, j.id]
        ),
        X = null == z ? void 0 : z.userIds,
        q = (0, o.Wu)(
            [T.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => T.default.getUser(e))
                    .filter(Z.lm),
            [X]
        ),
        Q = (0, o.e7)(
            [S.Z],
            () => {
                if (null == X) return null;
                for (let e of X) {
                    let t = S.Z.findActivity(e, (e) => e.application_id === j.id);
                    if (null != t) return t;
                }
                return null;
            },
            [j.id, X]
        ),
        J = null == Q ? void 0 : Q.details,
        $ = i.useMemo(() => {
            let e = new N.ZP(j);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = D.wT), e;
        }, [j]),
        ee = (0, f.s5)({
            userId: V,
            channelId: w,
            application: $
        }),
        et = null == z,
        en = (0, R.NL)({
            embeddedActivity: z,
            joinability: ee,
            currentEmbeddedActivity: K,
            channel: G
        }),
        er = i.useId(),
        ei = null != Y && Y.isLaunching && Y.componentId === er,
        ea = async () => {
            P.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: j.id,
                channel_id: w,
                channel_type: null == G ? void 0 : G.type,
                is_activity_start: et,
                cta: 'Play'
            }),
                et
                    ? await (0, m.Z)({
                          targetApplicationId: j.id,
                          channelId: w,
                          locationObject: B.location,
                          analyticsLocations: U,
                          componentId: er,
                          commandOrigin: v.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, p.Z)({
                          applicationId: z.applicationId,
                          activityChannelId: w,
                          locationObject: B.location,
                          analyticsLocations: U,
                          componentId: er,
                          instanceId: null == z ? void 0 : z.compositeInstanceId,
                          isContextlessActivity: (null == z ? void 0 : z.location.kind) === a.X.CONTEXTLESS
                      });
        },
        eo = en.disabled ? M.NW.string(M.t.JBnc7O) : M.NW.string(M.t.cX9uLS),
        { enabled: el } = x.G.useExperiment({ location: 'EmbeddedActivityInstanceEmbed' });
    if (el) {
        let e;
        let t = A.ZP.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
            bot: j.bot
        });
        en.disabled && (e = null !== (l = en.tooltip) && void 0 !== l ? l : en.text);
        let i = T.default.getCurrentUser(),
            a = q.length,
            o = null !== (d = null == Q ? void 0 : null === (n = Q.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== d ? d : null == Q ? void 0 : Q.created_at,
            c = et ? eo : null != J ? J : M.NW.string(M.t.oQn0h4),
            u = (0, E.r)(Q);
        return (0, r.jsx)(O.W, {
            header: j.name,
            title: c,
            iconSrc: t,
            embedUrl: (0, y.H)({
                applicationId: j.id,
                referrerId: null == i ? void 0 : i.id
            }),
            info: (0, r.jsxs)('div', {
                className: W.infoWrapper,
                children: [
                    null != J &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != o &&
                                (0, r.jsxs)('div', {
                                    className: W.activityTimer,
                                    children: [
                                        (0, r.jsx)(u.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(F, { start: o })
                                    ]
                                })
                        }),
                    a > 0 &&
                        (0, r.jsx)(E.K, {
                            activityUsers: q,
                            guildId: k,
                            activityText: u.text
                        })
                ]
            }),
            actions: [
                {
                    label: et ? M.NW.string(M.t.RscU7O) : M.NW.string(M.t.VJlc0d),
                    onClick: ea,
                    disabledReason: e,
                    submitting: ei
                },
                {
                    label: 'View',
                    onClick() {
                        P.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                            application_id: j.id,
                            channel_id: w,
                            channel_type: null == G ? void 0 : G.type,
                            cta: 'View'
                        }),
                            (0, b.X)(j.id);
                    }
                }
            ]
        });
    }
    return (0, r.jsx)('div', {
        className: W.container,
        children: (0, r.jsxs)('div', {
            className: W.contentContainer,
            children: [
                (0, r.jsx)('div', {
                    className: W.headerContainer,
                    children: et
                        ? (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  children: eo
                              })
                          })
                        : (0, r.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != J ? J : M.NW.string(M.t.oQn0h4)
                          })
                }),
                (0, r.jsxs)('div', {
                    className: W.footerContainer,
                    children: [
                        (0, r.jsx)(s.ua7, {
                            text: en.tooltip,
                            tooltipContentClassName: W.tooltipContent,
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
                                    s.zxk,
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
                                            key: ''.concat(en.isJoinAction),
                                            onClick: () => {
                                                ea(), null == r || r();
                                            },
                                            color: en.isJoinAction ? s.Ttl.GREEN : s.Ttl.PRIMARY,
                                            submitting: ei,
                                            disabled: en.disabled
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
                                    en.text
                                );
                            }
                        }),
                        !et &&
                            (0, r.jsx)(h.Z, {
                                guildId: k,
                                users: q,
                                max: 4,
                                size: h.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
});
