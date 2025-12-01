r.d(t, { N: () => I });
var n = r(395848),
    a = r(140955),
    i = r(202937),
    o = r(416987),
    _ = r(596308),
    s = r(622574),
    c = r(433691),
    E = r(135813),
    l = r(662355);
let u = [2500, 4000],
    d = {},
    I = (e, t = {}) => {
        (0, l.A)(() => {
            let r,
                l = (0, o.Y)(),
                I = (0, _.I)("LCP"),
                p = (e) => {
                    let t = e[e.length - 1];
                    t &&
                        t.startTime < l.firstHiddenTime &&
                        ((I.value = Math.max(t.startTime - (0, i.A)(), 0)), (I.entries = [t]), r());
                },
                R = (0, s.N)("largest-contentful-paint", p);
            if (R) {
                r = (0, a._)(e, I, u, t.reportAllChanges);
                let i = (0, E.R)(() => {
                    d[I.id] || (p(R.takeRecords()), R.disconnect(), (d[I.id] = !0), r(!0));
                });
                ["keydown", "click"].forEach((e) => {
                    n.m.document && addEventListener(e, () => setTimeout(i, 0), !0);
                }),
                    (0, c.u)(i);
            }
        });
    };
