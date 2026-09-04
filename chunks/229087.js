n.d(t, { A: () => c });
var i = n(477900),
    l = n(834730),
    s = n(866665),
    r = n(939249),
    a = n(789645),
    o = n(753437),
    d = n(375708),
    u = n(382701);
function c(e) {
    let { tag: t, variant: n = "default", onRemove: c, className: g, ref: m } = e,
        f = (0, o.W3)(t);
    if (null == f) return null;
    let { getText: x, icon: h } = f,
        I = "filled" === n;
    return (0, i.jsxs)("li", {
        className: g ?? (I ? u.zE : u.Tc),
        ref: m,
        children: [
            (0, i.jsx)(h, { size: "xxs", color: I ? "currentColor" : void 0 }),
            (0, i.jsx)(l.E, {
                variant: "text-xxs/medium",
                color: I ? "text-overlay-light" : "text-subtle",
                children: x(),
            }),
            null != c &&
                (0, i.jsx)(s.m, {
                    text: d.intl.string(d.t.Otv9fP),
                    ariaHidden: !0,
                    children: (0, i.jsx)(r.D, {
                        onClick: c,
                        className: I ? u.to : u.DT,
                        "aria-label": d.intl.formatToPlainString(d.t.GCn1ne, { tag: x() }),
                        children: (0, i.jsx)(a.P, { size: "xxs", color: "currentColor" }),
                    }),
                }),
        ],
    });
}
