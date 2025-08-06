n.d(t, { W: () => a });
var i = n(255367),
    o = n(657707),
    l = n(206403);
function a(e) {
    var t, n;
    let { node: a } = e;
    return (0, i.jsx)(l.x, {
        title:
            "useTitle" in a
                ? "[PLACEHOLDER] ".concat(null == (t = a.useTitle) ? void 0 : t.call(a, !1))
                : "[PLACEHOLDER]",
        description: "useSubtitle" in a ? (null == (n = a.useSubtitle) ? void 0 : n.call(a)) : "",
        secondaryTrailingElement: (0, i.jsx)(o.tEQ, {}),
    });
}
