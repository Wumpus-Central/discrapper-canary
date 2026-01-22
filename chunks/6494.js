n.d(t, { n: () => o });
var r = n(150047),
    i = n(959462),
    a = n(3388),
    s = n(64700);
function o(e, t) {
    let { collection: n, onLoadMore: o, scrollOffset: l = 1 } = e,
        c = (0, s.useRef)(null),
        u = (0, i.J)((e) => {
            for (let t of e) t.isIntersecting && o && o();
        });
    (0, a.N)(
        () => (
            t.current &&
                ((c.current = new IntersectionObserver(u, {
                    root: (0, r.m)(null == t ? void 0 : t.current),
                    rootMargin: `0px ${100 * l}% ${100 * l}% ${100 * l}%`,
                })),
                c.current.observe(t.current)),
            () => {
                c.current && c.current.disconnect();
            }
        ),
        [n, u, t, l],
    );
}
