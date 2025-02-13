n.d(t, { Z: () => l });
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(55894);
let l = (e) => {
    let { src: t, alt: n, size: a, 'aria-label': l, className: u } = e,
        c = r.useRef(null),
        d = r.useRef(!1),
        f = d.current ? o.image : o.imageLoading;
    return (0, i.jsx)('img', {
        className: s()(f, u),
        alt: n,
        src: t,
        ref: c,
        'aria-label': l,
        style: {
            backgroundSize: a,
            height: a,
            width: a
        },
        onLoad: d.current
            ? void 0
            : () => {
                  window.requestAnimationFrame(() => {
                      null != c.current && ((d.current = !0), c.current.classList.remove(o.imageLoading), c.current.classList.add(o.image));
                  });
              }
    });
};
