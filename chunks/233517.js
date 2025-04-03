a.d(e, {
    Qy: () => O,
    TM: () => g,
    Tb: () => E,
    YA: () => f,
    av: () => p,
    cg: () => m,
    dk: () => h,
    eN: () => u,
    eW: () => N,
    mG: () => A,
    rJ: () => R,
    sU: () => d,
    uT: () => l,
    v: () => I,
    xv: () => L,
    yj: () => D,
    yl: () => T
});
var r = a(622916),
    n = a(899517),
    _ = a(559508),
    o = a(263449),
    i = a(255768),
    c = a(112797),
    s = a(822578);
function E(t, e) {
    return (0, o.nZ)().captureException(t, (0, s.U0)(e));
}
function l(t, e) {
    let a = 'string' == typeof e ? e : void 0,
        r = 'string' != typeof e ? { captureContext: e } : void 0;
    return (0, o.nZ)().captureMessage(t, a, r);
}
function u(t, e) {
    return (0, o.nZ)().captureEvent(t, e);
}
function I(t, e) {
    (0, o.aF)().setContext(t, e);
}
function R(t) {
    (0, o.aF)().setExtras(t);
}
function d(t, e) {
    (0, o.aF)().setExtra(t, e);
}
function A(t) {
    (0, o.aF)().setTags(t);
}
function f(t, e) {
    (0, o.aF)().setTag(t, e);
}
function p(t) {
    (0, o.aF)().setUser(t);
}
function N() {
    return (0, o.aF)().lastEventId();
}
async function T(t) {
    let e = (0, o.s3)();
    return e ? e.flush(t) : (i.X && r.kg.warn('Cannot flush events. No client defined.'), Promise.resolve(!1));
}
async function L(t) {
    let e = (0, o.s3)();
    return e ? e.close(t) : (i.X && r.kg.warn('Cannot flush events and disable SDK. No client defined.'), Promise.resolve(!1));
}
function h() {
    return !!(0, o.s3)();
}
function O(t) {
    (0, o.aF)().addEventProcessor(t);
}
function D(t) {
    let e = (0, o.s3)(),
        a = (0, o.aF)(),
        r = (0, o.nZ)(),
        { release: i, environment: s = _.J } = (e && e.getOptions()) || {},
        { userAgent: E } = n.n.navigator || {},
        l = (0, c.Hv)({
            release: i,
            environment: s,
            user: r.getUser() || a.getUser(),
            ...(E && { userAgent: E }),
            ...t
        }),
        u = a.getSession();
    return u && 'ok' === u.status && (0, c.CT)(u, { status: 'exited' }), g(), a.setSession(l), r.setSession(l), l;
}
function g() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        a = e.getSession() || t.getSession();
    a && (0, c.RJ)(a), P(), t.setSession(), e.setSession();
}
function P() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        a = (0, o.s3)(),
        r = e.getSession() || t.getSession();
    r && a && a.captureSession(r);
}
function m(t = !1) {
    if (t) return void g();
    P();
}
