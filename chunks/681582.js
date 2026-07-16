n.d(t, { l: () => d });
var r = n(627968),
    i = n(64700),
    s = n(106778),
    o = n(17928),
    l = n(309010),
    a = n(21161),
    c = n(536283),
    u = n(64684);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [h, f] = i.useState(null),
        p = i.useRef(new Set()),
        [m, g] = i.useState(!1),
        A = (0, o.bG)([l.Ay], () => l.Ay.getCurrentlySelectedChannelId()),
        y = i.useCallback((e) => {
            p.current.delete(e), g(p.current.size > 0);
        }, []),
        v = i.useCallback((e) => (p.current.add(e), g(!0), () => y(e)), [y]),
        x = i.useCallback((e, t) => {
            for (let n of p.current) n(e, t);
        }, []);
    return (
        i.useEffect(() => {
            h?.clearConfetti();
        }, [h, A]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.k, {
                    confettiCanvas: h,
                    spriteCanvas: n,
                    baseConfig: c.Mw,
                    addClickListener: v,
                    removeClickListener: y,
                    children: t,
                }),
                (0, r.jsx)(s.Fk, { ref: f, className: u.J, environment: c.XA, onClick: m ? x : void 0 }),
                (0, r.jsx)(s.K_, { ref: d, colors: c._t, sprites: c.uI, spriteWidth: c.wn, spriteHeight: c.wn }),
            ],
        })
    );
}
