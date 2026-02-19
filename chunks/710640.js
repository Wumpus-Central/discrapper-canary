"use strict";
n.d(t, { fo: () => a, uW: () => r, vr: () => c, z0: () => o });
var i = n(753738),
    s = n(985018);
function l(e, t) {
    return { type: e, message: t ?? null };
}
function r() {
    return l(0, s.intl.string(s.t.uXA573));
}
function a() {
    return l(0, s.intl.string(s.t.kesTVT));
}
function o(e, t) {
    return l(1, (0, i.cw)(e, t?.id));
}
function c(e, t) {
    return null == e || (0 === e.type && null != t.content && t.content.trim().length > 0) ? null : (e.message ?? null);
}
