n.d(t, { Z: () => d });
var i,
    l = n(442837),
    r = n(570140);
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
function o() {
    return { lastTriggered: 0 };
}
let a = o();
class c extends (i = l.ZP.PersistedStore) {
    initialize(e) {
        a = {
            ...o(),
            ...(null != e ? e : {})
        };
    }
    getState() {
        return a;
    }
    cooldownIsActive() {
        return a.lastTriggered >= Date.now() - 172800000;
    }
}
s(c, 'displayName', 'HDStreamingViewerStore'), s(c, 'persistKey', 'HDStreamingViewerStore');
let d = new c(r.Z, {
    LOGOUT: function () {
        a = o();
    },
    HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
        a.lastTriggered = Date.now();
    }
});
