n.d(e, { default: () => N });
var s = n(951288),
    i = n(647438),
    r = n(120356),
    a = n.n(r),
    l = n(660815),
    o = n(793030),
    c = n(442837),
    d = n(198168),
    p = n(481060),
    f = n(494620),
    u = n(905551),
    m = n(60482),
    x = n(587065),
    _ = n(986841),
    h = n(269794),
    v = n(388032),
    I = n(71124);
function N(t) {
    let { guildId: e, instance: n, onClose: r, transitionState: N } = t,
        j = (0, c.e7)([m.Z], () => {
            var t;
            return null == (t = m.Z.getStateForGuild(e)) ? void 0 : t.instructions[n.planId];
        });
    i.useEffect(() => {
        null == j && (0, u.iX)(e, n.planId);
    }, [e, n.planId, j]);
    let C = (0, _.Z)(n),
        { handleCopyServerIp: S, animateCopyIcon: T } = (0, x.Z)(null != C ? C : ""),
        g = i.useMemo(() => {
            switch (n.status) {
                case l.V.STARTING:
                    return v.intl.string(h.default.ud4hxY);
                case l.V.OFFLINE:
                    return v.intl.string(h.default.ABAm7x);
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
        subtitle: v.intl.string(h.default["4HqfaU"]),
        size: "md",
        transitionState: N,
        onClose: r,
        children:
            null == j
                ? (0, s.jsx)(p.$jN, {})
                : (0, s.jsxs)("div", {
                      className: I.content,
                      children: [
                          null != g &&
                              (0, s.jsx)(f.Z, {
                                  className: I.infoBox,
                                  children: g,
                              }),
                          (0, s.jsx)("div", {
                              className: I.stepsContainer,
                              children: j.map((t, e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: I.step,
                                          children: [
                                              (0, s.jsx)("div", {
                                                  className: I.stepNumber,
                                                  children: (0, s.jsx)(p.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-secondary",
                                                      children: v.intl.formatToPlainString(h.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, s.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-secondary",
                                                  children: t,
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != C &&
                              (0, s.jsxs)("div", {
                                  className: I.serverIpContainer,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: a()(I.serverIpInput, T && I.animate),
                                          children: (0, s.jsx)(p.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: C,
                                          }),
                                      }),
                                      (0, s.jsx)(p.Button, {
                                          variant: T ? "active" : "primary",
                                          text: T ? v.intl.string(v.t.t5VZ88) : v.intl.string(v.t.OpuAlK),
                                          onClick: S,
                                          icon: p.TIy,
                                      }),
                                  ],
                              }),
                      ],
                  }),
    });
}
