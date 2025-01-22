r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(789020);
var a = r(928801),
    o = r(924557),
    s = r(435064),
    l = r(779618),
    u = r(594190),
    c = r(441167),
    d = r(695346),
    f = r(199902),
    p = r(592125),
    h = r(131951),
    _ = r(936349),
    m = r(630388),
    g = r(981631);
function E(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
class v extends a.Z {
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        var e, n, r;
        let i = 0,
            a = d.tU.getSetting();
        i = (0, m.mB)(i, g.BVn.ALLOW_VOICE_RECORDING, a);
        let p = (0, l.Z)(h.Z),
            _ = (0, o.ln)() && s.Z.getSettings().clipsEnabled && ((null === (e = f.Z.getCurrentUserActiveStream()) || void 0 === e ? void 0 : e.state) === g.jm8.ACTIVE || (null === (n = f.Z.getCurrentUserActiveStream()) || void 0 === n ? void 0 : n.state) === g.jm8.PAUSED),
            E = s.Z.isDecoupledGameClippingEnabled(),
            v = p && s.Z.getSettings().decoupledClipsEnabled && (null === (r = u.ZP.getVisibleGame()) || void 0 === r ? void 0 : r.windowHandle) != null && E;
        i = (0, m.mB)(i, g.BVn.CLIPS_ENABLED, _ || v);
        let { enableViewerClipping: y } = c.Z.getCurrentConfig({ location: 'computeVoiceFlags' }, { autoTrackExposure: !1 }),
            b = y && p && s.Z.getSettings().viewerClipsEnabled;
        return (i = (0, m.mB)(i, g.BVn.ALLOW_ANY_VIEWER_CLIPS, b));
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: h.Z.isSelfMute(),
            selfDeaf: h.Z.isSelfDeaf(),
            selfVideo: h.Z.isVideoEnabled(),
            preferredRegion: null,
            preferredRegions: null,
            videoStreamParameters: null,
            flags: 0
        };
    }
    getNextState(e) {
        let { guildId: n, channelId: r } = e;
        return {
            guildId: n,
            channelId: r,
            selfMute: h.Z.isSelfMute(),
            selfDeaf: h.Z.isSelfDeaf(),
            selfVideo: h.Z.isVideoEnabled(),
            preferredRegion: _.Z.getPreferredRegion(),
            preferredRegions: _.Z.getPreferredRegions(),
            videoStreamParameters: h.Z.getVideoStreamParameters(),
            flags: this.computeVoiceFlags()
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        var n;
        let { guildId: r, channelId: i, selfMute: a, selfDeaf: o, selfVideo: s, preferredRegion: l, preferredRegions: u, videoStreamParameters: c, flags: d = 0 } = e;
        s && (null === (n = p.Z.getChannel(i)) || void 0 === n ? void 0 : n.type) === g.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: r,
                  channelId: i,
                  selfMute: a,
                  selfDeaf: o,
                  selfVideo: s,
                  preferredRegion: l,
                  preferredRegions: u,
                  videoStreamParameters: c,
                  flags: d
              })
            : this.socket.voiceStateUpdate({
                  guildId: r,
                  channelId: i,
                  selfMute: a,
                  selfDeaf: o,
                  selfVideo: s,
                  preferredRegion: l,
                  preferredRegions: u,
                  flags: d
              });
    }
    constructor(e) {
        super(), E(this, 'socket', void 0), (this.socket = e);
    }
}
