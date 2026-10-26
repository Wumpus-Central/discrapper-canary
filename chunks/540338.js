n.d(t, { K: () => c, u: () => f });
var l = n(477900);
n(582128);
var a = n(331322),
    i = n(834730);
if (221552 == n.j) var r = n(825484);
var u = n(821609),
    s = n(709753),
    o = n(248675),
    d = n(105292);
function c(e) {
    let { projectId: t, approval: n } = e,
        { id: c, host: f, reason: p } = n;
    return (0, l.jsxs)(a.B, {
        gap: 8,
        align: "start",
        role: "group",
        "aria-label": d.intl.string(o.default.W4DsVo),
        children: [
            (0, l.jsx)(i.E, {
                variant: "text-xs/semibold",
                color: "text-brand",
                tag: "span",
                children: d.intl.string(o.default.W4DsVo),
            }),
            (0, l.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-default",
                selectable: !0,
                children: d.intl.format(o.default.E4Gc7e, { host: f }),
            }),
            "" !== p
                ? (0, l.jsx)(i.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      selectable: !0,
                      children: d.intl.format(o.default["5poqiN"], { reason: p }),
                  })
                : null,
            (0, l.jsxs)(r.e, {
                size: "sm",
                direction: "horizontal",
                children: [
                    (0, l.jsx)(u.$, {
                        variant: "primary",
                        onClick: () => (0, s.kA)(t, c, "once"),
                        text: d.intl.string(o.default.B05C3K),
                    }),
                    (0, l.jsx)(u.$, {
                        variant: "secondary",
                        onClick: () => (0, s.kA)(t, c, "always"),
                        text: d.intl.string(o.default["rGv+om"]),
                    }),
                    (0, l.jsx)(u.$, {
                        variant: "secondary",
                        onClick: () => (0, s.kA)(t, c, "deny"),
                        text: d.intl.string(o.default.vWkaSE),
                    }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { projectId: t } = e,
        n = (0, s.PI)(t);
    return null == n
        ? null
        : (0, l.jsxs)(a.B, {
              gap: 8,
              role: "group",
              "aria-label": d.intl.string(o.default.Ufr2wk),
              children: [
                  (0, l.jsx)(i.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: d.intl.string(o.default.Ufr2wk),
                  }),
                  (0, l.jsx)(i.E, {
                      variant: "text-sm/normal",
                      color: "text-muted",
                      children: d.intl.string(o.default.wremls),
                  }),
                  0 === n.length
                      ? (0, l.jsx)(i.E, {
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: d.intl.string(o.default.AweHIi),
                        })
                      : n.map((e) =>
                            (0, l.jsxs)(
                                a.B,
                                {
                                    direction: "horizontal",
                                    justify: "space-between",
                                    align: "center",
                                    role: "group",
                                    "aria-label": e,
                                    children: [
                                        (0, l.jsx)(i.E, {
                                            variant: "text-sm/normal",
                                            color: "text-default",
                                            selectable: !0,
                                            children: e,
                                        }),
                                        (0, l.jsx)(u.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: d.intl.string(o.default["4r+tVj"]),
                                            onClick: () => (0, s.t6)(t, e),
                                        }),
                                    ],
                                },
                                e,
                            ),
                        ),
              ],
          });
}
