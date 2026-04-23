"use strict";
n.d(t, { R0: () => d, fo: () => r, uW: () => i, vr: () => c, z0: () => o });
var l = n(753738),
    a = n(985018);
function s(e, t) {
    return { type: e, message: t ?? null };
}
function i() {
    return s(0, a.intl.string(a.t["71wuR0"]));
}
function r() {
    return s(0, a.intl.string(a.t["w/BT3G"]));
}
function o(e, t) {
    return s(1, (0, l.cw)(e, t?.id));
}
function d() {
    return s(3, a.intl.string(a.t["71wuR0"]));
}
function c(e, t) {
    return null == e ||
        (0 === e.type && null != t.content && t.content.trim().length > 0) ||
        (2 === e.type && null != t.tags && t.tags.length > 0)
        ? null
        : (e.message ?? null);
}
