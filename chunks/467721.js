n.d(t, { Z: () => u });
var r,
    i = n(442837),
    o = n(570140);
function l(e, t, n) {
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
function s() {
    return { lastTriggered: 0 };
}
let a = s();
class c extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        a = (function (e) {
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
                        l(e, t, n[t]);
                    });
            }
            return e;
        })({}, s(), null != e ? e : {});
    }
    getState() {
        return a;
    }
    cooldownIsActive() {
        return a.lastTriggered >= Date.now() - 172800000;
    }
}
l(c, 'displayName', 'HDStreamingViewerStore'), l(c, 'persistKey', 'HDStreamingViewerStore');
let u = new c(o.Z, {
    LOGOUT: function () {
        a = s();
    },
    HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
        a.lastTriggered = Date.now();
    }
});
