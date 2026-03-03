"use strict";
n.d(t, { T4: () => o, fo: () => r, uW: () => a, vr: () => d, z0: () => c });
var i = n(753738),
    s = n(985018);
function l(e, t) {
    return { type: e, message: t ?? null };
}
function a() {
    return l(0, s.intl.string(s.t.uXA573));
}
function r() {
    return l(0, s.intl.string(s.t.kesTVT));
}
function o() {
    return l(2, s.intl.string(s.t.uXA573));
}
function c(e, t) {
    return l(1, (0, i.cw)(e, t?.id));
}
function d(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
