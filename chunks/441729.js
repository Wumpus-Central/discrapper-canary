n.d(t, { Z: () => d });
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
function a(e) {
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
}
function s(e, t) {
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
let c = {
        speechRate: 1,
        currentMessage: null
    },
    u = c;
class E extends (r = i.ZP.DeviceSettingsStore) {
    initialize(e) {
        u = a({}, c, null != e ? e : null);
    }
    isSpeakingMessage(e, t) {
        let { currentMessage: n } = u;
        return null !== n && n.channelId === e && n.messageId === t;
    }
    get currentMessage() {
        return u.currentMessage;
    }
    get speechRate() {
        return u.speechRate;
    }
    getUserAgnosticState() {
        return u;
    }
}
o(E, 'displayName', 'TTSStore'), o(E, 'persistKey', 'TTSStore'), o(E, 'migrations', []);
let d = new E(
    l.Z,
    __OVERLAY__
        ? {}
        : {
              SPEAKING_MESSAGE: function (e) {
                  let { messageId: t, channelId: n } = e;
                  u = s(a({}, u), {
                      currentMessage: {
                          messageId: t,
                          channelId: n
                      }
                  });
              },
              STOP_SPEAKING: function () {
                  u = s(a({}, u), { currentMessage: null });
              },
              SET_TTS_SPEECH_RATE: function (e) {
                  u = s(a({}, u), { speechRate: e.speechRate });
              }
          }
);
