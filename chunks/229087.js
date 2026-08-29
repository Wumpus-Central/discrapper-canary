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
    let { tag: t, variant: n = "default", onRemove: u, className: g, removeButtonClassName: m, ref: x } = e,
        f = (0, o.W3)(t);
    if (null == f) return null;
    let { getText: h, icon: p } = f,
        I = "filled" === n;
    return (0, i.jsxs)("li", {
        className: g ?? (I ? d.zE : d.Tc),
        ref: x,
        children: [
            (0, i.jsx)(p, { size: "xxs", color: I ? "currentColor" : void 0 }),
            (0, i.jsx)(l.E, {
                variant: "text-xxs/medium",
                color: I ? "text-overlay-light" : "text-subtle",
                children: h(),
            }),
            null != u &&
                (0, i.jsx)(s.m, {
                    text: c.intl.string(c.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, i.jsx)(r.D, {
                        onClick: u,
                        className: m ?? (I ? d.to : d.DT),
                        "aria-label": c.intl.formatToPlainString(c.t.GCn1ne, { tag: h() }),
                        children: (0, i.jsx)(a.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
