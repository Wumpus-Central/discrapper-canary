"use strict";
n.d(t, { A: () => g }), n(938796);
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
    h = n(873985),
    p = n(652215);
class g extends i.A {
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
        e = (0, r.lA)(e, p.Ajs.ALLOW_VOICE_RECORDING, t);
        let n = (0, s.A)(f.Ay),
            i =
                (0, o.TD)() &&
                (d.A.getCurrentUserActiveStream()?.state === p.XYD.ACTIVE ||
                    d.A.getCurrentUserActiveStream()?.state === p.XYD.PAUSED),
            _ = (0, o.Ao)() && l.Ay.getVisibleGame()?.windowHandle != null;
        e = (0, r.lA)(e, p.Ajs.CLIPS_ENABLED, i || _);
        let { enableViewerClipping: h } = u.A.getCurrentConfig(
                { location: "computeVoiceFlags" },
                { autoTrackExposure: !1 },
            ),
            g = h && n && a.A.getSettings().viewerClipsEnabled;
        return (0, r.lA)(e, p.Ajs.ALLOW_ANY_VIEWER_CLIPS, g);
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: f.Ay.isSelfMute(),
            selfDeaf: f.Ay.isSelfDeaf(),
            selfVideo: f.Ay.isVideoEnabled(),
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
            selfMute: f.Ay.isSelfMute(),
            selfDeaf: f.Ay.isSelfDeaf(),
            selfVideo: f.Ay.isVideoEnabled(),
            preferredRegion: h.A.getPreferredRegion(),
            preferredRegions: h.A.getPreferredRegions(),
            videoStreamParameters: f.Ay.getVideoStreamParameters(),
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
        a && _.A.getChannel(n)?.type === p.rbe.GUILD_STAGE_VOICE
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
