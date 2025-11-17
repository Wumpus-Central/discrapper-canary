n.d(t, { B: () => s });
var r = n(348672),
    i = n(484948),
    a = n(159447),
    o = n(473749);
function s(e, t) {
    let { collection: n, onLoadMore: s, scrollOffset: l = 1 } = e,
        c = (0, o.useRef)(null),
        u = (0, i.i)((e) => {
            for (let t of e) t.isIntersecting && s && s();
        });
    (0, a.b)(
        () => (
            t.current &&
                ((c.current = new IntersectionObserver(u, {
                    root: (0, r.r)(null == t ? void 0 : t.current),
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
