"use strict";
n.d(t, { A: () => f });
var i = n(607399),
    l = n(311907),
    s = n(73153),
    r = n(142120),
    a = n(253595);
n(436317);
let o = {},
    c = {},
    u = !0,
    d = {},
    h = !1;
function m() {
    if (((d = {}), !u))
        for (let [e, t] of Object.entries(a.A)) {
            let n = !1 !== o[e];
            if (((d[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== o[n] && (d[e] = !1);
        }
}
class p extends l.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        m(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(r.A);
    }
    shouldShow(e) {
        return !(!h || u || (i.Fr && ["writing-messages", "organize-by-topic"].includes(e))) && (d[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !u;
    }
    getIndicators() {
        return c;
    }
    getData() {
        return a.A;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
let f = new p(s.h, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (h = !0),
            (u = !0),
            (o = {}),
            null != t && ((u = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (o[e] = !1))),
            m();
    },
    CONNECTION_CLOSED: function () {
        h = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (o = { ...o, [e.tutorialId]: !1 }), (c = { ...c }), delete c[e.tutorialId], m();
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        c = { ...c, [e.tutorialId]: e.renderData };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        (c = { ...c }), delete c[e.tutorialId];
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        u = !0;
    },
});
