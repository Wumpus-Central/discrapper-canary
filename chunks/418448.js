n.d(t, {
    bN: () => p,
    jr: () => x,
    nx: () => m,
}),
    n(896048),
    n(65821);
var r = n(73153),
    i = n(157559),
    l = n(198982),
    s = n(591552),
    a = n(961973),
    c = n(734057),
    o = n(403362),
    d = n(863694),
    u = n(107795),
    f = n(655943),
    g = n(539916),
    b = n(985018);

function m() {
    r.h.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET",
    });
}

function p(e) {
    r.h.dispatch({
        type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE",
        channelId: e,
    });
}
async function x(e) {
    let t = Array.from(d.A.editedDefaultChannelIds).filter((e) => null != c.A.getChannel(e)),
        n = f.A.advancedMode,
        [m] = (0, a.ui)(e.id, [...t]),
        p = (0, a.G4)(e.id, t, f.A.editedOnboardingPrompts, a.VU);
    if (s.A.getEnabled(e.id) && ((!n && m.length < g.Kd) || (n && p.length < g.Kd))) {
        if (
            (i.A.show({
                title: b.intl.string(b.t.iLdiqY),
                body: b.intl.string(b.t.JOT74c),
            }),
            n)
        )
            throw Error("Chattable channels with questions requirement not met");
        return;
    }
    if (d.A.hasChanges()) {
        r.h.dispatch({
            type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT",
        });
        try {
            let i = n
                    ? (0, u.xR)(e, {
                          ignoreDefaultPrompt: !0,
                      })
                    : null,
                l = null != i ? i.map(g.SA) : void 0;
            await (0, u.YN)(e.id, {
                default_channel_ids: t,
                prompts: l,
            }),
                r.h.dispatch({
                    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS",
                    guildId: e.id,
                    channelIds: t,
                }),
                null != i &&
                    r.h.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                        guildId: e.id,
                        updates: {
                            prompts: i,
                        },
                    });
        } catch (n) {
            var x;
            let { fieldName: e, error: t } = null != (x = new l.LG(n).getAnyErrorMessageAndField()) ? x : {};
            i.A.show({
                title: b.intl.string(b.t.iLdiqY),
                body: [e, t].filter(o.Vq).join(": "),
            }),
                r.h.dispatch({
                    type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED",
                });
        }
    }
}
