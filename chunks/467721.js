n.d(t, { Z: () => u });
var r,
    i = n(442837),
    l = n(570140);
function o(e, t, n) {
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
                        o(e, t, n[t]);
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
o(c, 'displayName', 'HDStreamingViewerStore'), o(c, 'persistKey', 'HDStreamingViewerStore');
let u = new c(l.Z, {
    LOGOUT: function () {
        a = s();
    },
    HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
        a.lastTriggered = Date.now();
    }
});
