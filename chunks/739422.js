"use strict";
n.d(t, { HM: () => l, Q6: () => a, XG: () => c, tH: () => o, u_: () => u }), n(321073);
var r = n(351906),
    i = n(822382),
    s = n(652215);
function a() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A];
    return !e.hidePersonalInformation;
}
function o() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [r.A];
    return !e.hidePersonalInformation;
}
function l(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.A];
    return !!(0, i._B)(e) || (e.type === s.I4_.DMS && !t.hidePersonalInformation);
}
function u(e, t) {
    let [n] = t,
        r = [];
    return (
        a([n]) && r.push(s.LWr.FILTER_FROM),
        l(e, [n]) && r.push(s.LWr.FILTER_IN),
        r.push(s.LWr.FILTER_HAS),
        o([n]) && r.push(s.LWr.FILTER_MENTIONS),
        r.push(s.LWr.FILTER_ON),
        r.push(s.LWr.FILTER_BEFORE),
        r.push(s.LWr.FILTER_AFTER),
        r.push(s.LWr.FILTER_AUTHOR_TYPE),
        r.push(s.LWr.FILTER_PINNED),
        r
    );
}
function c(e, t) {
    return new Set(u(e, t));
}
