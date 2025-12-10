n.d(t, { Z: () => h }), n(388685);
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    s = n(314897),
    o = n(592125),
    c = n(797258),
    u = n(590415),
    d = n(981631);
function p(e, t, n) {
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
let f = "STAGE_INVITED_TO_SPEAK_MODAL";
class g extends a.Z {
    _initialize() {
        l.Z.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        l.Z.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            p(this, "handleVoiceStateUpdates", (e) => {
                var t;
                let { voiceStates: l } = e,
                    a = s.default.getId(),
                    g = null == (t = c.Z.getSession()) ? void 0 : t.sessionId,
                    h = l.find((e) => e.userId === a && e.sessionId === g);
                if (null == h) return;
                let m = h.channelId;
                if (null == m) {
                    (0, i.nfh)(f) && (0, i.Mr3)(f);
                    return;
                }
                let _ = o.Z.getChannel(m);
                if (!(null == _ ? void 0 : _.isGuildStageVoice())) return;
                let b = (0, u.gf)(h) === u.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if (null != _ && b) {
                    if ((0, i.nfh)(f)) return;
                    (0, i.ZDy)(
                        async () => {
                            let { default: e } = await n.e("13878").then(n.bind(n, 113140));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    (function (e, t) {
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
                                                      Object.defineProperty(
                                                          e,
                                                          n,
                                                          Object.getOwnPropertyDescriptor(t, n),
                                                      );
                                                  }),
                                            e
                                        );
                                    })(
                                        (function (e) {
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
                                                        p(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })({}, t),
                                        { channel: _ },
                                    ),
                                );
                        },
                        {
                            modalKey: f,
                            onCloseRequest: d.VqG,
                        },
                    );
                }
            });
    }
}
let h = new g();
