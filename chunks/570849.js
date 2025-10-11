n.d(t, {
    l: () => l,
    u: () => s,
});
var a = n(544891),
    i = n(570140),
    r = n(981631);
function l(e, t) {
    i.Z.dispatch({
        type: "GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS",
        selectedTemplate: e,
        guildId: t,
    });
}
async function s(e) {
    let t = (
        await a.tn.get({
            url: r.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
            rejectWithError: !1,
        })
    ).body;
    null != t.templates &&
        i.Z.dispatch({
            type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES",
            templates: t.templates,
            guildId: e,
        });
}
