a.d(e, { F: () => l });
var r = a(140955),
    _ = a(416987),
    n = a(596308),
    o = a(622574),
    i = a(433691),
    c = a(135813),
    E = a(662355);
let s = [100, 300],
    l = (t, e = {}) => {
        (0, E.A)(() => {
            let a,
                E = (0, _.Y)(),
                l = (0, n.I)('FID'),
                I = (t) => {
                    t.startTime < E.firstHiddenTime && ((l.value = t.processingStart - t.startTime), l.entries.push(t), a(!0));
                },
                u = (t) => {
                    t.forEach(I);
                },
                R = (0, o.N)('first-input', u);
            (a = (0, r._)(t, l, s, e.reportAllChanges)),
                R &&
                    (0, i.u)(
                        (0, c.R)(() => {
                            u(R.takeRecords()), R.disconnect();
                        })
                    );
        });
    };
