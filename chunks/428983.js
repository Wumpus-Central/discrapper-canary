a.d(e, { N: () => u });
var r = a(395848),
    _ = a(140955),
    n = a(202937),
    o = a(416987),
    i = a(596308),
    E = a(622574),
    c = a(433691),
    s = a(135813),
    l = a(662355);
let I = [2500, 4000],
    R = {},
    u = (t, e = {}) => {
        (0, l.A)(() => {
            let a,
                l = (0, o.Y)(),
                u = (0, i.I)("LCP"),
                A = (t) => {
                    let e = t[t.length - 1];
                    e &&
                        e.startTime < l.firstHiddenTime &&
                        ((u.value = Math.max(e.startTime - (0, n.A)(), 0)), (u.entries = [e]), a());
                },
                N = (0, E.N)("largest-contentful-paint", A);
            if (N) {
                a = (0, _._)(t, u, I, e.reportAllChanges);
                let n = (0, s.R)(() => {
                    R[u.id] || (A(N.takeRecords()), N.disconnect(), (R[u.id] = !0), a(!0));
                });
                ["keydown", "click"].forEach((t) => {
                    r.m.document && addEventListener(t, () => setTimeout(n, 0), !0);
                }),
                    (0, c.u)(n);
            }
        });
    };
