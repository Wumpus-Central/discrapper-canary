n.d(t, { default: () => C });
var s = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    l = n(660815),
    o = n(793030),
    c = n(442837),
    d = n(198168),
    p = n(481060),
    u = n(100527),
    f = n(454585),
    x = n(494620),
    m = n(905551),
    _ = n(60482),
    h = n(587065),
    v = n(986841),
    I = n(719662),
    N = n(388032),
    j = n(581385);
function C(e) {
    let { guildId: t, instance: n, onClose: r, transitionState: C } = e,
        S = (0, c.e7)([_.Z], () => {
            var e;
            return null == (e = _.Z.getStateForGuild(t)) ? void 0 : e.instructions[n.planId];
        });
    i.useEffect(() => {
        null == S && (0, m.iX)(t, n.planId);
    }, [t, n.planId, S]);
    let g = (0, v.Z)(n),
        { handleCopyServerIp: T, animateCopyIcon: E } = (0, h.Z)(
            t,
            n.id,
            u.Z.GAME_SERVER_INSTRUCTIONS_MODAL,
            null != g ? g : "",
        ),
        A = i.useMemo(() => {
            switch (n.status) {
                case l.V.STARTING:
                    return N.intl.string(I.default.ud4hxY);
                case l.V.OFFLINE:
                    return N.intl.string(I.default.ABAm7x);
                default:
                    return;
            }
        }, [n.status]);
    return (0, s.jsxs)(o.IX, {
        size: "lg",
        paddingSize: "lg",
        transitionState: C,
        onClose: r,
        children: [
            (0, s.jsx)(o.xBx, {
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: d.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: { instance: n },
                },
                alignCenter: !0,
                title: n.name,
                subtitle: N.intl.string(I.default["4HqfaU"]),
            }),
            null == S
                ? (0, s.jsx)(p.$jN, {})
                : (0, s.jsxs)("div", {
                      className: j.content,
                      children: [
                          null != A &&
                              (0, s.jsx)(x.Z, {
                                  className: j.infoBox,
                                  children: A,
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
                                                  children: f.Z.parse(e, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      t,
                                  ),
                              ),
                          }),
                          null != g &&
                              (0, s.jsxs)("div", {
                                  className: j.serverIpContainer,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: a()(j.serverIpInput, E && j.animate),
                                          children: (0, s.jsx)(p.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: g,
                                          }),
                                      }),
                                      (0, s.jsx)(p.Button, {
                                          variant: E ? "active" : "primary",
                                          text: E ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
                                          onClick: T,
                                          icon: p.TIy,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
