r.d(t, {
    Qy: () => D,
    TM: () => C,
    Tb: () => E,
    YA: () => T,
    av: () => A,
    cg: () => g,
    dk: () => h,
    eN: () => u,
    eW: () => N,
    mG: () => R,
    rJ: () => I,
    sU: () => p,
    uT: () => l,
    v: () => d,
    xv: () => O,
    yj: () => S,
    yl: () => f,
});
var n = r(98076),
    a = r(606093),
    i = r(180932),
    o = r(509440),
    _ = r(4757),
    s = r(180710),
    c = r(392841);
function E(e, t) {
    return (0, o.nZ)().captureException(e, (0, c.U0)(t));
}
function l(e, t) {
    let r = "string" == typeof t ? t : void 0,
        n = "string" != typeof t ? { captureContext: t } : void 0;
    return (0, o.nZ)().captureMessage(e, r, n);
}
function u(e, t) {
    return (0, o.nZ)().captureEvent(e, t);
}
function d(e, t) {
    (0, o.aF)().setContext(e, t);
}
function I(e) {
    (0, o.aF)().setExtras(e);
}
function p(e, t) {
    (0, o.aF)().setExtra(e, t);
}
function R(e) {
    (0, o.aF)().setTags(e);
}
function T(e, t) {
    (0, o.aF)().setTag(e, t);
}
function A(e) {
    (0, o.aF)().setUser(e);
}
function N() {
    return (0, o.aF)().lastEventId();
}
async function f(e) {
    let t = (0, o.s3)();
    return t ? t.flush(e) : (_.X && n.kg.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
}
async function O(e) {
    let t = (0, o.s3)();
    return t
        ? t.close(e)
        : (_.X && n.kg.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1));
}
function h() {
    return !!(0, o.s3)();
}
function D(e) {
    (0, o.aF)().addEventProcessor(e);
}
function S(e) {
    let t = (0, o.s3)(),
        r = (0, o.aF)(),
        n = (0, o.nZ)(),
        { release: _, environment: c = i.J } = (t && t.getOptions()) || {},
        { userAgent: E } = a.n.navigator || {},
        l = (0, s.Hv)({
            release: _,
            environment: c,
            user: n.getUser() || r.getUser(),
            ...(E && { userAgent: E }),
            ...e,
        }),
        u = r.getSession();
    return u && "ok" === u.status && (0, s.CT)(u, { status: "exited" }), C(), r.setSession(l), n.setSession(l), l;
}
function C() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        r = t.getSession() || e.getSession();
    r && (0, s.RJ)(r), L(), e.setSession(), t.setSession();
}
function L() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        r = (0, o.s3)(),
        n = t.getSession() || e.getSession();
    n && r && r.captureSession(n);
}
function g(e = !1) {
    if (e) return void C();
    L();
}
