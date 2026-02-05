"use strict";
n.d(t, { bN: () => _, jr: () => A, nx: () => h });
var i = n(73153),
    s = n(157559),
    l = n(198982),
    r = n(591552),
    a = n(961973),
    o = n(734057),
    d = n(403362),
    c = n(863694),
    u = n(107795),
    m = n(655943),
    g = n(539916),
    x = n(985018);
function h() {
    i.h.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_RESET" });
}
function _(e) {
    i.h.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE", channelId: e });
}
async function A(e) {
    let t = Array.from(c.A.editedDefaultChannelIds).filter((e) => null != o.A.getChannel(e)),
        n = m.A.advancedMode,
        [h] = (0, a.ui)(e.id, [...t]),
        _ = (0, a.G4)(e.id, t, m.A.editedOnboardingPrompts, a.VU);
    if (r.A.getEnabled(e.id) && ((!n && h.length < g.Kd) || (n && _.length < g.Kd))) {
        if ((s.A.show({ title: x.intl.string(x.t.iLdiqY), body: x.intl.string(x.t.JOT74c) }), n))
            throw Error("Chattable channels with questions requirement not met");
        return;
    }
    if (c.A.hasChanges()) {
        i.h.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT" });
        try {
            let s = n ? (0, u.xR)(e, { ignoreDefaultPrompt: !0 }) : null,
                l = null != s ? s.map(g.SA) : void 0;
            await (0, u.YN)(e.id, { default_channel_ids: t, prompts: l }),
                i.h.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS", guildId: e.id, channelIds: t }),
                null != s &&
                    i.h.dispatch({
                        type: "GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS",
                        guildId: e.id,
                        updates: { prompts: s },
                    });
        } catch (n) {
            let { fieldName: e, error: t } = new l.LG(n).getAnyErrorMessageAndField() ?? {};
            s.A.show({ title: x.intl.string(x.t.iLdiqY), body: [e, t].filter(d.Vq).join(": ") }),
                i.h.dispatch({ type: "GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED" });
        }
    }
}
