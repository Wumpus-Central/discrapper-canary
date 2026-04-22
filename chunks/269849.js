"use strict";
r.d(t, { o: () => s }), r(64700);
var i = r(621466),
    a = r(644447),
    n = r(369254),
    l = r(256905);
function s(e, t, r) {
    let s = {},
        o = {};
    for (let [c, d] of e.entries()) {
        let u = (0, a.E)({ proxyURL: d.proxyUrl, url: d.url });
        (s[u] = (a) =>
            (function (e, t, r) {
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    n = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, i.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, l.R)({ ...a, items: t, startingIndex: r, location: n ?? "zoomedMediaModalHelper" });
            })(a, e, c, t, r)),
            (o[u] = () => (0, n.Z)(d, e.length > 1));
    }
    return { srcToOnClickOverride: s, srcToHandlePreloadImage: o };
}
