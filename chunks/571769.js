n.d(e, { default: () => j });
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
    u = n(494620),
    m = n(905551),
    x = n(60482),
    _ = n(587065),
    h = n(986841),
    v = n(269794),
    I = n(388032),
    N = n(71124);
function j(t) {
    let { guildId: e, instance: n, onClose: r, transitionState: j } = t,
        C = (0, c.e7)([x.Z], () => {
            var t;
            return null == (t = x.Z.getStateForGuild(e)) ? void 0 : t.instructions[n.planId];
        });
    i.useEffect(() => {
        null == C && (0, m.iX)(e, n.planId);
    }, [e, n.planId, C]);
    let S = (0, h.Z)(n),
        { handleCopyServerIp: T, animateCopyIcon: E } = (0, _.Z)(
            e,
            n.id,
            f.Z.GAME_SERVER_INSTRUCTIONS_MODAL,
            null != S ? S : "",
        ),
        A = i.useMemo(() => {
            switch (n.status) {
                case l.V.STARTING:
                    return I.intl.string(v.default.ud4hxY);
                case l.V.OFFLINE:
                    return I.intl.string(v.default.ABAm7x);
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
        subtitle: I.intl.string(v.default["4HqfaU"]),
        size: "md",
        transitionState: j,
        onClose: r,
        children:
            null == C
                ? (0, s.jsx)(p.$jN, {})
                : (0, s.jsxs)("div", {
                      className: N.content,
                      children: [
                          null != A &&
                              (0, s.jsx)(u.Z, {
                                  className: N.infoBox,
                                  children: A,
                              }),
                          (0, s.jsx)("div", {
                              className: N.stepsContainer,
                              children: C.map((t, e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: N.step,
                                          children: [
                                              (0, s.jsx)("div", {
                                                  className: N.stepNumber,
                                                  children: (0, s.jsx)(p.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-secondary",
                                                      children: I.intl.formatToPlainString(v.default.oSU1fF, {
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
                          null != S &&
                              (0, s.jsxs)("div", {
                                  className: N.serverIpContainer,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: a()(N.serverIpInput, E && N.animate),
                                          children: (0, s.jsx)(p.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: S,
                                          }),
                                      }),
                                      (0, s.jsx)(p.Button, {
                                          variant: E ? "active" : "primary",
                                          text: E ? I.intl.string(I.t.t5VZ88) : I.intl.string(I.t.OpuAlK),
                                          onClick: T,
                                          icon: p.TIy,
                                      }),
                                  ],
                              }),
                      ],
                  }),
    });
}
