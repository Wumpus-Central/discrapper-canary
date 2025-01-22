var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(866609);
let u = (e) => {
    let { src: n, alt: r, size: o, 'aria-label': u, className: c } = e,
        d = a.useRef(null),
        f = a.useRef(!1),
        p = f.current ? l.image : l.imageLoading;
    return (0, i.jsx)('img', {
        className: s()(p, c),
        alt: r,
        src: n,
        ref: d,
        'aria-label': u,
        style: {
            backgroundSize: o,
            height: o,
            width: o
        },
        onLoad: f.current
            ? void 0
            : () => {
                  window.requestAnimationFrame(() => {
                      null != d.current && ((f.current = !0), d.current.classList.remove(l.imageLoading), d.current.classList.add(l.image));
                  });
              }
    });
};
n.Z = u;
