l.d(t, { K: () => c, u: () => f });
var n = l(477900);
l(582128);
var a = l(331322),
    r = l(834730);
if (221552 == l.j) var i = l(825484);
var s = l(821609),
    u = l(709753),
    o = l(87501),
    d = l(105292);
function c(e) {
    let { projectId: t, approval: l } = e,
        { id: c, host: f, reason: m } = l;
    return (0, n.jsxs)(a.B, {
        gap: 8,
        align: "start",
        role: "group",
        "aria-label": d.intl.string(o.default.W4DsVo),
        children: [
            (0, n.jsx)(r.E, {
                variant: "text-xs/semibold",
                color: "text-brand",
                tag: "span",
                children: d.intl.string(o.default.W4DsVo),
            }),
            (0, n.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: d.intl.format(o.default.E4Gc7e, { host: f }),
            }),
            "" !== m
                ? (0, n.jsx)(r.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      selectable: !0,
                      children: d.intl.format(o.default["5poqiN"], { reason: m }),
                  })
                : null,
            (0, n.jsxs)(i.e, {
                size: "sm",
                direction: "horizontal",
                children: [
                    (0, n.jsx)(s.$, {
                        variant: "primary",
                        onClick: () => (0, u.kA)(t, c, "once"),
                        text: d.intl.string(o.default.B05C3K),
                    }),
                    (0, n.jsx)(s.$, {
                        variant: "secondary",
                        onClick: () => (0, u.kA)(t, c, "always"),
                        text: d.intl.string(o.default["rGv+om"]),
                    }),
                    (0, n.jsx)(s.$, {
                        variant: "secondary",
                        onClick: () => (0, u.kA)(t, c, "deny"),
                        text: d.intl.string(o.default.vWkaSE),
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { projectId: t } = e,
        l = (0, u.PI)(t);
    return null == l
        ? null
        : (0, n.jsxs)(a.B, {
              gap: 8,
              role: "group",
              "aria-label": d.intl.string(o.default.Ufr2wk),
              children: [
                  (0, n.jsx)(r.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: d.intl.string(o.default.Ufr2wk),
                  }),
                  (0, n.jsx)(r.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: d.intl.string(o.default.wremls),
                  }),
                  0 === l.length
                      ? (0, n.jsx)(r.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: d.intl.string(o.default.AweHIi),
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
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            selectable: !0,
                                            children: e,
                                        }),
                                        (0, n.jsx)(s.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: d.intl.string(o.default["4r+tVj"]),
                                            onClick: () => (0, u.t6)(t, e),
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
              ],
          });
}
