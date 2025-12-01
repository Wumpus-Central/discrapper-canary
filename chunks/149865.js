n.d(t, { Z: () => c });
var r = n(54381),
    l = n(473749),
    i = n(481060),
    o = n(36361),
    a = n(111161),
    s = n(700875);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: c, variant: u = "default", ContextProvider: d } = t,
        f = t.layout.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        p = n(),
        b = null == c ? void 0 : c(),
        y = l.useId(),
        g = null != b && "" !== b,
        v = null != d ? d : l.Fragment;
    return (0, r.jsx)(v, {
        children: (0, r.jsxs)("fieldset", {
            "aria-describedby": g ? y : void 0,
            children: [
                (0, r.jsxs)("div", {
                    className: s.header,
                    children: [
                        (0, r.jsx)(i.Text, {
                            tag: "legend",
                            variant: "text-md/semibold",
                            color: "header-primary",
                            className: s.title,
                            children: p,
                        }),
                        g
                            ? (0, r.jsx)(i.Text, {
                                  variant: "text-sm/normal",
                                  color: "header-secondary",
                                  id: y,
                                  className: s.subtitle,
                                  children: b,
                              })
                            : null,
                    ],
                }),
                (0, r.jsx)(i.Kqy, {
                    direction: "vertical",
                    gap: 8,
                    children: f.map((e, t) =>
                        (0, r.jsxs)(
                            l.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(o.Z, { node: e }),
                                    "separators" === u && t !== f.length - 1 && (0, r.jsx)(a.Z, {}),
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
