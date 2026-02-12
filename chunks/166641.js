n.d(t, { A: () => g });
var i = n(627968),
    r = n(64700),
    l = n(397927),
    a = n(686956),
    s = n(292455),
    o = n(701508),
    d = n(979590),
    c = n(783531),
    u = n(506999),
    A = n(212165),
    h = n(599907),
    _ = n(985018),
    m = n(27740),
    p = n(318937);
let g = function (e) {
    let { onScroll: t } = e,
        n = (0, A.A)(),
        g = r.useMemo(
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
                                  (0, i.jsx)(l.Heading, {
                                      className: m.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: _.intl.string(_.t["2DfZIQ"]),
                                  }),
                                  (0, i.jsxs)("div", {
                                      className: m.Q,
                                      children: [
                                          g.map((e) =>
                                              (0, i.jsx)(
                                                  h.nO,
                                                  { guild: e, onClick: () => a.A.transitionToGuildSync(e.id) },
                                                  e.id,
                                              ),
                                          ),
                                          (0, i.jsx)(u.A, { hasHub: !0 }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, i.jsx)("div", { className: m.Q, children: (0, i.jsx)(u.A, { hasHub: !1 }) }),
                    (0, i.jsx)("div", { className: p.yF }),
                    (0, i.jsxs)("div", {
                        className: p.ed,
                        children: [
                            (0, i.jsxs)(l.Text, {
                                className: p.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [_.intl.string(_.t.O1k9XX), " "],
                            }),
                            (0, i.jsx)(l.Text, {
                                className: p.Qq,
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
