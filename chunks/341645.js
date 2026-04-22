n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(311907),
    o = n(451988),
    d = n(834730),
    c = n(261958),
    u = n(212245),
    m = n(775602),
    _ = n(933958),
    h = n(447031),
    p = n(956549),
    g = n(550151),
    A = n(793574),
    f = n(688810),
    x = n(392054),
    C = n(572211),
    E = n(178910),
    I = n(354287),
    v = n(574660),
    b = n(853390),
    T = n(611010),
    S = n(961350),
    y = n(734057),
    N = n(290863),
    j = n(287809),
    L = n(954571),
    R = n(486020),
    P = n(927813),
    w = n(403362),
    D = n(218394),
    k = n(255345),
    O = n(652215),
    M = n(360469),
    U = n(768349),
    G = n(985018),
    B = n(212242);
let F = l.memo((e) => {
    let { start: t } = e,
        [n, i] = l.useState(0),
        a = (0, D.j)(),
        s = (0, r.bG)([m.A], () => m.A.useReducedMotion),
        d = !1 === a || s;
    return (
        l.useEffect(() => {
            let e = new o.IX();
            return (
                e.start(d ? 15 * P.A.Millis.SECOND : P.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / P.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [d, t]),
        (0, b.fU)(n)
    );
});
F.displayName = "ActivityRuntimeCounter";
let H = l.memo(function (e) {
    let t,
        { application: n, channelId: a, guildId: o, message: m } = e,
        { analyticsLocations: b } = (0, f.Ay)(A.A.ACTIVITY_INSTANCE_EMBED),
        P = (0, u.p)(),
        D = (0, r.bG)([y.A], () => y.A.getChannel(a), [a]),
        H = D?.isThread?.() ? D?.parent_id : a,
        V = (0, r.bG)([S.default], () => S.default.getId()),
        {
            embeddedActivity: q,
            currentEmbeddedActivity: W,
            activityLaunchState: z,
        } = (0, r.cf)(
            [_.Ay],
            () => ({
                embeddedActivity: _.Ay.getEmbeddedActivitiesForChannel(H ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: _.Ay.getLaunchState(n.id, H ?? void 0),
            }),
            [H, n.id],
        ),
        Y = q?.userIds,
        Q = (0, r.yK)(
            [j.default],
            () =>
                Array.from(Y ?? [])
                    .map((e) => j.default.getUser(e))
                    .filter(w.Vq),
            [Y],
        ),
        K = (0, r.bG)([N.A], () => {
            if (null == Y) return null;
            for (let e of Y) {
                let t = N.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, Y]),
        Z = K?.details,
        J = l.useMemo(() => {
            let e = new T.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = M.Gl), e;
        }, [n]),
        X = (0, g.vG)({ userId: V, channelId: a, application: J }),
        $ = null == q,
        ee = (0, k.I3)({ embeddedActivity: q, joinability: X, currentEmbeddedActivity: W, channel: D }),
        et = l.useId(),
        en = null != z && z.isLaunching && z.componentId === et,
        ei = async () => {
            L.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: D?.type,
                is_activity_start: $,
                cta: "Play",
            }),
                $
                    ? await (0, p.A)({
                          targetApplicationId: n.id,
                          channelId: a,
                          locationObject: P.location,
                          analyticsLocations: b,
                          componentId: et,
                          commandOrigin: x.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, h.A)({
                          applicationId: q.applicationId,
                          activityChannelId: a,
                          locationObject: P.location,
                          analyticsLocations: b,
                          componentId: et,
                      });
        },
        el = ee.disabled ? G.intl.string(G.t.JBnc7N) : G.intl.string(G.t.cX9uLZ),
        ea = (0, v.F)(J, () => {
            L.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: D?.type,
                cta: "View",
            });
        }),
        es = R.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    ee.disabled && (t = ee.tooltip);
    let er = Q.length,
        eo = K?.timestamps?.start ?? K?.created_at,
        ed = (0, E.y)({ activity: K, activityUsersCount: er }),
        ec = [
            {
                label: ee.text,
                trackingArea: I.kY.PLAY,
                onClick: ei,
                disabled: ee.disabled,
                disabledReason: t,
                submitting: en,
            },
        ];
    return (0, i.jsx)(C.h, {
        header: G.intl.string(G.t.pkq6Vq),
        title: n.name,
        iconSrc: es,
        info: (0, i.jsx)("div", {
            className: B.QR,
            children: $
                ? (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "none", children: el })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != Z &&
                              (0, i.jsxs)("div", {
                                  className: B.oL,
                                  children: [
                                      null != eo &&
                                          (0, i.jsxs)("div", {
                                              className: B.DT,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: B.y9,
                                                      children: (0, i.jsx)(ed.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, i.jsx)(d.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, i.jsx)(F, { start: eo }),
                                                  }),
                                              ],
                                          }),
                                      (0, i.jsxs)("div", {
                                          className: s()(B.DT, B.PK),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  children: (0, i.jsx)(c.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, i.jsx)(d.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: Z,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          er > 0 && (0, i.jsx)(E.$, { activityUsers: Q, guildId: o, activityText: ed.text }),
                      ],
                  }),
        }),
        actions: ec,
        onClickContent: ea,
        trackingConfig: {
            id: n.id,
            linkType: U.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: a,
            messageId: m.id,
            isDeadEnd: $,
        },
    });
});
