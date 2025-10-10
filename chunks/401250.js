n.d(t, { W: () => i });
var r = n(951288),
    l = n(657707),
    o = n(206403);
function i(e) {
    var t, n;
    let { node: i } = e;
    return (0, r.jsx)(o.x, {
        title:
            "useTitle" in i
                ? "[PLACEHOLDER] ".concat(null == (t = i.useTitle) ? void 0 : t.call(i, !1))
                : "[PLACEHOLDER]",
        description: "useSubtitle" in i ? (null == (n = i.useSubtitle) ? void 0 : n.call(i)) : "",
        secondaryTrailingElement: (0, r.jsx)(l.tEQ, {}),
    });
}
