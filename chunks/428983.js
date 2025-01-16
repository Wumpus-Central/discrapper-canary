r.d(t, {
    N: function () {
        return R;
    }
});
var a = r(395848),
    n = r(140955),
    _ = r(202937),
    o = r(416987),
    E = r(596308),
    i = r(622574),
    c = r(433691),
    s = r(135813),
    l = r(873712);
let I = [2500, 4000],
    u = {},
    R = (e, t = {}) => {
        (0, l.A)(() => {
            let r;
            let l = (0, o.Y)(),
                R = (0, E.I)('LCP'),
                A = (e) => {
                    let t = e[e.length - 1];
                    t && t.startTime < l.firstHiddenTime && ((R.value = Math.max(t.startTime - (0, _.A)(), 0)), (R.entries = [t]), r());
                },
                T = (0, i.N)('largest-contentful-paint', A);
            if (T) {
                r = (0, n._)(e, R, I, t.reportAllChanges);
                let _ = (0, s.R)(() => {
                    !u[R.id] && (A(T.takeRecords()), T.disconnect(), (u[R.id] = !0), r(!0));
                });
                ['keydown', 'click'].forEach((e) => {
                    a.m.document && addEventListener(e, () => setTimeout(_, 0), !0);
                }),
                    (0, c.u)(_);
            }
        });
    };
