n.d(t, { N: () => p });
var r = n(514962),
    i = n(488214),
    a = n(560684),
    o = n(722778),
    _ = n(385702),
    s = n(798619),
    c = n(483698),
    E = n(926648),
    l = n(871861);
let u = [2500, 4000],
    d = {},
    p = (e, t = {}) => {
        (0, l.A)(() => {
            let n,
                l = (0, o.Y)(),
                p = (0, _.I)("LCP"),
                f = (e) => {
                    let t = e[e.length - 1];
                    t &&
                        t.startTime < l.firstHiddenTime &&
                        ((p.value = Math.max(t.startTime - (0, a.A)(), 0)), (p.entries = [t]), n());
                },
                I = (0, s.N)("largest-contentful-paint", f);
            if (I) {
                n = (0, i._)(e, p, u, t.reportAllChanges);
                let a = (0, E.R)(() => {
                    d[p.id] || (f(I.takeRecords()), I.disconnect(), (d[p.id] = !0), n(!0));
                });
                ["keydown", "click"].forEach((e) => {
                    r.m.document && addEventListener(e, () => setTimeout(a, 0), !0);
                }),
                    (0, c.u)(a);
            }
        });
    };
