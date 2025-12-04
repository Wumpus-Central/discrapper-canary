r.d(t, { N: () => I });
var n = r(514962),
    a = r(488214),
    i = r(560684),
    o = r(722778),
    _ = r(385702),
    s = r(798619),
    c = r(483698),
    E = r(926648),
    l = r(871861);
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
