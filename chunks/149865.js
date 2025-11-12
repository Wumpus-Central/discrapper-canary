n.d(t, { Z: () => c });
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(700875);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: c, variant: s = "default" } = t,
        u = t.layout.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        d = n(),
        f = null == c ? void 0 : c(),
        b = l.useId(),
        p = null != f && "" !== f;
    return (0, r.jsxs)("fieldset", {
        "aria-describedby": p ? b : void 0,
        children: [
            (0, r.jsx)(o.Text, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "header-primary",
                className: a.title,
                children: d,
            }),
            p
                ? (0, r.jsx)(o.Text, {
                      variant: "text-sm/normal",
                      color: "header-secondary",
                      id: b,
                      className: a.subtitle,
                      children: f,
                  })
                : null,
            (0, r.jsx)(o.Kqy, {
                direction: "vertical",
                gap: 8,
                children: u.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(i.Z, { node: e }),
                                "separators" === s && t !== u.length - 1 && (0, r.jsx)(o.izJ, { className: a.divider }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
});
