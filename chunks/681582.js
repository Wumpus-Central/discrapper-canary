n.d(t, { l: () => c });
var r = n(477900),
    i = n(582128),
    l = n(776310),
    s = n(17928),
    o = n(309010),
    a = n(21161),
    d = n(536283),
    u = n(920822);
function c(e) {
    let { children: t } = e,
        [n, c] = i.useState(null),
        [h, f] = i.useState(null),
        g = i.useRef(void 0),
        m = i.useRef(new Set()),
        [p, A] = i.useState(!1),
        y = (0, s.bG)([o.Ay], () => o.Ay.getCurrentlySelectedChannelId()),
        v = i.useCallback((e) => {
            (m.current.delete(e), A(m.current.size > 0));
        }, []),
        w = i.useCallback((e) => (m.current.add(e), A(!0), () => v(e)), [v]),
        x = i.useCallback((e, t) => {
            for (let n of m.current) n(e, t);
        }, []);
    i.useEffect(() => {
        h?.clearConfetti();
    }, [h, y]);
    let E = i.useCallback((e) => {
            (window.clearTimeout(g.current),
                (g.current = window.setTimeout(() => {
                    ((e.width = 0), (e.height = 0));
                }, 1e4)));
        }, []),
        C = i.useCallback((e) => {
            window.clearTimeout(g.current);
            let t = e.canvas;
            if (0 === t.width && 0 === t.height) {
                let { width: e, height: n } = t.getBoundingClientRect();
                ((t.width = e * window.devicePixelRatio), (t.height = n * window.devicePixelRatio));
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
                    (t.disconnect(), window.clearTimeout(g.current));
                }
            );
        }, [h, E]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(a.k, {
                    confettiCanvas: h,
                    spriteCanvas: n,
                    baseConfig: d.Mw,
                    addClickListener: w,
                    removeClickListener: v,
                    children: t,
                }),
                (0, r.jsx)(l.Fk, {
                    ref: f,
                    className: u.J,
                    environment: d.XA,
                    onClick: p ? x : void 0,
                    onBeforeRender: C,
                    onAfterRender: b,
                }),
                (0, r.jsx)(l.K_, { ref: c, colors: d._t, sprites: d.uI, spriteWidth: d.wn, spriteHeight: d.wn }),
            ],
        })
    );
}
