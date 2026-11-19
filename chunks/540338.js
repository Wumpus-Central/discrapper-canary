var n = l(477900);
l(582128);
var a = l(331322),
    r = l(834730);
if (221552 == l.j) var i = l(825484);
var s = l(821609),
    o = l(709753),
    u = l(191850),
    d = l(792996);
l.d(
    t,
    {},
    {
        K: function (e) {
            let { projectId: t, approval: l } = e,
                { id: c, host: f, reason: m } = l;
            return (0, n.jsxs)(a.B, {
                gap: 8,
                align: "start",
                role: "group",
                "aria-label": d.intl.string(u.default.W4DsVo),
                children: [
                    (0, n.jsx)(r.E, {
                        variant: "body-xs/semibold",
                        color: "text-brand",
                        tag: "span",
                        children: d.intl.string(u.default.W4DsVo),
                    }),
                    (0, n.jsx)(r.E, {
                        variant: "body-sm/normal",
                        color: "text-default",
                        selectable: !0,
                        children: d.intl.format(u.default.E4Gc7e, { host: f }),
                    }),
                    "" !== m
                        ? (0, n.jsx)(r.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              selectable: !0,
                              children: d.intl.format(u.default["5poqiN"], { reason: m }),
                          })
                        : null,
                    (0, n.jsxs)(i.e, {
                        size: "sm",
                        direction: "horizontal",
                        children: [
                            (0, n.jsx)(s.$, {
                                variant: "primary",
                                onClick: () => (0, o.kA)(t, c, "once"),
                                text: d.intl.string(u.default.B05C3K),
                            }),
                            (0, n.jsx)(s.$, {
                                variant: "secondary",
                                onClick: () => (0, o.kA)(t, c, "always"),
                                text: d.intl.string(u.default["rGv+om"]),
                            }),
                            (0, n.jsx)(s.$, {
                                variant: "secondary",
                                onClick: () => (0, o.kA)(t, c, "deny"),
                                text: d.intl.string(u.default.vWkaSE),
                            }),
                        ],
                    }),
                ],
            });
        },
        u: function (e) {
            let { projectId: t } = e,
                l = (0, o.PI)(t);
            return null == l
                ? null
                : (0, n.jsxs)(a.B, {
                      gap: 8,
                      role: "group",
                      "aria-label": d.intl.string(u.default.Ufr2wk),
                      children: [
                          (0, n.jsx)(r.E, {
                              variant: "body-md/medium",
                              color: "text-strong",
                              children: d.intl.string(u.default.Ufr2wk),
                          }),
                          (0, n.jsx)(r.E, {
                              variant: "body-sm/normal",
                              color: "text-muted",
                              children: d.intl.string(u.default.wremls),
                          }),
                          0 === l.length
                              ? (0, n.jsx)(r.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: d.intl.string(u.default.AweHIi),
                                })
                              : l.map((e) =>
                                    (0, n.jsxs)(
                                        a.B,
                                        {
                                            direction: "horizontal",
                                            justify: "space-between",
                                            align: "center",
                                            role: "group",
                                            "aria-label": e,
                                            children: [
                                                (0, n.jsx)(r.E, {
                                                    variant: "body-sm/normal",
                                                    color: "text-default",
                                                    selectable: !0,
                                                    children: e,
                                                }),
                                                (0, n.jsx)(s.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: d.intl.string(u.default["4r+tVj"]),
                                                    onClick: () => (0, o.t6)(t, e),
                                                }),
                                            ],
                                        },
                                        e,
                                    ),
                                ),
                      ],
                  });
        },
    },
);
