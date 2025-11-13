a.d(e, { m: () => l });
var r = a(395848),
    _ = a(140955),
    n = a(202937),
    o = a(896247),
    i = a(596308),
    E = a(662355);
let c = [800, 1800],
    s = (t) => {
        r.m.document && r.m.document.prerendering
            ? (0, E.A)(() => s(t))
            : r.m.document && "complete" !== r.m.document.readyState
              ? addEventListener("load", () => s(t), !0)
              : setTimeout(t, 0);
    },
    l = (t, e = {}) => {
        let a = (0, i.I)("TTFB"),
            r = (0, _._)(t, a, c, e.reportAllChanges);
        s(() => {
            let t = (0, o.W)();
            if (t) {
                let e = t.responseStart;
                if (e <= 0 || e > performance.now()) return;
                (a.value = Math.max(e - (0, n.A)(), 0)), (a.entries = [t]), r(!0);
            }
        });
    };
