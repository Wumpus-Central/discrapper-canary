n.d(t, {
    l: () => d,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(106778),
    s = n(311907),
    o = n(309010),
    l = n(21161),
    c = n(851110),
    u = n(469427);

function d(e) {
    let { children: t } = e,
        [n, d] = i.useState(null),
        [f, p] = i.useState(null),
        _ = i.useRef(new Set()),
        [h, m] = i.useState(!1),
        g = (0, s.bG)([o.A], () => o.A.getCurrentlySelectedChannelId()),
        E = i.useCallback((e) => {
            _.current.delete(e), m(_.current.size > 0);
        }, []),
        b = i.useCallback((e) => (_.current.add(e), m(!0), () => E(e)), [E]),
        y = i.useCallback((e, t) => {
            for (let n of _.current) n(e, t);
        }, []);
    return (
        i.useEffect(() => {
            null == f || f.clearConfetti();
        }, [f, g]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(l.k, {
                    confettiCanvas: f,
                    spriteCanvas: n,
                    baseConfig: c.Mw,
                    addClickListener: b,
                    removeClickListener: E,
                    children: t,
                }),
                (0, r.jsx)(a.Fk, {
                    ref: p,
                    className: u.J,
                    environment: c.XA,
                    onClick: h ? y : void 0,
                }),
                (0, r.jsx)(a.K_, {
                    ref: d,
                    colors: c._t,
                    sprites: c.uI,
                    spriteWidth: c.wn,
                    spriteHeight: c.wn,
                }),
            ],
        })
    );
}
