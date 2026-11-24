var l = n(477900),
    i = n(582128),
    r = n(403581),
    s = n(646514),
    a = n(834730),
    o = n(805251),
    u = n(821609),
    d = n(565645),
    c = n(311364),
    m = n(178653),
    h = n(465794),
    f = n(186280),
    p = n(682901),
    A = n(236432),
    E = n(792996),
    g = n(23236);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { pack: t, isNitroTier2: n, surface: v, onClose: j } = e,
                x = i.useContext(m.A);
            return (
                (0, f.$W)(v, n),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("div", { className: g.yF }),
                        (0, l.jsxs)("div", {
                            className: g.R_,
                            children: [
                                (0, l.jsxs)("div", {
                                    className: g.DD,
                                    children: [
                                        (0, l.jsx)(r.NitroWheelIcon, { size: "sm", color: s.A.colors.TEXT_DEFAULT }),
                                        (0, l.jsx)(a.E, {
                                            variant: "body-sm/medium",
                                            children: E.intl.string(A.default.leUgZw),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)(o.E, { type: "beta", variant: "primary" }),
                            ],
                        }),
                        (0, l.jsx)("div", {
                            className: g.VH,
                            role: "group",
                            "aria-label": t.name,
                            children: t.previewEmojis.map((e) =>
                                (0, l.jsx)(
                                    d.A,
                                    { className: g.Zg, emojiId: e.id, emojiName: e.name, animated: e.animated },
                                    e.id,
                                ),
                            ),
                        }),
                        (!n || null != x) &&
                            (0, l.jsx)("div", {
                                className: g.XI,
                                children: n
                                    ? (0, l.jsx)(u.$, {
                                          text: E.intl.string(A.default.DtK5IG),
                                          variant: "primary",
                                          fullWidth: !0,
                                          onClick: function () {
                                              null != x && (j(), x(t.id));
                                          },
                                      })
                                    : (0, l.jsx)(c.Y, {
                                          newLocations: [f.Vg[v].location],
                                          children: (0, l.jsx)(h.A, {
                                              subscriptionTier: p.pe.TIER_2,
                                              defaultTextOverride: E.intl.string(E.t["gl/XHJ"]),
                                              fullWidth: !0,
                                              onClick: j,
                                          }),
                                      }),
                            }),
                    ],
                })
            );
        },
    },
);
