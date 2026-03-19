n.d(t, { A: () => p });
var i = n(627968),
    a = n(64700),
    r = n(397927),
    l = n(686956),
    s = n(292455),
    o = n(701508),
    d = n(979590),
    c = n(783531),
    u = n(506999),
    A = n(212165),
    h = n(599907),
    _ = n(985018),
    m = n(987134),
    g = n(236415);
let p = function (e) {
    let { onScroll: t } = e,
        n = (0, A.A)(),
        p = a.useMemo(
            () =>
                n.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0,
                })),
            [n],
        );
    return (0, i.jsxs)(c.A, {
        onScroll: t,
        children: [
            (0, i.jsx)(o.A, {
                title: _.intl.string(_.t.X5xPlb),
                description: _.intl.string(_.t["F/IQCI"]),
                children: (0, i.jsx)(s.A, {}),
            }),
            (0, i.jsxs)(d.A, {
                children: [
                    n.length > 0
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(r.Heading, {
                                      className: m.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: _.intl.string(_.t["2DfZIQ"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: m.Q,
                                      children: [
                                          p.map((e) =>
                                              (0, i.jsx)(
                                                  h.nO,
                                                  { guild: e, onClick: () => l.A.transitionToGuildSync(e.id) },
                                                  e.id,
                                              ),
                                          ),
                                          (0, i.jsx)(u.A, { hasHub: !0 }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)("div", { className: m.Q, children: (0, i.jsx)(u.A, { hasHub: !1 }) }),
                    (0, i.jsx)("div", { className: g.yF }),
                    (0, i.jsxs)("div", {
                        className: g.ed,
                        children: [
                            (0, i.jsxs)(r.Text, {
                                className: g.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [_.intl.string(_.t.O1k9XX), " "],
                            }),
                            (0, i.jsx)(r.Text, {
                                className: g.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: _.intl.string(_.t.FV5dvh),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
};
