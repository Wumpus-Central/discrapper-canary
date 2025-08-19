n.d(t, { W: () => r });
var i = n(951288),
    l = n(657707),
    o = n(206403);
function r(e) {
    var t, n;
    let { node: r } = e;
    return (0, i.jsx)(o.x, {
        title:
            "useTitle" in r
                ? "[PLACEHOLDER] ".concat(null == (t = r.useTitle) ? void 0 : t.call(r, !1))
                : "[PLACEHOLDER]",
        description: "useSubtitle" in r ? (null == (n = r.useSubtitle) ? void 0 : n.call(r)) : "",
        secondaryTrailingElement: (0, i.jsx)(l.tEQ, {}),
    });
}
