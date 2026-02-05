"use strict";
n.d(t, { A: () => m }), n(938796);
var r = n(665260),
    i = n(173618),
    a = n(274372),
    s = n(915618),
    o = n(572164),
    l = n(15285),
    u = n(670470),
    c = n(253932),
    d = n(616356),
    _ = n(734057),
    f = n(430452),
    p = n(873985),
    h = n(652215);
class m extends i.A {
    socket;
    constructor(e) {
        super(), (this.socket = e);
    }
    get guildId() {
        return this.getState().guildId;
    }
    get channelId() {
        return this.getState().channelId;
    }
    computeVoiceFlags() {
        let e = 0,
            t = c.Q$.getSetting();
        e = (0, r.lA)(e, h.Ajs.ALLOW_VOICE_RECORDING, t);
        let n = (0, s.A)(f.A),
            i =
                (0, o.TD)() &&
                (d.A.getCurrentUserActiveStream()?.state === h.XYD.ACTIVE ||
                    d.A.getCurrentUserActiveStream()?.state === h.XYD.PAUSED),
            _ = (0, o.Ao)() && l.Ay.getVisibleGame()?.windowHandle != null;
        e = (0, r.lA)(e, h.Ajs.CLIPS_ENABLED, i || _);
        let { enableViewerClipping: p } = u.A.getCurrentConfig(
                { location: "computeVoiceFlags" },
                { autoTrackExposure: !1 },
            ),
            m = p && n && a.A.getSettings().viewerClipsEnabled;
        return (0, r.lA)(e, h.Ajs.ALLOW_ANY_VIEWER_CLIPS, m);
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: f.A.isSelfMute(),
            selfDeaf: f.A.isSelfDeaf(),
            selfVideo: f.A.isVideoEnabled(),
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
            selfMute: f.A.isSelfMute(),
            selfDeaf: f.A.isSelfDeaf(),
            selfVideo: f.A.isVideoEnabled(),
            preferredRegion: p.A.getPreferredRegion(),
            preferredRegions: p.A.getPreferredRegions(),
            videoStreamParameters: f.A.getVideoStreamParameters(),
            flags: this.computeVoiceFlags(),
        };
    }
    shouldCommit() {
        return this.socket.isSessionEstablished();
    }
    didCommit(e) {
        let {
            guildId: t,
            channelId: n,
            selfMute: r,
            selfDeaf: i,
            selfVideo: a,
            preferredRegion: s,
            preferredRegions: o,
            videoStreamParameters: l,
            flags: u = 0,
        } = e;
        a && _.A.getChannel(n)?.type === h.rbe.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: t,
                  channelId: n,
                  selfMute: r,
                  selfDeaf: i,
                  selfVideo: a,
                  preferredRegion: s,
                  preferredRegions: o,
                  videoStreamParameters: l,
                  flags: u,
              })
            : this.socket.voiceStateUpdate({
                  guildId: t,
                  channelId: n,
                  selfMute: r,
                  selfDeaf: i,
                  selfVideo: a,
                  preferredRegion: s,
                  preferredRegions: o,
                  flags: u,
              });
    }
}
