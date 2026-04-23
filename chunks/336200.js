t.d(a, { c: () => r, y: () => i });
var s = t(562465),
    n = t(73153),
    l = t(652215);
function r(e, a) {
    n.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS", selectedTemplate: e, guildId: a });
}
async function i(e) {
    let a = (await s.Bo.get({ url: l.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e), rejectWithError: !1 })).body;
    null != a.templates &&
        n.h.dispatch({ type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES", templates: a.templates, guildId: e });
}
