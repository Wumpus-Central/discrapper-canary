a.d(e, { N: () => R });
var r = a(395848),
    n = a(140955),
    o = a(202937),
    _ = a(416987),
    i = a(596308),
    c = a(622574),
    s = a(433691),
    E = a(135813),
    l = a(873712);
let u = [2500, 4000],
    I = {},
    R = (t, e = {}) => {
        (0, l.A)(() => {
            let a;
            let l = (0, _.Y)(),
                R = (0, i.I)('LCP'),
                d = (t) => {
                    let e = t[t.length - 1];
                    e && e.startTime < l.firstHiddenTime && ((R.value = Math.max(e.startTime - (0, o.A)(), 0)), (R.entries = [e]), a());
                },
                A = (0, c.N)('largest-contentful-paint', d);
            if (A) {
                a = (0, n._)(t, R, u, e.reportAllChanges);
                let o = (0, E.R)(() => {
                    I[R.id] || (d(A.takeRecords()), A.disconnect(), (I[R.id] = !0), a(!0));
                });
                ['keydown', 'click'].forEach((t) => {
                    r.m.document && addEventListener(t, () => setTimeout(o, 0), !0);
                }),
                    (0, s.u)(o);
            }
        });
    };
