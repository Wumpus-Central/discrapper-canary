n.d(t, {
    l: () => i,
    u: () => s
});
var a = n(544891),
    r = n(570140),
    l = n(981631);
function i(e, t) {
    r.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS',
        selectedTemplate: e,
        guildId: t
    });
}
async function s(e) {
    let t = (
        await a.tn.get({
            url: l.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
            rejectWithError: !1
        })
    ).body;
    null != t.templates &&
        r.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES',
            templates: t.templates,
            guildId: e
        });
}
