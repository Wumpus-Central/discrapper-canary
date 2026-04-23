n.d(t, { A: () => l });
var r = n(228366),
    a = n(576705),
    i = n(292572),
    o = n(652215);
let l = {
    async checkGuildTemplateDirty(e) {
        if (!a.A.canWithPartialContext(o.xBc.MANAGE_GUILD, { guildId: e })) return;
        let t = await i.A.loadTemplatesForGuild(e);
        t.body.length > 0 && r.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH", guildTemplate: t.body[0] });
    },
    hideGuildTemplateDirtyTooltip(e) {
        r.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId: e });
    },
    hideGuildTemplatePromotionTooltip() {
        r.h.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
    },
};
