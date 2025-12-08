n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(111161),
    l = n(662097),
    c = n(700875);
function u(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: u, variant: d = "default", layout: f, initialize: p } = t,
        _ = n(),
        m = null == u ? void 0 : u(),
        h = i.useId(),
        g = null != m && "" !== m;
    return (
        (0, l.D)(p),
        (0, r.jsxs)("fieldset", {
            "aria-describedby": g ? h : void 0,
            children: [
                (0, r.jsxs)("div", {
                    className: c.header,
                    children: [
                        (0, r.jsx)(a.Text, {
                            tag: "legend",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            className: c.title,
                            children: _,
                        }),
                        g
                            ? (0, r.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-default",
                                  id: h,
                                  className: c.subtitle,
                                  children: m,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(a.Kqy, {
                    direction: "vertical",
                    gap: 8,
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
