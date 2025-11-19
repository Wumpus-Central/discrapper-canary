_.d(e, {
    Qy: () => C,
    TM: () => h,
    Tb: () => s,
    YA: () => T,
    av: () => d,
    cg: () => S,
    dk: () => p,
    eN: () => I,
    eW: () => f,
    mG: () => u,
    rJ: () => N,
    sU: () => A,
    uT: () => l,
    v: () => R,
    xv: () => L,
    yj: () => P,
    yl: () => O,
});
var a = _(622916),
    r = _(899517),
    n = _(559508),
    o = _(263449),
    E = _(255768),
    i = _(112797),
    c = _(822578);
function s(t, e) {
    return (0, o.nZ)().captureException(t, (0, c.U0)(e));
}
function l(t, e) {
    let _ = "string" == typeof e ? e : void 0,
        a = "string" != typeof e ? { captureContext: e } : void 0;
    return (0, o.nZ)().captureMessage(t, _, a);
}
function I(t, e) {
    return (0, o.nZ)().captureEvent(t, e);
}
function R(t, e) {
    (0, o.aF)().setContext(t, e);
}
function N(t) {
    (0, o.aF)().setExtras(t);
}
function A(t, e) {
    (0, o.aF)().setExtra(t, e);
}
function u(t) {
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
async function O(t) {
    let e = (0, o.s3)();
    return e ? e.flush(t) : (E.X && a.kg.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
}
async function L(t) {
    let e = (0, o.s3)();
    return e
        ? e.close(t)
        : (E.X && a.kg.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1));
}
function p() {
    return !!(0, o.s3)();
}
function C(t) {
    (0, o.aF)().addEventProcessor(t);
}
function P(t) {
    let e = (0, o.s3)(),
        _ = (0, o.aF)(),
        a = (0, o.nZ)(),
        { release: E, environment: c = n.J } = (e && e.getOptions()) || {},
        { userAgent: s } = r.n.navigator || {},
        l = (0, i.Hv)({
            release: E,
            environment: c,
            user: a.getUser() || _.getUser(),
            ...(s && { userAgent: s }),
            ...t,
        }),
        I = _.getSession();
    return I && "ok" === I.status && (0, i.CT)(I, { status: "exited" }), h(), _.setSession(l), a.setSession(l), l;
}
function h() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        _ = e.getSession() || t.getSession();
    _ && (0, i.RJ)(_), D(), t.setSession(), e.setSession();
}
function D() {
    let t = (0, o.aF)(),
        e = (0, o.nZ)(),
        _ = (0, o.s3)(),
        a = e.getSession() || t.getSession();
    a && _ && _.captureSession(a);
}
function S(t = !1) {
    if (t) return void h();
    D();
}
