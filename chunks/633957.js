n.d(t, { Z: () => B }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    a = n(252258),
    l = n(442837),
    o = n(846519),
    s = n(481060),
    c = n(2052),
    u = n(607070),
    d = n(317381),
    p = n(638880),
    m = n(122613),
    f = n(527805),
    h = n(884338),
    g = n(100527),
    _ = n(906732),
    b = n(895924),
    x = n(311819),
    y = n(321231),
    E = n(758199),
    v = n(943762),
    O = n(914498),
    N = n(208444),
    j = n(429551),
    C = n(973616),
    I = n(314897),
    S = n(592125),
    T = n(158776),
    P = n(594174),
    A = n(626135),
    w = n(768581),
    Z = n(70956),
    k = n(823379),
    R = n(506071),
    D = n(226378),
    L = n(981631),
    M = n(701488),
    W = n(388032),
    U = n(484608);
let F = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        a = (0, R.n)(),
        s = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        c = !1 === a || s;
    return (
        i.useEffect(() => {
            let e = new o.Xp();
            return (
                e.start(c ? 15 * Z.Z.Millis.SECOND : Z.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / Z.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, j.m)(n)
    );
});
F.displayName = 'ActivityRuntimeCounter';
let B = i.memo(function (e) {
    var t, n, o, u;
    let { application: j, channelId: Z, guildId: R } = e,
        { analyticsLocations: B } = (0, _.ZP)(g.Z.ACTIVITY_INSTANCE_EMBED),
        G = (0, c.O)(),
        H = (0, l.e7)([S.Z], () => S.Z.getChannel(Z), [Z]),
        V = (null == H || null == (t = H.isThread) ? void 0 : t.call(H)) ? (null == H ? void 0 : H.parent_id) : Z,
        z = (0, l.e7)([I.default], () => I.default.getId()),
        {
            embeddedActivity: K,
            currentEmbeddedActivity: Y,
            activityLaunchState: X
        } = (0, l.cj)(
            [d.ZP],
            () => ({
                embeddedActivity: d.ZP.getEmbeddedActivitiesForChannel(null != V ? V : '').find((e) => e.applicationId === j.id),
                currentEmbeddedActivity: d.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: d.ZP.getLaunchState(j.id, null != V ? V : void 0)
            }),
            [V, j.id]
        ),
        q = null == K ? void 0 : K.userIds,
        Q = (0, l.Wu)(
            [P.default],
            () =>
                Array.from(null != q ? q : [])
                    .map((e) => P.default.getUser(e))
                    .filter(k.lm),
            [q]
        ),
        J = (0, l.e7)(
            [T.Z],
            () => {
                if (null == q) return null;
                for (let e of q) {
                    let t = T.Z.findActivity(e, (e) => e.application_id === j.id);
                    if (null != t) return t;
                }
                return null;
            },
            [j.id, q]
        ),
        $ = null == J ? void 0 : J.details,
        ee = i.useMemo(() => {
            let e = new C.ZP(j);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.wT), e;
        }, [j]),
        et = (0, f.s5)({
            userId: z,
            channelId: Z,
            application: ee
        }),
        en = null == K,
        er = (0, D.NL)({
            embeddedActivity: K,
            joinability: et,
            currentEmbeddedActivity: Y,
            channel: H
        }),
        ei = i.useId(),
        ea = null != X && X.isLaunching && X.componentId === ei,
        el = async () => {
            A.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: j.id,
                channel_id: Z,
                channel_type: null == H ? void 0 : H.type,
                is_activity_start: en,
                cta: 'Play'
            }),
                en
                    ? await (0, m.Z)({
                          targetApplicationId: j.id,
                          channelId: Z,
                          locationObject: G.location,
                          analyticsLocations: B,
                          componentId: ei,
                          commandOrigin: b.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, p.Z)({
                          applicationId: K.applicationId,
                          activityChannelId: Z,
                          locationObject: G.location,
                          analyticsLocations: B,
                          componentId: ei,
                          instanceId: null == K ? void 0 : K.compositeInstanceId,
                          isContextlessActivity: (null == K ? void 0 : K.location.kind) === a.E.CONTEXTLESS
                      });
        },
        eo = er.disabled ? W.NW.string(W.t.JBnc7O) : W.NW.string(W.t.cX9uLS),
        { enabled: es } = y.G.useExperiment({ location: 'EmbeddedActivityInstanceEmbed' }),
        ec = (0, N.z)(ee, () => {
            A.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: j.id,
                channel_id: Z,
                channel_type: null == H ? void 0 : H.type,
                cta: 'View'
            });
        });
    if (es) {
        let e,
            t = w.ZP.getApplicationIconURL({
                id: j.id,
                icon: j.icon,
                bot: j.bot
            });
        er.disabled && (e = null != (o = er.tooltip) ? o : er.text);
        let i = P.default.getCurrentUser(),
            a = Q.length,
            l = null != (u = null == J || null == (n = J.timestamps) ? void 0 : n.start) ? u : null == J ? void 0 : J.created_at,
            c = en ? eo : null != $ ? $ : W.NW.string(W.t.oQn0h4),
            d = (0, v.r)(J),
            p = [
                {
                    label: en ? W.NW.string(W.t.cnBQPD) : W.NW.string(W.t.VJlc0d),
                    trackingArea: O.j_.PLAY,
                    onClick: el,
                    disabledReason: e,
                    submitting: ea
                }
            ];
        return (
            null != ec && p.push(ec),
            (0, r.jsx)(E.W, {
                header: j.name,
                title: c,
                iconSrc: t,
                embedUrl: (0, x.H)({
                    applicationId: j.id,
                    referrerId: null == i ? void 0 : i.id
                }),
                info: (0, r.jsxs)('div', {
                    className: U.infoWrapper,
                    children: [
                        null != $ &&
                            (0, r.jsx)(s.Text, {
                                variant: 'text-xs/medium',
                                color: 'none',
                                children:
                                    null != l &&
                                    (0, r.jsxs)('div', {
                                        className: U.activityTimer,
                                        children: [
                                            (0, r.jsx)(d.Icon, {
                                                size: 'xxs',
                                                color: 'currentColor'
                                            }),
                                            (0, r.jsx)(F, { start: l })
                                        ]
                                    })
                            }),
                        a > 0 &&
                            (0, r.jsx)(v.K, {
                                activityUsers: Q,
                                guildId: R,
                                activityText: d.text
                            })
                    ]
                }),
                actions: p,
                trackingConfig: {
                    id: j.id,
                    linkType: O.Un.ACTIVITY_INSTANCE
                }
            })
        );
    }
    return (0, r.jsx)('div', {
        className: U.container,
        children: (0, r.jsxs)('div', {
            className: U.contentContainer,
            children: [
                (0, r.jsx)('div', {
                    className: U.headerContainer,
                    children: en
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
                              children: null != $ ? $ : W.NW.string(W.t.oQn0h4)
                          })
                }),
                (0, r.jsxs)('div', {
                    className: U.footerContainer,
                    children: [
                        (0, r.jsx)(s.ua7, {
                            text: er.tooltip,
                            tooltipContentClassName: U.tooltipContent,
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
                                            key: ''.concat(er.isJoinAction),
                                            onClick: () => {
                                                el(), null == r || r();
                                            },
                                            color: er.isJoinAction ? s.Ttl.GREEN : s.Ttl.PRIMARY,
                                            submitting: ea,
                                            disabled: er.disabled
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
                                    er.text
                                );
                            }
                        }),
                        !en &&
                            (0, r.jsx)(h.Z, {
                                guildId: R,
                                users: Q,
                                max: 4,
                                size: h.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
});
