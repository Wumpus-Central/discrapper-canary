var i = n(582128);
let r = new Map(),
    a = new Set(),
    s = new Set();
function l() {
    for (let e of [...a])
        try {
            e();
        } catch (e) {
            console.error("[conjure] control lease subscriber threw", e);
        }
}
function o(e) {
    for (let t of [...s])
        try {
            t(e);
        } catch (e) {
            console.error("[conjure] control release subscriber threw", e);
        }
}
function d(e) {
    let t = r.get(e) ?? { holders: 0, timers: new Set() };
    ((t.holders += 1), r.set(e, t));
    let n = !1,
        i = setTimeout(() => {
            (console.warn("[conjure] control lease expired without release", { projectId: e }), a());
        }, 35e3);
    function a() {
        if (n || ((n = !0), clearTimeout(i), r.get(e) !== t)) return;
        (t.timers.delete(i), (t.holders -= 1));
        let a = t.holders <= 0;
        (a && r.delete(e), l(), a && o(e));
    }
    return (t.timers.add(i), l(), a);
}
let c = new Map();
function u(e) {
    let t = c.get(e);
    null != t && (c.delete(e), clearTimeout(t.timer), t.release());
}
let _ = new Set();
function E(e) {
    return (r.get(e)?.holders ?? 0) > 0;
}
function A(e) {
    return (
        a.add(e),
        () => {
            a.delete(e);
        }
    );
}
n.d(
    t,
    {},
    {
        CU: function (e) {
            let t = i.useCallback(() => null != e && _.has(e), [e]);
            return i.useSyncExternalStore(A, t, t);
        },
        GU: function (e) {
            _.delete(e);
            let t = c.get(e);
            null != t && (c.delete(e), clearTimeout(t.timer));
            let n = r.get(e);
            if (null != n) {
                for (let e of n.timers) clearTimeout(e);
                (r.delete(e), l(), o(e));
            }
        },
        T7: function () {
            return [...r.keys()];
        },
        W3: A,
        Wg: d,
        YN: u,
        Zv: function (e) {
            let t = i.useCallback(() => null != e && E(e), [e]);
            return i.useSyncExternalStore(A, t, t);
        },
        h2: function (e) {
            return (
                s.add(e),
                () => {
                    s.delete(e);
                }
            );
        },
        oJ: function (e) {
            let t = c.get(e),
                n = setTimeout(() => u(e), 2e4);
            if (null != t) {
                clearTimeout(t.timer);
                let i = d(e);
                (t.release(), c.set(e, { release: i, timer: n }));
                return;
            }
            c.set(e, { release: d(e), timer: n });
        },
        pF: function (e, t) {
            _.has(e) !== t && (t ? _.add(e) : _.delete(e), l());
        },
        wK: E,
    },
);
