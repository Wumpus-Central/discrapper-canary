n.d(t, { m: () => d }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(921254),
    o = n(442837),
    s = n(944486),
    l = n(745510),
    c = n(675654),
    u = n(213170);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [f, p] = i.useState(null),
        _ = i.useRef(new Set()),
        [m, h] = i.useState(!1),
        g = (0, o.e7)([s.Z], () => s.Z.getCurrentlySelectedChannelId()),
        E = i.useCallback((e) => {
            _.current.delete(e), h(_.current.size > 0);
        }, []),
        b = i.useCallback((e) => (_.current.add(e), h(!0), () => E(e)), [E]),
        y = i.useCallback((e, t) => {
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
                    addClickListener: b,
                    removeClickListener: E,
                    children: t,
                }),
                (0, r.jsx)(a.O_, {
                    ref: p,
                    className: u.canvas,
                    environment: c.rq,
                    onClick: m ? y : void 0,
                }),
                (0, r.jsx)(a.Ji, {
                    ref: d,
                    colors: c.Br,
                    sprites: c.CA,
                    spriteWidth: c.Ko,
                    spriteHeight: c.Ko,
                }),
            ],
        })
    );
}
