n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(111161),
    l = n(662097),
    c = n(682454);
function u(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: u, variant: d = "default", layout: f, initialize: p } = t,
        _ = null == n ? void 0 : n(),
        h = null == u ? void 0 : u(),
        m = i.useId(),
        g = null != _ && "" !== _,
        E = null != h && "" !== h;
    return (
        (0, l.D)(p),
        (0, r.jsxs)("fieldset", {
            "aria-describedby": E ? m : void 0,
            children: [
                g || E
                    ? (0, r.jsxs)("div", {
                          className: c.header,
                          children: [
                              g
                                  ? (0, r.jsx)(a.Text, {
                                        tag: "legend",
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        className: c.title,
                                        children: _,
                                    })
                                  : null,
                              E
                                  ? (0, r.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        id: m,
                                        className: c.subtitle,
                                        children: h,
                                    })
                                  : null,
                          ],
                      })
                    : null,
                (0, r.jsx)(a.Kqy, {
                    direction: "vertical",
                    gap: 16,
                    children: f.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(o.Z, { node: e }),
                                    "separators" === d && t !== f.length - 1 && (0, r.jsx)(s.Z, {}),
                                ],
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        })
    );
}
let d = i.memo(u);
