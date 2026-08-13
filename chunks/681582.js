"use strict";
n.d(t, { l: () => u });
var i = n(477900),
    r = n(582128),
    a = n(776310),
    s = n(17928),
    l = n(309010),
    o = n(21161),
    d = n(536283),
    c = n(517220);
function u(e) {
    let { children: t } = e,
        [n, u] = r.useState(null),
        [_, E] = r.useState(null),
        A = r.useRef(void 0),
        h = r.useRef(new Set()),
        [I, f] = r.useState(!1),
        p = (0, s.bG)([l.Ay], () => l.Ay.getCurrentlySelectedChannelId()),
        T = r.useCallback((e) => {
            h.current.delete(e), f(h.current.size > 0);
        }, []),
        m = r.useCallback((e) => (h.current.add(e), f(!0), () => T(e)), [T]),
        g = r.useCallback((e, t) => {
            for (let n of h.current) n(e, t);
        }, []);
    r.useEffect(() => {
        _?.clearConfetti();
    }, [_, p]);
    let S = r.useCallback((e) => {
            window.clearTimeout(A.current),
                (A.current = window.setTimeout(() => {
                    (e.width = 0), (e.height = 0);
                }, 1e4));
        }, []),
        N = r.useCallback((e) => {
            window.clearTimeout(A.current);
            let t = e.canvas;
            if (0 === t.width && 0 === t.height) {
                let { width: e, height: n } = t.getBoundingClientRect();
                (t.width = e * window.devicePixelRatio), (t.height = n * window.devicePixelRatio);
            }
        }, []),
        C = r.useCallback(
            (e) => {
                S(e.canvas);
            },
            [S],
        );
    return (
        r.useEffect(() => {
            let e = _?.getCanvas();
            if (null == e) return;
            let t = new ResizeObserver(() => S(e));
            return (
                t.observe(e),
                () => {
                    t.disconnect(), window.clearTimeout(A.current);
                }
            );
        }, [_, S]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.k, {
                    confettiCanvas: _,
                    spriteCanvas: n,
                    baseConfig: d.Mw,
                    addClickListener: m,
                    removeClickListener: T,
                    children: t,
                }),
                (0, i.jsx)(a.Fk, {
                    ref: E,
                    className: c.J,
                    environment: d.XA,
                    onClick: I ? g : void 0,
                    onBeforeRender: N,
                    onAfterRender: C,
                }),
                (0, i.jsx)(a.K_, { ref: u, colors: d._t, sprites: d.uI, spriteWidth: d.wn, spriteHeight: d.wn }),
            ],
        })
    );
}
