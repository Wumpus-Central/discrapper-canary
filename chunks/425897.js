t.d(l, { A: () => g });
var s = t(627968),
    n = t(64700),
    r = t(939249),
    a = t(42286),
    i = t(289873),
    c = t(327143),
    u = t(573758),
    o = t(462367);
function d(e) {
    let { item: l, coords: t, onSelect: a } = e,
        i = n.useCallback(() => {
            a(l.url);
        }, [l.url, a]);
    return (0, s.jsx)(r.D, {
        className: o.Se,
        style: t,
        onClick: i,
        children: (0, s.jsx)("img", { src: l.url, alt: "", className: o.rx, loading: "lazy" }),
    });
}
function g(e) {
    let { guildId: l, onSelect: t } = e,
        { mediaItems: r, isLoading: g } = (0, u.A)(l),
        m = n.useCallback(
            (e, l, t) => {
                if (e > 0) return 0;
                let s = r[l];
                return null == s ? 0 : t * (s.height / s.width);
            },
            [r],
        ),
        h = n.useCallback((e, l) => r[l]?.url ?? null, [r]),
        f = n.useCallback(
            (e, l, n, a) => {
                if (e > 0) return null;
                let i = r[l];
                return null == i ? null : (0, s.jsx)(d, { item: i, coords: n, onSelect: t }, a);
            },
            [r, t],
        ),
        x = n.useCallback(
            (e) =>
                (0, s.jsx)(a.f, {
                    fade: !0,
                    className: o.q4,
                    columns: e,
                    sections: [r.length],
                    itemGutter: 8,
                    getItemKey: h,
                    getItemHeight: m,
                    renderItem: f,
                    chunkSize: 128,
                }),
            [r, h, m, f],
        );
    return g
        ? (0, s.jsx)("div", { className: o.qE, children: (0, s.jsx)(i.y, { type: i.y.Type.WANDERING_CUBES }) })
        : 0 === r.length
          ? null
          : (0, s.jsx)("div", {
                className: o.HU,
                children: (0, s.jsx)(c.A, { desiredItemWidth: 150, maxColumns: 3, children: x }),
            });
}
