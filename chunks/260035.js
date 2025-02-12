n.d(t, { m: () => d }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(119617),
    s = n(442837),
    o = n(944486),
    l = n(745510),
    u = n(675654),
    c = n(200747);
function d(e) {
    let { children: t } = e,
        [n, d] = r.useState(null),
        [f, _] = r.useState(null),
        p = r.useRef(new Set()),
        [h, m] = r.useState(!1),
        g = (0, s.e7)([o.Z], () => o.Z.getCurrentlySelectedChannelId()),
        E = r.useCallback((e) => {
            p.current.delete(e), m(p.current.size > 0);
        }, []),
        v = r.useCallback((e) => (p.current.add(e), m(!0), () => E(e)), [E]),
        y = r.useCallback((e, t) => {
            for (let n of p.current) n(e, t);
        }, []);
    return (
        r.useEffect(() => {
            null == f || f.clearConfetti();
        }, [f, g]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.d, {
                    confettiCanvas: f,
                    spriteCanvas: n,
                    baseConfig: u.We,
                    addClickListener: v,
                    removeClickListener: E,
                    children: t
                }),
                (0, i.jsx)(a.O_, {
                    ref: _,
                    className: c.canvas,
                    environment: u.rq,
                    onClick: h ? y : void 0
                }),
                (0, i.jsx)(a.Ji, {
                    ref: d,
                    colors: u.Br,
                    sprites: u.CA,
                    spriteWidth: u.Ko,
                    spriteHeight: u.Ko
                })
            ]
        })
    );
}
