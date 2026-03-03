n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(311907),
    o = n(451988),
    d = n(397927),
    c = n(212245),
    u = n(775602),
    _ = n(933958),
    m = n(447031),
    h = n(956549),
    p = n(550151),
    g = n(793574),
    A = n(688810),
    x = n(392054),
    f = n(572211),
    C = n(178910),
    E = n(354287),
    I = n(574660),
    b = n(853390),
    T = n(611010),
    v = n(961350),
    S = n(734057),
    y = n(290863),
    N = n(287809),
    j = n(954571),
    L = n(486020),
    R = n(927813),
    P = n(403362),
    M = n(218394),
    w = n(255345),
    D = n(652215),
    k = n(360469),
    O = n(768349),
    U = n(985018),
    G = n(356053);
let B = l.memo((e) => {
    let { start: t } = e,
        [n, i] = l.useState(0),
        r = (0, M.j)(),
        a = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        d = !1 === r || a;
    return (
        l.useEffect(() => {
            let e = new o.IX();
            return (
                e.start(d ? 15 * R.A.Millis.SECOND : R.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / R.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [d, t]),
        (0, b.fU)(n)
    );
});
B.displayName = "ActivityRuntimeCounter";
let F = l.memo(function (e) {
    let t,
        { application: n, channelId: r, guildId: o, message: u } = e,
        { analyticsLocations: b } = (0, A.Ay)(g.A.ACTIVITY_INSTANCE_EMBED),
        R = (0, c.p)(),
        M = (0, s.bG)([S.A], () => S.A.getChannel(r), [r]),
        F = M?.isThread?.() ? M?.parent_id : r,
        H = (0, s.bG)([v.default], () => v.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: W,
            activityLaunchState: q,
        } = (0, s.cf)(
            [_.Ay],
            () => ({
                embeddedActivity: _.Ay.getEmbeddedActivitiesForChannel(F ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: _.Ay.getLaunchState(n.id, F ?? void 0),
            }),
            [F, n.id],
        ),
        Y = V?.userIds,
        z = (0, s.yK)(
            [N.default],
            () =>
                Array.from(Y ?? [])
                    .map((e) => N.default.getUser(e))
                    .filter(P.Vq),
            [Y],
        ),
        Q = (0, s.bG)([y.A], () => {
            if (null == Y) return null;
            for (let e of Y) {
                let t = y.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, Y]),
        K = Q?.details,
        J = l.useMemo(() => {
            let e = new T.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.Gl), e;
        }, [n]),
        X = (0, p.vG)({ userId: H, channelId: r, application: J }),
        Z = null == V,
        $ = (0, w.I3)({ embeddedActivity: V, joinability: X, currentEmbeddedActivity: W, channel: M }),
        ee = l.useId(),
        et = null != q && q.isLaunching && q.componentId === ee,
        en = async () => {
            j.default.track(D.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: r,
                channel_type: M?.type,
                is_activity_start: Z,
                cta: "Play",
            }),
                Z
                    ? await (0, h.A)({
                          targetApplicationId: n.id,
                          channelId: r,
                          locationObject: R.location,
                          analyticsLocations: b,
                          componentId: ee,
                          commandOrigin: x.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, m.A)({
                          applicationId: V.applicationId,
                          activityChannelId: r,
                          locationObject: R.location,
                          analyticsLocations: b,
                          componentId: ee,
                      });
        },
        ei = $.disabled ? U.intl.string(U.t.JBnc7N) : U.intl.string(U.t.cX9uLZ),
        el = (0, I.F)(J, () => {
            j.default.track(D.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: r,
                channel_type: M?.type,
                cta: "View",
            });
        }),
        er = L.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    $.disabled && (t = $.tooltip);
    let ea = z.length,
        es = Q?.timestamps?.start ?? Q?.created_at,
        eo = (0, C.y)({ activity: Q, activityUsersCount: ea }),
        ed = [
            {
                label: $.text,
                trackingArea: E.kY.PLAY,
                onClick: en,
                disabled: $.disabled,
                disabledReason: t,
                submitting: et,
            },
        ];
    return (0, i.jsx)(f.h, {
        header: U.intl.string(U.t.pkq6Vq),
        title: n.name,
        iconSrc: er,
        info: (0, i.jsx)("div", {
            className: G.QR,
            children: Z
                ? (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "none", children: ei })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != K &&
                              (0, i.jsxs)("div", {
                                  className: G.oL,
                                  children: [
                                      null != es &&
                                          (0, i.jsxs)("div", {
                                              className: G.DT,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: G.y9,
                                                      children: (0, i.jsx)(eo.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, i.jsx)(d.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, i.jsx)(B, { start: es }),
                                                  }),
                                              ],
                                          }),
                                      (0, i.jsxs)("div", {
                                          className: a()(G.DT, G.PK),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  children: (0, i.jsx)(d.ueQ, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: K,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          ea > 0 && (0, i.jsx)(C.$, { activityUsers: z, guildId: o, activityText: eo.text }),
                      ],
                  }),
        }),
        actions: ed,
        onClickContent: el,
        trackingConfig: {
            id: n.id,
            linkType: O.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: r,
            messageId: u.id,
            isDeadEnd: Z,
        },
    });
});
