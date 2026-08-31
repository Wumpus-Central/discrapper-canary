r.d(t, { o: () => a }), r(582128);
var n = r(621466),
    l = r(644447),
    o = r(836781),
    i = r(256905);
function a(e, t, r) {
    let a = {},
        d = {},
        u = {};
    for (let [c, p] of e.entries()) {
        let s = (0, l.E)({ proxyURL: p.proxyUrl, url: p.url });
        (a[s] = (l) =>
            (function (e, t, r) {
                let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    o = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.R)({ ...l, items: t, startingIndex: r, location: o ?? "zoomedMediaModalHelper" });
            })(l, e, c, t, r)),
            (d[s] = () => (0, o.Z)(p, e.length > 1)),
            (u[s] = (n) =>
                (0, i.R)({
                    ...t,
                    items: e.map((e) => (e === p ? { ...e, initialTimeSec: n / 1e3 } : e)),
                    startingIndex: c,
                    location: r ?? "zoomedMediaModalHelper",
                }));
    }
    return { srcToOnClickOverride: a, srcToHandlePreloadImage: d, srcToSeekOverride: u };
}
