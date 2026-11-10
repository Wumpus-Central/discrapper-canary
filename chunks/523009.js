n.d(t, { A: () => A });
var l = n(477900),
    i = n(582128),
    r = n(843282),
    s = n(834730),
    a = n(866665),
    d = n(191023),
    c = n(428678),
    o = n(39623),
    u = n(873298),
    m = n(184287);
function x(e) {
    let { redactionType: t, label: n } = e,
        r = i.useMemo(() => {
            switch (t) {
                case u.TO.BLUR:
                    return d.ImageIcon;
                case u.TO.BLOCK:
                    return c.DenyIcon;
                case u.TO.SHOW:
                    return o.EyeIcon;
                default:
                    return null;
            }
        }, [t]);
    return (0, l.jsxs)("div", {
        className: m.q,
        children: [
            null != r && (0, l.jsx)(r, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(s.E, { variant: "body-md/normal", color: "text-default", children: n }),
        ],
    });
}
let h = i.memo(function (e) {
    let { option: t } = e;
    return (0, l.jsx)(x, { redactionType: t.value, label: t.label });
});
var f = n(641685);
function j(e) {
    let { title: t, value: n, onChange: i, options: a, isDisabled: d = !1 } = e;
    return (0, l.jsxs)("div", {
        className: f.ar,
        children: [
            (0, l.jsx)(s.E, {
                variant: "body-md/medium",
                color: d ? "text-muted" : "text-strong",
                className: f.DD,
                children: t,
            }),
            (0, l.jsx)(r.Te, {
                variant: "text-only",
                className: f.Lt,
                options: a,
                value: n,
                onChange: (e) => i(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, l.jsx)(h, { option: t });
                },
                renderOptionLabel: (e) => (0, l.jsx)(h, { option: e }),
                isDisabled: d,
                "data-migration-pending": !0,
            }),
        ],
    });
}
function g(e) {
    let { tooltipText: t, ...n } = e;
    return (0, l.jsx)(a.m, { text: t, asContainer: !0, children: (0, l.jsx)(j, { ...n }) });
}
function A(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, l.jsx)(g, { ...e }) : (0, l.jsx)(j, { ...e });
}
