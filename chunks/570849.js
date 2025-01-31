a.d(t, {
    l: () => s,
    u: () => r
});
var n = a(544891),
    l = a(570140),
    i = a(981631);
function s(e, t) {
    l.Z.dispatch({
        type: 'GUILD_ROLE_SUBSCRIPTIONS_STASH_TEMPLATE_CHANNELS',
        selectedTemplate: e,
        guildId: t
    });
}
async function r(e) {
    let t = (
        await n.tn.get({
            url: i.ANM.GUILD_ROLE_SUBSCRIPTION_LISTING_TEMPLATES(e),
            rejectWithError: !1
        })
    ).body;
    null != t.templates &&
        l.Z.dispatch({
            type: 'GUILD_ROLE_SUBSCRIPTIONS_FETCH_TEMPLATES',
            templates: t.templates,
            guildId: e
        });
}
