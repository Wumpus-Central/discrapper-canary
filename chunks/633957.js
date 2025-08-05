(n.d(t, { Z: () => Z }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(846519),
    c = n(481060),
    u = n(2052),
    d = n(607070),
    f = n(317381),
    _ = n(638880),
    p = n(122613),
    h = n(527805),
    m = n(100527),
    g = n(906732),
    E = n(895924),
    b = n(758199),
    y = n(943762),
    O = n(914498),
    v = n(515344),
    I = n(429551),
    T = n(973616),
    S = n(314897),
    A = n(592125),
    N = n(158776),
    C = n(594174),
    w = n(626135),
    R = n(768581),
    P = n(70956),
    D = n(823379),
    L = n(506071),
    x = n(226378),
    k = n(981631),
    j = n(701488),
    M = n(388032),
    U = n(484608);
function G(e) {
    var t, n, a, l;
    let d,
        { application: I, channelId: P, guildId: L } = e,
        { analyticsLocations: G } = (0, g.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED),
        Z = (0, u.O)(),
        F = (0, s.e7)([A.Z], () => A.Z.getChannel(P), [P]),
        V = (null == F || null == (t = F.isThread) ? void 0 : t.call(F)) ? (null == F ? void 0 : F.parent_id) : P,
        H = (0, s.e7)([S.default], () => S.default.getId()),
        {
            embeddedActivity: Y,
            currentEmbeddedActivity: W,
            activityLaunchState: K
        } = (0, s.cj)(
            [f.ZP],
            () => ({
                embeddedActivity: f.ZP.getEmbeddedActivitiesForChannel(null != V ? V : '').find((e) => e.applicationId === I.id),
                currentEmbeddedActivity: f.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: f.ZP.getLaunchState(I.id, null != V ? V : void 0)
            }),
            [V, I.id]
        ),
        z = null == Y ? void 0 : Y.userIds,
        q = (0, s.Wu)(
            [C.default],
            () =>
                Array.from(null != z ? z : [])
                    .map((e) => C.default.getUser(e))
                    .filter(D.lm),
            [z]
        ),
        $ = (0, s.e7)(
            [N.Z],
            () => {
                if (null == z) return null;
                for (let e of z) {
                    let t = N.Z.findActivity(e, (e) => e.application_id === I.id);
                    if (null != t) return t;
                }
                return null;
            },
            [I.id, z]
        ),
        X = null == $ ? void 0 : $.details,
        Q = i.useMemo(() => {
            let e = new T.ZP(I);
            return (null == e.embeddedActivityConfig && (e.embeddedActivityConfig = j.wT), e);
        }, [I]),
        J = (0, h.s5)({
            userId: H,
            channelId: P,
            application: Q
        }),
        ee = null == Y,
        et = (0, x.NL)({
            embeddedActivity: Y,
            joinability: J,
            currentEmbeddedActivity: W,
            channel: F
        }),
        en = i.useId(),
        er = null != K && K.isLaunching && K.componentId === en,
        ei = async () => {
            (w.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: I.id,
                channel_id: P,
                channel_type: null == F ? void 0 : F.type,
                is_activity_start: ee,
                cta: 'Play'
            }),
                ee
                    ? await (0, p.Z)({
                          targetApplicationId: I.id,
                          channelId: P,
                          locationObject: Z.location,
                          analyticsLocations: G,
                          componentId: en,
                          commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED
                      })
                    : await (0, _.Z)({
                          applicationId: Y.applicationId,
                          activityChannelId: P,
                          locationObject: Z.location,
                          analyticsLocations: G,
                          componentId: en
                      }));
        },
        ea = et.disabled ? M.intl.string(M.t.JBnc7O) : M.intl.string(M.t.cX9uLS),
        eo = (0, v.G)(Q, () => {
            w.default.track(k.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: I.id,
                channel_id: P,
                channel_type: null == F ? void 0 : F.type,
                cta: 'View'
            });
        }),
        es = R.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: I.bot
        });
    et.disabled && (d = null != (a = et.tooltip) ? a : et.text);
    let el = q.length,
        ec = null != (l = null == $ || null == (n = $.timestamps) ? void 0 : n.start) ? l : null == $ ? void 0 : $.created_at,
        eu = (0, y.r)($),
        ed = [
            {
                label: ee ? M.intl.string(M.t.RscU7O) : M.intl.string(M.t.VJlc0d),
                trackingArea: O.j_.PLAY,
                onClick: ei,
                disabledReason: d,
                submitting: er
            }
        ];
    return (0, r.jsx)(b.W, {
        header: M.intl.string(M.t.pkq6Vl),
        title: I.name,
        iconSrc: es,
        info: (0, r.jsx)('div', {
            className: U.infoWrapper,
            children: ee
                ? (0, r.jsx)(c.Text, {
                      variant: 'text-xs/medium',
                      color: 'none',
                      children: ea
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != X &&
                              (0, r.jsxs)('div', {
                                  className: U.activityPresenceDetailsContainer,
                                  children: [
                                      null != ec &&
                                          (0, r.jsxs)('div', {
                                              className: U.activityPresenceDetailsItemContainer,
                                              children: [
                                                  (0, r.jsx)('div', {
                                                      className: U.activityPresenceDetailsItemIconContainer,
                                                      children: (0, r.jsx)(eu.Icon, {
                                                          size: 'xxs',
                                                          color: 'currentColor'
                                                      })
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'none',
                                                      children: (0, r.jsx)(B, { start: ec })
                                                  })
                                              ]
                                          }),
                                      (0, r.jsxs)('div', {
                                          className: o()(U.activityPresenceDetailsItemContainer, U.truncatesText),
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
                                                  children: X
                                              })
                                          ]
                                      })
                                  ]
                              }),
                          el > 0 &&
                              (0, r.jsx)(y.K, {
                                  activityUsers: q,
                                  guildId: L,
                                  activityText: eu.text
                              })
                      ]
                  })
        }),
        actions: ed,
        onClickContent: eo,
        trackingConfig: {
            id: I.id,
            linkType: O.Un.ACTIVITY_INSTANCE
        }
    });
}
let B = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        a = (0, L.n)(),
        o = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        c = !1 === a || o;
    return (
        i.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(c ? 15 * P.Z.Millis.SECOND : P.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / P.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, I.m)(n)
    );
});
B.displayName = 'ActivityRuntimeCounter';
let Z = i.memo(G);
