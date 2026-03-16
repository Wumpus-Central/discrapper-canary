n.d(t, { A: () => S });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    u = n(713517),
    c = n(240248),
    d = n(341915),
    m = n(890687),
    p = n(590202),
    f = n(971649),
    E = n(781121),
    h = n(752231),
    v = n(985018),
    x = n(517087),
    g = n(681636);
function S() {
    let { quest: e, sourceQuestContent: t, isPortrait: n, onClose: i } = l.useContext(h.VideoQuestModalContext),
        S = (0, f.go)(),
        A = (0, m.LS)(e),
        C = l.useRef(null),
        { isHoveringOrFocusing: _ } = (0, u.A)(C),
        b = (0, E.H)({ quest: e, onClose: i, sourceQuestContent: t, impressionId: S }),
        y = e.config.ctaConfig.subtitle,
        T = void 0 !== y && !(0, c.uJ)(y);
    return (0, r.jsx)(a.m_, {
        text: v.intl.string(v.t.EuHF34),
        children: (0, r.jsx)(o.DUT, {
            onClick: () => b(d.uF.VIDEO_MODAL, p.Cy.OPEN_GAME_LINK),
            className: x._S,
            children: (0, r.jsxs)("div", {
                className: s()(g.hA, x.t8, { [x.Mc]: A }),
                ref: C,
                children: [
                    (0, r.jsx)("div", {
                        className: x.sB,
                        children: (0, r.jsx)(o.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: s()(x.xw, { [x._L]: n }),
                            lineClamp: n ? void 0 : 1,
                            children: v.intl.format(v.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: s()(x.sB, { [x.fi]: n }),
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(x.PV, { [x.WV]: n, [x.mq]: n }),
                                children: (0, r.jsx)(o.yr3, {
                                    size: "xs",
                                    color: _ ? o.LU0.colors.ICON_STRONG.css : o.LU0.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-sm/medium",
                                className: s()(x.PV, { [x.WV]: n, [x.mq]: n }),
                                color: _ ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            T
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: s()(x.SC, { [x.b2]: n }),
                                          }),
                                          (0, r.jsx)(o.Heading, {
                                              className: s()(x.xw, { [x._L]: n }),
                                              variant: "heading-sm/medium",
                                              lineClamp: n ? void 0 : 1,
                                              color: _ ? "text-strong" : "text-subtle",
                                              children: y,
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
