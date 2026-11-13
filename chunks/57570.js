var l = n(582128);
n(71637);
let r = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    i = new Map(),
    a = new Set();
function o(e) {
    return i.get(e) ?? r;
}
function u(e, t) {
    for (let n of (t.active || 0 !== t.annotations.length ? i.set(e, t) : i.delete(e), [...a]))
        try {
            n();
        } catch (e) {
            console.error("[conjure] design feedback subscriber threw", e);
        }
}
function s(e, t) {
    return null != t && e.authorId === t;
}
function c(e) {
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
        It: s,
        _c: o,
        aC: function (e, t, n) {
            let l = o(e),
                r = l.annotations.find((e) => e.id === n);
            null != r && s(r, t) && u(e, { ...l, annotations: l.annotations.filter((e) => e.id !== n) });
        },
        mB: function (e) {
            i.has(e) && u(e, r);
        },
        pV: function (e, t, n, l) {
            let r = o(e),
                i = r.annotations.find((e) => e.id === n);
            null != i &&
                s(i, t) &&
                u(e, { ...r, annotations: r.annotations.map((e) => (e.id === n ? { ...e, comment: l } : e)) });
        },
        qX: function (e) {
            let t = o(e);
            t.active && u(e, { ...t, active: !1 });
        },
        rt: function (e) {
            let t = l.useCallback(() => (null == e ? r : o(e)), [e]);
            return l.useSyncExternalStore(c, t, t);
        },
        w4: function (e) {
            let t = o(e);
            t.active || u(e, { ...t, active: !0 });
        },
    },
);
