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
    j = n(981631),
    k = n(701488),
    M = n(967249),
    U = n(388032),
    G = n(833788);
function B(e) {
    var t, n, a, l;
    let d,
        { application: I, channelId: w, guildId: x, message: B } = e,
        { analyticsLocations: F } = (0, g.ZP)(m.Z.ACTIVITY_INSTANCE_EMBED),
        V = (0, u.O)(),
        H = (0, s.e7)([A.Z], () => A.Z.getChannel(w), [w]),
        Y = (null == H || null == (t = H.isThread) ? void 0 : t.call(H)) ? (null == H ? void 0 : H.parent_id) : w,
        W = (0, s.e7)([S.default], () => S.default.getId()),
        {
            embeddedActivity: K,
            currentEmbeddedActivity: z,
            activityLaunchState: q,
        } = (0, s.cj)(
            [f.ZP],
            () => ({
                embeddedActivity: f.ZP.getEmbeddedActivitiesForChannel(null != Y ? Y : "").find(
                    (e) => e.applicationId === I.id,
                ),
                currentEmbeddedActivity: f.ZP.getCurrentEmbeddedActivity(),
                activityLaunchState: f.ZP.getLaunchState(I.id, null != Y ? Y : void 0),
            }),
            [Y, I.id],
        ),
        X = null == K ? void 0 : K.userIds,
        Q = (0, s.Wu)(
            [N.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => N.default.getUser(e))
                    .filter(D.lm),
            [X],
        ),
        J = (0, s.e7)([C.Z], () => {
            if (null == X) return null;
            for (let e of X) {
                let t = C.Z.findActivity(e, (e) => e.application_id === I.id);
                if (null != t) return t;
            }
            return null;
        }, [I.id, X]),
        $ = null == J ? void 0 : J.details,
        ee = i.useMemo(() => {
            let e = new T.ZP(I);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.wT), e;
        }, [I]),
        et = (0, h.s5)({
            userId: W,
            channelId: w,
            application: ee,
        }),
        en = null == K,
        er = (0, L.NL)({
            embeddedActivity: K,
            joinability: et,
            currentEmbeddedActivity: z,
            channel: H,
        }),
        ei = i.useId(),
        ea = null != q && q.isLaunching && q.componentId === ei,
        eo = async () => {
            R.default.track(j.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: I.id,
                channel_id: w,
                channel_type: null == H ? void 0 : H.type,
                is_activity_start: en,
                cta: "Play",
            }),
                en
                    ? await (0, p.Z)({
                          targetApplicationId: I.id,
                          channelId: w,
                          locationObject: V.location,
                          analyticsLocations: F,
                          componentId: ei,
                          commandOrigin: E.bB.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, _.Z)({
                          applicationId: K.applicationId,
                          activityChannelId: w,
                          locationObject: V.location,
                          analyticsLocations: F,
                          componentId: ei,
                      });
        },
        es = er.disabled ? U.intl.string(U.t.JBnc7O) : U.intl.string(U.t.cX9uLS),
        el = (0, v.G)(ee, () => {
            R.default.track(j.rMx.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: I.id,
                channel_id: w,
                channel_type: null == H ? void 0 : H.type,
                cta: "View",
            });
        }),
        ec = P.ZP.getApplicationIconURL({
            id: I.id,
            icon: I.icon,
            bot: I.bot,
        });
    er.disabled && (d = null != (a = er.tooltip) ? a : er.text);
    let eu = Q.length,
        ed =
            null != (l = null == J || null == (n = J.timestamps) ? void 0 : n.start)
                ? l
                : null == J
                  ? void 0
                  : J.created_at,
        ef = (0, y.r)(J),
        e_ = [
            {
                label: en ? U.intl.string(U.t.RscU7O) : U.intl.string(U.t.VJlc0d),
                trackingArea: O.j_.PLAY,
                onClick: eo,
                disabledReason: d,
                submitting: ea,
            },
        ];
    return (0, r.jsx)(b.W, {
        header: U.intl.string(U.t.pkq6Vl),
        title: I.name,
        iconSrc: ec,
        info: (0, r.jsx)("div", {
            className: G.infoWrapper,
            children: en
                ? (0, r.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      color: "none",
                      children: es,
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != $ &&
                              (0, r.jsxs)("div", {
                                  className: G.activityPresenceDetailsContainer,
                                  children: [
                                      null != ed &&
                                          (0, r.jsxs)("div", {
                                              className: G.activityPresenceDetailsItemContainer,
                                              children: [
                                                  (0, r.jsx)("div", {
                                                      className: G.activityPresenceDetailsItemIconContainer,
                                                      children: (0, r.jsx)(ef.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, r.jsx)(Z, { start: ed }),
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
                                                  children: $,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          eu > 0 &&
                              (0, r.jsx)(y.K, {
                                  activityUsers: Q,
                                  guildId: x,
                                  activityText: ef.text,
                              }),
                      ],
                  }),
        }),
        actions: e_,
        onClickContent: el,
        trackingConfig: {
            id: I.id,
            linkType: M.U.ACTIVITY_INSTANCE,
            guildId: x,
            channelId: w,
            messageId: B.id,
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
