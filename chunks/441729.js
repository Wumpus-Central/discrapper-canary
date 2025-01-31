n.d(t, { Z: () => u });
var i,
    l = n(442837),
    r = n(570140);
function a(e, t, n) {
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
let s = {
        speechRate: 1,
        currentMessage: null
    },
    o = s;
class c extends (i = l.ZP.DeviceSettingsStore) {
    initialize(e) {
        o = {
            ...s,
            ...(null != e ? e : null)
        };
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: n } = o;
        return null !== n && n.channelId === e && n.messageId === t;
    }
    get currentMessage() {
        return o.currentMessage;
    }
    get speechRate() {
        return o.speechRate;
    }
    getUserAgnosticState() {
        return o;
    }
}
a(c, 'displayName', 'TTSStore'), a(c, 'persistKey', 'TTSStore'), a(c, 'migrations', []);
let u = new c(
    r.Z,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: n } = e;
                  o = {
                      ...o,
                      currentMessage: {
                          messageId: t,
                          channelId: n
                      }
                  };
              },
              STOP_SPEAKING: function () {
                  o = {
                      ...o,
                      currentMessage: null
                  };
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  o = {
                      ...o,
                      speechRate: e.speechRate
                  };
              }
          }
);
