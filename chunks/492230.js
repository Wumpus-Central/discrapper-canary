r(582128);
var l = r(621466),
    n = r(644447),
    o = r(256905),
    i = r(415097);
r.d(
    t,
    {},
    {
        o: function (e, t, r) {
            let a = {},
                d = {},
                u = {};
            for (let [p, c] of e.entries()) {
                let s = (0, n.E)({ proxyURL: c.proxyUrl, url: c.url });
                ((a[s] = (n, i) =>
                    (function (e, t, r) {
                        let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        (e.preventDefault(),
                            (0, l.vq)(e.currentTarget) && e.currentTarget.blur(),
                            (0, o.R)({ ...n, items: t, startingIndex: r, location: i ?? "zoomedMediaModalHelper" }));
                    })(n, null == i ? e : e.map((e) => (e === c ? { ...e, ...i } : e)), p, t, r)),
                    (d[s] = () => (0, i.Z)(c, e.length > 1)),
                    (u[s] = (l) =>
                        (0, o.R)({
                            ...t,
                            items: e.map((e) => (e === c ? { ...e, initialTimeSec: l / 1e3 } : e)),
                            startingIndex: p,
                            location: r ?? "zoomedMediaModalHelper",
                        })));
            }
            return { srcToOnClickOverride: a, srcToHandlePreloadImage: d, srcToSeekOverride: u };
        },
    },
);
