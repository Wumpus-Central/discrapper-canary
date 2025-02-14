n.d(t, { Z: () => p }), n(47120);
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(317770),
    s = n(314897),
    o = n(592125),
    d = n(797258),
    c = n(590415),
    u = n(981631);
let h = 'STAGE_INVITED_TO_SPEAK_MODAL';
class m extends a.Z {
    _initialize() {
        r.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        r.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        var t, r;
        super(...e),
            (t = 'handleVoiceStateUpdates'),
            (r = (e) => {
                var t;
                let { voiceStates: r } = e,
                    a = s.default.getId(),
                    m = null === (t = d.Z.getSession()) || void 0 === t ? void 0 : t.sessionId,
                    p = r.find((e) => e.userId === a && e.sessionId === m);
                if (null == p) return;
                let g = p.channelId;
                if (null == g) {
                    (0, l.nfh)(h) && (0, l.Mr3)(h);
                    return;
                }
                let _ = o.Z.getChannel(g);
                if (!(null == _ ? void 0 : _.isGuildStageVoice())) return;
                let f = (0, c.gf)(p) === c.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if (null != _ && f) {
                    if ((0, l.nfh)(h)) return;
                    (0, l.ZDy)(
                        async () => {
                            let { default: e } = await n.e('13878').then(n.bind(n, 113140));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: _
                                });
                        },
                        {
                            modalKey: h,
                            onCloseRequest: u.VqG
                        }
                    );
                }
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = r);
    }
}
let p = new m();
