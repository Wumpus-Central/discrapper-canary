"use strict";
n.d(t, { A: () => E });
var r = n(439372),
    i = n(58149),
    a = n(627363),
    s = n(587895),
    o = n(140547),
    l = n(961350),
    u = n(734057),
    c = n(309010),
    d = n(461213),
    _ = n(529020),
    f = n(652215);
function p(e) {
    return e.filter((e) => e.type === f.$pd.PLAYING && e.application_id).map((e) => e.application_id);
}
async function h(e) {
    await a.Ay.fetchApplications(e, !1);
}
async function m(e) {
    if (null == e) return;
    let t = u.A.getChannel(e),
        { enableHangStatus: n } = (0, o.ko)({ guildId: t?.guild_id, location: "GameActivityManager" });
    if (null == t || !((0, _.Gf)("running_games_change", !1) || n)) return;
    let r = d.A.getActivities();
    if (0 === r.length) return;
    let a = p([...r]);
    await h([...a]);
    let c = s.A.getApplication(a[0]);
    null != c &&
        i.Ay.trackWithMetadata(f.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: c.name,
            user_id: l.default.getId(),
        });
}
class g extends r.A {
    actions = {
        RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
    };
    handleRunningGamesChange() {
        m(c.A.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        m(t);
    }
}
let E = new g();
