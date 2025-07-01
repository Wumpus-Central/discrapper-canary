(n.d(t, { Z: () => U }), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(442837),
    a = n(846519),
    o = n(481060),
    s = n(2052),
    c = n(607070),
    u = n(317381),
    d = n(638880),
    p = n(122613),
    m = n(527805),
    f = n(100527),
    g = n(906732),
    _ = n(895924),
    h = n(311819),
    b = n(758199),
    E = n(943762),
    y = n(914498),
    C = n(208444),
    x = n(429551),
    v = n(973616),
    O = n(314897),
    j = n(592125),
    I = n(158776),
    S = n(594174),
    T = n(626135),
    N = n(768581),
    P = n(70956),
    A = n(823379),
    w = n(506071),
    Z = n(226378),
    R = n(981631),
    L = n(701488),
    k = n(388032),
    D = n(484608);
let M = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        o = (0, w.n)(),
        s = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
        u = !1 === o || s;
    return (
        i.useEffect(() => {
            let e = new a.Xp();
            return (
                e.start(u ? 15 * P.Z.Millis.SECOND : P.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / P.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [u, t]),
        (0, x.m)(n)
    );
});
M.displayName = 'ActivityRuntimeCounter';
let U = i.memo(function (e) {
    var t, n, a, c;
    let x,
        { application: P, channelId: w, guildId: U } = e,
        { analyticsLocations: F } = (0, g.ZP)(f.Z.ACTIVITY_INSTANCE_EMBED),
        B = (0, s.O)(),
        G = (0, l.e7)([j.Z], () => j.Z.getChannel(w), [w]),
        H = (null == G || null == (t = G.isThread) ? void 0 : t.call(G)) ? (null == G ? void 0 : G.parent_id) : w,
        V = (0, l.e7)([O.default], () => O.default.getId()),
        {
            embeddedActivity: z,
            currentEmbeddedActivity: W,
            activityLaunchState: K
        } = (0, l.cj)(
            [u.ZP],
            () => ({
                embeddedActivity: u.ZP.getEmbeddedActivitiesForChannel(null != H ? H : '').find((e) => e.applicationId === P.id),
                currentEmbeddedActivity: u.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: u.ZP.getLaunchState(P.id, null != H ? H : void 0)
            }),
            [H, P.id]
        ),
        Y = null == z ? void 0 : z.userIds,
        X = (0, l.Wu)(
            [S.default],
            () =>
                Array.from(null != Y ? Y : [])
                    .map((e) => S.default.getUser(e))
                    .filter(A.lm),
            [Y]
        ),
        q = (0, l.e7)(
            [I.Z],
            () => {
                if (null == Y) return null;
                for (let e of Y) {
                    let t = I.Z.findActivity(e, (e) => e.application_id === P.id);
                    if (null != t) return t;
                }
                return null;
            },
            [P.id, Y]
        ),
        Q = null == q ? void 0 : q.details,
        J = i.useMemo(() => {
            let e = new v.ZP(P);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = L.wT), e);
        }, [P]),
        $ = (0, m.s5)({
            userId: V,
            channelId: w,
            application: J
        }),
        ee = null == z,
        et = (0, Z.NL)({
            embeddedActivity: z,
            joinability: $,
            currentEmbeddedActivity: W,
            channel: G
        }),
        en = i.useId(),
        er = null != K && K.isLaunching && K.componentId === en,
        ei = async () => {
            (T.default.track(R.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: P.id,
                channel_id: w,
                channel_type: null == G ? void 0 : G.type,
                is_activity_start: ee,
                cta: 'Play'
            }),
                ee
                    ? await (0, p.Z)({
                          targetApplicationId: P.id,
                          channelId: w,
                          locationObject: B.location,
                          analyticsLocations: F,
                          componentId: en,
                          commandOrigin: _.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, d.Z)({
                          applicationId: z.applicationId,
                          activityChannelId: w,
                          locationObject: B.location,
                          analyticsLocations: F,
                          componentId: en
                      }));
        },
        el = et.disabled ? k.intl.string(k.t.JBnc7O) : k.intl.string(k.t.cX9uLS),
        ea = (0, C.z)(J, () => {
            T.default.track(R.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: P.id,
                channel_id: w,
                channel_type: null == G ? void 0 : G.type,
                cta: 'View'
            });
        }),
        eo = N.ZP.getApplicationIconURL({
            id: P.id,
            icon: P.icon,
            bot: P.bot
        });
    et.disabled && (x = null != (a = et.tooltip) ? a : et.text);
    let es = S.default.getCurrentUser(),
        ec = X.length,
        eu = null != (c = null == q || null == (n = q.timestamps) ? void 0 : n.start) ? c : null == q ? void 0 : q.created_at,
        ed = ee ? el : null != Q ? Q : k.intl.string(k.t.oQn0h4),
        ep = (0, E.r)(q),
        em = [
            {
                label: ee ? k.intl.string(k.t.cnBQPD) : k.intl.string(k.t.VJlc0d),
                trackingArea: y.j_.PLAY,
                onClick: ei,
                disabledReason: x,
                submitting: er
            }
        ];
    return (
        null != ea && em.push(ea),
        (0, r.jsx)(b.W, {
            header: k.intl.string(k.t.pkq6Vl),
            title: ed,
            iconSrc: eo,
            embedUrl: (0, h.H)({
                applicationId: P.id,
                referrerId: null == es ? void 0 : es.id
            }),
            info: (0, r.jsxs)('div', {
                className: D.infoWrapper,
                children: [
                    null != Q &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != eu &&
                                (0, r.jsxs)('div', {
                                    className: D.activityTimer,
                                    children: [
                                        (0, r.jsx)(ep.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(M, { start: eu })
                                    ]
                                })
                        }),
                    ec > 0 &&
                        (0, r.jsx)(E.K, {
                            activityUsers: X,
                            guildId: U,
                            activityText: ep.text
                        })
                ]
            }),
            actions: em,
            trackingConfig: {
                id: P.id,
                linkType: y.Un.ACTIVITY_INSTANCE
            }
        })
    );
});
