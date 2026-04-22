n.d(t, { A: () => S });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(517738),
    r = n(417597),
    o = n(866323),
    c = n(834730),
    d = n(939249),
    u = n(306788),
    h = n(922529),
    m = n(340833),
    A = n(913642),
    g = n(513272),
    p = n(798505),
    _ = n(670455),
    f = n(381941),
    E = n(985018),
    C = n(182147);
function x(e) {
    let { summary: t, channel: n } = e,
        l = (0, r.bG)([g.A], () => g.A.summaryFeedback(t)),
        a = (e, i) => {
            e.stopPropagation(), (0, p.A)({ summary: t, channel: n, rating: i });
        },
        u = (0, o.p)(
            null == l,
            {
                enter: { from: { opacity: 0 }, to: { opacity: 1 } },
                leave: { opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
    return (0, i.jsx)(i.Fragment, {
        children: u((e, t) =>
            t
                ? (0, i.jsx)("div", {
                      className: C.RD,
                      children: (0, i.jsxs)(s.animated.div, {
                          style: e,
                          className: C.GK,
                          children: [
                              (0, i.jsx)(c.E, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: E.intl.string(E.t["5ZsiE9"]),
                              }),
                              (0, i.jsx)(d.D, {
                                  onClick: (e) => a(e, _.P0.GOOD),
                                  children: (0, i.jsx)(A.A, { className: C.O1, width: 12, height: 12 }),
                              }),
                              (0, i.jsx)(d.D, {
                                  onClick: (e) => a(e, _.P0.BAD),
                                  children: (0, i.jsx)(m.A, { className: C.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function S(e) {
    let t,
        { item: n, channel: l, index: s } = e,
        o = (0, r.bG)([g.A], () => g.A.selectedSummary(l.id));
    if (null == o) return null;
    let c = null != n.unreadId,
        d = null != n.content;
    return (
        (t = d
            ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(u.K, { size: "xs", color: "currentColor", className: C.cR }), n.content],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(x, { summary: o, channel: l }),
                      (0, i.jsx)(u.K, { size: "xs", color: "currentColor", className: C.Jq }),
                  ],
              })),
        (0, i.jsx)(
            h.A,
            {
                className: a()(C.aK, d ? C.Ke : C.hO),
                contentClassName: d ? C.Ew : C.rD,
                isUnread: c,
                id: c ? f.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? s}`,
        )
    );
}
