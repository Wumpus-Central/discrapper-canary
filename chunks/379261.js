n.d(t, { r: () => c });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(535185),
    o = n(834730),
    d = n(869431);
function c(e) {
    let { children: t, className: n, style: a, variant: c = "text-sm/medium" } = e,
        u = r.useRef(null),
        _ = r.useRef(null),
        [E, A] = r.useState(null),
        h = r.useCallback(() => {
            let e = u.current,
                t = _.current;
            if (null == e || null == t) return;
            let n = t.scrollWidth - e.clientWidth;
            A(n > 0 ? n : null);
        }, []);
    return (
        (0, l.g)(u, h, [t]),
        (0, i.jsx)("div", {
            ref: u,
            className: s()(d.kL, n),
            "data-marquee-overflow": null != E,
            style: a,
            children: (0, i.jsx)(o.E, {
                variant: c,
                color: "none",
                tag: "span",
                ref: _,
                className: d.Qq,
                style:
                    null != E
                        ? {
                              "--custom-marquee-overflow": `${E}px`,
                              "--custom-marquee-duration": `${Math.min(5, Math.max(2, E / 40))}s`,
                          }
                        : void 0,
                children: t,
            }),
        })
    );
}
