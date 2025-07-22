(n.d(t, { Z: () => g }), n(997841));
var r = n(928801),
    i = n(924557),
    a = n(435064),
    o = n(779618),
    s = n(594190),
    l = n(441167),
    c = n(695346),
    u = n(199902),
    d = n(592125),
    _ = n(131951),
    f = n(936349),
    p = n(630388),
    h = n(981631);
function m(e, t, n) {
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
class g extends r.Z {
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        var e, t, n;
        let r = 0,
            d = c.tU.getSetting();
        r = (0, p.mB)(r, h.BVn.ALLOW_VOICE_RECORDING, d);
        let f = (0, o.Z)(_.Z),
            m = (0, i.ln)() && a.Z.getSettings().clipsEnabled && ((null == (e = u.Z.getCurrentUserActiveStream()) ? void 0 : e.state) === h.jm8.ACTIVE || (null == (t = u.Z.getCurrentUserActiveStream()) ? void 0 : t.state) === h.jm8.PAUSED),
            g = a.Z.isDecoupledGameClippingEnabled(),
            E = f && a.Z.getSettings().decoupledClipsEnabled && (null == (n = s.ZP.getVisibleGame()) ? void 0 : n.windowHandle) != null && g;
        r = (0, p.mB)(r, h.BVn.CLIPS_ENABLED, m || E);
        let { enableViewerClipping: b } = l.Z.getCurrentConfig({ location: 'computeVoiceFlags' }, { autoTrackExposure: !1 }),
            y = b && f && a.Z.getSettings().viewerClipsEnabled;
        return (0, p.mB)(r, h.BVn.ALLOW_ANY_VIEWER_CLIPS, y);
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: _.Z.isSelfMute(),
            selfDeaf: _.Z.isSelfDeaf(),
            selfVideo: _.Z.isVideoEnabled(),
            preferredRegion: null,
            preferredRegions: null,
            videoStreamParameters: null,
            flags: 0
        };
    }
    getNextState(e) {
        let { guildId: t, channelId: n } = e;
        return {
            guildId: t,
            channelId: n,
            selfMute: _.Z.isSelfMute(),
            selfDeaf: _.Z.isSelfDeaf(),
            selfVideo: _.Z.isVideoEnabled(),
            preferredRegion: f.Z.getPreferredRegion(),
            preferredRegions: f.Z.getPreferredRegions(),
            videoStreamParameters: _.Z.getVideoStreamParameters(),
            flags: this.computeVoiceFlags()
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        var t;
        let { guildId: n, channelId: r, selfMute: i, selfDeaf: a, selfVideo: o, preferredRegion: s, preferredRegions: l, videoStreamParameters: c, flags: u = 0 } = e;
        o && (null == (t = d.Z.getChannel(r)) ? void 0 : t.type) === h.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: o,
                  preferredRegion: s,
                  preferredRegions: l,
                  videoStreamParameters: c,
                  flags: u
              })
            : this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: o,
                  preferredRegion: s,
                  preferredRegions: l,
                  flags: u
              });
    }
    constructor(e) {
        (super(), m(this, 'socket', void 0), (this.socket = e));
    }
}
