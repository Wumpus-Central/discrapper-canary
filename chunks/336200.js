s.d(t, {
    c: () => l,
    y: () => i,
});
var r = s(562465),
    a = s(73153),
    n = s(652215);

function l(e, t) {
    a.h.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
        selectedTemplate: e,
        guildId: t,
    });
}
async function i(e) {
    let t = (
        await r.Bo.get({
            url: n.Rsh.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
            rejectWithError: !1,
        })
    ).body;
    null != t.templates &&
        a.h.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
            templates: t.templates,
            guildId: e,
        });
}
