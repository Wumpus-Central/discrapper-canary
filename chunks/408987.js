n.d(t, { Z: () => o });
var i = n(570140),
    r = n(496675),
    a = n(751189),
    s = n(981631);
let o = {
    async checkGuildTemplateDirty(e) {
        if (!r.Z.canWithPartialContext(s.Plq.MANAGE_GUILD, { guildId: e })) return;
        let t = await a.Z.loadTemplatesForGuild(e);
        t.body.length > 0 &&
            i.Z.dispatch({
                type: 'GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH',
                guildTemplate: t.body[0]
            });
    },
    hideGuildTemplateDirtyTooltip(e) {
        i.Z.dispatch({
            type: 'GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE',
            guildId: e
        });
    },
    hideGuildTemplatePromotionTooltip() {
        i.Z.dispatch({ type: 'GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE' });
    }
};
