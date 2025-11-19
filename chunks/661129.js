_.d(e, { F: () => l });
var a = _(140955),
    r = _(416987),
    n = _(596308),
    o = _(622574),
    E = _(433691),
    i = _(135813),
    c = _(662355);
let s = [100, 300],
    l = (t, e = {}) => {
        (0, c.A)(() => {
            let _,
                c = (0, r.Y)(),
                l = (0, n.I)("FID"),
                I = (t) => {
                    t.startTime < c.firstHiddenTime &&
                        ((l.value = t.processingStart - t.startTime), l.entries.push(t), _(!0));
                },
                R = (t) => {
                    t.forEach(I);
                },
                N = (0, o.N)("first-input", R);
            (_ = (0, a._)(t, l, s, e.reportAllChanges)),
                N &&
                    (0, E.u)(
                        (0, i.R)(() => {
                            R(N.takeRecords()), N.disconnect();
                        }),
                    );
        });
    };
