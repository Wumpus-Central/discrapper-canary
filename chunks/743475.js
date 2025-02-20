n.d(t, {
    BG: () => h,
    DO: () => b,
    pt: () => f
}),
    n(47120);
var r = n(570140),
    i = n(668781),
    s = n(881052),
    a = n(45966),
    l = n(637853),
    o = n(592125),
    c = n(823379),
    d = n(889369),
    u = n(570961),
    m = n(208665),
    p = n(290511),
    g = n(388032);
function h() {
    r.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_RESET' });
}
function f(e) {
    r.Z.dispatch({
        type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE',
        channelId: e
    });
}
async function b(e) {
    let t = Array.from(d.Z.editedDefaultChannelIds).filter((e) => null != o.Z.getChannel(e)),
        n = m.Z.advancedMode,
        [h, f] = (0, l.d9)(e.id, [...t]),
        b = (0, l.kl)(e.id, t, m.Z.editedOnboardingPrompts),
        x = (0, l.kl)(e.id, t, m.Z.editedOnboardingPrompts, l.V7);
    if (a.Z.getEnabled(e.id) && ((!n && (f.length < p.md || h.length < p.X)) || (n && (b.length < p.md || x.length < p.X)))) {
        i.Z.show({
            title: g.NW.string(g.t.iLdiqa),
            body: g.NW.string(g.t.JOT74e)
        });
        return;
    }
    if (d.Z.hasChanges()) {
        r.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT' });
        try {
            await (0, u.n_)(e.id, { default_channel_ids: t }),
                r.Z.dispatch({
                    type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS',
                    guildId: e.id,
                    channelIds: t
                });
        } catch (n) {
            var j;
            let { fieldName: e, error: t } = null !== (j = new s.Hx(n).getAnyErrorMessageAndField()) && void 0 !== j ? j : {};
            i.Z.show({
                title: g.NW.string(g.t.iLdiqa),
                body: [e, t].filter(c.lm).join(': ')
            }),
                r.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED' });
        }
    }
}
