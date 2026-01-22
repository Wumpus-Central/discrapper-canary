n.d(t, { A: () => B }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(451988),
    c = n(397927),
    u = n(212245),
    d = n(775602),
    f = n(933958),
    p = n(447031),
    _ = n(956549),
    h = n(550151),
    m = n(793574),
    g = n(688810),
    E = n(392054),
    b = n(572211),
    y = n(178910),
    O = n(354287),
    A = n(574660),
    v = n(853390),
    S = n(611010),
    I = n(961350),
    T = n(734057),
    C = n(290863),
    N = n(287809),
    R = n(954571),
    w = n(486020),
    P = n(927813),
    D = n(403362),
    x = n(218394),
    L = n(255345),
    j = n(652215),
    M = n(360469),
    k = n(768349),
    U = n(985018),
    G = n(356053);
function V(e) {
    var t, n, a;
    let l,
        { application: d, channelId: v, guildId: P, message: x } = e,
        { analyticsLocations: V } = (0, g.Ay)(m.A.ACTIVITY_INSTANCE_EMBED),
        B = (0, u.p)(),
        H = (0, o.bG)([T.A], () => T.A.getChannel(v), [v]),
        Y = (null == H || null == (n = H.isThread) ? void 0 : n.call(H)) ? (null == H ? void 0 : H.parent_id) : v,
        W = (0, o.bG)([I.default], () => I.default.getId()),
        {
            embeddedActivity: K,
            currentEmbeddedActivity: z,
            activityLaunchState: q,
        } = (0, o.cf)(
            [f.Ay],
            () => ({
                embeddedActivity: f.Ay.getEmbeddedActivitiesForChannel(null != Y ? Y : "").find(
                    (e) => e.applicationId === d.id,
                ),
                currentEmbeddedActivity: f.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: f.Ay.getLaunchState(d.id, null != Y ? Y : void 0),
            }),
            [Y, d.id],
        ),
        X = null == K ? void 0 : K.userIds,
        Z = (0, o.yK)(
            [N.default],
            () =>
                Array.from(null != X ? X : [])
                    .map((e) => N.default.getUser(e))
                    .filter(D.Vq),
            [X],
        ),
        Q = (0, o.bG)([C.A], () => {
            if (null == X) return null;
            for (let e of X) {
                let t = C.A.findActivity(e, (e) => e.application_id === d.id);
                if (null != t) return t;
            }
            return null;
        }, [d.id, X]),
        $ = null == Q ? void 0 : Q.details,
        J = i.useMemo(() => {
            let e = new S.Ay(d);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.Gl), e;
        }, [d]),
        ee = (0, h.vG)({
            userId: W,
            channelId: v,
            application: J,
        }),
        et = null == K,
        en = (0, L.I3)({
            embeddedActivity: K,
            joinability: ee,
            currentEmbeddedActivity: z,
            channel: H,
        }),
        er = i.useId(),
        ei = null != q && q.isLaunching && q.componentId === er,
        ea = async () => {
            R.default.track(j.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: d.id,
                channel_id: v,
                channel_type: null == H ? void 0 : H.type,
                is_activity_start: et,
                cta: "Play",
            }),
                et
                    ? await (0, _.A)({
                          targetApplicationId: d.id,
                          channelId: v,
                          locationObject: B.location,
                          analyticsLocations: V,
                          componentId: er,
                          commandOrigin: E.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, p.A)({
                          applicationId: K.applicationId,
                          activityChannelId: v,
                          locationObject: B.location,
                          analyticsLocations: V,
                          componentId: er,
                      });
        },
        es = en.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ),
        eo = (0, A.F)(J, () => {
            R.default.track(j.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: d.id,
                channel_id: v,
                channel_type: null == H ? void 0 : H.type,
                cta: "View",
            });
        }),
        el = w.Ay.getApplicationIconURL({
            id: d.id,
            icon: d.icon,
            bot: d.bot,
        });
    en.disabled && (l = en.tooltip);
    let ec = Z.length,
        eu =
            null != (t = null == Q || null == (a = Q.timestamps) ? void 0 : a.start)
                ? t
                : null == Q
                  ? void 0
                  : Q.created_at,
        ed = (0, y.y)({
            activity: Q,
            activityUsersCount: ec,
        }),
        ef = [
            {
                label: en.text,
                trackingArea: O.kY.PLAY,
                onClick: ea,
                disabled: en.disabled,
                disabledReason: l,
                submitting: ei,
            },
        ];
    return (0, r.jsx)(b.h, {
        header: U.intl.string(U.t.pkq6Vq),
        title: d.name,
        iconSrc: el,
        info: (0, r.jsx)("div", {
            className: G.QR,
            children: et
                ? (0, r.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      color: "none",
                      children: es,
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != $ &&
                              (0, r.jsxs)("div", {
                                  className: G.oL,
                                  children: [
                                      null != eu &&
                                          (0, r.jsxs)("div", {
                                              className: G.DT,
                                              children: [
                                                  (0, r.jsx)("div", {
                                                      className: G.y9,
                                                      children: (0, r.jsx)(ed.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, r.jsx)(F, { start: eu }),
                                                  }),
                                              ],
                                          }),
                                      (0, r.jsxs)("div", {
                                          className: s()(G.DT, G.PK),
                                          children: [
                                              (0, r.jsx)("div", {
                                                  children: (0, r.jsx)(c.ueQ, {
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
                          ec > 0 &&
                              (0, r.jsx)(y.$, {
                                  activityUsers: Z,
                                  guildId: P,
                                  activityText: ed.text,
                              }),
                      ],
                  }),
        }),
        actions: ef,
        onClickContent: eo,
        trackingConfig: {
            id: d.id,
            linkType: k.J.ACTIVITY_INSTANCE,
            guildId: P,
            channelId: v,
            messageId: x.id,
            isDeadEnd: et,
        },
    });
}
let F = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        a = (0, x.j)(),
        s = (0, o.bG)([d.A], () => d.A.useReducedMotion),
        c = !1 === a || s;
    return (
        i.useEffect(() => {
            let e = new l.IX();
            return (
                e.start(c ? 15 * P.A.Millis.SECOND : P.A.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / P.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, v.f)(n)
    );
});
F.displayName = "ActivityRuntimeCounter";
let B = i.memo(V);
