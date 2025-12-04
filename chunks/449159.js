r.d(t, { F: () => l });
var n = r(488214),
    a = r(722778),
    i = r(385702),
    o = r(798619),
    _ = r(483698),
    s = r(926648),
    c = r(871861);
let E = [100, 300],
    l = (e, t = {}) => {
        (0, c.A)(() => {
            let r,
                c = (0, a.Y)(),
                l = (0, i.I)("FID"),
                u = (e) => {
                    e.startTime < c.firstHiddenTime &&
                        ((l.value = e.processingStart - e.startTime), l.entries.push(e), r(!0));
                },
                d = (e) => {
                    e.forEach(u);
                },
                I = (0, o.N)("first-input", d);
            (r = (0, n._)(e, l, E, t.reportAllChanges)),
                I &&
                    (0, _.u)(
                        (0, s.R)(() => {
                            d(I.takeRecords()), I.disconnect();
                        }),
                    );
        });
    };
