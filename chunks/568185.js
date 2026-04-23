"use strict";
n.d(t, { A: () => o });
var r = n(73153),
    i = n(576705),
    s = n(292572),
    a = n(652215);
let o = {
    async checkGuildTemplateDirty(e) {
        if (!i.A.canWithPartialContext(a.xBc.MANAGE_GUILD, { guildId: e })) return;
        let t = await s.A.loadTemplatesForGuild(e);
        t.body.length > 0 && r.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH", guildTemplate: t.body[0] });
    },
    hideGuildTemplateDirtyTooltip(e) {
        r.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId: e });
    },
    hideGuildTemplatePromotionTooltip() {
        r.h.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
    },
};
