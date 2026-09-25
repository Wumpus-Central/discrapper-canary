i.d(t, { A: () => u });
var n = i(477900),
    l = i(834730),
    s = i(866665),
    a = i(939249),
    r = i(789645),
    o = i(753437),
    d = i(375708),
    c = i(382701);
function u(e) {
    let { tag: t, variant: i = "default", onRemove: u, className: g, ref: m } = e,
        x = (0, o.W3)(t);
    if (null == x) return null;
    let { getText: f, icon: h } = x,
        p = "filled" === i;
    return (0, n.jsxs)("li", {
        className: g ?? (p ? c.zE : c.Tc),
        ref: m,
        children: [
            (0, n.jsx)(h, { size: "xxs", color: p ? "currentColor" : void 0 }),
            (0, n.jsx)(l.E, {
                variant: "text-xxs/medium",
                color: p ? "text-overlay-light" : "text-subtle",
                children: f(),
            }),
            null != u &&
                (0, n.jsx)(s.m, {
                    text: d.intl.string(d.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, n.jsx)(a.D, {
                        onClick: u,
                        className: p ? c.to : c.DT,
                        "aria-label": d.intl.formatToPlainString(d.t.GCn1ne, { tag: f() }),
                        children: (0, n.jsx)(r.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
