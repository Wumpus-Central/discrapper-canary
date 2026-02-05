"use strict";
n.d(t, { l: () => d });
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(311907),
    o = n(309010),
    l = n(21161),
    u = n(851110),
    c = n(469427);
function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [_, f] = i.useState(null),
        p = i.useRef(new Set()),
        [h, m] = i.useState(!1),
        g = (0, s.bG)([o.A], () => o.A.getCurrentlySelectedChannelId()),
        E = i.useCallback((e) => {
            p.current.delete(e), m(p.current.size > 0);
        }, []),
        A = i.useCallback((e) => (p.current.add(e), m(!0), () => E(e)), [E]),
        I = i.useCallback((e, t) => {
            for (let n of p.current) n(e, t);
        }, []);
    return (
        i.useEffect(() => {
            _?.clearConfetti();
        }, [_, g]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.k, {
                    confettiCanvas: _,
                    spriteCanvas: n,
                    baseConfig: u.Mw,
                    addClickListener: A,
                    removeClickListener: E,
                    children: t,
                }),
                (0, r.jsx)(a.Fk, { ref: f, className: c.J, environment: u.XA, onClick: h ? I : void 0 }),
                (0, r.jsx)(a.K_, { ref: d, colors: u._t, sprites: u.uI, spriteWidth: u.wn, spriteHeight: u.wn }),
            ],
        })
    );
}
