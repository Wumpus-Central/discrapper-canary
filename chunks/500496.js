"use strict";
n.d(t, { A: () => f }), n(938796);
var r = n(665260),
    i = n(173618),
    s = n(572164),
    a = n(15285),
    o = n(253932),
    l = n(616356),
    u = n(734057),
    c = n(430452),
    d = n(873985),
    _ = n(652215);
class f extends i.A {
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
            t = o.Q$.getSetting();
        e = (0, r.lA)(e, _.Ajs.ALLOW_VOICE_RECORDING, t);
        let n =
                (0, s.TD)() &&
                (l.A.getCurrentUserActiveStream()?.state === _.XYD.ACTIVE ||
                    l.A.getCurrentUserActiveStream()?.state === _.XYD.PAUSED),
            i = (0, s.Ao)() && a.Ay.getVisibleGame()?.windowHandle != null;
        return (0, r.lA)(e, _.Ajs.CLIPS_ENABLED, n || i);
    }
    getInitialState() {
        return {
            guildId: null,
            channelId: null,
            selfMute: c.Ay.isSelfMute(),
            selfDeaf: c.Ay.isSelfDeaf(),
            selfVideo: c.Ay.isVideoEnabled(),
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
            selfMute: c.Ay.isSelfMute(),
            selfDeaf: c.Ay.isSelfDeaf(),
            selfVideo: c.Ay.isVideoEnabled(),
            preferredRegion: d.A.getPreferredRegion(),
            preferredRegions: d.A.getPreferredRegions(),
            videoStreamParameters: c.Ay.getVideoStreamParameters(),
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
            selfVideo: s,
            preferredRegion: a,
            preferredRegions: o,
            videoStreamParameters: l,
            flags: c = 0,
        } = e;
        s && u.A.getChannel(n)?.type === _.rbe.GUILD_STAGE_VOICE
            ? this.socket.voiceStateUpdate({
                  guildId: t,
                  channelId: n,
                  selfMute: r,
                  selfDeaf: i,
                  selfVideo: s,
                  preferredRegion: a,
                  preferredRegions: o,
                  videoStreamParameters: l,
                  flags: c,
              })
            : this.socket.voiceStateUpdate({
                  guildId: t,
                  channelId: n,
                  selfMute: r,
                  selfDeaf: i,
                  selfVideo: s,
                  preferredRegion: a,
                  preferredRegions: o,
                  flags: c,
              });
    }
}
