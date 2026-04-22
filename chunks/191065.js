n.d(t, { A: () => u });
var l = n(627968),
    s = n(64700),
    a = n(827734),
    r = n(885574),
    i = n(834730),
    o = n(870788);
let u = s.forwardRef(function (e, t) {
    let { isInventory: n, style: s, children: u } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: o.Q,
        style: { marginTop: 8 * !!n, ...s },
        children: [
            (0, l.jsx)(r.m, {
                size: "custom",
                className: o.G,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? a.A.colors.TEXT_MUTED.css : a.A.colors.WHITE.css,
            }),
            (0, l.jsx)(i.E, {
                color: n ? "text-muted" : "always-white",
                variant: n ? "text-xs/normal" : "text-xxs/normal",
                children: u,
            }),
        ],
    });
});
