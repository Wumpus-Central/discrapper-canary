var r = n(582128);
n(71637);
let l = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    i = new Map(),
    a = new Set();
function o(e) {
    return i.get(e) ?? l;
}
function u(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? i.set(e, t) : i.delete(e), [...a]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function c(e, t) {
    return null != t && e.authorId === t;
}
function s(e) {
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
        AW: function (e, t) {
            let n = o(e);
            n.active &&
                0 !== t.size &&
                u(e, {
                    ...n,
                    annotations: n.annotations.map((e) => {
                        let n = t.get(e.id);
                        return null == n ? e : { ...e, target: n };
                    }),
                });
        },
        F5: function (e, t) {
            let n = o(e);
            n.active && u(e, { ...n, context: t });
        },
        It: c,
        _c: o,
        aC: function (e, t, n) {
            let r = o(e),
                l = r.annotations.find((e) => e.id === n);
            null != l && c(l, t) && u(e, { ...r, annotations: r.annotations.filter((e) => e.id !== n) });
        },
        mB: function (e) {
            i.has(e) && u(e, l);
        },
        pV: function (e, t, n, r) {
            let l = o(e),
                i = l.annotations.find((e) => e.id === n);
            null != i &&
                c(i, t) &&
                u(e, { ...l, annotations: l.annotations.map((e) => (e.id === n ? { ...e, comment: r } : e)) });
        },
        qX: function (e) {
            let t = o(e);
            t.active && u(e, { ...t, active: !1 });
        },
        rt: function (e) {
            let t = r.useCallback(() => (null == e ? l : o(e)), [e]);
            return r.useSyncExternalStore(s, t, t);
        },
        w4: function (e) {
            let t = o(e);
            t.active || u(e, { ...t, active: !0 });
        },
    },
);
