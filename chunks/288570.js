a.d(e, { m: () => l });
var r = a(395848),
    n = a(140955),
    _ = a(202937),
    o = a(896247),
    i = a(596308),
    c = a(662355);
let s = [800, 1800],
    E = (t) => {
        r.m.document && r.m.document.prerendering ? (0, c.A)(() => E(t)) : r.m.document && 'complete' !== r.m.document.readyState ? addEventListener('load', () => E(t), !0) : setTimeout(t, 0);
    },
    l = (t, e = {}) => {
        let a = (0, i.I)('TTFB'),
            r = (0, n._)(t, a, s, e.reportAllChanges);
        E(() => {
            let t = (0, o.W)();
            if (t) {
                let e = t.responseStart;
                if (e <= 0 || e > performance.now()) return;
                (a.value = Math.max(e - (0, _.A)(), 0)), (a.entries = [t]), r(!0);
            }
        });
    };
