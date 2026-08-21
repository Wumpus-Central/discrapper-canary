s.d(e, { default: () => T });
var i = s(477900),
    n = s(582128),
    a = s(503698),
    l = s.n(a),
    r = s(390544),
    d = s(224640),
    c = s(20742),
    o = s(17928),
    u = s(116833),
    m = s(289873),
    p = s(834730),
    x = s(821609),
    h = s(624479),
    A = s(793574),
    g = s(46054),
    j = s(546385),
    N = s(498480),
    S = s(475669),
    E = s(685743),
    f = s(968459),
    v = s(667378),
    I = s(375708),
    C = s(364861);
function T(t) {
    let { guildId: e, instance: s, onClose: a, transitionState: T } = t,
        _ = (0, o.bG)([S.A], () => S.A.getStateForGuild(e)?.instructions[s.planId]);
    n.useEffect(() => {
        null == _ && (0, N.tT)(e, s.planId);
    }, [e, s.planId, _]);
    let b = (0, f.A)(s),
        { handleCopyServerIp: M, animateCopyIcon: k } = (0, E.A)(e, s.id, A.A.GAME_SERVER_INSTRUCTIONS_MODAL, b ?? ""),
        G = n.useMemo(() => {
            switch (s.status) {
                case r.M.STARTING:
                    return I.intl.string(v.default.ud4hxY);
                case r.M.OFFLINE:
                    return I.intl.string(v.default.ABAm7x);
                default:
                    return;
            }
        }, [s.status]);
    return (0, i.jsxs)(d.d, {
        size: "md",
        paddingSize: "lg",
        transitionState: T,
        onClose: a,
        "aria-label": s.name,
        children: [
            (0, i.jsx)(c.rQ, {
                gradientColor: "purple",
                graphic: {
                    type: "dynamic",
                    component: u.DynamicGraphicComponent.GAME_SERVER_GAME_INSTRUCTIONS_ASSET,
                    props: { gameId: s.gameId },
                },
                alignCenter: !0,
                title: s.name,
                subtitle: I.intl.string(v.default["4HqfaU"]),
            }),
            null == _
                ? (0, i.jsx)(m.y, {})
                : (0, i.jsxs)("div", {
                      className: C.Qs,
                      children: [
                          null != G && (0, i.jsx)(j.A, { className: C.et, children: G }),
                          (0, i.jsx)("div", {
                              className: C.$6,
                              children: _.map((t, e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: C.PM,
                                          children: [
                                              (0, i.jsx)("div", {
                                                  className: C.CD,
                                                  children: (0, i.jsx)(p.E, {
                                                      variant: "text-xs/semibold",
                                                      color: "text-subtle",
                                                      children: I.intl.formatToPlainString(v.default.oSU1fF, {
                                                          step: e + 1,
                                                      }),
                                                  }),
                                              }),
                                              (0, i.jsx)(p.E, {
                                                  variant: "text-sm/normal",
                                                  color: "text-subtle",
                                                  children: g.A.parse(t, !1, { allowLinks: !0 }),
                                              }),
                                          ],
                                      },
                                      e,
                                  ),
                              ),
                          }),
                          null != b &&
                              (0, i.jsxs)("div", {
                                  className: C.i7,
                                  children: [
                                      (0, i.jsx)("div", {
                                          className: l()(C.Nk, k && C.i0),
                                          children: (0, i.jsx)(p.E, {
                                              variant: "text-md/medium",
                                              color: "text-strong",
                                              children: b,
                                          }),
                                      }),
                                      (0, i.jsx)(x.$, {
                                          variant: k ? "active" : "primary",
                                          text: k ? I.intl.string(I.t.t5VZ88) : I.intl.string(I.t.OpuAlK),
                                          onClick: M,
                                          icon: h.CopyIcon,
                                      }),
                                  ],
                              }),
                      ],
                  }),
        ],
    });
}
