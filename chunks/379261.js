"use strict";
n.d(t, { r: () => l });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(883632);
function l(e) {
    let { children: t, className: n, style: s } = e,
        l = r.useRef(null),
        u = r.useRef(null),
        [d, c] = r.useState(null);
    return (
        r.useLayoutEffect(() => {
            !(function () {
                let e = l.current,
                    t = u.current;
                if (null == e || null == t) return;
                let n = t.scrollWidth - e.clientWidth;
                c(n > 0 ? n : null);
            })();
        }, [t]),
        (0, i.jsx)("div", {
            ref: l,
            className: a()(o.kL, n),
            "data-marquee-overflow": null != d,
            style: s,
            children: (0, i.jsx)("span", {
                ref: u,
                className: o.Qq,
                style: null != d ? { "--custom-marquee-overflow": `${d}px` } : void 0,
                children: t,
            }),
        })
    );
}
