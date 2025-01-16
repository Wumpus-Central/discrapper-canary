r.d(t, {
    m: function () {
        return l;
    }
});
var a = r(395848),
    n = r(140955),
    _ = r(202937),
    o = r(896247),
    E = r(596308),
    i = r(873712);
let c = [800, 1800],
    s = (e) => {
        a.m.document && a.m.document.prerendering ? (0, i.A)(() => s(e)) : a.m.document && 'complete' !== a.m.document.readyState ? addEventListener('load', () => s(e), !0) : setTimeout(e, 0);
    },
    l = (e, t = {}) => {
        let r = (0, E.I)('TTFB'),
            a = (0, n._)(e, r, c, t.reportAllChanges);
        s(() => {
            let e = (0, o.W)();
            if (e) {
                let t = e.responseStart;
                if (t <= 0 || t > performance.now()) return;
                (r.value = Math.max(t - (0, _.A)(), 0)), (r.entries = [e]), a(!0);
            }
        });
    };
