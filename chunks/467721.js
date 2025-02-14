n.d(t, { Z: () => d });
var i,
    r = n(442837),
    l = n(570140);
function s(e, t, n) {
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
function a() {
    return { lastTriggered: 0 };
}
let o = a();
class c extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        o = {
            ...a(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return o;
    }
    cooldownIsActive() {
        return o.lastTriggered >= Date.now() - 172800000;
    }
}
s(c, 'displayName', 'HDStreamingViewerStore'), s(c, 'persistKey', 'HDStreamingViewerStore');
let d = new c(l.Z, {
    LOGOUT: function () {
        o = a();
    },
    HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
        o.lastTriggered = Date.now();
    }
});
