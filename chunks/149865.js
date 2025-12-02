n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(36361),
    s = n(111161),
    l = n(700875);
function c(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: c, variant: u = "default", ContextProvider: d } = t,
        f = t.layout.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        p = n(),
        _ = null == c ? void 0 : c(),
        m = i.useId(),
        h = null != _ && "" !== _,
        g = null != d ? d : i.Fragment;
    return (0, r.jsx)(g, {
        children: (0, r.jsxs)("fieldset", {
            "aria-describedby": h ? m : void 0,
            children: [
                (0, r.jsxs)("div", {
                    className: l.header,
                    children: [
                        (0, r.jsx)(a.Text, {
                            tag: "legend",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            className: l.title,
                            children: p,
                        }),
                        h
                            ? (0, r.jsx)(a.Text, {
                                  variant: "text-sm/normal",
                                  color: "header-secondary",
                                  id: m,
                                  className: l.subtitle,
                                  children: _,
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
                                    "separators" === u && t !== f.length - 1 && (0, r.jsx)(s.Z, {}),
                                ],
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        }),
    });
}
let u = i.memo(c);
