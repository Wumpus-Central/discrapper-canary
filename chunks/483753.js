function r(e, t) {
    return "object" == typeof e ? JSON.stringify(e) === JSON.stringify(t) : e === t;
}
function i(e, t) {
    return null != t && (t instanceof Set ? t.has(e) : r(e, t));
}
function a(e, t, n) {
    let r = new Set(t);
    return t.has(n) ? r.delete(n) : "multiple" === e ? r.add(n) : (r = new Set([n])), r;
}
function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "listbox",
        t = arguments.length > 1 ? arguments[1] : void 0;
    return "".concat(e, "-option-").concat(t);
}
n.d(t, {
    cA: () => o,
    tw: () => i,
    xj: () => a,
}),
    n(49124),
    n(388685);
