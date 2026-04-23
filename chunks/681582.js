"use strict";
n.d(t, { l: () => d });
var r = n(627968),
    i = n(64700),
    s = n(106778),
    a = n(311907),
    o = n(309010),
    l = n(21161),
    u = n(851110),
    c = n(64684);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [_, f] = i.useState(null),
        p = i.useRef(new Set()),
        [h, E] = i.useState(!1),
        m = (0, a.bG)([o.A], () => o.A.getCurrentlySelectedChannelId()),
        g = i.useCallback((e) => {
            p.current.delete(e), E(p.current.size > 0);
        }, []),
        A = i.useCallback((e) => (p.current.add(e), E(!0), () => g(e)), [g]),
        I = i.useCallback((e, t) => {
            for (let n of p.current) n(e, t);
        }, []);
    return (
        i.useEffect(() => {
            _?.clearConfetti();
        }, [_, m]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.k, {
                    confettiCanvas: _,
                    spriteCanvas: n,
                    baseConfig: u.Mw,
                    addClickListener: A,
                    removeClickListener: g,
                    children: t,
                }),
                (0, r.jsx)(s.Fk, { ref: f, className: c.J, environment: u.XA, onClick: h ? I : void 0 }),
                (0, r.jsx)(s.K_, { ref: d, colors: u._t, sprites: u.uI, spriteWidth: u.wn, spriteHeight: u.wn }),
            ],
        })
    );
}
