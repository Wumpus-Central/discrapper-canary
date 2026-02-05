n.d(t, { A: () => F });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(311907),
    o = n(451988),
    d = n(397927),
    c = n(212245),
    u = n(775602),
    m = n(933958),
    _ = n(447031),
    h = n(956549),
    p = n(550151),
    g = n(793574),
    A = n(688810),
    f = n(392054),
    x = n(572211),
    E = n(178910),
    C = n(354287),
    I = n(574660),
    T = n(853390),
    v = n(611010),
    N = n(961350),
    S = n(734057),
    b = n(290863),
    y = n(287809),
    j = n(954571),
    R = n(486020),
    L = n(927813),
    M = n(403362),
    O = n(218394),
    P = n(255345),
    D = n(652215),
    k = n(360469),
    U = n(768349),
    w = n(985018),
    G = n(356053);
let B = l.memo((e) => {
    let { start: t } = e,
        [n, i] = l.useState(0),
        a = (0, O.j)(),
        r = (0, s.bG)([u.A], () => u.A.useReducedMotion),
        d = !1 === a || r;
    return (
        l.useEffect(() => {
            let e = new o.IX();
            return (
                e.start(d ? 15 * L.A.Millis.SECOND : L.A.Millis.SECOND, () => {
                    i((new Date().getTime() - t) / L.A.Millis.SECOND);
                }),
                () => e.stop()
            );
        }, [d, t]),
        (0, T.f)(n)
    );
});
B.displayName = "ActivityRuntimeCounter";
let F = l.memo(function (e) {
    let t,
        { application: n, channelId: a, guildId: o, message: u } = e,
        { analyticsLocations: T } = (0, A.Ay)(g.A.ACTIVITY_INSTANCE_EMBED),
        L = (0, c.p)(),
        O = (0, s.bG)([S.A], () => S.A.getChannel(a), [a]),
        F = O?.isThread?.() ? O?.parent_id : a,
        H = (0, s.bG)([N.default], () => N.default.getId()),
        {
            embeddedActivity: V,
            currentEmbeddedActivity: z,
            activityLaunchState: W,
        } = (0, s.cf)(
            [m.Ay],
            () => ({
                embeddedActivity: m.Ay.getEmbeddedActivitiesForChannel(F ?? "").find((e) => e.applicationId === n.id),
                currentEmbeddedActivity: m.Ay.getCurrentEmbeddedActivity(),
                activityLaunchState: m.Ay.getLaunchState(n.id, F ?? void 0),
            }),
            [F, n.id],
        ),
        Y = V?.userIds,
        q = (0, s.yK)(
            [y.default],
            () =>
                Array.from(Y ?? [])
                    .map((e) => y.default.getUser(e))
                    .filter(M.Vq),
            [Y],
        ),
        K = (0, s.bG)([b.A], () => {
            if (null == Y) return null;
            for (let e of Y) {
                let t = b.A.findActivity(e, (e) => e.application_id === n.id);
                if (null != t) return t;
            }
            return null;
        }, [n.id, Y]),
        Q = K?.details,
        J = l.useMemo(() => {
            let e = new v.Ay(n);
            return null == e.embeddedActivityConfig && (e.embeddedActivityConfig = k.Gl), e;
        }, [n]),
        X = (0, p.vG)({ userId: H, channelId: a, application: J }),
        Z = null == V,
        $ = (0, P.I3)({ embeddedActivity: V, joinability: X, currentEmbeddedActivity: z, channel: O }),
        ee = l.useId(),
        et = null != W && W.isLaunching && W.componentId === ee,
        en = async () => {
            j.default.track(D.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: O?.type,
                is_activity_start: Z,
                cta: "Play",
            }),
                Z
                    ? await (0, h.A)({
                          targetApplicationId: n.id,
                          channelId: a,
                          locationObject: L.location,
                          analyticsLocations: T,
                          componentId: ee,
                          commandOrigin: f.iw.ACTIVITY_INSTANCE_EMBED,
                      })
                    : await (0, _.A)({
                          applicationId: V.applicationId,
                          activityChannelId: a,
                          locationObject: L.location,
                          analyticsLocations: T,
                          componentId: ee,
                      });
        },
        ei = $.disabled ? w.intl.string(w.t.JBnc7N) : w.intl.string(w.t.cX9uLZ),
        el = (0, I.F)(J, () => {
            j.default.track(D.HAw.ACTIVITY_INSTANCE_EMBED_CLICKED, {
                application_id: n.id,
                channel_id: a,
                channel_type: O?.type,
                cta: "View",
            });
        }),
        ea = R.Ay.getApplicationIconURL({ id: n.id, icon: n.icon, bot: n.bot });
    $.disabled && (t = $.tooltip);
    let er = q.length,
        es = K?.timestamps?.start ?? K?.created_at,
        eo = (0, E.y)({ activity: K, activityUsersCount: er }),
        ed = [
            {
                label: $.text,
                trackingArea: C.kY.PLAY,
                onClick: en,
                disabled: $.disabled,
                disabledReason: t,
                submitting: et,
            },
        ];
    return (0, i.jsx)(x.h, {
        header: w.intl.string(w.t.pkq6Vq),
        title: n.name,
        iconSrc: ea,
        info: (0, i.jsx)("div", {
            className: G.QR,
            children: Z
                ? (0, i.jsx)(d.Text, { variant: "text-xs/medium", color: "none", children: ei })
                : (0, i.jsxs)(i.Fragment, {
                      children: [
                          null != Q &&
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
                                          className: r()(G.DT, G.PK),
                                          children: [
                                              (0, i.jsx)("div", {
                                                  children: (0, i.jsx)(d.ueQ, { size: "xxs", color: "currentColor" }),
                                              }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "none",
                                                  lineClamp: 1,
                                                  children: Q,
                                              }),
                                          ],
                                      }),
                                  ],
                              }),
                          er > 0 && (0, i.jsx)(E.$, { activityUsers: q, guildId: o, activityText: eo.text }),
                      ],
                  }),
        }),
        actions: ed,
        onClickContent: el,
        trackingConfig: {
            id: n.id,
            linkType: U.J.ACTIVITY_INSTANCE,
            guildId: o,
            channelId: a,
            messageId: u.id,
            isDeadEnd: Z,
        },
    });
});
