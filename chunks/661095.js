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
function i(e, t) {
    return JSON.stringify(e) === JSON.stringify(t);
}
function s(e, t) {
    return t ?? ("checkbox" !== e.type && null);
}
function l(e, t) {
    if (0 === Object.keys(t).length) return {};
    let n = {};
    for (let r of Object.keys(t)) {
        let t = e.find((e) => e.key === r)?.hosts;
        null != t && t.length > 0 && (n[r] = t);
    }
    return { secrets: t, ...(Object.keys(n).length > 0 ? { hosts: n } : {}) };
}
function a(e, t) {
    let n = { ...e };
    for (let [e, r] of Object.entries(t ?? {})) null == r ? delete n[e] : (n[e] = r);
    return n;
}
n.d(t, { KZ: () => s, Nc: () => i, Ui: () => r, mU: () => l, yj: () => a });
