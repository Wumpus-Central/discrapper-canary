n.d(t, {
    A: () => F,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(451988),
    c = n(397927),
    u = n(212245),
    d = n(775602),
    p = n(933958),
    m = n(447031),
    f = n(956549),
    g = n(550151),
    h = n(793574),
    _ = n(688810),
    b = n(392054),
    A = n(572211),
    y = n(178910),
    v = n(354287),
    x = n(574660),
    O = n(853390),
    E = n(611010),
    j = n(961350),
    C = n(734057),
    I = n(290863),
    S = n(287809),
    T = n(954571),
    N = n(486020),
    P = n(927813),
    w = n(403362),
    R = n(218394),
    D = n(255345),
    L = n(652215),
    M = n(360469),
    k = n(768349),
    U = n(985018),
    G = n(356053);
let B = i.memo((e) => {
    let { start: t } = e,
        [n, r] = i.useState(0),
        l = (0, R.j)(),
        a = (0, s.bG)([d.A], () => d.A.useReducedMotion),
        c = !1 === l || a;
    return (
        i.useEffect(() => {
            let e = new o.IX();
            return (
                e.start(c ? 15 * P.A.Millis.SECOND : P.A.Millis.SECOND, () => {
                    r((new Date().getTime() - t) / P.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, O.f)(n)
    );
});
B.displayName = "ActivityRuntimeCounter";
let F = i.memo(function (e) {
    var t, n, l;
    let o,
        { application: d, channelId: O, guildId: P, message: R } = e,
        { analyticsLocations: F } = (0, _.Ay)(h.A.ACTIVITY_INSTANCE_EMBED),
        H = (0, u.p)(),
        V = (0, s.bG)([C.A], () => C.A.getChannel(O), [O]),
        z = (null == V || null == (n = V.isThread) ? void 0 : n.call(V)) ? (null == V ? void 0 : V.parent_id) : O,
        W = (0, s.bG)([j.default], () => j.default.getId()),
        {
            embeddedActivity: K,
            currentEmbeddedActivity: Y,
            activityLaunchState: q,
        } = (0, s.cf)(
            [p.Ay],
            () => ({
                embeddedActivity: p.Ay.getEmbeddedActivitiesForChannel(null != z ? z : "").find(
                    (e) => e.applicationId === d.id,
                ),
                currentEmbeddedActivity: p.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: p.Ay.getLaunchState(d.id, null != z ? z : void 0),
            }),
            [z, d.id],
        ),
        J = null == K ? void 0 : K.userIds,
        Q = (0, s.yK)(
            [S.default],
            () =>
                Array.from(null != J ? J : [])
                    .map((e) => S.default.getUser(e))
                    .filter(w.Vq),
            [J],
        ),
        Z = (0, s.bG)([I.A], () => {
            if (null == J) return null;
            for (let e of J) {
                let t = I.A.findActivity(e, (e) => e.application_id === d.id);
                if (null != t) return t;
            }
            return null;
        }, [d.id, J]),
        X = null == Z ? void 0 : Z.details,
        $ = i.useMemo(() => {
            let e = new E.Ay(d);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.Gl), e;
        }, [d]),
        ee = (0, g.vG)({
            userId: W,
            channelId: O,
            application: $,
        }),
        et = null == K,
        en = (0, D.I3)({
            embeddedActivity: K,
            joinability: ee,
            currentEmbeddedActivity: Y,
            channel: V,
        }),
        er = i.useId(),
        ei = null != q && q.isLaunching && q.componentId === er,
        el = async () => {
            T.default.track(L.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: d.id,
                channel_id: O,
                channel_type: null == V ? void 0 : V.type,
                is_activity_start: et,
                cta: "Play",
            }),
                et
                    ? await (0, f.A)({
                          targetApplicationId: d.id,
                          channelId: O,
                          locationObject: H.location,
                          analyticsLocations: F,
                          componentId: er,
                          commandOrigin: b.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, m.A)({
                          applicationId: K.applicationId,
                          activityChannelId: O,
                          locationObject: H.location,
                          analyticsLocations: F,
                          componentId: er,
                      });
        },
        ea = en.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ),
        es = (0, x.F)($, () => {
            T.default.track(L.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: d.id,
                channel_id: O,
                channel_type: null == V ? void 0 : V.type,
                cta: "View",
            });
        }),
        eo = N.Ay.getApplicationIconURL({
            id: d.id,
            icon: d.icon,
            bot: d.bot,
        });
    en.disabled && (o = en.tooltip);
    let ec = Q.length,
        eu =
            null != (t = null == Z || null == (l = Z.timestamps) ? void 0 : l.start)
                ? t
                : null == Z
                  ? void 0
                  : Z.created_at,
        ed = (0, y.y)({
            activity: Z,
            activityUsersCount: ec,
        }),
        ep = [
            {
                label: en.text,
                trackingArea: v.kY.PLAY,
                onClick: el,
                disabled: en.disabled,
                disabledReason: o,
                submitting: ei,
            },
        ];
    return (0, r.jsx)(A.h, {
        header: U.intl.string(U.t.pkq6Vq),
        title: d.name,
        iconSrc: eo,
        info: (0, r.jsx)("div", {
            className: G.QR,
            children: et
                ? (0, r.jsx)(c.Text, {
                      variant: "text-xs/medium",
                      color: "none",
                      children: ea,
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [
                          null != X &&
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
                                                      children: (0, r.jsx)(B, {
                                                          start: eu,
                                                      }),
                                                  }),
                                              ],
                                          }),
                                      (0, r.jsxs)("div", {
                                          className: a()(G.DT, G.PK),
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
                                                  children: X,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ec > 0 &&
                              (0, r.jsx)(y.$, {
                                  activityUsers: Q,
                                  guildId: P,
                                  activityText: ed.text,
                              }),
                      ],
                  }),
        }),
        actions: ep,
        onClickContent: es,
        trackingConfig: {
            id: d.id,
            linkType: k.J.ACTIVITY_INSTANCE,
            guildId: P,
            channelId: O,
            messageId: R.id,
            isDeadEnd: et,
        },
    });
});
