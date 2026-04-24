"use strict";
n.d(t, { o: () => l }), n(64700);
var i = n(621466),
    r = n(644447),
    a = n(836781),
    s = n(256905);
function l(e, t, n) {
    let l = {},
        o = {};
    for (let [c, d] of e.entries()) {
        let u = (0, r.E)({ proxyURL: d.proxyUrl, url: d.url });
        (l[u] = (r) =>
            (function (e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    a = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, s.R)({ ...r, items: t, startingIndex: n, location: a ?? "zoomedMediaModalHelper" });
            })(r, e, c, t, n)),
            (o[u] = () => (0, a.Z)(d, e.length > 1));
    }
    return { srcToOnClickOverride: l, srcToHandlePreloadImage: o };
}
