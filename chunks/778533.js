s.d(t, { A: () => N });
var n = s(627968),
    l = s(64700),
    i = s(503698),
    a = s.n(i),
    o = s(990078),
    r = s(939249),
    u = s(534514),
    d = s(628284),
    c = s(827734),
    m = s(713517),
    x = s(240248),
    A = s(341915),
    h = s(890687),
    g = s(590202),
    p = s(971649),
    C = s(781121),
    S = s(201257),
    v = s(985018),
    f = s(503820),
    j = s(834926);
function N() {
    let { quest: e, sourceQuestContent: t, isPortrait: s, onClose: i } = l.useContext(S.VideoQuestModalContext),
        N = (0, p.go)(),
        O = (0, h.LS)(e),
        E = l.useRef(null),
        { isHoveringOrFocusing: M } = (0, m.A)(E),
        _ = (0, C.H)({ quest: e, onClose: i, sourceQuestContent: t, impressionId: N }),
        T = e.config.ctaConfig.subtitle,
        y = void 0 !== T && !(0, x.uJ)(T);
    return (0, n.jsx)(o.m, {
        text: v.intl.string(v.t.EuHF34),
        children: (0, n.jsx)(r.D, {
            onClick: () => _(A.uF.VIDEO_MODAL, g.Cy.OPEN_GAME_LINK),
            className: f._S,
            children: (0, n.jsxs)("div", {
                className: a()(j.hA, f.t8, { [f.Mc]: O }),
                ref: E,
                children: [
                    (0, n.jsx)("div", {
                        className: f.sB,
                        children: (0, n.jsx)(u.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: a()(f.xw, { [f._L]: s }),
                            lineClamp: s ? void 0 : 1,
                            children: v.intl.format(v.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: a()(f.sB, { [f.fi]: s }),
                        children: [
                            (0, n.jsx)("div", {
                                className: a()(f.PV, { [f.WV]: s, [f.mq]: s }),
                                children: (0, n.jsx)(d.y, {
                                    size: "xs",
                                    color: M ? c.A.colors.ICON_STRONG.css : c.A.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, n.jsx)(u.D, {
                                variant: "heading-sm/medium",
                                className: a()(f.PV, { [f.WV]: s, [f.mq]: s }),
                                color: M ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            y
                                ? (0, n.jsxs)(n.Fragment, {
                                      children: [
                                          (0, n.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: a()(f.SC, { [f.b2]: s }),
                                          }),
                                          (0, n.jsx)(u.D, {
                                              className: a()(f.xw, { [f._L]: s }),
                                              variant: "heading-sm/medium",
                                              lineClamp: s ? void 0 : 1,
                                              color: M ? "text-strong" : "text-subtle",
                                              children: T,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
