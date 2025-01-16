r.d(t, {
    F: function () {
        return l;
    }
});
var a = r(140955),
    n = r(416987),
    _ = r(596308),
    o = r(622574),
    E = r(433691),
    i = r(135813),
    c = r(873712);
let s = [100, 300],
    l = (e, t = {}) => {
        (0, c.A)(() => {
            let r;
            let c = (0, n.Y)(),
                l = (0, _.I)('FID'),
                I = (e) => {
                    e.startTime < c.firstHiddenTime && ((l.value = e.processingStart - e.startTime), l.entries.push(e), r(!0));
                },
                u = (e) => {
                    e.forEach(I);
                },
                R = (0, o.N)('first-input', u);
            (r = (0, a._)(e, l, s, t.reportAllChanges)),
                R &&
                    (0, E.u)(
                        (0, i.R)(() => {
                            u(R.takeRecords()), R.disconnect();
                        })
                    );
        });
    };
