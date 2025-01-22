var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(38068),
    u = r(388032),
    c = r(980456);
n.Z = a.forwardRef(function (e, n) {
    let { className: r, contentClassName: a, isUnread: o, children: d, id: f, role: p, 'aria-label': h } = e;
    return (0, i.jsxs)('div', {
        className: s()(r, {
            [c.divider]: !0,
            [c.isUnread]: o,
            [c.hasContent]: null != d
        }),
        ref: n,
        id: f,
        role: p,
        'aria-label': h,
        children: [
            null != d
                ? (0, i.jsx)('span', {
                      className: s()(c.content, a),
                      children: d
                  })
                : null,
            o
                ? (0, i.jsxs)('span', {
                      className: c.unreadPill,
                      children: [
                          (0, i.jsx)(l.Z, {
                              foreground: c.unreadPillCapStroke,
                              className: c.unreadPillCap
                          }),
                          u.intl.string(u.t.y2b7CA)
                      ]
                  })
                : null
        ]
    });
});
