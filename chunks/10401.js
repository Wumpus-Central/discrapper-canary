n.d(t, { Z: () => R }), n(388685);
var r,
    i = n(873546),
    o = n(442837),
    a = n(570140),
    s = n(38618),
    l = n(268967),
    c = n(188785);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = {},
    h = {},
    m = !0,
    g = {},
    E = !1;
function b() {
    return l.Z;
}
function y() {
    if (((g = {}), !m))
        for (let [e, t] of Object.entries(b())) {
            let n = !1 !== p[e];
            if (((g[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== p[n] && (g[e] = !1);
        }
}
function O(e) {
    (p = _(d({}, p), { [e.tutorialId]: !1 })), (h = d({}, h)), delete h[e.tutorialId], y();
}
function v(e) {
    h = _(d({}, h), { [e.tutorialId]: e.renderData });
}
function I(e) {
    (h = d({}, h)), delete h[e.tutorialId];
}
function T() {
    m = !0;
}
function S(e) {
    let { tutorial: t } = e;
    (E = !0),
        (m = !0),
        (p = {}),
        null != t && ((m = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (p[e] = !1))),
        y();
}
function A() {
    E = !1;
}
function N(e) {
    return i.tq && ["writing-messages", "organize-by-topic"].includes(e);
}
class C extends (r = o.ZP.Store) {
    initialize() {
        y(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(s.Z);
    }
    shouldShow(e) {
        return !(!E || m || c.a || N(e)) && (g[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !m;
    }
    getIndicators() {
        return h;
    }
    getData() {
        return b();
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
u(C, "displayName", "TutorialIndicatorStore");
let R = new C(a.Z, {
    CONNECTION_OPEN: S,
    CONNECTION_CLOSED: A,
    TUTORIAL_INDICATOR_DISMISS: O,
    TUTORIAL_INDICATOR_SHOW: v,
    TUTORIAL_INDICATOR_HIDE: I,
    TUTORIAL_INDICATOR_SUPPRESS_ALL: T,
});
