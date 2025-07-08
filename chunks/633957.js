(n.d(t, { Z: () => B }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(846519),
    c = n(481060),
    u = n(2052),
    d = n(607070),
    p = n(317381),
    m = n(638880),
    f = n(122613),
    g = n(527805),
    _ = n(100527),
    h = n(906732),
    b = n(895924),
    E = n(311819),
    y = n(758199),
    x = n(943762),
    C = n(914498),
    v = n(515344),
    O = n(429551),
    j = n(973616),
    I = n(314897),
    S = n(592125),
    T = n(158776),
    N = n(594174),
    P = n(626135),
    A = n(768581),
    w = n(70956),
    Z = n(823379),
    R = n(506071),
    k = n(226378),
    L = n(981631),
    D = n(701488),
    M = n(388032),
    U = n(484608);
let F = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        l = (0, R.n)(),
        a = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        c = !1 === l || a;
    return (
        i.useEffect(() => {
            let e = new s.Xp();
            return (
                e.start(c ? 15 * w.Z.Millis.SECOND : w.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / w.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, O.m)(n)
    );
});
F.displayName = 'ActivityRuntimeCounter';
let B = i.memo(function (e) {
    var t, n, l, s;
    let d,
        { application: O, channelId: w, guildId: R } = e,
        { analyticsLocations: B } = (0, h.ZP)(_.Z.ACTIVITY_INSTANCE_EMBED),
        G = (0, u.O)(),
        H = (0, o.e7)([S.Z], () => S.Z.getChannel(w), [w]),
        V = (null == H || null == (t = H.isThread) ? void 0 : t.call(H)) ? (null == H ? void 0 : H.parent_id) : w,
        z = (0, o.e7)([I.default], () => I.default.getId()),
        {
            embeddedActivity: W,
            currentEmbeddedActivity: K,
            activityLaunchState: Y
        } = (0, o.cj)(
            [p.ZP],
            () => ({
                embeddedActivity: p.ZP.getEmbeddedActivitiesForChannel(null != V ? V : '').find((e) => e.applicationId === O.id),
                currentEmbeddedActivity: p.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: p.ZP.getLaunchState(O.id, null != V ? V : void 0)
            }),
            [V, O.id]
        ),
        X = null == W ? void 0 : W.userIds,
        q = (0, o.Wu)(
            [N.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => N.default.getUser(e))
                    .filter(Z.lm),
            [X]
        ),
        Q = (0, o.e7)(
            [T.Z],
            () => {
                if (null == X) return null;
                for (let e of X) {
                    let t = T.Z.findActivity(e, (e) => e.application_id === O.id);
                    if (null != t) return t;
                }
                return null;
            },
            [O.id, X]
        ),
        J = null == Q ? void 0 : Q.details,
        $ = i.useMemo(() => {
            let e = new j.ZP(O);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = D.wT), e);
        }, [O]),
        ee = (0, g.s5)({
            userId: z,
            channelId: w,
            application: $
        }),
        et = null == W,
        en = (0, k.NL)({
            embeddedActivity: W,
            joinability: ee,
            currentEmbeddedActivity: K,
            channel: H
        }),
        er = i.useId(),
        ei = null != Y && Y.isLaunching && Y.componentId === er,
        el = async () => {
            (P.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: O.id,
                channel_id: w,
                channel_type: null == H ? void 0 : H.type,
                is_activity_start: et,
                cta: 'Play'
            }),
                et
                    ? await (0, f.Z)({
                          targetApplicationId: O.id,
                          channelId: w,
                          locationObject: G.location,
                          analyticsLocations: B,
                          componentId: er,
                          commandOrigin: b.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, m.Z)({
                          applicationId: W.applicationId,
                          activityChannelId: w,
                          locationObject: G.location,
                          analyticsLocations: B,
                          componentId: er
                      }));
        },
        ea = en.disabled ? M.intl.string(M.t.JBnc7O) : M.intl.string(M.t.cX9uLS),
        eo = (0, v.G)($, () => {
            P.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: O.id,
                channel_id: w,
                channel_type: null == H ? void 0 : H.type,
                cta: 'View'
            });
        }),
        es = A.ZP.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: O.bot
        });
    en.disabled && (d = null != (l = en.tooltip) ? l : en.text);
    let ec = N.default.getCurrentUser(),
        eu = q.length,
        ed = null != (s = null == Q || null == (n = Q.timestamps) ? void 0 : n.start) ? s : null == Q ? void 0 : Q.created_at,
        ep = (0, x.r)(Q),
        em = [
            {
                label: et ? M.intl.string(M.t.cnBQPD) : M.intl.string(M.t.VJlc0d),
                trackingArea: C.j_.PLAY,
                onClick: el,
                disabledReason: d,
                submitting: ei
            }
        ];
    return (0, r.jsx)(y.W, {
        header: M.intl.string(M.t.pkq6Vl),
        title: O.name,
        iconSrc: es,
        embedUrl: (0, E.H)({
            applicationId: O.id,
            referrerId: null == ec ? void 0 : ec.id
        }),
        info: (0, r.jsx)('div', {
            className: U.infoWrapper,
            children: et
                ? (0, r.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: 'none',
                      children: ea
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != J &&
                              (0, r.jsxs)('div', {
                                  className: U.activityPresenceDetailsContainer,
                                  children: [
                                      null != ed &&
                                          (0, r.jsxs)('div', {
                                              className: U.activityPresenceDetailsItemContainer,
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      children: (0, r.jsx)(ep.Icon, {
                                                          size: 'xxs',
                                                          color: 'currentColor'
                                                      })
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'none',
                                                      children: (0, r.jsx)(F, { start: ed })
                                                  })
                                              ]
                                          }),
                                      (0, r.jsxs)('div', {
                                          className: a()(U.activityPresenceDetailsItemContainer, U.truncatesText),
                                          children: [
                                              (0, r.jsx)('div', {
                                                  children: (0, r.jsx)(c.hH0, {
                                                      size: 'xxs',
                                                      color: 'currentColor'
                                                  })
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'none',
                                                  lineClamp: 1,
                                                  children: J
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          eu > 0 &&
                              (0, r.jsx)(x.K, {
                                  activityUsers: q,
                                  guildId: R,
                                  activityText: ep.text
                              })
                      ]
                  })
        }),
        actions: em,
        onClickContent: eo,
        trackingConfig: {
            id: O.id,
            linkType: C.Un.ACTIVITY_INSTANCE
        }
    });
});
