r.d(t, { m: () => l });
var n = r(514962),
    a = r(488214),
    i = r(560684),
    o = r(24931),
    _ = r(385702),
    s = r(871861);
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
