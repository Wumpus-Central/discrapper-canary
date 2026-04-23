"use strict";
n.d(t, { l: () => u });
var i = n(627968),
    r = n(64700),
    s = n(106778),
    a = n(17928),
    o = n(309010),
    l = n(21161),
    d = n(851110),
    _ = n(64684);
function u(e) {
    let { children: t } = e,
        [n, u] = r.useState(null),
        [c, E] = r.useState(null),
        h = r.useRef(new Set()),
        [m, f] = r.useState(!1),
        g = (0, a.bG)([o.A], () => o.A.getCurrentlySelectedChannelId()),
        p = r.useCallback((e) => {
            h.current.delete(e), f(h.current.size > 0);
        }, []),
        A = r.useCallback((e) => (h.current.add(e), f(!0), () => p(e)), [p]),
        I = r.useCallback((e, t) => {
            for (let n of h.current) n(e, t);
        }, []);
    return (
        r.useEffect(() => {
            c?.clearConfetti();
        }, [c, g]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.k, {
                    confettiCanvas: c,
                    spriteCanvas: n,
                    baseConfig: d.Mw,
                    addClickListener: A,
                    removeClickListener: p,
                    children: t,
                }),
                (0, i.jsx)(s.Fk, { ref: E, className: _.J, environment: d.XA, onClick: m ? I : void 0 }),
                (0, i.jsx)(s.K_, { ref: u, colors: d._t, sprites: d.uI, spriteWidth: d.wn, spriteHeight: d.wn }),
            ],
        })
    );
}
