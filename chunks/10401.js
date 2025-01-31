n.d(t, { Z: () => x }), n(47120);
var i,
    l,
    a,
    r = n(873546),
    s = n(442837),
    o = n(570140),
    c = n(38618),
    d = n(268967),
    u = n(188785);
let h = {},
    p = {},
    m = !0,
    f = {},
    g = !1;
function _() {
    if (((f = {}), !m))
        for (let [e, t] of Object.entries(d.Z)) {
            let n = !1 !== h[e];
            if (((f[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== h[n] && (f[e] = !1);
        }
}
class C extends (i = s.ZP.Store) {
    initialize() {
        _(), this.mustEmitChanges((e) => 'CONNECTION_OPEN' !== e.type), this.waitFor(c.Z);
    }
    shouldShow(e) {
        return !(!g || m || u.a || (r.tq && ['writing-messages', 'organize-by-topic'].includes(e))) && (f[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !m;
    }
    getIndicators() {
        return p;
    }
    getData() {
        return d.Z;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
(a = 'TutorialIndicatorStore'),
    (l = 'displayName') in C
        ? Object.defineProperty(C, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (C[l] = a);
let x = new C(o.Z, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (g = !0), (m = !0), (h = {}), null != t && ((m = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (h[e] = !1))), _();
    },
    CONNECTION_CLOSED: function () {
        g = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (h = {
            ...h,
            [e.tutorialId]: !1
        }),
            (p = { ...p }),
            delete p[e.tutorialId],
            _();
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        p = {
            ...p,
            [e.tutorialId]: e.renderData
        };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        (p = { ...p }), delete p[e.tutorialId];
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        m = !0;
    }
});
