n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    a = n(880013),
    r = n(417597),
    o = n(397927),
    c = n(922529),
    d = n(340833),
    u = n(913642),
    h = n(513272),
    m = n(798505),
    A = n(670455),
    g = n(381941),
    p = n(985018),
    f = n(346396);
function _(e) {
    let { summary: t, channel: n } = e,
        l = (0, r.bG)([h.A], () => h.A.summaryFeedback(t)),
        s = (e, i) => {
            e.stopPropagation(), (0, m.A)({ summary: t, channel: n, rating: i });
        },
        c = (0, o.pnh)(
            null == l,
            {
                enter: { from: { opacity: 0 }, to: { opacity: 1 } },
                leave: { opacity: 0 },
                config: { mass: 1, tension: 500, friction: 18, clamp: !0 },
            },
            "animate-always",
        );
    return (0, i.jsx)(i.Fragment, {
        children: c((e, t) =>
            t
                ? (0, i.jsx)("div", {
                      className: f.RD,
                      children: (0, i.jsxs)(a.animated.div, {
                          style: e,
                          className: f.GK,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: p.intl.string(p.t["5ZsiE9"]),
                              }),
                              (0, i.jsx)(o.DUT, {
                                  onClick: (e) => s(e, A.P0.GOOD),
                                  children: (0, i.jsx)(u.A, { className: f.O1, width: 12, height: 12 }),
                              }),
                              (0, i.jsx)(o.DUT, {
                                  onClick: (e) => s(e, A.P0.BAD),
                                  children: (0, i.jsx)(d.A, { className: f.O1, width: 12, height: 12 }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}
function E(e) {
    let t,
        { item: n, channel: l, index: a } = e,
        d = (0, r.bG)([h.A], () => h.A.selectedSummary(l.id));
    if (null == d) return null;
    let u = null != n.unreadId,
        m = null != n.content;
    return (
        (t = m
            ? (0, i.jsxs)(i.Fragment, {
                  children: [(0, i.jsx)(o.Kck, { size: "xs", color: "currentColor", className: f.cR }), n.content],
              })
            : (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(_, { summary: d, channel: l }),
                      (0, i.jsx)(o.Kck, { size: "xs", color: "currentColor", className: f.Jq }),
                  ],
              })),
        (0, i.jsx)(
            c.A,
            {
                className: s()(f.aK, m ? f.Ke : f.hO),
                contentClassName: m ? f.Ew : f.rD,
                isUnread: u,
                id: u ? g.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? a}`,
        )
    );
}
