r.d(t, { a: () => E });
var n = r(488214),
    a = r(560684),
    i = r(722778),
    o = r(385702),
    _ = r(798619),
    s = r(871861);
let c = [1800, 3000],
    E = (e, t = {}) => {
        (0, s.A)(() => {
            let r,
                s = (0, i.Y)(),
                E = (0, o.I)("FCP"),
                l = (0, _.N)("paint", (e) => {
                    e.forEach((e) => {
                        "first-contentful-paint" === e.name &&
                            (l.disconnect(),
                            e.startTime < s.firstHiddenTime &&
                                ((E.value = Math.max(e.startTime - (0, a.A)(), 0)), E.entries.push(e), r(!0)));
                    });
                });
            l && (r = (0, n._)(e, E, c, t.reportAllChanges));
        });
    };
