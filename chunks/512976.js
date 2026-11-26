var n = l(661095);
function a(e, t) {
    let l = t.schema.find((t) => t.key === e),
        a = t.secrets.find((t) => t.name === e);
    return null != a || l?.type === "secret"
        ? { kind: "secret", filled: a?.set === !0, def: l }
        : null == l
          ? null
          : { kind: "value", filled: null != (0, n.De)(t, l), def: l };
}
function r(e) {
    return [...new Set(e ?? [])];
}
function i(e) {
    return "secret" === e.kind || (!0 === e.def.required && !0 !== e.def.per_server);
}
l.d(
    t,
    {},
    {
        C3: function (e, t, l) {
            if (null == t) return 0;
            let n = r(e.keys).flatMap((e) => a(e, t) ?? []),
                s = n.filter(i);
            return s.length > 0
                ? s.filter((e) => !e.filled).length
                : l || 0 === (null == t ? [] : r(e.keys).filter((e) => a(e, t)?.filled === !1)).length
                  ? 0
                  : n.length;
        },
        CK: r,
        Fk: a,
        Nx: function (e, t) {
            let l = e.filter((e) => a(e, t)?.kind === "secret"),
                n = e.filter((e) => a(e, t)?.kind === "value");
            return { secretKeys: l, valueKeys: n, sectioned: l.length > 0 && n.length > 0 };
        },
        ZX: i,
        f8: function (e, t) {
            let l = r(e.keys);
            return l.length > 0 ? l : t.schema.map((e) => e.key);
        },
        xn: function (e, t) {
            if (null == t) return "button";
            let l = r(e.keys).flatMap((e) => a(e, t) ?? []);
            return 0 === l.length || l.length > 2 || l.some((e) => "secret" === e.kind) ? "button" : "inline";
        },
    },
);
