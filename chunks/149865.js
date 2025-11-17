n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(700875);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: c, variant: s = "default", ContextProvider: u } = t,
        d = t.layout.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        f = n(),
        b = null == c ? void 0 : c(),
        p = l.useId(),
        y = null != b && "" !== b,
        j = null != u ? u : l.Fragment;
    return (0, r.jsx)(j, {
        children: (0, r.jsxs)("fieldset", {
            "aria-describedby": y ? p : void 0,
            children: [
                (0, r.jsxs)("div", {
                    className: a.header,
                    children: [
                        (0, r.jsx)(i.Text, {
                            tag: "legend",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            className: a.title,
                            children: f,
                        }),
                        y
                            ? (0, r.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  color: "header-secondary",
                                  id: p,
                                  className: a.subtitle,
                                  children: b,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(i.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: d.map((e, t) =>
                        (0, r.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(o.Z, { node: e }),
                                    "separators" === s &&
                                        t !== d.length - 1 &&
                                        (0, r.jsx)(i.izJ, { className: a.divider }),
                                ],
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        }),
    });
});
