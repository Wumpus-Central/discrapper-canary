var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(38068),
    u = r(388032),
    c = r(980456);
n.Z = a.forwardRef(function (e, n) {
    let { className: r, contentClassName: a, isUnread: s, children: d, id: f, role: _, 'aria-label': h } = e;
    return (0, i.jsxs)('div', {
        className: o()(r, {
            [c.divider]: !0,
            [c.isUnread]: s,
            [c.hasContent]: null != d
        }),
        ref: n,
        id: f,
        role: _,
        'aria-label': h,
        children: [
            null != d
                ? (0, i.jsx)('span', {
                      className: o()(c.content, a),
                      children: d
                  })
                : null,
            s
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
