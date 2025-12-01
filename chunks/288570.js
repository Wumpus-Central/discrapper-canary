r.d(t, { m: () => l });
var n = r(395848),
    a = r(140955),
    i = r(202937),
    o = r(896247),
    _ = r(596308),
    s = r(662355);
let c = [800, 1800],
    E = (e) => {
        n.m.document && n.m.document.prerendering
            ? (0, s.A)(() => E(e))
            : n.m.document && "complete" !== n.m.document.readyState
              ? addEventListener("load", () => E(e), !0)
              : setTimeout(e, 0);
    },
    l = (e, t = {}) => {
        let r = (0, _.I)("TTFB"),
            n = (0, a._)(e, r, c, t.reportAllChanges);
        E(() => {
            let e = (0, o.W)();
            if (e) {
                let t = e.responseStart;
                if (t <= 0 || t > performance.now()) return;
                (r.value = Math.max(t - (0, i.A)(), 0)), (r.entries = [e]), n(!0);
            }
        });
    };
