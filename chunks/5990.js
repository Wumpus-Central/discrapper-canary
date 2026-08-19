"use strict";
n.d(t, { HM: () => o, Q6: () => s, XG: () => c, tH: () => l, u_: () => d }), n(321073);
var i = n(351906),
    r = n(822382),
    a = n(652215);
function s() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.A];
    return !e.hidePersonalInformation;
}
function l() {
    let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [i.A];
    return !e.hidePersonalInformation;
}
function o(e) {
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.A];
    return !!(0, r._B)(e) || (e.type === a.I4_.DMS && !t.hidePersonalInformation);
}
function d(e, t) {
    let [n] = t,
        i = [];
    return (
        s([n]) && i.push(a.LWr.FILTER_FROM),
        o(e, [n]) && i.push(a.LWr.FILTER_IN),
        i.push(a.LWr.FILTER_HAS),
        l([n]) && i.push(a.LWr.FILTER_MENTIONS),
        i.push(a.LWr.FILTER_ON),
        i.push(a.LWr.FILTER_BEFORE),
        i.push(a.LWr.FILTER_AFTER),
        i.push(a.LWr.FILTER_AUTHOR_TYPE),
        i.push(a.LWr.FILTER_PINNED),
        i
    );
}
function c(e, t) {
    return new Set(d(e, t));
}
