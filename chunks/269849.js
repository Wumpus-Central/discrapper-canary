t.d(l, { o: () => a }), t(64700);
var r = t(621466),
    s = t(644447),
    n = t(369254),
    i = t(256905);
function a(e, l, t) {
    let a = {},
        o = {};
    for (let [d, u] of e.entries()) {
        let h = (0, s.E)({ proxyURL: u.proxyUrl, url: u.url });
        (a[h] = (s) =>
            (function (e, l, t) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    n = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, r.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.R)({ ...s, items: l, startingIndex: t, location: n ?? "zoomedMediaModalHelper" });
            })(s, e, d, l, t)),
            (o[h] = () => (0, n.Z)(u, e.length > 1));
    }
    return { srcToOnClickOverride: a, srcToHandlePreloadImage: o };
}
