n.d(t, {
    BG: () => f,
    DO: () => b,
    pt: () => h,
}),
    n(388685);
var r = n(570140),
    i = n(668781),
    l = n(881052),
    a = n(45966),
    s = n(637853),
    o = n(592125),
    c = n(823379),
    d = n(889369),
    u = n(570961),
    g = n(208665),
    m = n(290511),
    p = n(388032);
function f() {
    r.Z.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET" });
}
function h(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
        channelId: e,
    });
}
async function b(e) {
    let t = Array.from(d.Z.editedDefaultChannelIds).filter((e) => null != o.Z.getChannel(e)),
        n = g.Z.advancedMode,
        [f, h] = (0, s.d9)(e.id, [...t]),
        b = (0, s.kl)(e.id, t, g.Z.editedOnboardingPrompts),
        x = (0, s.kl)(e.id, t, g.Z.editedOnboardingPrompts, s.V7);
    if (
        a.Z.getEnabled(e.id) &&
        ((!n && (h.length < m.md || f.length < m.X)) || (n && (b.length < m.md || x.length < m.X)))
    )
        return void i.Z.show({
            title: p.intl.string(p.t.iLdiqa),
            body: p.intl.string(p.t.JOT74e),
        });
    if (d.Z.hasChanges()) {
        r.Z.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT" });
        try {
            await (0, u.n_)(e.id, { default_channel_ids: t }),
                r.Z.dispatch({
                    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
                    guildId: e.id,
                    channelIds: t,
                });
        } catch (n) {
            var j;
            let { fieldName: e, error: t } = null != (j = new l.Hx(n).getAnyErrorMessageAndField()) ? j : {};
            i.Z.show({
                title: p.intl.string(p.t.iLdiqa),
                body: [e, t].filter(c.lm).join(": "),
            }),
                r.Z.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED" });
        }
    }
}
