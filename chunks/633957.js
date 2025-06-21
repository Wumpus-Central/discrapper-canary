n.d(t, { Z: () => U }), n(388685), n(539854);
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
    h = n(906732),
    g = n(895924),
    _ = n(311819),
    b = n(758199),
    E = n(943762),
    y = n(914498),
    x = n(208444),
    v = n(429551),
    O = n(973616),
    C = n(314897),
    j = n(592125),
    S = n(158776),
    I = n(594174),
    N = n(626135),
    T = n(768581),
    P = n(70956),
    A = n(823379),
    w = n(506071),
    Z = n(226378),
    R = n(981631),
    k = n(701488),
    D = n(388032),
    M = n(484608);
let L = i.memo((e) => {
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
        (0, v.m)(n)
    );
});
L.displayName = 'ActivityRuntimeCounter';
let U = i.memo(function (e) {
    var t, n, a, c;
    let v,
        { application: P, channelId: w, guildId: U } = e,
        { analyticsLocations: F } = (0, h.ZP)(f.Z.ACTIVITY_INSTANCE_EMBED),
        B = (0, s.O)(),
        G = (0, l.e7)([j.Z], () => j.Z.getChannel(w), [w]),
        H = (null == G || null == (t = G.isThread) ? void 0 : t.call(G)) ? (null == G ? void 0 : G.parent_id) : w,
        V = (0, l.e7)([C.default], () => C.default.getId()),
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
            [I.default],
            () =>
                Array.from(null != Y ? Y : [])
                    .map((e) => I.default.getUser(e))
                    .filter(A.lm),
            [Y]
        ),
        q = (0, l.e7)(
            [S.Z],
            () => {
                if (null == Y) return null;
                for (let e of Y) {
                    let t = S.Z.findActivity(e, (e) => e.application_id === P.id);
                    if (null != t) return t;
                }
                return null;
            },
            [P.id, Y]
        ),
        Q = null == q ? void 0 : q.details,
        J = i.useMemo(() => {
            let e = new O.ZP(P);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.wT), e;
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
            N.default.track(R.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
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
                          commandOrigin: g.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, d.Z)({
                          applicationId: z.applicationId,
                          activityChannelId: w,
                          locationObject: B.location,
                          analyticsLocations: F,
                          componentId: en
                      });
        },
        el = et.disabled ? D.intl.string(D.t.JBnc7O) : D.intl.string(D.t.cX9uLS),
        ea = (0, x.z)(J, () => {
            N.default.track(R.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: P.id,
                channel_id: w,
                channel_type: null == G ? void 0 : G.type,
                cta: 'View'
            });
        }),
        eo = T.ZP.getApplicationIconURL({
            id: P.id,
            icon: P.icon,
            bot: P.bot
        });
    et.disabled && (v = null != (a = et.tooltip) ? a : et.text);
    let es = I.default.getCurrentUser(),
        ec = X.length,
        eu = null != (c = null == q || null == (n = q.timestamps) ? void 0 : n.start) ? c : null == q ? void 0 : q.created_at,
        ed = ee ? el : null != Q ? Q : D.intl.string(D.t.oQn0h4),
        ep = (0, E.r)(q),
        em = [
            {
                label: ee ? D.intl.string(D.t.cnBQPD) : D.intl.string(D.t.VJlc0d),
                trackingArea: y.j_.PLAY,
                onClick: ei,
                disabledReason: v,
                submitting: er
            }
        ];
    return (
        null != ea && em.push(ea),
        (0, r.jsx)(b.W, {
            header: P.name,
            title: ed,
            iconSrc: eo,
            embedUrl: (0, _.H)({
                applicationId: P.id,
                referrerId: null == es ? void 0 : es.id
            }),
            info: (0, r.jsxs)('div', {
                className: M.infoWrapper,
                children: [
                    null != Q &&
                        (0, r.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != eu &&
                                (0, r.jsxs)('div', {
                                    className: M.activityTimer,
                                    children: [
                                        (0, r.jsx)(ep.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(L, { start: eu })
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
