"use strict";
n.d(t, { A: () => h });
var r = n(607399),
    i = n(311907),
    s = n(73153),
    a = n(142120),
    o = n(253595);
n(436317);
let l = {},
    u = {},
    c = !0,
    d = {},
    _ = !1;
function f() {
    if (((d = {}), !c))
        for (let [e, t] of Object.entries(o.A)) {
            let n = !1 !== l[e];
            if (((d[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== l[n] && (d[e] = !1);
        }
}
class p extends i.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        f(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(a.A);
    }
    shouldShow(e) {
        return !(!_ || c || (r.Fr && ["writing-messages", "organize-by-topic"].includes(e))) && (d[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !c;
    }
    getIndicators() {
        return u;
    }
    getData() {
        return o.A;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
let h = new p(s.h, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (_ = !0),
            (c = !0),
            (l = {}),
            null != t && ((c = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (l[e] = !1))),
            f();
    },
    CONNECTION_CLOSED: function () {
        _ = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (l = { ...l, [e.tutorialId]: !1 }), (u = { ...u }), delete u[e.tutorialId], f();
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        u = { ...u, [e.tutorialId]: e.renderData };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        (u = { ...u }), delete u[e.tutorialId];
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        c = !0;
    },
});
