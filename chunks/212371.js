n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(73153),
    i = n(827343),
    l = n(401843),
    a = n(272355),
    s = n(652896),
    o = n(616356),
    c = n(961350),
    u = n(734057),
    d = n(430452),
    p = n(105530);

function f(e, t, n) {
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
class h extends a.A {
    _initialize() {
        r.h.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    _terminate() {
        r.h.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
    }
    constructor(...e) {
        super(...e),
            f(this, "handleVoiceStateUpdates", (e) => {
                let { voiceStates: t } = e,
                    n = c.default.getId();
                t.forEach((e) => {
                    var t;
                    e.userId === n &&
                        (null == (t = u.A.getChannel(e.channelId)) ? void 0 : t.isGuildStageVoice()) &&
                        (0, p.eY)(e) !== p.zF.ON_STAGE &&
                        (this.handleStopStream(e), this.handleStopUserVideo());
                });
            }),
            f(this, "handleStopStream", (e) => {
                let t = o.A.getActiveStreamForUser(e.userId, e.guildId);
                null != t && (0, l.vN)((0, s._z)(t), !1);
            }),
            f(this, "handleStopUserVideo", () => {
                d.A.isVideoEnabled() && i.A.setVideoEnabled(!1);
            });
    }
}
let A = new h();
