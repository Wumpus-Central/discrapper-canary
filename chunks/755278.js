n.d(t, { Z: () => g }), n(997841);
var r = n(95015),
    i = n(928801),
    a = n(435064),
    o = n(779618),
    s = n(341569),
    l = n(594190),
    c = n(441167),
    u = n(695346),
    d = n(199902),
    f = n(592125),
    p = n(131951),
    _ = n(936349),
    m = n(981631);
function h(e, t, n) {
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
            f = u.tU.getSetting();
        i = (0, r.mB)(i, m.BVn.ALLOW_VOICE_RECORDING, f);
        let _ = (0, o.Z)(p.Z),
            h =
                (0, s.LI)() &&
                ((null == (e = d.Z.getCurrentUserActiveStream()) ? void 0 : e.state) === m.jm8.ACTIVE ||
                    (null == (t = d.Z.getCurrentUserActiveStream()) ? void 0 : t.state) === m.jm8.PAUSED),
            g = (0, s.CY)() && (null == (n = l.ZP.getVisibleGame()) ? void 0 : n.windowHandle) != null;
        i = (0, r.mB)(i, m.BVn.CLIPS_ENABLED, h || g);
        let { enableViewerClipping: E } = c.Z.getCurrentConfig(
                { location: "computeVoiceFlags" },
                { autoTrackExposure: !1 },
            ),
            b = E && _ && a.Z.getSettings().viewerClipsEnabled;
        return (0, r.mB)(i, m.BVn.ALLOW_ANY_VIEWER_CLIPS, b);
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: p.Z.isSelfMute(),
            selfDeaf: p.Z.isSelfDeaf(),
            selfVideo: p.Z.isVideoEnabled(),
            preferredRegion: null,
            preferredRegions: null,
            videoStreamParameters: null,
            flags: 0,
        };
    }
    getNextState(e) {
        let { guildId: t, channelId: n } = e;
        return {
            guildId: t,
            channelId: n,
            selfMute: p.Z.isSelfMute(),
            selfDeaf: p.Z.isSelfDeaf(),
            selfVideo: p.Z.isVideoEnabled(),
            preferredRegion: _.Z.getPreferredRegion(),
            preferredRegions: _.Z.getPreferredRegions(),
            videoStreamParameters: p.Z.getVideoStreamParameters(),
            flags: this.computeVoiceFlags(),
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        var t;
        let {
            guildId: n,
            channelId: r,
            selfMute: i,
            selfDeaf: a,
            selfVideo: o,
            preferredRegion: s,
            preferredRegions: l,
            videoStreamParameters: c,
            flags: u = 0,
        } = e;
        o && (null == (t = f.Z.getChannel(r)) ? void 0 : t.type) === m.d4z.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: o,
                  preferredRegion: s,
                  preferredRegions: l,
                  videoStreamParameters: c,
                  flags: u,
              })
            : this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: o,
                  preferredRegion: s,
                  preferredRegions: l,
                  flags: u,
              });
    }
    constructor(e) {
        super(), h(this, "socket", void 0), (this.socket = e);
    }
}
