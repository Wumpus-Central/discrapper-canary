i.d(t, { a: () => d, i: () => c, n: () => l, o: () => o, r: () => a, s: () => s, t: () => h });
let r = null,
    n = null;
function o(e) {
    r = e;
}
function s(e) {
    n = e;
}
function a() {
    return n;
}
function l() {
    if (!r) throw Error('SDK not configured. Call setup({ apiURL: "..." }) first.');
    return r;
}
function c() {
    return null !== r;
}
function d() {
    (r = null), (n = null);
}
function u(e) {
    return n ? { ...e, headers: { ...e?.headers, "X-Incode-Hardware-Id": n } } : (e ?? {});
}
let h = {
    get: (e, t) => l().get(e, u(t)),
    post: (e, t, i) => l().post(e, t, u(i)),
    put: (e, t, i) => l().put(e, t, u(i)),
    patch: (e, t, i) => l().patch(e, t, u(i)),
    delete: (e, t) => l().delete(e, u(t)),
};
