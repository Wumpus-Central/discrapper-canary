n.d(t, { m: () => l });
var r = n(514962),
    i = n(488214),
    a = n(560684),
    o = n(24931),
    _ = n(385702),
    s = n(871861);
let c = [800, 1800],
    E = (e) => {
        r.m.document && r.m.document.prerendering
            ? (0, s.A)(() => E(e))
            : r.m.document && "complete" !== r.m.document.readyState
              ? addEventListener("load", () => E(e), !0)
              : setTimeout(e, 0);
    },
    l = (e, t = {}) => {
        let n = (0, _.I)("TTFB"),
            r = (0, i._)(e, n, c, t.reportAllChanges);
        E(() => {
            let e = (0, o.W)();
            if (e) {
                let t = e.responseStart;
                if (t <= 0 || t > performance.now()) return;
                (n.value = Math.max(t - (0, a.A)(), 0)), (n.entries = [e]), r(!0);
            }
        });
    };
