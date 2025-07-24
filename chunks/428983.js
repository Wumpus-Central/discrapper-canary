a.d(e, { N: () => d });
var r = a(395848),
    _ = a(140955),
    n = a(202937),
    o = a(416987),
    i = a(596308),
    c = a(622574),
    s = a(433691),
    E = a(135813),
    l = a(662355);
let u = [2500, 4000],
    I = {},
    d = (t, e = {}) => {
        (0, l.A)(() => {
            let a,
                l = (0, o.Y)(),
                d = (0, i.I)('LCP'),
                R = (t) => {
                    let e = t[t.length - 1];
                    e && e.startTime < l.firstHiddenTime && ((d.value = Math.max(e.startTime - (0, n.A)(), 0)), (d.entries = [e]), a());
                },
                N = (0, c.N)('largest-contentful-paint', R);
            if (N) {
                a = (0, _._)(t, d, u, e.reportAllChanges);
                let n = (0, E.R)(() => {
                    I[d.id] || (R(N.takeRecords()), N.disconnect(), (I[d.id] = !0), a(!0));
                });
                (['keydown', 'click'].forEach((t) => {
                    r.m.document && addEventListener(t, () => setTimeout(n, 0), !0);
                }),
                    (0, s.u)(n));
            }
        });
    };
