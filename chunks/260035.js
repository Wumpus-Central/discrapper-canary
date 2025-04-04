n.d(t, { m: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(48026),
    a = n(442837),
    s = n(944486),
    l = n(745510),
    c = n(675654),
    u = n(232141);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [f, _] = i.useState(null),
        p = i.useRef(new Set()),
        [h, m] = i.useState(!1),
        g = (0, a.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()),
        E = i.useCallback((e) => {
            p.current.delete(e), m(p.current.size > 0);
        }, []),
        b = i.useCallback((e) => (p.current.add(e), m(!0), () => E(e)), [E]),
        y = i.useCallback((e, t) => {
            for (let n of p.current) n(e, t);
        }, []);
    return (
        i.useEffect(() => {
            null == f || f.clearConfetti();
        }, [f, g]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.d, {
                    confettiCanvas: f,
                    spriteCanvas: n,
                    baseConfig: c.We,
                    addClickListener: b,
                    removeClickListener: E,
                    children: t
                }),
                (0, r.jsx)(o.O_, {
                    ref: _,
                    className: u.canvas,
                    environment: c.rq,
                    onClick: h ? y : void 0
                }),
                (0, r.jsx)(o.Ji, {
                    ref: d,
                    colors: c.Br,
                    sprites: c.CA,
                    spriteWidth: c.Ko,
                    spriteHeight: c.Ko
                })
            ]
        })
    );
}
