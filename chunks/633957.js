n.d(t, { Z: () => F }), n(388685), n(539854);
var r = n(200651),
    i = n(192379),
    l = n(252258),
    a = n(442837),
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
    v = n(914498),
    E = n(208444),
    O = n(429551),
    j = n(973616),
    C = n(314897),
    S = n(592125),
    I = n(158776),
    N = n(594174),
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
let U = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        l = (0, Z.n)(),
        s = (0, a.e7)([u.Z], () => u.Z.useReducedMotion),
        c = !1 === l || s;
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
U.displayName = 'ActivityRuntimeCounter';
let F = i.memo(function (e) {
    var t, n, o, u;
    let O,
        { application: A, channelId: Z, guildId: F } = e,
        { analyticsLocations: B } = (0, g.ZP)(h.Z.ACTIVITY_INSTANCE_EMBED),
        G = (0, c.O)(),
        H = (0, a.e7)([S.Z], () => S.Z.getChannel(Z), [Z]),
        V = (null == H || null == (t = H.isThread) ? void 0 : t.call(H)) ? (null == H ? void 0 : H.parent_id) : Z,
        z = (0, a.e7)([C.default], () => C.default.getId()),
        {
            embeddedActivity: W,
            currentEmbeddedActivity: K,
            activityLaunchState: Y
        } = (0, a.cj)(
            [d.ZP],
            () => ({
                embeddedActivity: d.ZP.getEmbeddedActivitiesForChannel(null != V ? V : '').find((e) => e.applicationId === A.id),
                currentEmbeddedActivity: d.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: d.ZP.getLaunchState(A.id, null != V ? V : void 0)
            }),
            [V, A.id]
        ),
        X = null == W ? void 0 : W.userIds,
        q = (0, a.Wu)(
            [N.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => N.default.getUser(e))
                    .filter(w.lm),
            [X]
        ),
        Q = (0, a.e7)(
            [I.Z],
            () => {
                if (null == X) return null;
                for (let e of X) {
                    let t = I.Z.findActivity(e, (e) => e.application_id === A.id);
                    if (null != t) return t;
                }
                return null;
            },
            [A.id, X]
        ),
        J = null == Q ? void 0 : Q.details,
        $ = i.useMemo(() => {
            let e = new j.ZP(A);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = D.wT), e;
        }, [A]),
        ee = (0, f.s5)({
            userId: z,
            channelId: Z,
            application: $
        }),
        et = null == W,
        en = (0, R.NL)({
            embeddedActivity: W,
            joinability: ee,
            currentEmbeddedActivity: K,
            channel: H
        }),
        er = i.useId(),
        ei = null != Y && Y.isLaunching && Y.componentId === er,
        el = async () => {
            T.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: A.id,
                channel_id: Z,
                channel_type: null == H ? void 0 : H.type,
                is_activity_start: et,
                cta: 'Play'
            }),
                et
                    ? await (0, m.Z)({
                          targetApplicationId: A.id,
                          channelId: Z,
                          locationObject: G.location,
                          analyticsLocations: B,
                          componentId: er,
                          commandOrigin: _.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, p.Z)({
                          applicationId: W.applicationId,
                          activityChannelId: Z,
                          locationObject: G.location,
                          analyticsLocations: B,
                          componentId: er,
                          instanceId: null == W ? void 0 : W.compositeInstanceId,
                          isContextlessActivity: (null == W ? void 0 : W.location.kind) === l.E.CONTEXTLESS
                      });
        },
        ea = en.disabled ? L.intl.string(L.t.JBnc7O) : L.intl.string(L.t.cX9uLS),
        eo = (0, E.z)($, () => {
            T.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: A.id,
                channel_id: Z,
                channel_type: null == H ? void 0 : H.type,
                cta: 'View'
            });
        }),
        es = P.ZP.getApplicationIconURL({
            id: A.id,
            icon: A.icon,
            bot: A.bot
        });
    en.disabled && (O = null != (o = en.tooltip) ? o : en.text);
    let ec = N.default.getCurrentUser(),
        eu = q.length,
        ed = null != (u = null == Q || null == (n = Q.timestamps) ? void 0 : n.start) ? u : null == Q ? void 0 : Q.created_at,
        ep = et ? ea : null != J ? J : L.intl.string(L.t.oQn0h4),
        em = (0, y.r)(Q),
        ef = [
            {
                label: et ? L.intl.string(L.t.cnBQPD) : L.intl.string(L.t.VJlc0d),
                trackingArea: v.j_.PLAY,
                onClick: el,
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
                                        (0, r.jsx)(U, { start: ed })
                                    ]
                                })
                        }),
                    eu > 0 &&
                        (0, r.jsx)(y.K, {
                            activityUsers: q,
                            guildId: F,
                            activityText: em.text
                        })
                ]
            }),
            actions: ef,
            trackingConfig: {
                id: A.id,
                linkType: v.Un.ACTIVITY_INSTANCE
            }
        })
    );
});
