"use strict";
n.d(t, { n: () => s });
var r = n(163675),
    i = n(654978),
    a = n(576024),
    o = n(582128);
function s(e, t) {
    let { collection: n, onLoadMore: s, scrollOffset: l = 1 } = e,
        u = (0, o.useRef)(null),
        c = (0, i.J)((e) => {
            for (let t of e) t.isIntersecting && s && s();
        });
    (0, a.N)(
        () => (
            t.current &&
                ((u.current = new IntersectionObserver(c, {
                    root: (0, r.m)(null == t ? void 0 : t.current),
                    rootMargin: `0px ${100 * l}% ${100 * l}% ${100 * l}%`,
                })),
                u.current.observe(t.current)),
            () => {
                u.current && u.current.disconnect();
            }
        ),
        [n, c, t, l],
    );
}
