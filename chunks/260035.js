r.d(n, {
    m: function () {
        return p;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(119617),
    l = r(442837),
    u = r(944486),
    c = r(745510),
    d = r(675654),
    f = r(839524);
function p(e) {
    let { children: n } = e,
        [r, i] = o.useState(null),
        [p, h] = o.useState(null),
        _ = o.useRef(new Set()),
        [m, g] = o.useState(!1),
        E = (0, l.e7)([u.Z], () => u.Z.getCurrentlySelectedChannelId()),
        v = o.useCallback((e) => {
            _.current.delete(e), g(_.current.size > 0);
        }, []),
        y = o.useCallback((e) => (_.current.add(e), g(!0), () => v(e)), [v]),
        b = o.useCallback((e, n) => {
            for (let r of _.current) r(e, n);
        }, []);
    return (
        o.useEffect(() => {
            null == p || p.clearConfetti();
        }, [p, E]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.d, {
                    confettiCanvas: p,
                    spriteCanvas: r,
                    baseConfig: d.We,
                    addClickListener: y,
                    removeClickListener: v,
                    children: n
                }),
                (0, a.jsx)(s.O_, {
                    ref: h,
                    className: f.canvas,
                    environment: d.rq,
                    onClick: m ? b : void 0
                }),
                (0, a.jsx)(s.Ji, {
                    ref: i,
                    colors: d.Br,
                    sprites: d.CA,
                    spriteWidth: d.Ko,
                    spriteHeight: d.Ko
                })
            ]
        })
    );
}
