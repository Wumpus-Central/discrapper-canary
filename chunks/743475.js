n.d(t, {
    BG: () => f,
    DO: () => x,
    pt: () => h
}),
    n(388685);
var r = n(570140),
    i = n(668781),
    l = n(881052),
    s = n(45966),
    a = n(637853),
    o = n(592125),
    c = n(823379),
    u = n(889369),
    d = n(570961),
    m = n(208665),
    g = n(290511),
    p = n(388032);
function f() {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_RESET' });
}
function h(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE',
        channelId: e
    });
}
async function x(e) {
    let t = Array.from(u.Z.editedDefaultChannelIds).filter((e) => null != o.Z.getChannel(e)),
        n = m.Z.advancedMode,
        [f, h] = (0, a.d9)(e.id, [...t]),
        x = (0, a.kl)(e.id, t, m.Z.editedOnboardingPrompts),
        b = (0, a.kl)(e.id, t, m.Z.editedOnboardingPrompts, a.V7);
    if (s.Z.getEnabled(e.id) && ((!n && (h.length < g.md || f.length < g.X)) || (n && (x.length < g.md || b.length < g.X))))
        return void i.Z.show({
            title: p.intl.string(p.t.iLdiqa),
            body: p.intl.string(p.t.JOT74e)
        });
    if (u.Z.hasChanges()) {
        r.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT' });
        try {
            await (0, d.n_)(e.id, { default_channel_ids: t }),
                r.Z.dispatch({
                    type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS',
                    guildId: e.id,
                    channelIds: t
                });
        } catch (n) {
            var j;
            let { fieldName: e, error: t } = null != (j = new l.Hx(n).getAnyErrorMessageAndField()) ? j : {};
            i.Z.show({
                title: p.intl.string(p.t.iLdiqa),
                body: [e, t].filter(c.lm).join(': ')
            }),
                r.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED' });
        }
    }
}
