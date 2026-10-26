function i(e, t) {
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
function r(e, t) {
    return JSON.stringify(e) === JSON.stringify(t);
}
function s(e, t) {
    return t ?? ("checkbox" !== e.type && null);
}
function l(e, t) {
    if (0 === Object.keys(t).length) return {};
    let n = {};
    for (let i of Object.keys(t)) {
        let t = e.find((e) => e.key === i)?.hosts;
        null != t && t.length > 0 && (n[i] = t);
    }
    return { secrets: t, ...(Object.keys(n).length > 0 ? { hosts: n } : {}) };
}
function a(e, t) {
    let n = { ...e };
    for (let [e, i] of Object.entries(t ?? {})) null == i ? delete n[e] : (n[e] = i);
    return n;
}
n.d(t, { KZ: () => s, Nc: () => r, Ui: () => i, mU: () => l, yj: () => a });
