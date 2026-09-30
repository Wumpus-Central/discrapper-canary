_.d(s, { B: () => S, s: () => T });
var a = _(228366),
    i = _(473953),
    p = _(593673);
function S(t, s) {
    a.h.dispatch({ type: "GUILD_SETTINGS_GUILD_SPACE_SETTINGS_UPDATE", guildId: t, settings: s });
}
async function T(t, s) {
    let _ = { ...s };
    s.enabled || (_.publish_status = p.B.DRAFT);
    let S = await (0, i.W)(t, _);
    a.h.dispatch({ type: "GUILD_SETTINGS_SET_GUILD_SPACE_SETTINGS", guildId: t, settings: S });
}
