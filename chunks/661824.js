n.d(t, { Z: () => c });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(38068),
    l = n(388032),
    u = n(208555);
let c = r.forwardRef(function (e, t) {
    let { className: n, contentClassName: r, isUnread: a, children: c, id: d, role: f, 'aria-label': _ } = e;
    return (0, i.jsxs)('div', {
        className: s()(n, {
            [u.divider]: !0,
            [u.isUnread]: a,
            [u.hasContent]: null != c
        }),
        ref: t,
        id: d,
        role: f,
        'aria-label': _,
        children: [
            null != c
                ? (0, i.jsx)('span', {
                      className: s()(u.content, r),
                      children: c
                  })
                : null,
            a
                ? (0, i.jsxs)('span', {
                      className: u.unreadPill,
                      children: [
                          (0, i.jsx)(o.Z, {
                              foreground: u.unreadPillCapStroke,
                              className: u.unreadPillCap
                          }),
                          l.intl.string(l.t.y2b7CA)
                      ]
                  })
                : null
        ]
    });
});
