n.d(t, { Z: () => c });
var r = n(951288),
    l = n(647438),
    o = n(481060),
    i = n(36361),
    a = n(337030);
let c = l.memo(function (e) {
    let { node: t } = e,
        { useTitle: n } = t,
        c = t.layout.filter((e) => {
            var t, n;
            return null == (n = null == (t = e.usePredicate) ? void 0 : t.call(e)) || n;
        }),
        s = n();
    return (0, r.jsxs)("fieldset", {
        children: [
            (0, r.jsx)(o.Text, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "header-primary",
                className: a.title,
                children: s,
            }),
            (0, r.jsx)(o.Kqy, {
                direction: "vertical",
                gap: 8,
                children: c.map((e, t) =>
                    (0, r.jsxs)(
                        l.Fragment,
                        {
                            children: [
                                (0, r.jsx)(i.Z, { node: e }),
                                t !== c.length - 1 && (0, r.jsx)(o.izJ, { className: a.divider }),
                            ],
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
});
