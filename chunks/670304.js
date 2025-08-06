n.d(t, { Z: () => f }), n(415506);
var i = n(255367),
    o = n(73800),
    l = n(770102),
    r = n(28682),
    a = n(36361),
    s = n(49354);
function c(e) {
    let { node: t } = e,
        n = t.layout.filter((e) => e.type === r.J.PANE);
    if (n.length > 1) throw Error("Panels with multiple nested panes must implement a custom render function.");
    if (1 === n.length) {
        let e = n[0];
        return null != e && null != e.render ? (0, i.jsx)(e.render, {}) : (0, i.jsx)(d, { layout: e.layout });
    }
    return (0, i.jsx)(d, { layout: t.layout });
}
function u(e) {
    let { node: t } = e;
    return null != t.render ? (0, i.jsx)(t.render, {}) : (0, i.jsx)(d, { layout: t.layout });
}
function d(e) {
    let { layout: t } = e;
    return (0, i.jsx)("div", {
        className: s.pane,
        children: t.map((e, n) =>
            (0, i.jsxs)(
                o.Fragment,
                {
                    children: [
                        (0, i.jsx)(a.Z, { node: e }),
                        n !== t.length - 1 && (0, i.jsx)(l.$, { className: s.divider }),
                    ],
                },
                e.key,
            ),
        ),
    });
}
let f = o.memo(function (e) {
    let { node: t } = e;
    return t.type === r.J.PANEL ? (0, i.jsx)(c, { node: t }) : (0, i.jsx)(u, { node: t });
});
