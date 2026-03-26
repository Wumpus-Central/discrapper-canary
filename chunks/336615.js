"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(90954);
let l = (e) => {
    let { src: t, alt: n, size: s, "aria-label": l, className: u } = e,
        c = i.useRef(null),
        d = i.useRef(!1),
        _ = d.current ? o.S : o.Y;
    return (0, r.jsx)("img", {
        className: a()(_, u),
        alt: n,
        src: t,
        ref: c,
        "aria-label": l,
        style: { backgroundSize: s, height: s, width: s },
        onLoad: d.current
            ? void 0
            : (e) => {
                  (e.currentTarget?.ownerDocument?.defaultView ?? window).requestAnimationFrame(() => {
                      null != c.current &&
                          ((d.current = !0), c.current.classList.remove(o.Y), c.current.classList.add(o.S));
                  });
              },
    });
};
