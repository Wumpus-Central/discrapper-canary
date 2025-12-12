n.d(t, { F: () => l });
var r = n(488214),
    i = n(722778),
    a = n(385702),
    o = n(798619),
    _ = n(483698),
    s = n(926648),
    c = n(871861);
let E = [100, 300],
    l = (e, t = {}) => {
        (0, c.A)(() => {
            let n,
                c = (0, i.Y)(),
                l = (0, a.I)("FID"),
                u = (e) => {
                    e.startTime < c.firstHiddenTime &&
                        ((l.value = e.processingStart - e.startTime), l.entries.push(e), n(!0));
                },
                d = (e) => {
                    e.forEach(u);
                },
                p = (0, o.N)("first-input", d);
            (n = (0, r._)(e, l, E, t.reportAllChanges)),
                p &&
                    (0, _.u)(
                        (0, s.R)(() => {
                            d(p.takeRecords()), p.disconnect();
                        }),
                    );
        });
    };
