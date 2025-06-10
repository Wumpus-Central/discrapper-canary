a.d(e, {
    Qy: () => O,
    TM: () => g,
    Tb: () => s,
    YA: () => A,
    av: () => f,
    cg: () => y,
    dk: () => h,
    eN: () => u,
    eW: () => T,
    mG: () => N,
    rJ: () => R,
    sU: () => d,
    uT: () => l,
    v: () => I,
    xv: () => L,
    yj: () => D,
    yl: () => p
});
var r = a(622916),
    _ = a(899517),
    n = a(559508),
    o = a(263449),
    i = a(255768),
    c = a(112797),
    E = a(822578);
function s(t, e) {
    return (0, o.nZ)().captureException(t, (0, E.U0)(e));
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
function N(t) {
    (0, o.aF)().setTags(t);
}
function A(t, e) {
    (0, o.aF)().setTag(t, e);
}
function f(t) {
    (0, o.aF)().setUser(t);
}
function T() {
    return (0, o.aF)().lastEventId();
}
async function p(t) {
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
        { release: i, environment: E = n.J } = (e && e.getOptions()) || {},
        { userAgent: s } = _.n.navigator || {},
        l = (0, c.Hv)({
            release: i,
            environment: E,
            user: r.getUser() || a.getUser(),
            ...(s && { userAgent: s }),
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
function y(t = !1) {
    if (t) return void g();
    P();
}
