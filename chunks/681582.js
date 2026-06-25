"use strict";
n.d(t, { l: () => d });
var i = n(627968),
    r = n(64700),
    s = n(106778),
    a = n(17928),
    o = n(309010),
    l = n(21161),
    u = n(536283),
    c = n(668972);
function d(e) {
    let { children: t } = e,
        [n, d] = r.useState(null),
        [_, h] = r.useState(null),
        f = r.useRef(new Set()),
        [p, E] = r.useState(!1),
        m = (0, a.bG)([o.A], () => o.A.getCurrentlySelectedChannelId()),
        g = r.useCallback((e) => {
            f.current.delete(e), E(f.current.size > 0);
        }, []),
        A = r.useCallback((e) => (f.current.add(e), E(!0), () => g(e)), [g]),
        I = r.useCallback((e, t) => {
            for (let n of f.current) n(e, t);
        }, []);
    return (
        r.useEffect(() => {
            _?.clearConfetti();
        }, [_, m]),
        (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.k, {
                    confettiCanvas: _,
                    spriteCanvas: n,
                    baseConfig: u.Mw,
                    addClickListener: A,
                    removeClickListener: g,
                    children: t,
                }),
                (0, i.jsx)(s.Fk, { ref: h, className: c.J, environment: u.XA, onClick: p ? I : void 0 }),
                (0, i.jsx)(s.K_, { ref: d, colors: u._t, sprites: u.uI, spriteWidth: u.wn, spriteHeight: u.wn }),
            ],
        })
    );
}
