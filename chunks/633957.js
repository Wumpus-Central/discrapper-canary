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
    g = n(527805),
    _ = n(100527),
    h = n(906732),
    b = n(895924),
    E = n(758199),
    C = n(943762),
    x = n(914498),
    v = n(515344),
    O = n(429551),
    y = n(973616),
    j = n(314897),
    I = n(592125),
    S = n(158776),
    T = n(594174),
    N = n(626135),
    P = n(768581),
    A = n(70956),
    w = n(823379),
    Z = n(506071),
    R = n(226378),
    L = n(981631),
    D = n(701488),
    k = n(388032),
    M = n(484608);
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
        (0, O.m)(n)
    );
});
U.displayName = 'ActivityRuntimeCounter';
let F = i.memo(function (e) {
    var t, n, l, s;
    let d,
        { application: O, channelId: A, guildId: Z } = e,
        { analyticsLocations: F } = (0, h.ZP)(_.Z.ACTIVITY_INSTANCE_EMBED),
        B = (0, u.O)(),
        G = (0, o.e7)([I.Z], () => I.Z.getChannel(A), [A]),
        H = (null == G || null == (t = G.isThread) ? void 0 : t.call(G)) ? (null == G ? void 0 : G.parent_id) : A,
        V = (0, o.e7)([j.default], () => j.default.getId()),
        {
            embeddedActivity: z,
            currentEmbeddedActivity: W,
            activityLaunchState: K
        } = (0, o.cj)(
            [p.ZP],
            () => ({
                embeddedActivity: p.ZP.getEmbeddedActivitiesForChannel(null != H ? H : '').find((e) => e.applicationId === O.id),
                currentEmbeddedActivity: p.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: p.ZP.getLaunchState(O.id, null != H ? H : void 0)
            }),
            [H, O.id]
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
                    let t = S.Z.findActivity(e, (e) => e.application_id === O.id);
                    if (null != t) return t;
                }
                return null;
            },
            [O.id, Y]
        ),
        Q = null == q ? void 0 : q.details,
        J = i.useMemo(() => {
            let e = new y.ZP(O);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = D.wT), e);
        }, [O]),
        $ = (0, g.s5)({
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
            (N.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: O.id,
                channel_id: A,
                channel_type: null == G ? void 0 : G.type,
                is_activity_start: ee,
                cta: 'Play'
            }),
                ee
                    ? await (0, f.Z)({
                          targetApplicationId: O.id,
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
        el = et.disabled ? k.intl.string(k.t.JBnc7O) : k.intl.string(k.t.cX9uLS),
        ea = (0, v.G)(J, () => {
            N.default.track(L.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: O.id,
                channel_id: A,
                channel_type: null == G ? void 0 : G.type,
                cta: 'View'
            });
        }),
        eo = P.ZP.getApplicationIconURL({
            id: O.id,
            icon: O.icon,
            bot: O.bot
        });
    et.disabled && (d = null != (l = et.tooltip) ? l : et.text);
    let es = X.length,
        ec = null != (s = null == q || null == (n = q.timestamps) ? void 0 : n.start) ? s : null == q ? void 0 : q.created_at,
        eu = (0, C.r)(q),
        ed = [
            {
                label: ee ? k.intl.string(k.t.RscU7O) : k.intl.string(k.t.VJlc0d),
                trackingArea: x.j_.PLAY,
                onClick: ei,
                disabledReason: d,
                submitting: er
            }
        ];
    return (0, r.jsx)(E.W, {
        header: k.intl.string(k.t.pkq6Vl),
        title: O.name,
        iconSrc: eo,
        info: (0, r.jsx)('div', {
            className: M.infoWrapper,
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
                                  className: M.activityPresenceDetailsContainer,
                                  children: [
                                      null != ec &&
                                          (0, r.jsxs)('div', {
                                              className: M.activityPresenceDetailsItemContainer,
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: M.activityPresenceDetailsItemIconContainer,
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
                                          className: a()(M.activityPresenceDetailsItemContainer, M.truncatesText),
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
            id: O.id,
            linkType: x.Un.ACTIVITY_INSTANCE
        }
    });
});
