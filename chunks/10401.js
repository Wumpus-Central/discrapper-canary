n.d(t, { Z: () => y }), n(47120);
var r,
    i = n(873546),
    l = n(442837),
    o = n(570140),
    a = n(38618),
    s = n(268967),
    c = n(188785);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let h = {},
    f = {},
    m = !0,
    g = {},
    b = !1;
function _() {
    if (((g = {}), !m))
        for (let [e, t] of Object.entries(s.Z)) {
            let n = !1 !== h[e];
            if (((g[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== h[n] && (g[e] = !1);
        }
}
class C extends (r = l.ZP.Store) {
    initialize() {
        _(), this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(a.Z);
    }
    shouldShow(e) {
        return !(!b || m || c.a || (i.tq && ['writing-messages', 'organize-by-topic'].includes(e))) && (g[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !m;
    }
    getIndicators() {
        return f;
    }
    getData() {
        return s.Z;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
u(C, 'displayName', 'TutorialIndicatorStore');
let y = new C(o.Z, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (b = !0), (m = !0), (h = {}), null != t && ((m = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (h[e] = !1))), _();
    },
    CONNECTION_CLOSED: function () {
        b = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (h = p(d({}, h), { [e.tutorialId]: !1 })), (f = d({}, f)), delete f[e.tutorialId], _();
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        f = p(d({}, f), { [e.tutorialId]: e.renderData });
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        (f = d({}, f)), delete f[e.tutorialId];
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        m = !0;
    }
});
