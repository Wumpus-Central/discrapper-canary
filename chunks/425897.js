s.d(t, { A: () => u });
var l = s(627968),
    n = s(64700),
    r = s(397927),
    i = s(327143),
    a = s(573758),
    c = s(233807);
function o(e) {
    let { item: t, coords: s, onSelect: i } = e,
        a = n.useCallback(() => {
            i(t.url);
        }, [t.url, i]);
    return (0, l.jsx)(r.DUT, {
        className: c.Se,
        style: s,
        onClick: a,
        children: (0, l.jsx)("img", { src: t.url, alt: "", className: c.rx, loading: "lazy" }),
    });
}
function u(e) {
    let { guildId: t, onSelect: s } = e,
        { mediaItems: u, isLoading: d } = (0, a.A)(t),
        x = n.useCallback(
            (e, t, s) => {
                if (e > 0) return 0;
                let l = u[t];
                return null == l ? 0 : s * (l.height / l.width);
            },
            [u],
        ),
        m = n.useCallback((e, t) => u[t]?.url ?? null, [u]),
        g = n.useCallback(
            (e, t, n, r) => {
                if (e > 0) return null;
                let i = u[t];
                return null == i ? null : (0, l.jsx)(o, { item: i, coords: n, onSelect: s }, r);
            },
            [u, s],
        ),
        h = n.useCallback(
            (e) =>
                (0, l.jsx)(r.a0_, {
                    fade: !0,
                    className: c.q4,
                    columns: e,
                    sections: [u.length],
                    itemGutter: 8,
                    getItemKey: m,
                    getItemHeight: x,
                    renderItem: g,
                    chunkSize: 128,
                }),
            [u, m, x, g],
        );
    return d
        ? (0, l.jsx)("div", { className: c.qE, children: (0, l.jsx)(r.y$y, { type: r.y$y.Type.WANDERING_CUBES }) })
        : 0 === u.length
          ? null
          : (0, l.jsx)("div", {
                className: c.HU,
                children: (0, l.jsx)(i.A, { desiredItemWidth: 150, maxColumns: 3, children: h }),
            });
}
