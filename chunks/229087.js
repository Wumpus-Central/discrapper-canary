n.d(t, { A: () => u });
var i = n(477900),
    l = n(834730),
    s = n(866665),
    r = n(939249),
    a = n(789645),
    o = n(753437),
    d = n(375708),
    c = n(382701);
function u(e) {
    let { tag: t, variant: n = "default", onRemove: u, className: g, removeButtonClassName: m, ref: x } = e,
        f = (0, o.W3)(t);
    if (null == f) return null;
    let { getText: h, icon: p } = f,
        j = "filled" === n;
    return (0, i.jsxs)("li", {
        className: g ?? (j ? c.zE : c.Tc),
        ref: x,
        children: [
            (0, i.jsx)(p, { size: "xxs", color: j ? "currentColor" : void 0 }),
            (0, i.jsx)(l.E, {
                variant: "text-xxs/medium",
                color: j ? "text-overlay-light" : "text-subtle",
                children: h(),
            }),
            null != u &&
                (0, i.jsx)(s.m, {
                    text: d.intl.string(d.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, i.jsx)(r.D, {
                        onClick: u,
                        className: m ?? (j ? c.to : c.DT),
                        "aria-label": d.intl.formatToPlainString(d.t.GCn1ne, { tag: h() }),
                        children: (0, i.jsx)(a.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
