var l = n(477900),
    i = n(582128),
    r = n(403581),
    s = n(646514),
    a = n(834730),
    u = n(805251),
    o = n(821609),
    d = n(565645),
    c = n(311364),
    h = n(178653),
    m = n(465794),
    f = n(186280),
    p = n(682901),
    g = n(236432),
    A = n(792996),
    v = n(23236);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { pack: t, isNitroTier2: n, surface: j, onClose: x } = e,
                b = i.useContext(h.A);
            return (
                (0, f.$W)(j, n),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", { className: v.yF }),
                        (0, l.jsxs)("div", {
                            className: v.R_,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: v.DD,
                                    children: [
                                        (0, l.jsx)(r.NitroWheelIcon, { size: "sm", color: s.A.colors.TEXT_DEFAULT }),
                                        (0, l.jsx)(a.E, {
                                            variant: "body-sm/medium",
                                            children: A.intl.string(g.default.leUgZw),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(u.E, { type: "beta", variant: "primary" }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: v.VH,
                            role: "group",
                            "aria-label": t.name,
                            children: t.previewEmojis.map((e) =>
                                (0, l.jsx)(
                                    d.A,
                                    { className: v.Zg, emojiId: e.id, emojiName: e.name, animated: e.animated },
                                    e.id,
                                ),
                            ),
                        }),
                        (!n || null != b) &&
                            (0, l.jsx)("div", {
                                className: v.XI,
                                children: n
                                    ? (0, l.jsx)(o.$, {
                                          text: A.intl.string(g.default.DtK5IG),
                                          variant: "primary",
                                          fullWidth: !0,
                                          onClick: function () {
                                              null != b && (x(), b(t.id));
                                          },
                                      })
                                    : (0, l.jsx)(c.Y, {
                                          newLocations: [f.Vg[j].location],
                                          children: (0, l.jsx)(m.A, {
                                              subscriptionTier: p.pe.TIER_2,
                                              defaultTextOverride: A.intl.string(A.t["gl/XHJ"]),
                                              fullWidth: !0,
                                              onClick: x,
                                          }),
                                      }),
                            }),
                    ],
                })
            );
        },
    },
);
