n.d(t, { Z: () => g }), n(47120);
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(570140),
    a = n(317770),
    o = n(314897),
    s = n(592125),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let h = 'STAGE_INVITED_TO_SPEAK_MODAL';
class f extends a.Z {
    _initialize() {
        l.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        l.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            p(this, 'handleVoiceStateUpdates', (e) => {
                var t;
                let { voiceStates: l } = e,
                    a = o.default.getId(),
                    f = null == (t = c.Z.getSession()) ? void 0 : t.sessionId,
                    g = l.find((e) => e.userId === a && e.sessionId === f);
                if (null == g) return;
                let m = g.channelId;
                if (null == m) {
                    (0, i.nfh)(h) && (0, i.Mr3)(h);
                    return;
                }
                let b = s.Z.getChannel(m);
                if (!(null == b ? void 0 : b.isGuildStageVoice())) return;
                let _ = (0, u.gf)(g) === u.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if (null != b && _) {
                    if ((0, i.nfh)(h)) return;
                    (0, i.ZDy)(
                        async () => {
                            let { default: e } = await n.e('13878').then(n.bind(n, 113140));
                            return (t) => {
                                var n, i;
                                return (0, r.jsx)(
                                    e,
                                    ((n = (function (e) {
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
                                                    p(e, t, n[t]);
                                                });
                                        }
                                        return e;
                                    })({}, t)),
                                    (i = i = { channel: b }),
                                    Object.getOwnPropertyDescriptors
                                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                        : (function (e, t) {
                                              var n = Object.keys(e);
                                              if (Object.getOwnPropertySymbols) {
                                                  var r = Object.getOwnPropertySymbols(e);
                                                  n.push.apply(n, r);
                                              }
                                              return n;
                                          })(Object(i)).forEach(function (e) {
                                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                          }),
                                    n)
                                );
                            };
                        },
                        {
                            modalKey: h,
                            onCloseRequest: d.VqG
                        }
                    );
                }
            });
    }
}
let g = new f();
