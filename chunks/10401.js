n.d(t, { Z: () => P }), n(388685);
var r,
    i = n(873546),
    a = n(442837),
    o = n(570140),
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
function p(e, t) {
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
let _ = {},
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
            let n = !1 !== _[e];
            if (((g[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== _[n] && (g[e] = !1);
        }
}
function O(e) {
    (_ = p(d({}, _), { [e.tutorialId]: !1 })), (h = d({}, h)), delete h[e.tutorialId], y();
}
function v(e) {
    h = p(d({}, h), { [e.tutorialId]: e.renderData });
}
function S(e) {
    (h = d({}, h)), delete h[e.tutorialId];
}
function I() {
    m = !0;
}
function T(e) {
    let { tutorial: t } = e;
    (E = !0),
        (m = !0),
        (_ = {}),
        null != t && ((m = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (_[e] = !1))),
        y();
}
function C() {
    E = !1;
}
function A(e) {
    return i.tq && ["writing-messages", "organize-by-topic"].includes(e);
}
class N extends (r = a.ZP.Store) {
    initialize() {
        y(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(s.Z);
    }
    shouldShow(e) {
        return !(!E || m || c.aA || A(e)) && (g[e] || !1);
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
u(N, "displayName", "TutorialIndicatorStore");
let P = new N(o.Z, {
    CONNECTION_OPEN: T,
    CONNECTION_CLOSED: C,
    TUTORIAL_INDICATOR_DISMISS: O,
    TUTORIAL_INDICATOR_SHOW: v,
    TUTORIAL_INDICATOR_HIDE: S,
    TUTORIAL_INDICATOR_SUPPRESS_ALL: I,
});
