a.d(e, { N: () => R });
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
    R = (t, e = {}) => {
        (0, l.A)(() => {
            let a,
                l = (0, o.Y)(),
                R = (0, i.I)('LCP'),
                d = (t) => {
                    let e = t[t.length - 1];
                    e && e.startTime < l.firstHiddenTime && ((R.value = Math.max(e.startTime - (0, n.A)(), 0)), (R.entries = [e]), a());
                },
                N = (0, c.N)('largest-contentful-paint', d);
            if (N) {
                a = (0, _._)(t, R, u, e.reportAllChanges);
                let n = (0, E.R)(() => {
                    I[R.id] || (d(N.takeRecords()), N.disconnect(), (I[R.id] = !0), a(!0));
                });
                (['keydown', 'click'].forEach((t) => {
                    r.m.document && addEventListener(t, () => setTimeout(n, 0), !0);
                }),
                    (0, s.u)(n));
            }
        });
    };
