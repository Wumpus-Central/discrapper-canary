a.d(e, {
    Qy: () => h,
    TM: () => C,
    Tb: () => s,
    YA: () => T,
    av: () => d,
    cg: () => g,
    dk: () => O,
    eN: () => I,
    eW: () => f,
    mG: () => N,
    rJ: () => u,
    sU: () => A,
    uT: () => l,
    v: () => R,
    xv: () => p,
    yj: () => P,
    yl: () => L,
});
var r = a(622916),
    _ = a(899517),
    n = a(559508),
    o = a(263449),
    i = a(255768),
    E = a(112797),
    c = a(822578);
function s(t, e) {
    return (0, o.nZ)().captureException(t, (0, c.U0)(e));
}
function l(t, e) {
    let a = "string" == typeof e ? e : void 0,
        r = "string" != typeof e ? { captureContext: e } : void 0;
    return (0, o.nZ)().captureMessage(t, a, r);
}
function I(t, e) {
    return (0, o.nZ)().captureEvent(t, e);
}
function R(t, e) {
    (0, o.aF)().setContext(t, e);
}
function u(t) {
    (0, o.aF)().setExtras(t);
}
function A(t, e) {
    (0, o.aF)().setExtra(t, e);
}
function N(t) {
    (0, o.aF)().setTags(t);
}
function T(t, e) {
    (0, o.aF)().setTag(t, e);
}
function d(t) {
    (0, o.aF)().setUser(t);
}
function f() {
    return (0, o.aF)().lastEventId();
}
async function L(t) {
    let e = (0, o.s3)();
    return e ? e.flush(t) : (i.X && r.kg.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
}
async function p(t) {
    let e = (0, o.s3)();
    return e
        ? e.close(t)
        : (i.X && r.kg.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1));
}
function O() {
    return !!(0, o.s3)();
}
function h(t) {
    (0, o.aF)().addEventProcessor(t);
}
function P(t) {
    let e = (0, o.s3)(),
        a = (0, o.aF)(),
        r = (0, o.nZ)(),
        { release: i, environment: c = n.J } = (e && e.getOptions()) || {},
        { userAgent: s } = _.n.navigator || {},
        l = (0, E.Hv)({
            release: i,
            environment: c,
            user: r.getUser() || a.getUser(),
            ...(s && { userAgent: s }),
            ...t,
        }),
        I = a.getSession();
    return I && "ok" === I.status && (0, E.CT)(I, { status: "exited" }), C(), a.setSession(l), r.setSession(l), l;
}
function C() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        a = e.getSession() || t.getSession();
    a && (0, E.RJ)(a), D(), t.setSession(), e.setSession();
}
function D() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        a = (0, o.s3)(),
        r = e.getSession() || t.getSession();
    r && a && a.captureSession(r);
}
function g(t = !1) {
    if (t) return void C();
    D();
}
