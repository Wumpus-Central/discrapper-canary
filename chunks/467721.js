var n,
    i = s(442837),
    r = s(570140);
function o(e, t, s) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = s),
        e
    );
}
function l() {
    return { lastTriggered: 0 };
}
let a = l();
class c extends (n = i.ZP.PersistedStore) {
    initialize(e) {
        a = {
            ...l(),
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
o(c, 'displayName', 'HDStreamingViewerStore'),
    o(c, 'persistKey', 'HDStreamingViewerStore'),
    (t.Z = new c(r.Z, {
        LOGOUT: function () {
            a = l();
        },
        HD_STREAMING_VIEWER_UPDATE_LAST_TRIGGERED: function (e) {
            a.lastTriggered = Date.now();
        }
    }));
