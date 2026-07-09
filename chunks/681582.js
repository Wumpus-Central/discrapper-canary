"use strict";
n.d(t, { l: () => u });
var i = n(627968),
    r = n(64700),
    a = n(106778),
    s = n(17928),
    l = n(309010),
    o = n(21161),
    d = n(536283),
    c = n(668972);
function u(e) {
    let { children: t } = e,
        [n, u] = r.useState(null),
        [_, E] = r.useState(null),
        A = r.useRef(new Set()),
        [h, I] = r.useState(!1),
        f = (0, s.bG)([l.A], () => l.A.getCurrentlySelectedChannelId()),
        p = r.useCallback((e) => {
            A.current.delete(e), I(A.current.size > 0);
        }, []),
        T = r.useCallback((e) => (A.current.add(e), I(!0), () => p(e)), [p]),
        m = r.useCallback((e, t) => {
            for (let n of A.current) n(e, t);
        }, []);
    return (
        r.useEffect(() => {
            _?.clearConfetti();
        }, [_, f]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.k, {
                    confettiCanvas: _,
                    spriteCanvas: n,
                    baseConfig: d.Mw,
                    addClickListener: T,
                    removeClickListener: p,
                    children: t,
                }),
                (0, i.jsx)(a.Fk, { ref: E, className: c.J, environment: d.XA, onClick: h ? m : void 0 }),
                (0, i.jsx)(a.K_, { ref: u, colors: d._t, sprites: d.uI, spriteWidth: d.wn, spriteHeight: d.wn }),
            ],
        })
    );
}
