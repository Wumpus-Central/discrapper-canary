n.d(t, { A: () => g }), n(938796);
var r = n(665260),
    i = n(173618),
    a = n(274372),
    s = n(915618),
    o = n(572164),
    l = n(15285),
    c = n(670470),
    u = n(253932),
    d = n(616356),
    f = n(734057),
    p = n(430452),
    _ = n(873985),
    h = n(652215);
function m(e, t, n) {
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
class g extends i.A {
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        var e, t, n;
        let i = 0,
            f = u.Q$.getSetting();
        i = (0, r.lA)(i, h.Ajs.ALLOW_VOICE_RECORDING, f);
        let _ = (0, s.A)(p.A),
            m =
                (0, o.TD)() &&
                ((null == (e = d.A.getCurrentUserActiveStream()) ? void 0 : e.state) === h.XYD.ACTIVE ||
                    (null == (t = d.A.getCurrentUserActiveStream()) ? void 0 : t.state) === h.XYD.PAUSED),
            g = (0, o.Ao)() && (null == (n = l.Ay.getVisibleGame()) ? void 0 : n.windowHandle) != null;
        i = (0, r.lA)(i, h.Ajs.CLIPS_ENABLED, m || g);
        let { enableViewerClipping: E } = c.A.getCurrentConfig(
                { location: "computeVoiceFlags" },
                { autoTrackExposure: !1 },
            ),
            b = E && _ && a.A.getSettings().viewerClipsEnabled;
        return (0, r.lA)(i, h.Ajs.ALLOW_ANY_VIEWER_CLIPS, b);
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: p.A.isSelfMute(),
            selfDeaf: p.A.isSelfDeaf(),
            selfVideo: p.A.isVideoEnabled(),
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
            selfMute: p.A.isSelfMute(),
            selfDeaf: p.A.isSelfDeaf(),
            selfVideo: p.A.isVideoEnabled(),
            preferredRegion: _.A.getPreferredRegion(),
            preferredRegions: _.A.getPreferredRegions(),
            videoStreamParameters: p.A.getVideoStreamParameters(),
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
            selfVideo: s,
            preferredRegion: o,
            preferredRegions: l,
            videoStreamParameters: c,
            flags: u = 0,
        } = e;
        s && (null == (t = f.A.getChannel(r)) ? void 0 : t.type) === h.rbe.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: s,
                  preferredRegion: o,
                  preferredRegions: l,
                  videoStreamParameters: c,
                  flags: u,
              })
            : this.socket.voiceStateUpdate({
                  guildId: n,
                  channelId: r,
                  selfMute: i,
                  selfDeaf: a,
                  selfVideo: s,
                  preferredRegion: o,
                  preferredRegions: l,
                  flags: u,
              });
    }
    constructor(e) {
        super(), m(this, "socket", void 0), (this.socket = e);
    }
}
