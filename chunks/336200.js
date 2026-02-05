a.d(t, { c: () => i, y: () => r });
var s = a(562465),
    n = a(73153),
    l = a(652215);
function i(e, t) {
    n.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS", selectedTemplate: e, guildId: t });
}
async function r(e) {
    let t = (await s.Bo.get({ url: l.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e), rejectWithError: !1 })).body;
    null != t.templates &&
        n.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES", templates: t.templates, guildId: e });
}
