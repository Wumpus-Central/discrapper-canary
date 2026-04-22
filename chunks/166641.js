a.d(t, { A: () => f });
var s = a(627968),
    l = a(64700),
    r = a(534514),
    i = a(834730),
    n = a(686956),
    c = a(292455),
    o = a(701508),
    d = a(979590),
    u = a(783531),
    h = a(506999),
    g = a(212165),
    A = a(599907),
    _ = a(985018),
    m = a(41389),
    C = a(217312);
let f = function (e) {
    let { onScroll: t } = e,
        a = (0, g.A)(),
        f = l.useMemo(
            () =>
                a.map((e) => ({
                    ...e,
                    presenceCount: void 0,
                    memberCount: void 0,
                    premiumSubscriptionCount: void 0,
                    emojis: void 0,
                })),
            [a],
        );
    return (0, s.jsxs)(u.A, {
        onScroll: t,
        children: [
            (0, s.jsx)(o.A, {
                title: _.intl.string(_.t.X5xPlb),
                description: _.intl.string(_.t["F/IQCI"]),
                children: (0, s.jsx)(c.A, {}),
            }),
            (0, s.jsxs)(d.A, {
                children: [
                    a.length > 0
                        ? (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(r.D, {
                                      className: m.G,
                                      variant: "heading-lg/semibold",
                                      color: "text-strong",
                                      children: _.intl.string(_.t["2DfZIQ"]),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: m.Q,
                                      children: [
                                          f.map((e) =>
                                              (0, s.jsx)(
                                                  A.nO,
                                                  { guild: e, onClick: () => n.A.transitionToGuildSync(e.id) },
                                                  e.id,
                                              ),
                                          ),
                                          (0, s.jsx)(h.A, { hasHub: !0 }),
                                      ],
                                  }),
                              ],
                          })
                        : (0, s.jsx)("div", { className: m.Q, children: (0, s.jsx)(h.A, { hasHub: !1 }) }),
                    (0, s.jsx)("div", { className: C.yF }),
                    (0, s.jsxs)("div", {
                        className: C.ed,
                        children: [
                            (0, s.jsxs)(i.E, {
                                className: C.Qq,
                                variant: "text-sm/medium",
                                color: "text-default",
                                children: [_.intl.string(_.t.O1k9XX), " "],
                            }),
                            (0, s.jsx)(i.E, {
                                className: C.Qq,
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
