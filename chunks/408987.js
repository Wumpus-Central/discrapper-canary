n.d(t, { Z: () => s });
var r = n(570140),
    i = n(496675),
    o = n(751189),
    a = n(981631);
let s = {
    async checkGuildTemplateDirty(e) {
        if (!i.Z.canWithPartialContext(a.Plq.MANAGE_GUILD, { guildId: e })) return;
        let t = await o.Z.loadTemplatesForGuild(e);
        t.body.length > 0 &&
            r.Z.dispatch({
                type: 'GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH',
                guildTemplate: t.body[0]
            });
    },
    hideGuildTemplateDirtyTooltip(e) {
        r.Z.dispatch({
            type: 'GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE',
            guildId: e
        });
    },
    hideGuildTemplatePromotionTooltip() {
        r.Z.dispatch({ type: 'GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE' });
    }
};
