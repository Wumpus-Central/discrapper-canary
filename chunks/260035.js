n.d(t, { m: () => d }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(119617),
    a = n(442837),
    s = n(944486),
    l = n(745510),
    c = n(675654),
    u = n(443657);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [f, p] = i.useState(null),
        _ = i.useRef(new Set()),
        [h, m] = i.useState(!1),
        g = (0, a.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()),
        E = i.useCallback((e) => {
            _.current.delete(e), m(_.current.size > 0);
        }, []),
        v = i.useCallback((e) => (_.current.add(e), m(!0), () => E(e)), [E]),
        b = i.useCallback((e, t) => {
            for (let n of _.current) n(e, t);
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
                    addClickListener: v,
                    removeClickListener: E,
                    children: t
                }),
                (0, r.jsx)(o.O_, {
                    ref: p,
                    className: u.canvas,
                    environment: c.rq,
                    onClick: h ? b : void 0
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
