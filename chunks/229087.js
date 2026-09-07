n.d(t, { A: () => u });
var i = n(477900),
    l = n(834730),
    s = n(866665),
    r = n(939249),
    a = n(789645),
    o = n(753437),
    c = n(375708),
    d = n(382701);
function u(e) {
    let { tag: t, variant: n = "default", onRemove: u, className: g, ref: m } = e,
        x = (0, o.W3)(t);
    if (null == x) return null;
    let { getText: f, icon: h } = x,
        p = "filled" === n;
    return (0, i.jsxs)("li", {
        className: g ?? (p ? d.zE : d.Tc),
        ref: m,
        children: [
            (0, i.jsx)(h, { size: "xxs", color: p ? "currentColor" : void 0 }),
            (0, i.jsx)(l.E, {
                variant: "text-xxs/medium",
                color: p ? "text-overlay-light" : "text-subtle",
                children: f(),
            }),
            null != u &&
                (0, i.jsx)(s.m, {
                    text: c.intl.string(c.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, i.jsx)(r.D, {
                        onClick: u,
                        className: p ? d.to : d.DT,
                        "aria-label": c.intl.formatToPlainString(c.t.GCn1ne, { tag: f() }),
                        children: (0, i.jsx)(a.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
