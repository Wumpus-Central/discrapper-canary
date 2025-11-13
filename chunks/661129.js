a.d(e, { F: () => l });
var r = a(140955),
    _ = a(416987),
    n = a(596308),
    o = a(622574),
    i = a(433691),
    E = a(135813),
    c = a(662355);
let s = [100, 300],
    l = (t, e = {}) => {
        (0, c.A)(() => {
            let a,
                c = (0, _.Y)(),
                l = (0, n.I)("FID"),
                I = (t) => {
                    t.startTime < c.firstHiddenTime &&
                        ((l.value = t.processingStart - t.startTime), l.entries.push(t), a(!0));
                },
                R = (t) => {
                    t.forEach(I);
                },
                u = (0, o.N)("first-input", R);
            (a = (0, r._)(t, l, s, e.reportAllChanges)),
                u &&
                    (0, i.u)(
                        (0, E.R)(() => {
                            R(u.takeRecords()), u.disconnect();
                        }),
                    );
        });
    };
