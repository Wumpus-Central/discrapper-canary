"use strict";
n.d(t, { A: () => E });
var r = n(439372),
    i = n(58149),
    s = n(627363),
    a = n(587895),
    o = n(140547),
    l = n(961350),
    u = n(734057),
    c = n(309010),
    d = n(461213),
    _ = n(652215);
function f(e) {
    return e.filter((e) => e.type === _.$pd.PLAYING && e.application_id).map((e) => e.application_id);
}
async function p(e) {
    await s.Ay.fetchApplications(e, !1);
}
async function h(e) {
    if (null == e) return;
    let t = u.A.getChannel(e),
        { enableHangStatus: n } = (0, o.ko)({ guildId: t?.guild_id, location: "GameActivityManager" });
    if (null == t || !n) return;
    let r = d.A.getActivities();
    if (0 === r.length) return;
    let s = f([...r]);
    await p([...s]);
    let c = a.A.getApplication(s[0]);
    null != c &&
        i.Ay.trackWithMetadata(_.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: c.name,
            user_id: l.default.getId(),
        });
}
class m extends r.A {
    actions = {
        RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
    };
    handleRunningGamesChange() {
        h(c.A.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        h(t);
    }
}
let E = new m();
