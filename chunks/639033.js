n(47120);
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(570140),
    a = n(317770),
    s = n(314897),
    o = n(592125),
    c = n(797258),
    d = n(590415),
    u = n(981631);
let h = 'STAGE_INVITED_TO_SPEAK_MODAL';
class m extends a.Z {
    _initialize() {
        l.Z.subscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    _terminate() {
        l.Z.unsubscribe('VOICE_STATE_UPDATES', this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        var t, l, a;
        super(...e),
            (t = this),
            (l = 'handleVoiceStateUpdates'),
            (a = (e) => {
                var t;
                let { voiceStates: l } = e,
                    a = s.default.getId(),
                    m = null === (t = c.Z.getSession()) || void 0 === t ? void 0 : t.sessionId,
                    p = l.find((e) => e.userId === a && e.sessionId === m);
                if (null == p) return;
                let g = p.channelId;
                if (null == g) {
                    (0, r.hasModalOpen)(h) && (0, r.closeModal)(h);
                    return;
                }
                let f = o.Z.getChannel(g);
                if (!(null == f ? void 0 : f.isGuildStageVoice())) return;
                let _ = (0, d.gf)(p) === d.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                if (null != f && _) {
                    if ((0, r.hasModalOpen)(h)) return;
                    (0, r.openModalLazy)(
                        async () => {
                            let { default: e } = await n.e('13878').then(n.bind(n, 113140));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: f
                                });
                        },
                        {
                            modalKey: h,
                            onCloseRequest: u.VqG
                        }
                    );
                }
            }),
            l in t
                ? Object.defineProperty(t, l, {
                      value: a,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[l] = a);
    }
}
t.Z = new m();
