_.d(e, { N: () => N });
var a = _(395848),
    r = _(140955),
    n = _(202937),
    o = _(416987),
    E = _(596308),
    i = _(622574),
    c = _(433691),
    s = _(135813),
    l = _(662355);
let I = [2500, 4000],
    R = {},
    N = (t, e = {}) => {
        (0, l.A)(() => {
            let _,
                l = (0, o.Y)(),
                N = (0, E.I)("LCP"),
                A = (t) => {
                    let e = t[t.length - 1];
                    e &&
                        e.startTime < l.firstHiddenTime &&
                        ((N.value = Math.max(e.startTime - (0, n.A)(), 0)), (N.entries = [e]), _());
                },
                u = (0, i.N)("largest-contentful-paint", A);
            if (u) {
                _ = (0, r._)(t, N, I, e.reportAllChanges);
                let n = (0, s.R)(() => {
                    R[N.id] || (A(u.takeRecords()), u.disconnect(), (R[N.id] = !0), _(!0));
                });
                ["keydown", "click"].forEach((t) => {
                    a.m.document && addEventListener(t, () => setTimeout(n, 0), !0);
                }),
                    (0, c.u)(n);
            }
        });
    };
