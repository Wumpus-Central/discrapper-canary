n.d(t, { A: () => u });
var i = n(477900),
    l = n(834730),
    a = n(866665),
    s = n(939249),
    r = n(789645),
    d = n(753437),
    o = n(375708),
    c = n(382701);
function u(e) {
    let { tag: t, variant: n = "default", onRemove: u, className: m, ref: g } = e,
        x = (0, d.W3)(t);
    if (null == x) return null;
    let { getText: f, icon: h } = x,
        p = "filled" === n;
    return (0, i.jsxs)("li", {
        className: m ?? (p ? c.zE : c.Tc),
        ref: g,
        children: [
            (0, i.jsx)(h, { size: "xxs", color: p ? "currentColor" : void 0 }),
            (0, i.jsx)(l.E, {
                variant: "text-xxs/medium",
                color: p ? "text-overlay-light" : "text-subtle",
                children: f(),
            }),
            null != u &&
                (0, i.jsx)(a.m, {
                    text: o.intl.string(o.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, i.jsx)(s.D, {
                        onClick: u,
                        className: p ? c.to : c.DT,
                        "aria-label": o.intl.formatToPlainString(o.t.GCn1ne, { tag: f() }),
                        children: (0, i.jsx)(r.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
