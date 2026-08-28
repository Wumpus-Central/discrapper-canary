n.d(t, { l: () => u });
var r = n(477900),
    i = n(582128),
    s = n(776310),
    o = n(17928),
    l = n(309010),
    a = n(21161),
    c = n(536283),
    d = n(920822);
function u(e) {
    let { children: t } = e,
        [n, u] = i.useState(null),
        [h, f] = i.useState(null),
        g = i.useRef(void 0),
        p = i.useRef(new Set()),
        [m, A] = i.useState(!1),
        v = (0, o.bG)([l.Ay], () => l.Ay.getCurrentlySelectedChannelId()),
        y = i.useCallback((e) => {
            p.current.delete(e), A(p.current.size > 0);
        }, []),
        x = i.useCallback((e) => (p.current.add(e), A(!0), () => y(e)), [y]),
        w = i.useCallback((e, t) => {
            for (let n of p.current) n(e, t);
        }, []);
    i.useEffect(() => {
        h?.clearConfetti();
    }, [h, v]);
    let E = i.useCallback((e) => {
            window.clearTimeout(g.current),
                (g.current = window.setTimeout(() => {
                    (e.width = 0), (e.height = 0);
                }, 1e4));
        }, []),
        C = i.useCallback((e) => {
            window.clearTimeout(g.current);
            let t = e.canvas;
            if (0 === t.width && 0 === t.height) {
                let { width: e, height: n } = t.getBoundingClientRect();
                (t.width = e * window.devicePixelRatio), (t.height = n * window.devicePixelRatio);
            }
        }, []),
        b = i.useCallback(
            (e) => {
                E(e.canvas);
            },
            [E],
        );
    return (
        i.useEffect(() => {
            let e = h?.getCanvas();
            if (null == e) return;
            let t = new ResizeObserver(() => E(e));
            return (
                t.observe(e),
                () => {
                    t.disconnect(), window.clearTimeout(g.current);
                }
            );
        }, [h, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.k, {
                    confettiCanvas: h,
                    spriteCanvas: n,
                    baseConfig: c.Mw,
                    addClickListener: x,
                    removeClickListener: y,
                    children: t,
                }),
                (0, r.jsx)(s.Fk, {
                    ref: f,
                    className: d.J,
                    environment: c.XA,
                    onClick: m ? w : void 0,
                    onBeforeRender: C,
                    onAfterRender: b,
                }),
                (0, r.jsx)(s.K_, { ref: u, colors: c._t, sprites: c.uI, spriteWidth: c.wn, spriteHeight: c.wn }),
            ],
        })
    );
}
