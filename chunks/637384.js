n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(563495),
    r = n(417597),
    o = n(397927),
    c = n(922529),
    d = n(340833),
    u = n(913642),
    h = n(513272),
    m = n(798505),
    A = n(670455),
    p = n(381941),
    g = n(985018),
    f = n(112178);
function _(e) {
    let { summary: t, channel: n } = e,
        l = (0, r.bG)([h.A], () => h.A.summaryFeedback(t)),
        a = (e, i) => {
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
                      children: (0, i.jsxs)(s.animated.div, {
                          style: e,
                          className: f.GK,
                          children: [
                              (0, i.jsx)(o.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: g.intl.string(g.t["5ZsiE9"]),
                              }),
                              (0, i.jsx)(o.DUT, {
                                  onClick: (e) => a(e, A.P0.GOOD),
                                  children: (0, i.jsx)(u.A, { className: f.O1, width: 12, height: 12 }),
                              }),
                              (0, i.jsx)(o.DUT, {
                                  onClick: (e) => a(e, A.P0.BAD),
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
        { item: n, channel: l, index: s } = e,
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
                className: a()(f.aK, m ? f.Ke : f.hO),
                contentClassName: m ? f.Ew : f.rD,
                isUnread: u,
                id: u ? p.q4 : void 0,
                children: t,
            },
            `divider-${n.contentKey ?? n.unreadId ?? s}`,
        )
    );
}
