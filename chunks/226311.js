n.d(t, { A: () => H });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(451988),
    d = n(834730),
    c = n(261958),
    u = n(212245),
    m = n(775602),
    h = n(933958),
    g = n(62583),
    A = n(956549),
    p = n(550151),
    x = n(793574),
    f = n(688810),
    C = n(392054),
    E = n(572211),
    v = n(178910),
    I = n(354287),
    _ = n(574660),
    j = n(853390),
    N = n(395671),
    T = n(495544),
    y = n(734057),
    S = n(290863),
    b = n(287809),
    k = n(954571),
    L = n(486020),
    R = n(927813),
    P = n(403362),
    M = n(218394),
    D = n(811024),
    w = n(985018),
    O = n(652215),
    U = n(360469),
    G = n(768349),
    V = n(212242);
let B = l.memo((e) => {
    let { start: t } = e,
        [n, i] = l.useState(0),
        s = (0, M.j)(),
        a = (0, r.bG)([m.A], () => m.A.useReducedMotion),
        d = !1 === s || a;
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
        (0, j.fU)(n)
    );
});
B.displayName = "ActivityRuntimeCounter";
let H = l.memo(function (e) {
    let t,
        { application: n, channelId: s, guildId: o, message: m } = e,
        { analyticsLocations: j } = (0, f.Ay)(x.A.ACTIVITY_INSTANCE_EMBED),
        R = (0, u.p)(),
        M = (0, r.bG)([y.A], () => y.A.getChannel(s), [s]),
        H = M?.isThread?.() ? M?.parent_id : s,
        F = (0, r.bG)([T.default], () => T.default.getId()),
        {
            embeddedActivity: z,
            currentEmbeddedActivity: Y,
            activityLaunchState: W,
        } = (0, r.cf)(
            [h.Ay],
            () => ({
                embeddedActivity: h.Ay.getEmbeddedActivitiesForChannel(H ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: h.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: h.Ay.getLaunchState(n.id, H ?? void 0),
            }),
            [H, n.id],
        ),
        K = z?.userIds,
        J = (0, r.yK)(
            [b.default],
            () =>
                Array.from(K ?? [])
                    .map((e) => b.default.getUser(e))
                    .filter(P.Vq),
            [K],
        ),
        q = (0, r.bG)([S.A], () => {
            if (null == K) return null;
            for (let e of K) {
                let t = S.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, K]),
        Z = q?.details,
        X = l.useMemo(() => {
            let e = new N.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = U.Gl), e;
        }, [n]),
        $ = (0, p.vG)({ userId: F, channelId: s, application: X }),
        Q = null == z,
        ee = (function (e) {
            let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: s } = e;
            return l.useMemo(
                () =>
                    (function (e) {
                        let { embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: l } = e,
                            s = null == t,
                            a = {
                                disabled: !1,
                                isJoinAction: !s,
                                text: s ? w.intl.string(w.t.RscU7I) : w.intl.string(w.t.sqe0hj),
                                tooltip: void 0,
                            },
                            r = (0, D.pE)(l);
                        if (null != t && null != i && t.launchId === i.launchId)
                            return { ...a, disabled: !0, text: w.intl.string(w.t.DPfdsq), tooltip: void 0 };
                        if (s) return { ...a, disabled: !r, tooltip: r ? void 0 : w.intl.string(w.t.f41E1g) };
                        if (null != n && n !== p.Gy.CAN_JOIN) {
                            let e;
                            switch (n) {
                                case p.Gy.NO_USE_EMBEDDED_ACTIVITIES_PERMISSION:
                                    e = w.intl.string(w.t.hHGrWz);
                                    break;
                                case p.Gy.ACTIVITY_AGE_GATED:
                                    e = w.intl.string(w.t["4WuFRE"]);
                                    break;
                                case p.Gy.ACTIVITIES_FEATURE_NOT_ENABLED_FOR_OS:
                                    e = w.intl.string(w.t.uGDCcw);
                                    break;
                                case p.Gy.ACTIVITY_NOT_SUPPORTED_ON_OS:
                                    e = w.intl.string(w.t.UXoQTp);
                                    break;
                                case p.Gy.CHANNEL_FULL:
                                    e = w.intl.string(w.t.rZfiNq);
                                    break;
                                case p.Gy.NO_CHANNEL_CONNECT_PERMISSION:
                                    e = w.intl.string(w.t.w5SAps);
                                    break;
                                case p.Gy.NO_CHANNEL:
                                case p.Gy.NO_GUILD:
                                case p.Gy.NO_USER:
                                case p.Gy.IS_AFK_CHANNEL:
                                    e = w.intl.string(w.t.Etp6uI);
                            }
                            return { ...a, disabled: !0, tooltip: e };
                        }
                        return a;
                    })({ embeddedActivity: t, joinability: n, currentEmbeddedActivity: i, channel: s }),
                [t, n, i, s],
            );
        })({ embeddedActivity: z, joinability: $, currentEmbeddedActivity: Y, channel: M }),
        et = l.useId(),
        en = null != W && W.isLaunching && W.componentId === et,
        ei = async () => {
            k.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: s,
                channel_type: M?.type,
                is_activity_start: Q,
                cta: "Play",
            }),
                Q
                    ? await (0, A.A)({
                          targetApplicationId: n.id,
                          channelId: s,
                          locationObject: R.location,
                          analyticsLocations: j,
                          componentId: et,
                          commandOrigin: C.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, g.A)({
                          applicationId: z.applicationId,
                          activityChannelId: s,
                          locationObject: R.location,
                          analyticsLocations: j,
                          componentId: et,
                      });
        },
        el = ee.disabled ? w.intl.string(w.t.JBnc7N) : w.intl.string(w.t.cX9uLZ),
        es = (0, _.F)(X, () => {
            k.default.track(O.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: s,
                channel_type: M?.type,
                cta: "View",
            });
        }),
        ea = L.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    ee.disabled && (t = ee.tooltip);
    let er = J.length,
        eo = q?.timestamps?.start ?? q?.created_at,
        ed = (0, v.y)({ activity: q, activityUsersCount: er }),
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
    return (0, i.jsx)(E.h, {
        header: w.intl.string(w.t.pkq6Vq),
        title: n.name,
        iconSrc: ea,
        info: (0, i.jsx)("div", {
            className: V.QR,
            children: Q
                ? (0, i.jsx)(d.E, { variant: "text-xs/medium", color: "none", children: el })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != Z &&
                              (0, i.jsxs)("div", {
                                  className: V.oL,
                                  children: [
                                      null != eo &&
                                          (0, i.jsxs)("div", {
                                              className: V.DT,
                                              children: [
                                                  (0, i.jsx)("div", {
                                                      className: V.y9,
                                                      children: (0, i.jsx)(ed.Icon, {
                                                          size: "xxs",
                                                          color: "currentColor",
                                                      }),
                                                  }),
                                                  (0, i.jsx)(d.E, {
                                                      variant: "text-xs/medium",
                                                      color: "none",
                                                      children: (0, i.jsx)(B, { start: eo }),
                                                  }),
                                              ],
                                          }),
                                      (0, i.jsxs)("div", {
                                          className: a()(V.DT, V.PK),
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
                          er > 0 && (0, i.jsx)(v.$, { activityUsers: J, guildId: o, activityText: ed.text }),
                      ],
                  }),
        }),
        actions: ec,
        onClickContent: es,
        trackingConfig: {
            id: n.id,
            linkType: G.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: s,
            messageId: m.id,
            isDeadEnd: Q,
        },
    });
});
