r.d(t, { F: () => l });
var n = r(140955),
    a = r(416987),
    i = r(596308),
    o = r(622574),
    _ = r(433691),
    s = r(135813),
    c = r(662355);
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
