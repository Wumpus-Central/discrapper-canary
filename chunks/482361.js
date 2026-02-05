"use strict";
n.d(t, { A: () => S });
var r = n(607399),
    i = n(311907),
    a = n(73153),
    s = n(142120),
    o = n(253595);
n(436317);
let l = {},
    u = {},
    c = !0,
    d = {},
    _ = !1;
function f() {
    return o.A;
}
function p() {
    if (((d = {}), !c))
        for (let [e, t] of Object.entries(f())) {
            let n = !1 !== l[e];
            if (((d[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== l[n] && (d[e] = !1);
        }
}
function h(e) {
    (l = { ...l, [e.tutorialId]: !1 }), (u = { ...u }), delete u[e.tutorialId], p();
}
function m(e) {
    u = { ...u, [e.tutorialId]: e.renderData };
}
function g(e) {
    (u = { ...u }), delete u[e.tutorialId];
}
function E() {
    c = !0;
}
function A(e) {
    let { tutorial: t } = e;
    (_ = !0),
        (c = !0),
        (l = {}),
        null != t && ((c = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (l[e] = !1))),
        p();
}
function I() {
    _ = !1;
}
function T(e) {
    return r.Fr && ["writing-messages", "organize-by-topic"].includes(e);
}
class y extends i.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        p(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(s.A);
    }
    shouldShow(e) {
        return !(!_ || c || T(e)) && (d[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !c;
    }
    getIndicators() {
        return u;
    }
    getData() {
        return f();
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
let S = new y(a.h, {
    CONNECTION_OPEN: A,
    CONNECTION_CLOSED: I,
    TUTORIAL_INDICATOR_DISMISS: h,
    TUTORIAL_INDICATOR_SHOW: m,
    TUTORIAL_INDICATOR_HIDE: g,
    TUTORIAL_INDICATOR_SUPPRESS_ALL: E,
});
