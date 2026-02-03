n.d(t, {
    A: () => _,
});
var l = n(627968);
n(64700);
var r = n(503698),
    i = n.n(r),
    a = n(92674),
    s = n(417597),
    o = n(397927),
    c = n(922529),
    u = n(340833),
    d = n(913642),
    h = n(513272),
    p = n(798505),
    f = n(670455),
    m = n(381941),
    g = n(985018),
    A = n(112178);

function b(e) {
    let { summary: t, channel: n } = e,
        r = (0, s.bG)([h.A], () => h.A.summaryFeedback(t)),
        i = (e, l) => {
            e.stopPropagation(),
                (0, p.A)({
                    summary: t,
                    channel: n,
                    rating: l,
                });
        },
        c = (0, o.pnh)(
            null == r,
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
    return (0, l.jsx)(l.Fragment, {
        children: c((e, t) =>
            t
                ? (0, l.jsx)("div", {
                      className: A.RD,
                      children: (0, l.jsxs)(a.animated.div, {
                          style: e,
                          className: A.GK,
                          children: [
                              (0, l.jsx)(o.Text, {
                                  variant: "text-xs/medium",
                                  color: "interactive-text-default",
                                  children: g.intl.string(g.t["5ZsiE9"]),
                              }),
                              (0, l.jsx)(o.DUT, {
                                  onClick: (e) => i(e, f.P0.GOOD),
                                  children: (0, l.jsx)(d.A, {
                                      className: A.O1,
                                      width: 12,
                                      height: 12,
                                  }),
                              }),
                              (0, l.jsx)(o.DUT, {
                                  onClick: (e) => i(e, f.P0.BAD),
                                  children: (0, l.jsx)(u.A, {
                                      className: A.O1,
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

function _(e) {
    var t, n;
    let r,
        { item: a, channel: u, index: d } = e,
        p = (0, s.bG)([h.A], () => h.A.selectedSummary(u.id));
    if (null == p) return null;
    let f = null != a.unreadId,
        g = null != a.content;
    return (
        (r = g
            ? (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(o.Kck, {
                          size: "xs",
                          color: "currentColor",
                          className: A.cR,
                      }),
                      a.content,
                  ],
              })
            : (0, l.jsxs)(l.Fragment, {
                  children: [
                      (0, l.jsx)(b, {
                          summary: p,
                          channel: u,
                      }),
                      (0, l.jsx)(o.Kck, {
                          size: "xs",
                          color: "currentColor",
                          className: A.Jq,
                      }),
                  ],
              })),
        (0, l.jsx)(
            c.A,
            {
                className: i()(A.aK, g ? A.Ke : A.hO),
                contentClassName: g ? A.Ew : A.rD,
                isUnread: f,
                id: f ? m.q4 : void 0,
                children: r,
            },
            "divider-".concat(null != (t = null != (n = a.contentKey) ? n : a.unreadId) ? t : d),
        )
    );
}
