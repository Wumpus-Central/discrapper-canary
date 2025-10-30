n.d(t, { default: () => C });
var s = n(951288),
    i = n(647438),
    r = n(120356),
    a = n.n(r),
    l = n(660815),
    o = n(793030),
    c = n(442837),
    d = n(198168),
    p = n(481060),
    f = n(100527),
    u = n(454585),
    m = n(494620),
    x = n(905551),
    _ = n(60482),
    h = n(587065),
    v = n(986841),
    I = n(97200),
    N = n(388032),
    j = n(581385);
function C(e) {
    let { guildId: t, instance: n, onClose: r, transitionState: C } = e,
        S = (0, c.e7)([_.Z], () => {
            var e;
            return null == (e = _.Z.getStateForGuild(t)) ? void 0 : e.instructions[n.planId];
        });
    i.useEffect(() => {
        null == S && (0, x.iX)(t, n.planId);
    }, [t, n.planId, S]);
    let T = (0, v.Z)(n),
        { handleCopyServerIp: E, animateCopyIcon: A } = (0, h.Z)(
            t,
            n.id,
            f.Z.GAME_SERVER_INSTRUCTIONS_MODAL,
            null != T ? T : "",
        ),
        g = i.useMemo(() => {
            switch (n.status) {
                case l.V.STARTING:
                    return N.intl.string(I.default.ud4hxY);
                case l.V.OFFLINE:
                    return N.intl.string(I.default.ABAm7x);
                default:
                    return;
            }
        }, [n.status]);
    return (0, s.jsx)(o.ExpressiveModal, {
        graphic: {
            type: "dynamic",
            component: d.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
            props: { instance: n },
        },
        title: n.name,
        subtitle: N.intl.string(I.default["4HqfaU"]),
        size: "md",
        transitionState: C,
        onClose: r,
        children:
            null == S
                ? (0, s.jsx)(p.$jN, {})
                : (0, s.jsxs)("div", {
                      className: j.content,
                      children: [
                          null != g &&
                              (0, s.jsx)(m.Z, {
                                  className: j.infoBox,
                                  children: g,
                              }),
                          (0, s.jsx)("div", {
                              className: j.stepsContainer,
                              children: S.map((e, t) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: j.step,
                                          children: [
                                              (0, s.jsx)("div", {
                                                  className: j.stepNumber,
                                                  children: (0, s.jsx)(p.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-secondary",
                                                      children: N.intl.formatToPlainString(I.default.oSU1fF, {
                                                          step: t + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, s.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-secondary",
                                                  children: u.Z.parse(e, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          null != T &&
                              (0, s.jsxs)("div", {
                                  className: j.serverIpContainer,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: a()(j.serverIpInput, A && j.animate),
                                          children: (0, s.jsx)(p.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: T,
                                          }),
                                      }),
                                      (0, s.jsx)(p.Button, {
                                          variant: A ? "active" : "primary",
                                          text: A ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
                                          onClick: E,
                                          icon: p.TIy,
                                      }),
                                  ],
                              }),
                      ],
                  }),
    });
}
