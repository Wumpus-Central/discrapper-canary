"use strict";
n.d(t, { r: () => d });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(834730),
    o = n(537624);
function d(e) {
    let { children: t, className: n, style: a } = e,
        d = r.useRef(null),
        c = r.useRef(null),
        [u, _] = r.useState(null);
    return (
        r.useLayoutEffect(() => {
            !(function () {
                let e = d.current,
                    t = c.current;
                if (null == e || null == t) return;
                let n = t.scrollWidth - e.clientWidth;
                _(n > 0 ? n : null);
            })();
        }, [t]),
        (0, i.jsx)("div", {
            ref: d,
            className: s()(o.kL, n),
            "data-marquee-overflow": null != u,
            style: a,
            children: (0, i.jsx)(l.E, {
                variant: "text-sm/medium",
                color: "none",
                tag: "span",
                ref: c,
                className: o.Qq,
                style: null != u ? { "--custom-marquee-overflow": `${u}px` } : void 0,
                children: t,
            }),
        })
    );
}
