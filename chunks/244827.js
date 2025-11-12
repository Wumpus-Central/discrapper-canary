n.d(t, { Z: () => p });
var r,
    i = n(442837),
    a = n(570140);
function o(e, t, n) {
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
function s(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function l(e, t) {
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
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : l(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = {
    enabled: !1,
    visible: !1,
};
function d(e) {
    let { enabled: t } = e;
    if (u.enabled === t) return !1;
    u = c(s({}, u), { enabled: t });
}
function f(e) {
    let { visible: t } = e;
    if (u.visible === t) return !1;
    u = c(s({}, u), { visible: t });
}
class _ extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t, n;
        u = {
            enabled: null != (t = null == e ? void 0 : e.enabled) && t,
            visible: null != (n = null == e ? void 0 : e.visible) && n,
        };
    }
    getState() {
        return u;
    }
    get enabled() {
        return u.enabled;
    }
    get visible() {
        return u.visible;
    }
    get active() {
        return u.enabled && u.visible;
    }
}
o(_, "displayName", "LowPerformanceModeStore"), o(_, "persistKey", "LowPerformanceModeStore");
let p = new _(a.Z, {
    LOW_PERFORMANCE_MODE_SET_ENABLED: d,
    LOW_PERFORMANCE_MODE_SET_VISIBLE: f,
});
