n.d(t, { a: () => E });
var r = n(488214),
    i = n(560684),
    a = n(722778),
    o = n(385702),
    _ = n(798619),
    s = n(871861);
let c = [1800, 3000],
    E = (e, t = {}) => {
        (0, s.A)(() => {
            let n,
                s = (0, a.Y)(),
                E = (0, o.I)("FCP"),
                l = (0, _.N)("paint", (e) => {
                    e.forEach((e) => {
                        "first-contentful-paint" === e.name &&
                            (l.disconnect(),
                            e.startTime < s.firstHiddenTime &&
                                ((E.value = Math.max(e.startTime - (0, i.A)(), 0)), E.entries.push(e), n(!0)));
                    });
                });
            l && (n = (0, r._)(e, E, c, t.reportAllChanges));
        });
    };
