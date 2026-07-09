n.d(t, { A: () => v });
var l = n(627968),
    i = n(64700),
    r = n(843282),
    s = n(990078),
    a = n(834730),
    d = n(191023),
    c = n(428678),
    u = n(39623),
    o = n(873298),
    x = n(321476);
function m(e) {
    let { redactionType: t, label: n } = e,
        r = i.useMemo(() => {
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
    return (0, l.jsxs)("div", {
        className: x.q,
        children: [
            null != r && (0, l.jsx)(r, { size: "xs", color: "currentColor" }),
            (0, l.jsx)(a.E, { variant: "text-md/normal", color: "text-default", children: n }),
        ],
    });
}
let h = i.memo(function (e) {
    let { option: t } = e;
    return (0, l.jsx)(m, { redactionType: t.value, label: t.label });
});
var j = n(685894);
function f(e) {
    let { title: t, value: n, onChange: i, options: s, isDisabled: d = !1 } = e;
    return (0, l.jsxs)("div", {
        className: j.ar,
        children: [
            (0, l.jsx)(a.E, {
                variant: "text-md/medium",
                color: d ? "text-muted" : "text-strong",
                className: j.DD,
                children: t,
            }),
            (0, l.jsx)(r.Te, {
                variant: "text-only",
                className: j.Lt,
                options: s,
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
    return (0, l.jsx)(s.m, { text: t, asContainer: !0, children: (0, l.jsx)(f, { ...n }) });
}
function v(e) {
    return "tooltipText" in e && null != e.tooltipText ? (0, l.jsx)(g, { ...e }) : (0, l.jsx)(f, { ...e });
}
