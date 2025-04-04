n.d(t, { Z: () => g }), n(789020);
var r = n(928801),
    i = n(924557),
    o = n(435064),
    a = n(779618),
    s = n(594190),
    l = n(441167),
    c = n(695346),
    u = n(199902),
    d = n(592125),
    f = n(131951),
    _ = n(936349),
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
        let _ = (0, a.Z)(f.Z),
            m = (0, i.ln)() && o.Z.getSettings().clipsEnabled && ((null == (e = u.Z.getCurrentUserActiveStream()) ? void 0 : e.state) === h.jm8.ACTIVE || (null == (t = u.Z.getCurrentUserActiveStream()) ? void 0 : t.state) === h.jm8.PAUSED),
            g = o.Z.isDecoupledGameClippingEnabled(),
            E = _ && o.Z.getSettings().decoupledClipsEnabled && (null == (n = s.ZP.getVisibleGame()) ? void 0 : n.windowHandle) != null && g;
        r = (0, p.mB)(r, h.BVn.CLIPS_ENABLED, m || E);
        let { enableViewerClipping: b } = l.Z.getCurrentConfig({ location: 'computeVoiceFlags' }, { autoTrackExposure: !1 }),
            y = b && _ && o.Z.getSettings().viewerClipsEnabled;
        return (0, p.mB)(r, h.BVn.ALLOW_ANY_VIEWER_CLIPS, y);
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: f.Z.isSelfMute(),
            selfDeaf: f.Z.isSelfDeaf(),
            selfVideo: f.Z.isVideoEnabled(),
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
            selfMute: f.Z.isSelfMute(),
            selfDeaf: f.Z.isSelfDeaf(),
            selfVideo: f.Z.isVideoEnabled(),
            preferredRegion: _.Z.getPreferredRegion(),
            preferredRegions: _.Z.getPreferredRegions(),
            videoStreamParameters: f.Z.getVideoStreamParameters(),
            flags: this.computeVoiceFlags()
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        var t;
        let { guildId: n, channelId: r, selfMute: i, selfDeaf: o, selfVideo: a, preferredRegion: s, preferredRegions: l, videoStreamParameters: c, flags: u = 0 } = e;
        a && (null == (t = d.Z.getChannel(r)) ? void 0 : t.type) === h.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: o,
                  selfVideo: a,
                  preferredRegion: s,
                  preferredRegions: l,
                  videoStreamParameters: c,
                  flags: u
              })
            : this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: o,
                  selfVideo: a,
                  preferredRegion: s,
                  preferredRegions: l,
                  flags: u
              });
    }
    constructor(e) {
        super(), m(this, 'socket', void 0), (this.socket = e);
    }
}
