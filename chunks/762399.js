function i(e, t, n) {
    return "object" == typeof e && null != e && e.type === t && e.id === n;
}
n.d(t, { YX: () => i, d5: () => l, fq: () => r });
class r extends Error {
    constructor(e, t) {
        (super(`preview frame did not answer ${e} within ${t}ms`), (this.name = "PreviewFrameCallTimeout"));
    }
}
function l(e) {
    let t = e.timeoutMs;
    return ("number" == typeof t && isFinite(t) && t > 0 ? Math.min(Math.floor(t), 2e4) : 5e3) + 4e3;
}
