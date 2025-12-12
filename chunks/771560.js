n.d(t, {
    Qy: () => S,
    TM: () => g,
    Tb: () => E,
    YA: () => T,
    av: () => R,
    cg: () => D,
    dk: () => O,
    eN: () => u,
    eW: () => A,
    mG: () => I,
    rJ: () => p,
    sU: () => f,
    uT: () => l,
    v: () => d,
    xv: () => h,
    yj: () => L,
    yl: () => N,
});
var r = n(98076),
    i = n(606093),
    a = n(180932),
    o = n(509440),
    _ = n(4757),
    s = n(180710),
    c = n(392841);
function E(e, t) {
    return (0, o.nZ)().captureException(e, (0, c.U0)(t));
}
function l(e, t) {
    let n = "string" == typeof t ? t : void 0,
        r = "string" != typeof t ? { captureContext: t } : void 0;
    return (0, o.nZ)().captureMessage(e, n, r);
}
function u(e, t) {
    return (0, o.nZ)().captureEvent(e, t);
}
function d(e, t) {
    (0, o.aF)().setContext(e, t);
}
function p(e) {
    (0, o.aF)().setExtras(e);
}
function f(e, t) {
    (0, o.aF)().setExtra(e, t);
}
function I(e) {
    (0, o.aF)().setTags(e);
}
function T(e, t) {
    (0, o.aF)().setTag(e, t);
}
function R(e) {
    (0, o.aF)().setUser(e);
}
function A() {
    return (0, o.aF)().lastEventId();
}
async function N(e) {
    let t = (0, o.s3)();
    return t ? t.flush(e) : (_.X && r.kg.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
}
async function h(e) {
    let t = (0, o.s3)();
    return t
        ? t.close(e)
        : (_.X && r.kg.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1));
}
function O() {
    return !!(0, o.s3)();
}
function S(e) {
    (0, o.aF)().addEventProcessor(e);
}
function L(e) {
    let t = (0, o.s3)(),
        n = (0, o.aF)(),
        r = (0, o.nZ)(),
        { release: _, environment: c = a.J } = (t && t.getOptions()) || {},
        { userAgent: E } = i.n.navigator || {},
        l = (0, s.Hv)({
            release: _,
            environment: c,
            user: r.getUser() || n.getUser(),
            ...(E && { userAgent: E }),
            ...e,
        }),
        u = n.getSession();
    return u && "ok" === u.status && (0, s.CT)(u, { status: "exited" }), g(), n.setSession(l), r.setSession(l), l;
}
function g() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        n = t.getSession() || e.getSession();
    n && (0, s.RJ)(n), m(), e.setSession(), t.setSession();
}
function m() {
    let e = (0, o.aF)(),
        t = (0, o.nZ)(),
        n = (0, o.s3)(),
        r = t.getSession() || e.getSession();
    r && n && n.captureSession(r);
}
function D(e = !1) {
    if (e) return void g();
    m();
}
