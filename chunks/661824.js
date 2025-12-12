n.d(t, { Z: () => u });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(38068),
    l = n(388032),
    c = n(1147);
let u = i.forwardRef(function (e, t) {
    let { className: n, contentClassName: i, isUnread: a, children: u, id: d, role: f, "aria-label": p } = e;
    return (0, r.jsxs)("div", {
        className: o()(n, {
            [c.divider]: !0,
            [c.isUnread]: a,
            [c.hasContent]: null != u,
        }),
        ref: t,
        id: d,
        role: f,
        "aria-label": p,
        children: [
            null != u
                ? (0, r.jsx)("span", {
                      className: o()(c.content, i),
                      children: u,
                  })
                : null,
            a
                ? (0, r.jsxs)("span", {
                      className: c.unreadPill,
                      children: [
                          (0, r.jsx)(s.Z, {
                              foreground: c.unreadPillCapStroke,
                              className: c.unreadPillCap,
                          }),
                          l.intl.string(l.t.y2b7CA),
                      ],
                  })
                : null,
        ],
    });
});
