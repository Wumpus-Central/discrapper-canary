n(582128);
var l = n(621466),
    s = n(644447),
    i = n(256905),
    a = n(415097);
n.d(
    t,
    {},
    {
        o: function (e, t, n) {
            let r = {},
                o = {},
                u = {};
            for (let [d, c] of e.entries()) {
                let m = (0, s.E)({ proxyURL: c.proxyUrl, url: c.url });
                ((r[m] = (s, a) =>
                    (function (e, t, n) {
                        let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            a = arguments.length > 4 ? arguments[4] : void 0;
                        (e.preventDefault(),
                            (0, l.vq)(e.currentTarget) && e.currentTarget.blur(),
                            (0, i.R)({ ...s, items: t, startingIndex: n, location: a ?? "zoomedMediaModalHelper" }));
                    })(s, null == a ? e : e.map((e) => (e === c ? { ...e, ...a } : e)), d, t, n)),
                    (o[m] = () => (0, a.Z)(c, e.length > 1)),
                    (u[m] = (l) =>
                        (0, i.R)({
                            ...t,
                            items: e.map((e) => (e === c ? { ...e, initialTimeSec: l / 1e3 } : e)),
                            startingIndex: d,
                            location: n ?? "zoomedMediaModalHelper",
                        })));
            }
            return { srcToOnClickOverride: r, srcToHandlePreloadImage: o, srcToSeekOverride: u };
        },
    },
);
