n.d(t, { Z: () => F }), n(388685);
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
    M = n(981631),
    j = n(701488),
    k = n(967249),
    U = n(388032),
    G = n(853392);
function B(e) {
    var t, n, a;
    let l,
        { application: d, channelId: I, guildId: w, message: x } = e,
        { analyticsLocations: B } = (0, g.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED),
        F = (0, u.O)(),
        V = (0, s.e7)([A.Z], () => A.Z.getChannel(I), [I]),
        H = (null == V || null == (t = V.isThread) ? void 0 : t.call(V)) ? (null == V ? void 0 : V.parent_id) : I,
        Y = (0, s.e7)([S.default], () => S.default.getId()),
        {
            embeddedActivity: W,
            currentEmbeddedActivity: K,
            activityLaunchState: z,
        } = (0, s.cj)(
            [f.ZP],
            () => ({
                embeddedActivity: f.ZP.getEmbeddedActivitiesForChannel(null != H ? H : "").find(
                    (e) => e.applicationId === d.id,
                ),
                currentEmbeddedActivity: f.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: f.ZP.getLaunchState(d.id, null != H ? H : void 0),
            }),
            [H, d.id],
        ),
        q = null == W ? void 0 : W.userIds,
        X = (0, s.Wu)(
            [N.default],
            () =>
                Array.from(null != q ? q : [])
                    .map((e) => N.default.getUser(e))
                    .filter(D.lm),
            [q],
        ),
        Q = (0, s.e7)([C.Z], () => {
            if (null == q) return null;
            for (let e of q) {
                let t = C.Z.findActivity(e, (e) => e.application_id === d.id);
                if (null != t) return t;
            }
            return null;
        }, [d.id, q]),
        J = null == Q ? void 0 : Q.details,
        $ = i.useMemo(() => {
            let e = new T.ZP(d);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = j.wT), e;
        }, [d]),
        ee = (0, h.s5)({
            userId: Y,
            channelId: I,
            application: $,
        }),
        et = null == W,
        en = (0, L.NL)({
            embeddedActivity: W,
            joinability: ee,
            currentEmbeddedActivity: K,
            channel: V,
        }),
        er = i.useId(),
        ei = null != z && z.isLaunching && z.componentId === er,
        ea = async () => {
            R.default.track(M.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: d.id,
                channel_id: I,
                channel_type: null == V ? void 0 : V.type,
                is_activity_start: et,
                cta: "Play",
            }),
                et
                    ? await (0, p.Z)({
                          targetApplicationId: d.id,
                          channelId: I,
                          locationObject: F.location,
                          analyticsLocations: B,
                          componentId: er,
                          commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, _.Z)({
                          applicationId: W.applicationId,
                          activityChannelId: I,
                          locationObject: F.location,
                          analyticsLocations: B,
                          componentId: er,
                      });
        },
        eo = en.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ),
        es = (0, v.G)($, () => {
            R.default.track(M.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: d.id,
                channel_id: I,
                channel_type: null == V ? void 0 : V.type,
                cta: "View",
            });
        }),
        el = P.ZP.getApplicationIconURL({
            id: d.id,
            icon: d.icon,
            bot: d.bot,
        });
    en.disabled && (l = en.tooltip);
    let ec = X.length,
        eu =
            null != (a = null == Q || null == (n = Q.timestamps) ? void 0 : n.start)
                ? a
                : null == Q
                  ? void 0
                  : Q.created_at,
        ed = (0, y.r)({
            activity: Q,
            activityUsersCount: ec,
        }),
        ef = [
            {
                label: en.text,
                trackingArea: O.j_.PLAY,
                onClick: ea,
                disabled: en.disabled,
                disabledReason: l,
                submitting: ei,
            },
        ];
    return (0, r.jsx)(b.W, {
        header: U.intl.string(U.t.pkq6Vq),
        title: d.name,
        iconSrc: el,
        info: (0, r.jsx)("div", {
            className: G.infoWrapper,
            children: et
                ? (0, r.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      color: "none",
                      children: eo,
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != J &&
                              (0, r.jsxs)("div", {
                                  className: G.activityPresenceDetailsContainer,
                                  children: [
                                      null != eu &&
                                          (0, r.jsxs)("div", {
                                              className: G.activityPresenceDetailsItemContainer,
                                              children: [
                                                  (0, r.jsx)("div", {
                                                      className: G.activityPresenceDetailsItemIconContainer,
                                                      children: (0, r.jsx)(ed.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, r.jsx)(Z, { start: eu }),
                                                  }),
                                              ],
                                          }),
                                      (0, r.jsxs)("div", {
                                          className: o()(G.activityPresenceDetailsItemContainer, G.truncatesText),
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
                                                  children: J,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ec > 0 &&
                              (0, r.jsx)(y.K, {
                                  activityUsers: X,
                                  guildId: w,
                                  activityText: ed.text,
                              }),
                      ],
                  }),
        }),
        actions: ef,
        onClickContent: es,
        trackingConfig: {
            id: d.id,
            linkType: k.U.ACTIVITY_INSTANCE,
            guildId: w,
            channelId: I,
            messageId: x.id,
            isDeadEnd: et,
        },
    });
}
let Z = i.memo((e) => {
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
Z.displayName = "ActivityRuntimeCounter";
let F = i.memo(B);
