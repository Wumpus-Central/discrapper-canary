n.d(e, { default: () => j });
var s = n(54381),
    a = n(473749),
    i = n(120356),
    r = n.n(i),
    l = n(660815),
    c = n(793030),
    o = n(442837),
    f = n(198168),
    p = n(481060),
    u = n(100527),
    d = n(454585),
    x = n(494620),
    m = n(905551),
    h = n(60482),
    v = n(587065),
    I = n(986841),
    b = n(160589),
    N = n(388032),
    _ = n(321464);
function j(t) {
    let { guildId: e, instance: n, onClose: i, transitionState: j } = t,
        C = (0, o.e7)([h.Z], () => {
            var t;
            return null == (t = h.Z.getStateForGuild(e)) ? void 0 : t.instructions[n.planId];
        });
    a.useEffect(() => {
        null == C && (0, m.iX)(e, n.planId);
    }, [e, n.planId, C]);
    let g = (0, I.Z)(n),
        { handleCopyServerIp: S, animateCopyIcon: T } = (0, v.Z)(
            e,
            n.id,
            u.Z.GAME_SERVER_INSTRUCTIONS_MODAL,
            null != g ? g : "",
        ),
        E = a.useMemo(() => {
            switch (n.status) {
                case l.V.STARTING:
                    return N.intl.string(b.default.ud4hxY);
                case l.V.OFFLINE:
                    return N.intl.string(b.default.ABAm7x);
                default:
                    return;
            }
        }, [n.status]);
    return (0, s.jsxs)(c.IX, {
        size: "lg",
        paddingSize: "lg",
        transitionState: j,
        onClose: i,
        children: [
            (0, s.jsx)(c.xBx, {
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: f.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: { instance: n },
                },
                alignCenter: !0,
                title: n.name,
                subtitle: N.intl.string(b.default["4HqfaU"]),
            }),
            null == C
                ? (0, s.jsx)(p.$jN, {})
                : (0, s.jsxs)("div", {
                      className: _.content,
                      children: [
                          null != E &&
                              (0, s.jsx)(x.Z, {
                                  className: _.infoBox,
                                  children: E,
                              }),
                          (0, s.jsx)("div", {
                              className: _.stepsContainer,
                              children: C.map((t, e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: _.step,
                                          children: [
                                              (0, s.jsx)("div", {
                                                  className: _.stepNumber,
                                                  children: (0, s.jsx)(p.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: N.intl.formatToPlainString(b.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, s.jsx)(p.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: d.Z.parse(t, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != g &&
                              (0, s.jsxs)("div", {
                                  className: _.serverIpContainer,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: r()(_.serverIpInput, T && _.animate),
                                          children: (0, s.jsx)(p.Text, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              children: g,
                                          }),
                                      }),
                                      (0, s.jsx)(p.Button, {
                                          variant: T ? "active" : "primary",
                                          text: T ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
                                          onClick: S,
                                          icon: p.TIy,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
