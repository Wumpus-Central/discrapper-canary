n.d(t, { T4: () => o, fo: () => r, uW: () => a, vr: () => d, z0: () => c });
var i = n(753738),
    l = n(985018);
function s(e, t) {
    return { type: e, message: t ?? null };
}
function a() {
    return s(0, l.intl.string(l.t.uXA573));
}
function r() {
    return s(0, l.intl.string(l.t.kesTVT));
}
function o() {
    return s(2, l.intl.string(l.t.uXA573));
}
function c(e, t) {
    return s(1, (0, i.cw)(e, t?.id));
}
function d(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
