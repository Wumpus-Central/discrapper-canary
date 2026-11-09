var r = n(582128);
n(71637);
let l = Object.freeze({ active: !1, annotations: Object.freeze([]), context: null }),
    i = new Map(),
    a = new Set();
function o(t) {
    return i.get(t) ?? l;
}
function u(t, e) {
    for (let n of (e.active || 0 !== e.annotations.length ? i.set(t, e) : i.delete(t), [...a]))
        try {
            n();
        } catch (t) {
            console.error("[conjure] design feedback subscriber threw", t);
        }
}
function s(t, e) {
    return null != e && t.authorId === e;
}
function c(t) {
    return (
        a.add(t),
        () => {
            a.delete(t);
        }
    );
}
n.d(
    e,
    {},
    {
        AW: function (t, e) {
            let n = o(t);
            n.active &&
                0 !== e.size &&
                u(t, {
                    ...n,
                    annotations: n.annotations.map((t) => {
                        let n = e.get(t.id);
                        return null == n ? t : { ...t, target: n };
                    }),
                });
        },
        F5: function (t, e) {
            let n = o(t);
            n.active && u(t, { ...n, context: e });
        },
        It: s,
        _c: o,
        aC: function (t, e, n) {
            let r = o(t),
                l = r.annotations.find((t) => t.id === n);
            null != l && s(l, e) && u(t, { ...r, annotations: r.annotations.filter((t) => t.id !== n) });
        },
        mB: function (t) {
            i.has(t) && u(t, l);
        },
        pV: function (t, e, n, r) {
            let l = o(t),
                i = l.annotations.find((t) => t.id === n);
            null != i &&
                s(i, e) &&
                u(t, { ...l, annotations: l.annotations.map((t) => (t.id === n ? { ...t, comment: r } : t)) });
        },
        qX: function (t) {
            let e = o(t);
            e.active && u(t, { ...e, active: !1 });
        },
        rt: function (t) {
            let e = r.useCallback(() => (null == t ? l : o(t)), [t]);
            return r.useSyncExternalStore(c, e, e);
        },
        w4: function (t) {
            let e = o(t);
            e.active || u(t, { ...e, active: !0 });
        },
    },
);
