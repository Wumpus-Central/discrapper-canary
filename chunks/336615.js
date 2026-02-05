"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(742947);
let l = (e) => {
    let { src: t, alt: n, size: a, "aria-label": l, className: u } = e,
        c = i.useRef(null),
        d = i.useRef(!1),
        _ = d.current ? o.S : o.Y;
    return (0, r.jsx)("img", {
        className: s()(_, u),
        alt: n,
        src: t,
        ref: c,
        "aria-label": l,
        style: { backgroundSize: a, height: a, width: a },
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
