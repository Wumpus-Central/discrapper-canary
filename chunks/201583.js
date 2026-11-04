var i = s(477900),
    n = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(390544),
    d = s(855986),
    c = s(116833),
    o = s(224640),
    u = s(20742),
    m = s(289873),
    p = s(834730),
    x = s(821609),
    h = s(624479),
    A = s(793574),
    g = s(46054),
    j = s(546385),
    N = s(940456),
    S = s(475669),
    E = s(685743),
    f = s(968459),
    v = s(105518),
    I = s(792996),
    b = s(364861);
s.d(
    e,
    {},
    {
        default: function (t) {
            let { guildId: e, instance: s, onClose: a, transitionState: C } = t,
                y = (0, d.bG)([S.A], () => S.A.getStateForGuild(e)?.instructions[s.planId]);
            n.useEffect(() => {
                null == y && (0, N.tT)(e, s.planId);
            }, [e, s.planId, y]);
            let T = (0, f.A)(s),
                { handleCopyServerIp: _, animateCopyIcon: M } = (0, E.A)(
                    e,
                    s.id,
                    A.A.GAME_SERVER_INSTRUCTIONS_MODAL,
                    T ?? "",
                ),
                k = n.useMemo(() => {
                    switch (s.status) {
                        case r.M.STARTING:
                            return I.intl.string(v.default.ud4hxY);
                        case r.M.OFFLINE:
                            return I.intl.string(v.default.ABAm7x);
                        default:
                            return;
                    }
                }, [s.status]);
            return (0, i.jsxs)(o.d, {
                size: "md",
                paddingSize: "lg",
                transitionState: C,
                onClose: a,
                "aria-label": s.name,
                children: [
                    (0, i.jsx)(u.rQ, {
                        gradientColor: "purple",
                        graphic: {
                            type: "dynamic",
                            component: c.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                            props: { gameId: s.gameId },
                        },
                        alignCenter: !0,
                        title: s.name,
                        subtitle: I.intl.string(v.default["4HqfaU"]),
                    }),
                    null == y
                        ? (0, i.jsx)(m.y, {})
                        : (0, i.jsxs)("div", {
                              className: b.Qs,
                              children: [
                                  null != k && (0, i.jsx)(j.A, { className: b.et, children: k }),
                                  (0, i.jsx)("div", {
                                      className: b.$6,
                                      children: y.map((t, e) =>
                                          (0, i.jsxs)(
                                              "div",
                                              {
                                                  className: b.PM,
                                                  children: [
                                                      (0, i.jsx)("div", {
                                                          className: b.CD,
                                                          children: (0, i.jsx)(p.E, {
                                                              variant: "body-xs/semibold",
                                                              color: "text-subtle",
                                                              children: I.intl.formatToPlainString(v.default.oSU1fF, {
                                                                  step: e + 1,
                                                              }),
                                                          }),
                                                      }),
                                                      (0, i.jsx)(p.E, {
                                                          variant: "body-sm/normal",
                                                          color: "text-subtle",
                                                          children: g.A.parse(t, !1, { allowLinks: !0 }),
                                                      }),
                                                  ],
                                              },
                                              e,
                                          ),
                                      ),
                                  }),
                                  null != T &&
                                      (0, i.jsxs)("div", {
                                          className: b.i7,
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: l()(b.Nk, M && b.i0),
                                                  children: (0, i.jsx)(p.E, {
                                                      variant: "body-md/medium",
                                                      color: "text-strong",
                                                      children: T,
                                                  }),
                                              }),
                                              (0, i.jsx)(x.$, {
                                                  variant: M ? "active" : "primary",
                                                  text: M ? I.intl.string(I.t.t5VZ88) : I.intl.string(I.t.OpuAlK),
                                                  onClick: _,
                                                  icon: h.CopyIcon,
                                              }),
                                          ],
                                      }),
                              ],
                          }),
                ],
            });
        },
    },
);
