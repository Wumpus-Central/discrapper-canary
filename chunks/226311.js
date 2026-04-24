n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    o = n(451988),
    c = n(834730),
    d = n(261958),
    u = n(212245),
    _ = n(775602),
    m = n(933958),
    h = n(62583),
    p = n(956549),
    g = n(550151),
    f = n(793574),
    x = n(688810),
    A = n(392054),
    C = n(572211),
    v = n(178910),
    I = n(354287),
    E = n(574660),
    b = n(853390),
    y = n(395671),
    T = n(495544),
    j = n(734057),
    N = n(290863),
    S = n(287809),
    k = n(954571),
    L = n(486020),
    R = n(927813),
    w = n(403362),
    P = n(218394),
    D = n(811024),
    M = n(985018),
    O = n(652215),
    U = n(360469),
    G = n(768349),
    B = n(212242);
let V = l.memo((e) => {
    let { start: t } = e,
        [n, i] = l.useState(0),
        a = (0, P.j)(),
        r = (0, s.bG)([_.A], () => _.A.useReducedMotion),
        c = !1 === a || r;
    return (
        l.useEffect(() => {
            let e = new o.IX();
            return (
                e.start(c ? 15 * R.A.Millis.SECOND : R.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / R.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [c, t]),
        (0, b.fU)(n)
    );
});
V.displayName = "ActivityRuntimeCounter";
let F = l.memo(function (e) {
    let t,
        { application: n, channelId: a, guildId: o, message: _ } = e,
        { analyticsLocations: b } = (0, x.Ay)(f.A.ACTIVITY_INSTANCE_EMBED),
        R = (0, u.p)(),
        P = (0, s.bG)([j.A], () => j.A.getChannel(a), [a]),
        F = P?.isThread?.() ? P?.parent_id : a,
        H = (0, s.bG)([T.default], () => T.default.getId()),
        {
            embeddedActivity: z,
            currentEmbeddedActivity: W,
            activityLaunchState: Y,
        } = (0, s.cf)(
            [m.Ay],
            () => ({
                embeddedActivity: m.Ay.getEmbeddedActivitiesForChannel(F ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: m.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: m.Ay.getLaunchState(n.id, F ?? void 0),
            }),
            [F, n.id],
        ),
        K = z?.userIds,
        q = (0, s.yK)(
            [S.default],
            () =>
                Array.from(K ?? [])
                    .map((e) => S.default.getUser(e))
                    .filter(w.Vq),
            [K],
        ),
        Z = (0, s.bG)([N.A], () => {
            if (null == K) return null;
            for (let e of K) {
                let t = N.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, K]),
        J = Z?.details,
        Q = l.useMemo(() => {
            let e = new y.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = U.Gl), e;
        }, [n]),
        X = (0, g.vG)({ userId: H, channelId: a, application: Q }),
        $ = null == z,
        ee = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: a } = e;
            return l.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            a = null == t,
                            r = {
                                disabled: !1,
                                isJoinAction: !a,
                                text: a ? M.intl.string(M.t.RscU7I) : M.intl.string(M.t.sqe0hj),
                                tooltip: void 0,
                            },
                            s = (0, D.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...r, disabled: !0, text: M.intl.string(M.t.DPfdsq), tooltip: void 0 };
                        if (a) return { ...r, disabled: !s, tooltip: s ? void 0 : M.intl.string(M.t.f41E1g) };
                        if (null != n && n !== g.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case g.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = M.intl.string(M.t.hHGrWz);
                                    break;
                                case g.Gy.ACTIVITY_AGE_GATED:
                                    e = M.intl.string(M.t["4WuFRE"]);
                                    break;
                                case g.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = M.intl.string(M.t.uGDCcw);
                                    break;
                                case g.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = M.intl.string(M.t.UXoQTp);
                                    break;
                                case g.Gy.CHANNEL_FULL:
                                    e = M.intl.string(M.t.rZfiNq);
                                    break;
                                case g.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = M.intl.string(M.t.w5SAps);
                                    break;
                                case g.Gy.NO_CHANNEL:
                                case g.Gy.NO_GUILD:
                                case g.Gy.NO_USER:
                                case g.Gy.IS_AFK_CHANNEL:
                                    e = M.intl.string(M.t.Etp6uI);
                            }
                            return { ...r, disabled: !0, tooltip: e };
                        }
                        return r;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: a }),
                [t, n, i, a],
            );
        })({ embeddedActivity: z, joinability: X, currentEmbeddedActivity: W, channel: P }),
        et = l.useId(),
        en = null != Y && Y.isLaunching && Y.componentId === et,
        ei = async () => {
            k.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: P?.type,
                is_activity_start: $,
                cta: "Play",
            }),
                $
                    ? await (0, p.A)({
                          targetApplicationId: n.id,
                          channelId: a,
                          locationObject: R.location,
                          analyticsLocations: b,
                          componentId: et,
                          commandOrigin: A.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, h.A)({
                          applicationId: z.applicationId,
                          activityChannelId: a,
                          locationObject: R.location,
                          analyticsLocations: b,
                          componentId: et,
                      });
        },
        el = ee.disabled ? M.intl.string(M.t.JBnc7N) : M.intl.string(M.t.cX9uLZ),
        ea = (0, E.F)(Q, () => {
            k.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: P?.type,
                cta: "View",
            });
        }),
        er = L.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    ee.disabled && (t = ee.tooltip);
    let es = q.length,
        eo = Z?.timestamps?.start ?? Z?.created_at,
        ec = (0, v.y)({ activity: Z, activityUsersCount: es }),
        ed = [
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
        header: M.intl.string(M.t.pkq6Vq),
        title: n.name,
        iconSrc: er,
        info: (0, i.jsx)("div", {
            className: B.QR,
            children: $
                ? (0, i.jsx)(c.E, { variant: "text-xs/medium", color: "none", children: el })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != J &&
                              (0, i.jsxs)("div", {
                                  className: B.oL,
                                  children: [
                                      null != eo &&
                                          (0, i.jsxs)("div", {
                                              className: B.DT,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: B.y9,
                                                      children: (0, i.jsx)(ec.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, i.jsx)(c.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, i.jsx)(V, { start: eo }),
                                                  }),
                                              ],
                                          }),
                                      (0, i.jsxs)("div", {
                                          className: r()(B.DT, B.PK),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  children: (0, i.jsx)(d.u, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, i.jsx)(c.E, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: J,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          es > 0 && (0, i.jsx)(v.$, { activityUsers: q, guildId: o, activityText: ec.text }),
                      ],
                  }),
        }),
        actions: ed,
        onClickContent: ea,
        trackingConfig: {
            id: n.id,
            linkType: G.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: a,
            messageId: _.id,
            isDeadEnd: $,
        },
    });
});
