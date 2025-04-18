n.d(t, { Z: () => U }), n(388685), n(539854);
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
    h = n(100527),
    g = n(906732),
    _ = n(895924),
    b = n(311819),
    x = n(758199),
    y = n(943762),
    E = n(914498),
    v = n(208444),
    O = n(429551),
    N = n(973616),
    j = n(314897),
    C = n(592125),
    S = n(158776),
    I = n(594174),
    T = n(626135),
    P = n(768581),
    A = n(70956),
    w = n(823379),
    Z = n(506071),
    R = n(226378),
    k = n(981631),
    D = n(701488),
    L = n(388032),
    M = n(484608);
let W = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        a = (0, Z.n)(),
        s = (0, l.e7)([u.Z], () => u.Z.useReducedMotion),
        c = !1 === a || s;
    return (
        i.useEffect(() => {
            let e = new o.Xp();
            return (
                e.start(c ? 15 * A.Z.Millis.SECOND : A.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / A.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, O.m)(n)
    );
});
W.displayName = 'ActivityRuntimeCounter';
let U = i.memo(function (e) {
    var t, n, o, u;
    let O,
        { application: A, channelId: Z, guildId: U } = e,
        { analyticsLocations: F } = (0, g.ZP)(h.Z.ACTIVITY_INSTANCE_EMBED),
        B = (0, c.O)(),
        G = (0, l.e7)([C.Z], () => C.Z.getChannel(Z), [Z]),
        H = (null == G || null == (t = G.isThread) ? void 0 : t.call(G)) ? (null == G ? void 0 : G.parent_id) : Z,
        V = (0, l.e7)([j.default], () => j.default.getId()),
        {
            embeddedActivity: z,
            currentEmbeddedActivity: K,
            activityLaunchState: Y
        } = (0, l.cj)(
            [d.ZP],
            () => ({
                embeddedActivity: d.ZP.getEmbeddedActivitiesForChannel(null != H ? H : '').find((e) => e.applicationId === A.id),
                currentEmbeddedActivity: d.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: d.ZP.getLaunchState(A.id, null != H ? H : void 0)
            }),
            [H, A.id]
        ),
        X = null == z ? void 0 : z.userIds,
        q = (0, l.Wu)(
            [I.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => I.default.getUser(e))
                    .filter(w.lm),
            [X]
        ),
        Q = (0, l.e7)(
            [S.Z],
            () => {
                if (null == X) return null;
                for (let e of X) {
                    let t = S.Z.findActivity(e, (e) => e.application_id === A.id);
                    if (null != t) return t;
                }
                return null;
            },
            [A.id, X]
        ),
        J = null == Q ? void 0 : Q.details,
        $ = i.useMemo(() => {
            let e = new N.ZP(A);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = D.wT), e;
        }, [A]),
        ee = (0, f.s5)({
            userId: V,
            channelId: Z,
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
            T.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: A.id,
                channel_id: Z,
                channel_type: null == G ? void 0 : G.type,
                is_activity_start: et,
                cta: 'Play'
            }),
                et
                    ? await (0, m.Z)({
                          targetApplicationId: A.id,
                          channelId: Z,
                          locationObject: B.location,
                          analyticsLocations: F,
                          componentId: er,
                          commandOrigin: _.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, p.Z)({
                          applicationId: z.applicationId,
                          activityChannelId: Z,
                          locationObject: B.location,
                          analyticsLocations: F,
                          componentId: er,
                          instanceId: null == z ? void 0 : z.compositeInstanceId,
                          isContextlessActivity: (null == z ? void 0 : z.location.kind) === a.E.CONTEXTLESS
                      });
        },
        el = en.disabled ? L.NW.string(L.t.JBnc7O) : L.NW.string(L.t.cX9uLS),
        eo = (0, v.z)($, () => {
            T.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: A.id,
                channel_id: Z,
                channel_type: null == G ? void 0 : G.type,
                cta: 'View'
            });
        }),
        es = P.ZP.getApplicationIconURL({
            id: A.id,
            icon: A.icon,
            bot: A.bot
        });
    en.disabled && (O = null != (o = en.tooltip) ? o : en.text);
    let ec = I.default.getCurrentUser(),
        eu = q.length,
        ed = null != (u = null == Q || null == (n = Q.timestamps) ? void 0 : n.start) ? u : null == Q ? void 0 : Q.created_at,
        ep = et ? el : null != J ? J : L.NW.string(L.t.oQn0h4),
        em = (0, y.r)(Q),
        ef = [
            {
                label: et ? L.NW.string(L.t.cnBQPD) : L.NW.string(L.t.VJlc0d),
                trackingArea: E.j_.PLAY,
                onClick: ea,
                disabledReason: O,
                submitting: ei
            }
        ];
    return (
        null != eo && ef.push(eo),
        (0, r.jsx)(x.W, {
            header: A.name,
            title: ep,
            iconSrc: es,
            embedUrl: (0, b.H)({
                applicationId: A.id,
                referrerId: null == ec ? void 0 : ec.id
            }),
            info: (0, r.jsxs)('div', {
                className: M.infoWrapper,
                children: [
                    null != J &&
                        (0, r.jsx)(s.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children:
                                null != ed &&
                                (0, r.jsxs)('div', {
                                    className: M.activityTimer,
                                    children: [
                                        (0, r.jsx)(em.Icon, {
                                            size: 'xxs',
                                            color: 'currentColor'
                                        }),
                                        (0, r.jsx)(W, { start: ed })
                                    ]
                                })
                        }),
                    eu > 0 &&
                        (0, r.jsx)(y.K, {
                            activityUsers: q,
                            guildId: U,
                            activityText: em.text
                        })
                ]
            }),
            actions: ef,
            trackingConfig: {
                id: A.id,
                linkType: E.Un.ACTIVITY_INSTANCE
            }
        })
    );
});
