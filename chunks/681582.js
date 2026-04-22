"use strict";
n.d(t, { l: () => c });
var r = n(627968),
    i = n(64700),
    s = n(106778),
    a = n(311907),
    o = n(309010),
    l = n(21161),
    u = n(851110),
    d = n(668972);
function c(e) {
    let { children: t } = e,
        [n, c] = i.useState(null),
        [_, f] = i.useState(null),
        E = i.useRef(new Set()),
        [h, p] = i.useState(!1),
        m = (0, a.bG)([o.A], () => o.A.getCurrentlySelectedChannelId()),
        g = i.useCallback((e) => {
            E.current.delete(e), p(E.current.size > 0);
        }, []),
        A = i.useCallback((e) => (E.current.add(e), p(!0), () => g(e)), [g]),
        I = i.useCallback((e, t) => {
            for (let n of E.current) n(e, t);
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
                (0, r.jsx)(s.Fk, { ref: f, className: d.J, environment: u.XA, onClick: h ? I : void 0 }),
                (0, r.jsx)(s.K_, { ref: c, colors: u._t, sprites: u.uI, spriteWidth: u.wn, spriteHeight: u.wn }),
            ],
        })
    );
}
