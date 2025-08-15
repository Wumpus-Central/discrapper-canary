n.d(t, { W: () => o });
var i = n(951288),
    l = n(657707),
    s = n(206403);
function o(e) {
    var t, n;
    let { node: o } = e;
    return (0, i.jsx)(s.x, {
        title:
            "useTitle" in o
                ? "[PLACEHOLDER] ".concat(null == (t = o.useTitle) ? void 0 : t.call(o, !1))
                : "[PLACEHOLDER]",
        description: "useSubtitle" in o ? (null == (n = o.useSubtitle) ? void 0 : n.call(o)) : "",
        secondaryTrailingElement: (0, i.jsx)(l.tEQ, {}),
    });
}
