r.d(t, { o: () => u }), r(64700);
var n = r(621466),
    o = r(644447),
    l = r(836781),
    i = r(256905);
function u(e, t, r) {
    let u = {},
        a = {};
    for (let [d, p] of e.entries()) {
        let c = (0, o.E)({ proxyURL: p.proxyUrl, url: p.url });
        (u[c] = (o) =>
            (function (e, t, r) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    l = arguments.length > 4 ? arguments[4] : void 0;
                e.preventDefault(),
                    (0, n.vq)(e.currentTarget) && e.currentTarget.blur(),
                    (0, i.R)({ ...o, items: t, startingIndex: r, location: l ?? "zoomedMediaModalHelper" });
            })(o, e, d, t, r)),
            (a[c] = () => (0, l.Z)(p, e.length > 1));
    }
    return { srcToOnClickOverride: u, srcToHandlePreloadImage: a };
}
