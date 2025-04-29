n.d(t, { Z: () => l });
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(532145);
let l = (e) => {
    let { src: t, alt: n, size: o, 'aria-label': l, className: c } = e,
        u = i.useRef(null),
        d = i.useRef(!1),
        f = d.current ? s.image : s.imageLoading;
    return (0, r.jsx)('img', {
        className: a()(f, c),
        alt: n,
        src: t,
        ref: u,
        'aria-label': l,
        style: {
            backgroundSize: o,
            height: o,
            width: o
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
