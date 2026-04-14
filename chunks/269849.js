l.d(t, { o: () => s }), l(64700);
var r = l(621466),
    n = l(644447),
    i = l(369254),
    a = l(256905);
function s(e, t, l) {
    let s = {},
        o = {};
    for (let [d, c] of e.entries()) {
        let u = (0, n.E)({ proxyURL: c.proxyUrl, url: c.url });
        (s[u] = (n) =>
            (function (e, t, l) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    i = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, r.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, a.R)({ ...n, items: t, startingIndex: l, location: i ?? "zoomedMediaModalHelper" });
            })(n, e, d, t, l)),
            (o[u] = () => (0, i.Z)(c, e.length > 1));
    }
    return { srcToOnClickOverride: s, srcToHandlePreloadImage: o };
}
