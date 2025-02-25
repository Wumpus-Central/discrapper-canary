n.d(t, { Z: () => F }), n(47120);
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
    E = n(429551),
    j = n(973616),
    N = n(314897),
    C = n(592125),
    I = n(158776),
    S = n(594174),
    P = n(626135),
    T = n(768581),
    A = n(70956),
    w = n(823379),
    Z = n(506071),
    k = n(226378),
    R = n(981631),
    L = n(701488),
    D = n(388032),
    M = n(956265);
let W = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        a = (0, Z.n)(),
        s = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        c = !1 === a || s;
    return (
        i.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(c ? 15 * A.Z.Millis.SECOND : A.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / A.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, E.m)(n)
    );
});
W.displayName = 'ActivityRuntimeCounter';
let F = i.memo(function (e) {
    var t, n, l, d;
    let { application: E, channelId: A, guildId: Z } = e,
        { analyticsLocations: F } = (0, _.ZP)(g.Z.ACTIVITY_INSTANCE_EMBED),
        U = (0, c.O)(),
        B = (0, o.e7)([C.Z], () => C.Z.getChannel(A), [A]),
        G = (null == B ? void 0 : null === (t = B.isThread) || void 0 === t ? void 0 : t.call(B)) ? (null == B ? void 0 : B.parent_id) : A,
        H = (0, o.e7)([N.default], () => N.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: z,
            activityLaunchState: K
        } = (0, o.cj)(
            [u.ZP],
            () => ({
                embeddedActivity: u.ZP.getEmbeddedActivitiesForChannel(null != G ? G : '').find((e) => e.applicationId === E.id),
                currentEmbeddedActivity: u.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: u.ZP.getLaunchState(E.id, null != G ? G : void 0)
            }),
            [G, E.id]
        ),
        Y = null == V ? void 0 : V.userIds,
        X = (0, o.Wu)(
            [S.default],
            () =>
                Array.from(null != Y ? Y : [])
                    .map((e) => S.default.getUser(e))
                    .filter(w.lm),
            [Y]
        ),
        q = (0, o.e7)(
            [I.Z],
            () => {
                if (null == Y) return null;
                for (let e of Y) {
                    let t = I.Z.findActivity(e, (e) => e.application_id === E.id);
                    if (null != t) return t;
                }
                return null;
            },
            [E.id, Y]
        ),
        Q = null == q ? void 0 : q.details,
        J = i.useMemo(() => {
            let e = new j.ZP(E);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = L.wT), e;
        }, [E]),
        $ = (0, f.s5)({
            userId: H,
            channelId: A,
            application: J
        }),
        ee = null == V,
        et = (0, k.NL)({
            embeddedActivity: V,
            joinability: $,
            currentEmbeddedActivity: z,
            channel: B
        }),
        en = i.useId(),
        er = null != K && K.isLaunching && K.componentId === en,
        ei = async () => {
            P.default.track(R.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: E.id,
                channel_id: A,
                channel_type: null == B ? void 0 : B.type,
                is_activity_start: ee,
                cta: 'Play'
            }),
                ee
                    ? await (0, m.Z)({
                          targetApplicationId: E.id,
                          channelId: A,
                          locationObject: U.location,
                          analyticsLocations: F,
                          componentId: en,
                          commandOrigin: v.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, p.Z)({
                          applicationId: V.applicationId,
                          activityChannelId: A,
                          locationObject: U.location,
                          analyticsLocations: F,
                          componentId: en,
                          instanceId: null == V ? void 0 : V.compositeInstanceId,
                          isContextlessActivity: (null == V ? void 0 : V.location.kind) === a.X.CONTEXTLESS
                      });
        },
        ea = et.disabled ? D.NW.string(D.t.JBnc7O) : D.NW.string(D.t.cX9uLS),
        { enabled: eo } = x.G.useExperiment({ location: 'EmbeddedActivityInstanceEmbed' });
    if (eo) {
        let e;
        let t = T.ZP.getApplicationIconURL({
            id: E.id,
            icon: E.icon,
            bot: E.bot
        });
        et.disabled && (e = null !== (l = et.tooltip) && void 0 !== l ? l : et.text);
        let i = S.default.getCurrentUser(),
            a = X.length,
            o = null !== (d = null == q ? void 0 : null === (n = q.timestamps) || void 0 === n ? void 0 : n.start) && void 0 !== d ? d : null == q ? void 0 : q.created_at,
            c = ee ? ea : null != Q ? Q : D.NW.string(D.t.oQn0h4),
            u = (function (e) {
                switch (null == e ? void 0 : e.type) {
                    case R.IIU.STREAMING:
                        return {
                            text: D.NW.string(D.t['Jpkr/v']),
                            Icon: s.m3e
                        };
                    case R.IIU.LISTENING:
                        return {
                            text: D.NW.string(D.t.kUEnxM),
                            Icon: s.RZG
                        };
                    default:
                        return {
                            text: D.NW.string(D.t.BMTj29),
                            Icon: s.iWm
                        };
                }
            })(q);
        return (0, r.jsx)(O.W, {
            header: E.name,
            title: c,
            iconSrc: t,
            embedUrl: (0, y.H)({
                applicationId: E.id,
                referrerId: null == i ? void 0 : i.id
            }),
            info: (0, r.jsxs)('div', {
                className: M.infoWrapper,
                children: [
                    null != Q &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != o &&
                                (0, r.jsxs)('div', {
                                    className: M.activityTimer,
                                    children: [
                                        (0, r.jsx)(u.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(W, { start: o })
                                    ]
                                })
                        }),
                    a > 0 &&
                        (0, r.jsxs)('div', {
                            className: M.activePlayingWrapper,
                            children: [
                                (0, r.jsx)(h.Z, {
                                    guildId: Z,
                                    users: X,
                                    max: 6,
                                    size: h.u.SIZE_16
                                }),
                                (0, r.jsxs)(s.Text, {
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
                    label: ee ? D.NW.string(D.t.RscU7O) : D.NW.string(D.t.VJlc0d),
                    onClick: ei,
                    disabledReason: e,
                    submitting: er
                },
                {
                    label: 'View',
                    onClick() {
                        P.default.track(R.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                            application_id: E.id,
                            channel_id: A,
                            channel_type: null == B ? void 0 : B.type,
                            cta: 'View'
                        }),
                            (0, b.X)(E.id);
                    }
                }
            ]
        });
    }
    return (0, r.jsx)('div', {
        className: M.container,
        children: (0, r.jsxs)('div', {
            className: M.contentContainer,
            children: [
                (0, r.jsx)('div', {
                    className: M.headerContainer,
                    children: ee
                        ? (0, r.jsx)('div', {
                              children: (0, r.jsx)(s.Text, {
                                  variant: 'text-md/medium',
                                  children: ea
                              })
                          })
                        : (0, r.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              lineClamp: 1,
                              color: 'text-normal',
                              children: null != Q ? Q : D.NW.string(D.t.oQn0h4)
                          })
                }),
                (0, r.jsxs)('div', {
                    className: M.footerContainer,
                    children: [
                        (0, r.jsx)(s.ua7, {
                            text: et.tooltip,
                            tooltipContentClassName: M.tooltipContent,
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
                                            key: ''.concat(et.isJoinAction),
                                            onClick: () => {
                                                ei(), null == r || r();
                                            },
                                            color: et.isJoinAction ? s.Ttl.GREEN : s.Ttl.PRIMARY,
                                            submitting: er,
                                            disabled: et.disabled
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
                                    et.text
                                );
                            }
                        }),
                        !ee &&
                            (0, r.jsx)(h.Z, {
                                guildId: Z,
                                users: X,
                                max: 4,
                                size: h.u.SIZE_32
                            })
                    ]
                })
            ]
        })
    });
});
