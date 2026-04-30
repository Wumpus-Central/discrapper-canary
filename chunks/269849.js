"use strict";
n.d(t, { o: () => o }), n(64700);
var i = n(621466),
    r = n(644447),
    s = n(836781),
    a = n(256905);
function o(e, t, n) {
    let o = {},
        l = {};
    for (let [u, c] of e.entries()) {
        let d = (0, r.E)({ proxyURL: c.proxyUrl, url: c.url });
        (o[d] = (r) =>
            (function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    s = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, a.R)({ ...r, items: t, startingIndex: n, location: s ?? "zoomedMediaModalHelper" });
            })(r, e, u, t, n)),
            (l[d] = () => (0, s.Z)(c, e.length > 1));
    }
    return { srcToOnClickOverride: o, srcToHandlePreloadImage: l };
}
