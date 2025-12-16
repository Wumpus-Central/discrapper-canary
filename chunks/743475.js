n.d(t, {
    BG: () => b,
    DO: () => h,
    pt: () => p,
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
    f = n(290511),
    m = n(388032);
function b() {
    r.Z.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET" });
}
function p(e) {
    r.Z.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
        channelId: e,
    });
}
async function h(e) {
    let t = Array.from(d.Z.editedDefaultChannelIds).filter((e) => null != o.Z.getChannel(e)),
        n = g.Z.advancedMode,
        [b] = (0, s.d9)(e.id, [...t]),
        p = (0, s.kl)(e.id, t, g.Z.editedOnboardingPrompts, s.V7);
    if (a.Z.getEnabled(e.id) && ((!n && b.length < f.X) || (n && p.length < f.X)))
        return void i.Z.show({
            title: m.intl.string(m.t.iLdiqY),
            body: m.intl.string(m.t.JOT74c),
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
            var h;
            let { fieldName: e, error: t } = null != (h = new l.Hx(n).getAnyErrorMessageAndField()) ? h : {};
            i.Z.show({
                title: m.intl.string(m.t.iLdiqY),
                body: [e, t].filter(c.lm).join(": "),
            }),
                r.Z.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED" });
        }
    }
}
