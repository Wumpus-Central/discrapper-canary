n.d(e, { default: () => C });
var s = n(54381),
    i = n(473749),
    r = n(120356),
    a = n.n(r),
    l = n(660815),
    o = n(793030),
    c = n(442837),
    p = n(198168),
    u = n(481060),
    d = n(100527),
    f = n(454585),
    x = n(494620),
    m = n(905551),
    _ = n(60482),
    h = n(587065),
    v = n(986841),
    I = n(816632),
    N = n(388032),
    j = n(71124);
function C(t) {
    let { guildId: e, instance: n, onClose: r, transitionState: C } = t,
        S = (0, c.e7)([_.Z], () => {
            var t;
            return null == (t = _.Z.getStateForGuild(e)) ? void 0 : t.instructions[n.planId];
        });
    i.useEffect(() => {
        null == S && (0, m.iX)(e, n.planId);
    }, [e, n.planId, S]);
    let g = (0, v.Z)(n),
        { handleCopyServerIp: T, animateCopyIcon: E } = (0, h.Z)(
            e,
            n.id,
            d.Z.GAME_SERVER_INSTRUCTIONS_MODAL,
            null != g ? g : "",
        ),
        b = i.useMemo(() => {
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
                    component: p.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: { instance: n },
                },
                alignCenter: !0,
                title: n.name,
                subtitle: N.intl.string(I.default["4HqfaU"]),
            }),
            null == S
                ? (0, s.jsx)(u.$jN, {})
                : (0, s.jsxs)("div", {
                      className: j.content,
                      children: [
                          null != b &&
                              (0, s.jsx)(x.Z, {
                                  className: j.infoBox,
                                  children: b,
                              }),
                          (0, s.jsx)("div", {
                              className: j.stepsContainer,
                              children: S.map((t, e) =>
                                  (0, s.jsxs)(
                                      "div",
                                      {
                                          className: j.step,
                                          children: [
                                              (0, s.jsx)("div", {
                                                  className: j.stepNumber,
                                                  children: (0, s.jsx)(u.Text, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: N.intl.formatToPlainString(I.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, s.jsx)(u.Text, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: f.Z.parse(t, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != g &&
                              (0, s.jsxs)("div", {
                                  className: j.serverIpContainer,
                                  children: [
                                      (0, s.jsx)("div", {
                                          className: a()(j.serverIpInput, E && j.animate),
                                          children: (0, s.jsx)(u.Text, {
                                              variant: "text-md/medium",
                                              color: "header-primary",
                                              children: g,
                                          }),
                                      }),
                                      (0, s.jsx)(u.Button, {
                                          variant: E ? "active" : "primary",
                                          text: E ? N.intl.string(N.t.t5VZ88) : N.intl.string(N.t.OpuAlK),
                                          onClick: T,
                                          icon: u.TIy,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
