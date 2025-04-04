a.d(e, { F: () => l });
var r = a(140955),
    n = a(416987),
    _ = a(596308),
    o = a(622574),
    i = a(433691),
    c = a(135813),
    s = a(662355);
let E = [100, 300],
    l = (t, e = {}) => {
        (0, s.A)(() => {
            let a,
                s = (0, n.Y)(),
                l = (0, _.I)('FID'),
                u = (t) => {
                    t.startTime < s.firstHiddenTime && ((l.value = t.processingStart - t.startTime), l.entries.push(t), a(!0));
                },
                I = (t) => {
                    t.forEach(u);
                },
                R = (0, o.N)('first-input', I);
            (a = (0, r._)(t, l, E, e.reportAllChanges)),
                R &&
                    (0, i.u)(
                        (0, c.R)(() => {
                            I(R.takeRecords()), R.disconnect();
                        })
                    );
        });
    };
