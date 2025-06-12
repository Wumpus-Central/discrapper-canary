n.d(t, { Z: () => l });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(532145);
let l = (e) => {
    let { src: t, alt: n, size: a, 'aria-label': l, className: c } = e,
        u = i.useRef(null),
        d = i.useRef(!1),
        _ = d.current ? s.image : s.imageLoading;
    return (0, r.jsx)('img', {
        className: o()(_, c),
        alt: n,
        src: t,
        ref: u,
        'aria-label': l,
        style: {
            backgroundSize: a,
            height: a,
            width: a
        },
        onLoad: d.current
            ? void 0
            : (e) => {
                  var t, n, r;
                  (null != (r = null == (n = e.currentTarget) || null == (t = n.ownerDocument) ? void 0 : t.defaultView) ? r : window).requestAnimationFrame(() => {
                      null != u.current && ((d.current = !0), u.current.classList.remove(s.imageLoading), u.current.classList.add(s.image));
                  });
              }
    });
};
