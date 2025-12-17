n.d(t, { Z: () => u });
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(28664),
    s = n(826298),
    c = n(276140);
let u = r.memo(function (e) {
    var t;
    let { className: n, channel: r, section: l } = e,
        u = null != l ? (0, s.ky)(l) : null,
        d =
            null != u
                ? (0, i.jsx)(o.u, {
                      __unsupportedReactNodeAsText: null != (t = null == l ? void 0 : l.name) ? t : "",
                      position: "top",
                      children: (0, i.jsx)(u, {
                          channel: r,
                          section: l,
                          width: 24,
                          height: 24,
                      }),
                  })
                : null;
    return (0, i.jsx)("div", {
        className: a()(n, c.wrapper),
        children: (0, i.jsx)("div", {
            className: c.icon,
            children: d,
        }),
    });
});
