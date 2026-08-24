"use strict";
r.d(t, { n: () => s });
var n = r(163675),
    i = r(654978),
    o = r(576024),
    a = r(582128);
function s(e, t) {
    let { collection: r, onLoadMore: s, scrollOffset: l = 1 } = e,
        u = (0, a.useRef)(null),
        c = (0, i.J)((e) => {
            for (let t of e) t.isIntersecting && s && s();
        });
    (0, o.N)(
        () => (
            t.current &&
                ((u.current = new IntersectionObserver(c, {
                    root: (0, n.m)(null == t ? void 0 : t.current),
                    rootMargin: `0px ${100 * l}% ${100 * l}% ${100 * l}%`,
                })),
                u.current.observe(t.current)),
            () => {
                u.current && u.current.disconnect();
            }
        ),
        [r, c, t, l],
    );
}
