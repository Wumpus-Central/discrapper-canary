function r(e, t) {
    if ("number" === e.type) {
        if ("number" == typeof t) return t;
        let e = String(t).trim();
        if ("" === e) return null;
        let n = Number(e.replace(",", "."));
        return Number.isFinite(n) ? n : void 0;
    }
    if (!0 === e.multiple) {
        let n = Array.isArray(t)
            ? t
            : String(t)
                  .split(/[\s,]+/)
                  .filter((e) => "" !== e);
        return 0 === n.length ? ("game" === e.type && Array.isArray(t) ? [] : null) : n;
    }
    return "string" == typeof t && "" === t.trim() ? null : t;
}
function s(e, t, n) {
    return !0 !== t.per_server ? e?.values[t.key] : null == n ? void 0 : e?.server_values?.[n]?.[t.key];
}
function i(e, t) {
    let n = { ...e };
    for (let [e, r] of Object.entries(t ?? {})) null == r ? delete n[e] : (n[e] = r);
    return n;
}
n.d(
    t,
    {},
    {
        $c: function (e, t) {
            return !0 === e.per_server && null != t ? `${t}:${e.key}` : e.key;
        },
        DG: function (e, t) {
            let n = {},
                i = {};
            for (let [a, u] of Object.entries(t)) {
                var l;
                let t = a.indexOf(":"),
                    c = -1 === t ? null : a.slice(0, t),
                    o = a.slice(t + 1),
                    f = e?.schema.find((e) => e.key === o);
                if (null == f || (!0 === f.per_server) != (null != c)) continue;
                let h = r(f, u),
                    d = s(e, f, c);
                void 0 === h ||
                    ((l = d ?? ("checkbox" !== f.type && null)), JSON.stringify(h) === JSON.stringify(l)) ||
                    (null == c ? (n[o] = h) : (i[c] = { ...i[c], [o]: h }));
            }
            return {
                ...(Object.keys(n).length > 0 ? { values: n } : {}),
                ...(Object.keys(i).length > 0 ? { server_values: i } : {}),
            };
        },
        De: function (e, t) {
            return (
                !0 === t.per_server ? Object.values(e.server_values ?? {}).map((e) => e[t.key]) : [e.values[t.key]]
            ).find((e) => null != e && "" !== e);
        },
        Ui: r,
        mU: function (e, t) {
            if (0 === Object.keys(t).length) return {};
            let n = {};
            for (let r of Object.keys(t)) {
                let t = e.find((e) => e.key === r)?.hosts;
                null != t && t.length > 0 && (n[r] = t);
            }
            return { secrets: t, ...(Object.keys(n).length > 0 ? { hosts: n } : {}) };
        },
        n1: function (e, t) {
            let n = { ...e };
            for (let e of Object.keys(t ?? {})) n[e] = i(n[e] ?? {}, t?.[e]);
            return n;
        },
        pn: s,
        yj: i,
    },
);
