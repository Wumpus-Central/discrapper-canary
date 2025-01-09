n.d(t, {
    BG: function () {
        return x;
    },
    DO: function () {
        return f;
    },
    pt: function () {
        return p;
    }
}),
    n(47120);
var i = n(570140),
    r = n(668781),
    l = n(881052),
    s = n(45966),
    a = n(637853),
    o = n(592125),
    c = n(823379),
    d = n(889369),
    u = n(570961),
    m = n(208665),
    h = n(290511),
    g = n(388032);
function x() {
    i.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_RESET' });
}
function p(e) {
    i.Z.dispatch({
        type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE',
        channelId: e
    });
}
async function f(e) {
    let t = Array.from(d.Z.editedDefaultChannelIds).filter((e) => null != o.Z.getChannel(e)),
        n = m.Z.advancedMode,
        [x, p] = (0, a.d9)(e.id, [...t]),
        f = (0, a.kl)(e.id, t, m.Z.editedOnboardingPrompts),
        C = (0, a.kl)(e.id, t, m.Z.editedOnboardingPrompts, a.V7);
    if (s.Z.getEnabled(e.id) && ((!n && (p.length < h.md || x.length < h.X)) || (n && (f.length < h.md || C.length < h.X)))) {
        r.Z.show({
            title: g.intl.string(g.t.iLdiqa),
            body: g.intl.string(g.t.JOT74e)
        });
        return;
    }
    if (d.Z.hasChanges()) {
        i.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT' });
        try {
            await (0, u.n_)(e.id, { default_channel_ids: t }),
                i.Z.dispatch({
                    type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS',
                    guildId: e.id,
                    channelIds: t
                });
        } catch (n) {
            var v;
            let { fieldName: e, error: t } = null !== (v = new l.Hx(n).getAnyErrorMessageAndField()) && void 0 !== v ? v : {};
            r.Z.show({
                title: g.intl.string(g.t.iLdiqa),
                body: [e, t].filter(c.lm).join(': ')
            }),
                i.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED' });
        }
    }
}
