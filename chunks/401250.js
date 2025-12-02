n.d(t, { W: () => o });
var r = n(54381),
    i = n(657707),
    a = n(206403);
function o(e) {
    var t, n;
    let { node: o } = e;
    return (0, r.jsx)(a.x, {
        title:
            "useTitle" in o
                ? "[PLACEHOLDER] ".concat(null == (t = o.useTitle) ? void 0 : t.call(o, !1))
                : "[PLACEHOLDER]",
        description: "useSubtitle" in o ? (null == (n = o.useSubtitle) ? void 0 : n.call(o)) : "",
        secondaryTrailingElement: (0, r.jsx)(i.tEQ, {}),
    });
}
