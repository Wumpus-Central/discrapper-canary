n.d(t, { Z: () => l });
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(532145);
let l = (e) => {
    let { src: t, alt: n, size: a, 'aria-label': l, className: c } = e,
        u = i.useRef(null),
        d = i.useRef(!1),
        f = d.current ? s.image : s.imageLoading;
    return (0, r.jsx)('img', {
        className: o()(f, c),
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
            : () => {
                  window.requestAnimationFrame(() => {
                      null != u.current && ((d.current = !0), u.current.classList.remove(s.imageLoading), u.current.classList.add(s.image));
                  });
              }
    });
};
