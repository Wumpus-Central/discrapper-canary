n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(439372),
    i = n(58149),
    a = n(627363),
    s = n(587895),
    o = n(140547),
    l = n(961350),
    c = n(734057),
    u = n(309010),
    d = n(461213),
    f = n(529020),
    p = n(652215);

function _(e, t, n) {
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

function h(e) {
    return e.filter((e) => e.type === p.$pd.PLAYING && e.application_id).map((e) => e.application_id);
}
async function m(e) {
    await a.Ay.fetchApplications(e, !1);
}
async function g(e) {
    if (null == e) return;
    let t = c.A.getChannel(e),
        { enableHangStatus: n } = (0, o.ko)({
            guildId: null == t ? void 0 : t.guild_id,
            location: "GameActivityManager",
        });
    if (null == t || !((0, f.Gf)("running_games_change", !1) || n)) return;
    let r = d.A.getActivities();
    if (0 === r.length) return;
    let a = h([...r]);
    await m([...a]);
    let u = s.A.getApplication(a[0]);
    null != u &&
        i.Ay.trackWithMetadata(p.HAw.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
            channel_id: e,
            guild_id: t.guild_id,
            game_name: u.name,
            user_id: l.default.getId(),
        });
}
class E extends r.A {
    handleRunningGamesChange() {
        g(u.A.getVoiceChannelId());
    }
    handleVoiceChannelSelect(e) {
        let { channelId: t } = e;
        g(t);
    }
    constructor(...e) {
        super(...e),
            _(this, "actions", {
                RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
                VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
            });
    }
}
let b = new E();
