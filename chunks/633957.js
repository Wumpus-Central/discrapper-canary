n.d(t, { Z: () => Z }), n(388685);
var r = n(951288),
    i = n(647438),
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
    C = n(158776),
    N = n(594174),
    R = n(626135),
    P = n(768581),
    w = n(70956),
    D = n(823379),
    x = n(506071),
    L = n(226378),
    j = n(981631),
    M = n(701488),
    k = n(388032),
    U = n(853392);
function G(e) {
    var t, n, a, l;
    let d,
        { application: I, channelId: w, guildId: x } = e,
        { analyticsLocations: G } = (0, g.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED),
        Z = (0, u.O)(),
        V = (0, s.e7)([A.Z], () => A.Z.getChannel(w), [w]),
        F = (null == V || null == (t = V.isThread) ? void 0 : t.call(V)) ? (null == V ? void 0 : V.parent_id) : w,
        H = (0, s.e7)([S.default], () => S.default.getId()),
        {
            embeddedActivity: Y,
            currentEmbeddedActivity: W,
            activityLaunchState: K,
        } = (0, s.cj)(
            [f.ZP],
            () => ({
                embeddedActivity: f.ZP.getEmbeddedActivitiesForChannel(null != F ? F : "").find(
                    (e) => e.applicationId === I.id,
                ),
                currentEmbeddedActivity: f.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: f.ZP.getLaunchState(I.id, null != F ? F : void 0),
            }),
            [F, I.id],
        ),
        z = null == Y ? void 0 : Y.userIds,
        q = (0, s.Wu)(
            [N.default],
            () =>
                Array.from(null != z ? z : [])
                    .map((e) => N.default.getUser(e))
                    .filter(D.lm),
            [z],
        ),
        X = (0, s.e7)([C.Z], () => {
            if (null == z) return null;
            for (let e of z) {
                let t = C.Z.findActivity(e, (e) => e.application_id === I.id);
                if (null != t) return t;
            }
            return null;
        }, [I.id, z]),
        Q = null == X ? void 0 : X.details,
        J = i.useMemo(() => {
            let e = new T.ZP(I);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.wT), e;
        }, [I]),
        $ = (0, h.s5)({
            userId: H,
            channelId: w,
            application: J,
        }),
        ee = null == Y,
        et = (0, L.NL)({
            embeddedActivity: Y,
            joinability: $,
            currentEmbeddedActivity: W,
            channel: V,
        }),
        en = i.useId(),
        er = null != K && K.isLaunching && K.componentId === en,
        ei = async () => {
            R.default.track(j.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: I.id,
                channel_id: w,
                channel_type: null == V ? void 0 : V.type,
                is_activity_start: ee,
                cta: "Play",
            }),
                ee
                    ? await (0, p.Z)({
                          targetApplicationId: I.id,
                          channelId: w,
                          locationObject: Z.location,
                          analyticsLocations: G,
                          componentId: en,
                          commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, _.Z)({
                          applicationId: Y.applicationId,
                          activityChannelId: w,
                          locationObject: Z.location,
                          analyticsLocations: G,
                          componentId: en,
                      });
        },
        ea = et.disabled ? k.intl.string(k.t.JBnc7O) : k.intl.string(k.t.cX9uLS),
        eo = (0, v.G)(J, () => {
            R.default.track(j.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: I.id,
                channel_id: w,
                channel_type: null == V ? void 0 : V.type,
                cta: "View",
            });
        }),
        es = P.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: I.bot,
        });
    et.disabled && (d = null != (a = et.tooltip) ? a : et.text);
    let el = q.length,
        ec =
            null != (l = null == X || null == (n = X.timestamps) ? void 0 : n.start)
                ? l
                : null == X
                  ? void 0
                  : X.created_at,
        eu = (0, y.r)(X),
        ed = [
            {
                label: ee ? k.intl.string(k.t.RscU7O) : k.intl.string(k.t.VJlc0d),
                trackingArea: O.j_.PLAY,
                onClick: ei,
                disabledReason: d,
                submitting: er,
            },
        ];
    return (0, r.jsx)(b.W, {
        header: k.intl.string(k.t.pkq6Vl),
        title: I.name,
        iconSrc: es,
        info: (0, r.jsx)("div", {
            className: U.infoWrapper,
            children: ee
                ? (0, r.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      color: "none",
                      children: ea,
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != Q &&
                              (0, r.jsxs)("div", {
                                  className: U.activityPresenceDetailsContainer,
                                  children: [
                                      null != ec &&
                                          (0, r.jsxs)("div", {
                                              className: U.activityPresenceDetailsItemContainer,
                                              children: [
                                                  (0, r.jsx)("div", {
                                                      className: U.activityPresenceDetailsItemIconContainer,
                                                      children: (0, r.jsx)(eu.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, r.jsx)(B, { start: ec }),
                                                  }),
                                              ],
                                          }),
                                      (0, r.jsxs)("div", {
                                          className: o()(U.activityPresenceDetailsItemContainer, U.truncatesText),
                                          children: [
                                              (0, r.jsx)("div", {
                                                  children: (0, r.jsx)(c.hH0, {
                                                      size: "xxs",
                                                      color: "currentColor",
                                                  }),
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: Q,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          el > 0 &&
                              (0, r.jsx)(y.K, {
                                  activityUsers: q,
                                  guildId: x,
                                  activityText: eu.text,
                              }),
                      ],
                  }),
        }),
        actions: ed,
        onClickContent: eo,
        trackingConfig: {
            id: I.id,
            linkType: O.Un.ACTIVITY_INSTANCE,
        },
    });
}
let B = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        a = (0, x.n)(),
        o = (0, s.e7)([d.Z], () => d.Z.useReducedMotion),
        c = !1 === a || o;
    return (
        i.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(c ? 15 * w.Z.Millis.SECOND : w.Z.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / w.Z.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, I.m)(n)
    );
});
B.displayName = "ActivityRuntimeCounter";
let Z = i.memo(G);
