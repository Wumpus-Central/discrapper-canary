n.d(t, {
    A: () => y,
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(108531),
    s = n(417597),
    o = n(397927),
    c = n(922529),
    u = n(340833),
    d = n(913642),
    f = n(513272),
    p = n(798505),
    h = n(670455),
    b = n(381941),
    g = n(985018),
    m = n(112178);

function A(e) {
    let { summary: t, channel: n } = e,
        l = (0, s.bG)([f.A], () => f.A.summaryFeedback(t)),
        i = (e, r) => {
            e.stopPropagation(),
                (0, p.A)({
                    summary: t,
                    channel: n,
                    rating: r,
                });
        },
        c = (0, o.pnh)(
            null == l,
            {
                enter: {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
                leave: {
                    opacity: 0,
                },
                config: {
                    mass: 1,
                    tension: 500,
                    friction: 18,
                    clamp: !0,
                },
            },
            "animate-always",
        );
    return (0, r.jsx)(r.Fragment, {
        children: c((e, t) =>
            t
                ? (0, r.jsx)("div", {
                      className: m.RD,
                      children: (0, r.jsxs)(a.animated.div, {
                          style: e,
                          className: m.GK,
                          children: [
                              (0, r.jsx)(o.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: g.intl.string(g.t["5ZsiE9"]),
                              }),
                              (0, r.jsx)(o.DUT, {
                                  onClick: (e) => i(e, h.P0.GOOD),
                                  children: (0, r.jsx)(d.A, {
                                      className: m.O1,
                                      width: 12,
                                      height: 12,
                                  }),
                              }),
                              (0, r.jsx)(o.DUT, {
                                  onClick: (e) => i(e, h.P0.BAD),
                                  children: (0, r.jsx)(u.A, {
                                      className: m.O1,
                                      width: 12,
                                      height: 12,
                                  }),
                              }),
                          ],
                      }),
                  })
                : null,
        ),
    });
}

function y(e) {
    var t, n;
    let l,
        { item: a, channel: u, index: d } = e,
        p = (0, s.bG)([f.A], () => f.A.selectedSummary(u.id));
    if (null == p) return null;
    let h = null != a.unreadId,
        g = null != a.content;
    return (
        (l = g
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(o.Kck, {
                          size: "xs",
                          color: "currentColor",
                          className: m.cR,
                      }),
                      a.content,
                  ],
              })
            : (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(A, {
                          summary: p,
                          channel: u,
                      }),
                      (0, r.jsx)(o.Kck, {
                          size: "xs",
                          color: "currentColor",
                          className: m.Jq,
                      }),
                  ],
              })),
        (0, r.jsx)(
            c.A,
            {
                className: i()(m.aK, g ? m.Ke : m.hO),
                contentClassName: g ? m.Ew : m.rD,
                isUnread: h,
                id: h ? b.q4 : void 0,
                children: l,
            },
            "divider-".concat(null != (t = null != (n = a.contentKey) ? n : a.unreadId) ? t : d),
        )
    );
}
