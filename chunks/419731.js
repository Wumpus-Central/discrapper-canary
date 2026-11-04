var i = n(342442);
function r(e) {
    if (null == e) return null;
    let t = Date.parse(e);
    return Number.isNaN(t) ? null : t;
}
function a(e, t) {
    if (null == t) return !1;
    let n = r(e?.updated_at);
    return null != n && n > t;
}
n.d(
    t,
    {},
    {
        CJ: function (e) {
            if (null == e) return;
            let t = {};
            for (let n of Object.values(i.o)) {
                let i = r(e.sections[n]?.acked_at);
                null != i && (t[n] = i);
            }
            return t;
        },
        L2: a,
        R8: function (e, t) {
            if (null == e || null == t) return t ?? e;
            let n = { ...e };
            for (let e of Object.values(i.o)) {
                let i = t[e];
                null != i && i > (n[e] ?? 0) && (n[e] = i);
            }
            return n;
        },
        f3: function (e, t) {
            let n = r(e);
            return null != n && null != t && n > t;
        },
        uM: function (e, t) {
            if (null == t) return !1;
            let n = t[i.o.WISHLIST];
            return null == n || a(e, n);
        },
    },
);
