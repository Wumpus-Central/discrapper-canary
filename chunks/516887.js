n.d(t, { Z: () => u });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(28664),
    s = n(826298),
    c = n(688919);
let u = i.memo(function (e) {
    var t;
    let { className: n, channel: i, section: l } = e,
        u = null != l ? (0, s.ky)(l) : null,
        d =
            null != u
                ? (0, r.jsx)(o.u, {
                      __unsupportedReactNodeAsText: null != (t = null == l ? void 0 : l.name) ? t : "",
                      position: "top",
                      children: (0, r.jsx)(u, {
                          channel: i,
                          section: l,
                          width: 24,
                          height: 24,
                      }),
                  })
                : null;
    return (0, r.jsx)("div", {
        className: a()(n, c.wrapper),
        children: (0, r.jsx)("div", {
            className: c.icon,
            children: d,
        }),
    });
});
