function r(e, t, n) {
    return !0 !== t.per_server ? e?.values[t.key] : null == n ? void 0 : e?.server_values?.[n]?.[t.key];
}
function s(e, t) {
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
                s = {};
            for (let [l, a] of Object.entries(t)) {
                var i;
                let t = l.indexOf(":"),
                    u = -1 === t ? null : l.slice(0, t),
                    c = l.slice(t + 1),
                    o = e?.schema.find((e) => e.key === c);
                if (null == o || (!0 === o.per_server) != (null != u)) continue;
                let f = (function (e, t) {
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
                    })(o, a),
                    h = r(e, o, u);
                void 0 === f ||
                    ((i = h ?? ("checkbox" !== o.type && null)), JSON.stringify(f) === JSON.stringify(i)) ||
                    (null == u ? (n[c] = f) : (s[u] = { ...s[u], [c]: f }));
            }
            return {
                ...(Object.keys(n).length > 0 ? { values: n } : {}),
                ...(Object.keys(s).length > 0 ? { server_values: s } : {}),
            };
        },
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
            for (let e of Object.keys(t ?? {})) n[e] = s(n[e] ?? {}, t?.[e]);
            return n;
        },
        pn: r,
        yj: s,
    },
);
