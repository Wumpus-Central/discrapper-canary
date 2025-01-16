r.d(n, {
    m: function () {
        return _;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(119617),
    l = r(442837),
    u = r(944486),
    c = r(745510),
    d = r(675654),
    f = r(839524);
function _(e) {
    let { children: n } = e,
        [r, i] = s.useState(null),
        [_, h] = s.useState(null),
        p = s.useRef(new Set()),
        [m, g] = s.useState(!1),
        E = (0, l.e7)([u.Z], () => u.Z.getCurrentlySelectedChannelId()),
        v = s.useCallback((e) => {
            p.current.delete(e), g(p.current.size > 0);
        }, []),
        I = s.useCallback((e) => (p.current.add(e), g(!0), () => v(e)), [v]),
        T = s.useCallback((e, n) => {
            for (let r of p.current) r(e, n);
        }, []);
    return (
        s.useEffect(() => {
            null == _ || _.clearConfetti();
        }, [_, E]),
        (0, a.jsxs)(a.Fragment, {
            children: [
                (0, a.jsx)(c.d, {
                    confettiCanvas: _,
                    spriteCanvas: r,
                    baseConfig: d.We,
                    addClickListener: I,
                    removeClickListener: v,
                    children: n
                }),
                (0, a.jsx)(o.O_, {
                    ref: h,
                    className: f.canvas,
                    environment: d.rq,
                    onClick: m ? T : void 0
                }),
                (0, a.jsx)(o.Ji, {
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
