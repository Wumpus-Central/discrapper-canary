"use strict";
n.d(t, { IF: () => d, QN: () => o, YC: () => s, ai: () => l });
var i = n(349828),
    r = n(652215),
    a = n(375708);
function s(e) {
    if (null != e) return l(e.id) ? a.intl.string(a.t.wMWyci) : e.name;
}
function l(e) {
    return e === i.Vc || e === r.YYv;
}
function o(e) {
    return "" !== e.trim();
}
function d(e, t) {
    return !e.isCategory() && (!e.isThread() || t);
}
