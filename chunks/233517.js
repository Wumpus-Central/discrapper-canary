a.d(e, {
    Qy: () => h,
    TM: () => P,
    Tb: () => s,
    YA: () => N,
    av: () => d,
    cg: () => C,
    dk: () => O,
    eN: () => I,
    eW: () => L,
    mG: () => T,
    rJ: () => R,
    sU: () => A,
    uT: () => l,
    v: () => u,
    xv: () => f,
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
function I(t, e) {
    return (0, o.nZ)().captureEvent(t, e);
}
function u(t, e) {
    (0, o.aF)().setContext(t, e);
}
function R(t) {
    (0, o.aF)().setExtras(t);
}
function A(t, e) {
    (0, o.aF)().setExtra(t, e);
}
function T(t) {
    (0, o.aF)().setTags(t);
}
function N(t, e) {
    (0, o.aF)().setTag(t, e);
}
function d(t) {
    (0, o.aF)().setUser(t);
}
function L() {
    return (0, o.aF)().lastEventId();
}
async function p(t) {
    let e = (0, o.s3)();
    return e ? e.flush(t) : (i.X && r.kg.warn('Cannot flush events. No client defined.'), Promise.resolve(!1));
}
async function f(t) {
    let e = (0, o.s3)();
    return e ? e.close(t) : (i.X && r.kg.warn('Cannot flush events and disable SDK. No client defined.'), Promise.resolve(!1));
}
function O() {
    return !!(0, o.s3)();
}
function h(t) {
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
        I = a.getSession();
    return I && 'ok' === I.status && (0, c.CT)(I, { status: 'exited' }), P(), a.setSession(l), r.setSession(l), l;
}
function P() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        a = e.getSession() || t.getSession();
    a && (0, c.RJ)(a), g(), t.setSession(), e.setSession();
}
function g() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        a = (0, o.s3)(),
        r = e.getSession() || t.getSession();
    r && a && a.captureSession(r);
}
function C(t = !1) {
    if (t) return void P();
    g();
}
