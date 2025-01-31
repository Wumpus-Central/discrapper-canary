n.d(t, { Z: () => g }), n(789020);
var i = n(928801),
    r = n(924557),
    a = n(435064),
    s = n(779618),
    o = n(594190),
    l = n(441167),
    u = n(695346),
    c = n(199902),
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
class g extends i.Z {
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        var e, t, n;
        let i = 0,
            d = u.tU.getSetting();
        i = (0, p.mB)(i, h.BVn.ALLOW_VOICE_RECORDING, d);
        let _ = (0, s.Z)(f.Z),
            m = (0, r.ln)() && a.Z.getSettings().clipsEnabled && ((null === (e = c.Z.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === h.jm8.ACTIVE || (null === (t = c.Z.getCurrentUserActiveStream()) || void 0 === t ? void 0 : t.state) === h.jm8.PAUSED),
            g = a.Z.isDecoupledGameClippingEnabled(),
            E = _ && a.Z.getSettings().decoupledClipsEnabled && (null === (n = o.ZP.getVisibleGame()) || void 0 === n ? void 0 : n.windowHandle) != null && g;
        i = (0, p.mB)(i, h.BVn.CLIPS_ENABLED, m || E);
        let { enableViewerClipping: v } = l.Z.getCurrentConfig({ location: 'computeVoiceFlags' }, { autoTrackExposure: !1 }),
            y = v && _ && a.Z.getSettings().viewerClipsEnabled;
        return (0, p.mB)(i, h.BVn.ALLOW_ANY_VIEWER_CLIPS, y);
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
        let { guildId: n, channelId: i, selfMute: r, selfDeaf: a, selfVideo: s, preferredRegion: o, preferredRegions: l, videoStreamParameters: u, flags: c = 0 } = e;
        s && (null === (t = d.Z.getChannel(i)) || void 0 === t ? void 0 : t.type) === h.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: i,
                  selfMute: r,
                  selfDeaf: a,
                  selfVideo: s,
                  preferredRegion: o,
                  preferredRegions: l,
                  videoStreamParameters: u,
                  flags: c
              })
            : this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: i,
                  selfMute: r,
                  selfDeaf: a,
                  selfVideo: s,
                  preferredRegion: o,
                  preferredRegions: l,
                  flags: c
              });
    }
    constructor(e) {
        super(), m(this, 'socket', void 0), (this.socket = e);
    }
}
