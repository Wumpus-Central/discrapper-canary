n.d(t, { A: () => o });
var l = n(627968),
    s = n(64700),
    a = n(827734),
    i = n(397927),
    r = n(170985);
let o = s.forwardRef(function (e, t) {
    let { isInventory: n, style: s, children: o } = e;
    return (0, l.jsxs)("div", {
        ref: t,
        className: r.Q,
        style: { marginTop: 8 * !!n, ...s },
        children: [
            (0, l.jsx)(i.mir, {
                size: "custom",
                className: r.G,
                height: n ? 16 : 12,
                width: n ? 16 : 12,
                color: n ? a.A.colors.TEXT_MUTED.css : a.A.colors.WHITE.css,
            }),
            (0, l.jsx)(i.Text, {
                color: n ? "text-muted" : "always-white",
                variant: n ? "text-xs/normal" : "text-xxs/normal",
                children: o,
            }),
        ],
    });
});
