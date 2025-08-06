n.d(t, { Z: () => c }), n(415506);
var i = n(255367),
    o = n(73800),
    l = n(770102),
    a = n(28682),
    r = n(36361),
    s = n(49354);
let c = o.memo(function (e) {
    let { node: t } = e,
        n = t.render;
    if (null != n) return (0, i.jsx)(n, {});
    if (t.layout.some((e) => e.type === a.J.PANE)) throw Error("Panes should only be defined for custom panels.");
    return (0, i.jsx)("div", {
        className: s.pane,
        children: t.layout.map((e, n) =>
            (0, i.jsxs)(
                o.Fragment,
                {
                    children: [
                        (0, i.jsx)(r.Z, { node: e }),
                        n !== t.layout.length - 1 && (0, i.jsx)(l.$, { className: s.divider }),
                    ],
                },
                e.key,
            ),
        ),
    });
});
