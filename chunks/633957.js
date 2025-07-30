(n.d(t, { Z: () => F }), n(388685));
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
    _ = n(527805),
    g = n(100527),
    h = n(906732),
    b = n(895924),
    E = n(758199),
    C = n(943762),
    O = n(914498),
    y = n(515344),
    v = n(429551),
    x = n(973616),
    I = n(314897),
    j = n(592125),
    S = n(158776),
    T = n(594174),
    N = n(626135),
    P = n(768581),
    A = n(70956),
    w = n(823379),
    Z = n(506071),
    R = n(226378),
    D = n(981631),
    L = n(701488),
    M = n(388032),
    k = n(484608);
let U = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        l = (0, Z.n)(),
        a = (0, o.e7)([d.Z], () => d.Z.useReducedMotion),
        c = !1 === l || a;
    return (
        i.useEffect(() => {
            let e = new s.Xp();
            return (
                e.start(c ? 15 * A.Z.Millis.SECOND : A.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / A.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, v.m)(n)
    );
});
U.displayName = 'ActivityRuntimeCounter';
let F = i.memo(function (e) {
    var t, n, l, s;
    let d,
        { application: v, channelId: A, guildId: Z } = e,
        { analyticsLocations: F } = (0, h.ZP)(g.Z.ACTIVITY_INSTANCE_EMBED),
        B = (0, u.O)(),
        G = (0, o.e7)([j.Z], () => j.Z.getChannel(A), [A]),
        H = (null == G || null == (t = G.isThread) ? void 0 : t.call(G)) ? (null == G ? void 0 : G.parent_id) : A,
        V = (0, o.e7)([I.default], () => I.default.getId()),
        {
            embeddedActivity: z,
            currentEmbeddedActivity: W,
            activityLaunchState: K
        } = (0, o.cj)(
            [p.ZP],
            () => ({
                embeddedActivity: p.ZP.getEmbeddedActivitiesForChannel(null != H ? H : '').find((e) => e.applicationId === v.id),
                currentEmbeddedActivity: p.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: p.ZP.getLaunchState(v.id, null != H ? H : void 0)
            }),
            [H, v.id]
        ),
        Y = null == z ? void 0 : z.userIds,
        X = (0, o.Wu)(
            [T.default],
            () =>
                Array.from(null != Y ? Y : [])
                    .map((e) => T.default.getUser(e))
                    .filter(w.lm),
            [Y]
        ),
        q = (0, o.e7)(
            [S.Z],
            () => {
                if (null == Y) return null;
                for (let e of Y) {
                    let t = S.Z.findActivity(e, (e) => e.application_id === v.id);
                    if (null != t) return t;
                }
                return null;
            },
            [v.id, Y]
        ),
        Q = null == q ? void 0 : q.details,
        J = i.useMemo(() => {
            let e = new x.ZP(v);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = L.wT), e);
        }, [v]),
        $ = (0, _.s5)({
            userId: V,
            channelId: A,
            application: J
        }),
        ee = null == z,
        et = (0, R.NL)({
            embeddedActivity: z,
            joinability: $,
            currentEmbeddedActivity: W,
            channel: G
        }),
        en = i.useId(),
        er = null != K && K.isLaunching && K.componentId === en,
        ei = async () => {
            (N.default.track(D.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: v.id,
                channel_id: A,
                channel_type: null == G ? void 0 : G.type,
                is_activity_start: ee,
                cta: 'Play'
            }),
                ee
                    ? await (0, f.Z)({
                          targetApplicationId: v.id,
                          channelId: A,
                          locationObject: B.location,
                          analyticsLocations: F,
                          componentId: en,
                          commandOrigin: b.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, m.Z)({
                          applicationId: z.applicationId,
                          activityChannelId: A,
                          locationObject: B.location,
                          analyticsLocations: F,
                          componentId: en
                      }));
        },
        el = et.disabled ? M.intl.string(M.t.JBnc7O) : M.intl.string(M.t.cX9uLS),
        ea = (0, y.G)(J, () => {
            N.default.track(D.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: v.id,
                channel_id: A,
                channel_type: null == G ? void 0 : G.type,
                cta: 'View'
            });
        }),
        eo = P.ZP.getApplicationIconURL({
            id: v.id,
            icon: v.icon,
            bot: v.bot
        });
    et.disabled && (d = null != (l = et.tooltip) ? l : et.text);
    let es = X.length,
        ec = null != (s = null == q || null == (n = q.timestamps) ? void 0 : n.start) ? s : null == q ? void 0 : q.created_at,
        eu = (0, C.r)(q),
        ed = [
            {
                label: ee ? M.intl.string(M.t.RscU7O) : M.intl.string(M.t.VJlc0d),
                trackingArea: O.j_.PLAY,
                onClick: ei,
                disabledReason: d,
                submitting: er
            }
        ];
    return (0, r.jsx)(E.W, {
        header: M.intl.string(M.t.pkq6Vl),
        title: v.name,
        iconSrc: eo,
        info: (0, r.jsx)('div', {
            className: k.infoWrapper,
            children: ee
                ? (0, r.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: 'none',
                      children: el
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != Q &&
                              (0, r.jsxs)('div', {
                                  className: k.activityPresenceDetailsContainer,
                                  children: [
                                      null != ec &&
                                          (0, r.jsxs)('div', {
                                              className: k.activityPresenceDetailsItemContainer,
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: k.activityPresenceDetailsItemIconContainer,
                                                      children: (0, r.jsx)(eu.Icon, {
                                                          size: 'xxs',
                                                          color: 'currentColor'
                                                      })
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'none',
                                                      children: (0, r.jsx)(U, { start: ec })
                                                  })
                                              ]
                                          }),
                                      (0, r.jsxs)('div', {
                                          className: a()(k.activityPresenceDetailsItemContainer, k.truncatesText),
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
                                                  children: Q
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          es > 0 &&
                              (0, r.jsx)(C.K, {
                                  activityUsers: X,
                                  guildId: Z,
                                  activityText: eu.text
                              })
                      ]
                  })
        }),
        actions: ed,
        onClickContent: ea,
        trackingConfig: {
            id: v.id,
            linkType: O.Un.ACTIVITY_INSTANCE
        }
    });
});
