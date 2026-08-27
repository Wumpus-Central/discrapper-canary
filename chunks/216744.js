"use strict";
r.d(t, { n: () => s });
var n = r(943641),
    i = r(241872),
    o = r(361854),
    a = r(582128);
function s(e, t) {
    let { collection: r, onLoadMore: s, scrollOffset: l = 1, direction: u = "end" } = e,
        c = (0, a.useRef)(null),
        f = (0, i.J)((e) => {
            for (let t of e) t.isIntersecting && s && s();
        });
    (0, o.N)(() => {
        if (t.current) {
            let e = 100 * l,
                r = "start" === u ? `${e}% 0px 0px 0px` : `0px ${e}% ${e}% ${e}%`;
            (c.current = new IntersectionObserver(f, { root: (0, n.m)(t?.current), rootMargin: r })),
                c.current.observe(t.current);
        }
        return () => {
            c.current && c.current.disconnect();
        };
    }, [r, t, l, u]);
}
