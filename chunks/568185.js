n.d(t, { A: () => l });
var o = n(228366),
    r = n(576705),
    i = n(292572),
    a = n(652215);
let l = {
    async checkGuildTemplateDirty(e) {
        if (!r.A.canWithPartialContext(a.xBc.MANAGE_GUILD, { guildId: e })) return;
        let t = await i.A.loadTemplatesForGuild(e);
        t.body.length > 0 && o.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH", guildTemplate: t.body[0] });
    },
    hideGuildTemplateDirtyTooltip(e) {
        o.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId: e });
    },
    hideGuildTemplatePromotionTooltip() {
        o.h.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
    },
};
