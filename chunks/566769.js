l.d(t, { A: () => v });
var n = l(627968),
    i = l(64700),
    s = l(843282),
    a = l(990078),
    r = l(834730),
    d = l(191023),
    c = l(428678),
    u = l(39623),
    o = l(873298),
    x = l(26692);
function h(e) {
    let { redactionType: t, label: l } = e,
        s = i.useMemo(() => {
            switch (t) {
                case o.TO.BLUR:
                    return d.x;
                case o.TO.BLOCK:
                    return c.K;
                case o.TO.SHOW:
                    return u.b;
                default:
                    return null;
            }
        }, [t]);
    return (0, n.jsxs)("div", {
        className: x.q,
        children: [
            null != s && (0, n.jsx)(s, { size: "xs", color: "currentColor" }),
            (0, n.jsx)(r.E, { variant: "text-md/normal", color: "text-default", children: l }),
        ],
    });
}
let m = i.memo(function (e) {
    let { option: t } = e;
    return (0, n.jsx)(h, { redactionType: t.value, label: t.label });
});
var j = l(731142);
function g(e) {
    let { title: t, value: l, onChange: i, options: a, isDisabled: d = !1 } = e;
    return (0, n.jsxs)("div", {
        className: j.ar,
        children: [
            (0, n.jsx)(r.E, {
                variant: "text-md/medium",
                color: d ? "text-muted" : "text-strong",
                className: j.DD,
                children: t,
            }),
            (0, n.jsx)(s.Te, {
                variant: "text-only",
                className: j.Lt,
                options: a,
                value: l,
                onChange: (e) => i(e),
                renderOptionValue: (e) => {
                    let [t] = e;
                    return (0, n.jsx)(m, { option: t });
                },
                renderOptionLabel: (e) => (0, n.jsx)(m, { option: e }),
                isDisabled: d,
                "data-migration-pending": !0,
            }),
        ],
    });
}
function f(e) {
    let { tooltipText: t, ...l } = e;
    return (0, n.jsx)(a.m, { text: t, asContainer: !0, children: (0, n.jsx)(g, { ...l }) });
}
function v(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, n.jsx)(f, { ...e }) : (0, n.jsx)(g, { ...e });
}
