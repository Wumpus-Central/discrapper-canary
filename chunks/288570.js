_.d(e, { m: () => l });
var a = _(395848),
    r = _(140955),
    n = _(202937),
    o = _(896247),
    E = _(596308),
    i = _(662355);
let c = [800, 1800],
    s = (t) => {
        a.m.document && a.m.document.prerendering
            ? (0, i.A)(() => s(t))
            : a.m.document && "complete" !== a.m.document.readyState
              ? addEventListener("load", () => s(t), !0)
              : setTimeout(t, 0);
    },
    l = (t, e = {}) => {
        let _ = (0, E.I)("TTFB"),
            a = (0, r._)(t, _, c, e.reportAllChanges);
        s(() => {
            let t = (0, o.W)();
            if (t) {
                let e = t.responseStart;
                if (e <= 0 || e > performance.now()) return;
                (_.value = Math.max(e - (0, n.A)(), 0)), (_.entries = [t]), a(!0);
            }
        });
    };
