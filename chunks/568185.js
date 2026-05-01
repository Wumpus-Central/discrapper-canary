"use strict";
n.d(t, { A: () => o });
var i = n(228366),
    r = n(576705),
    s = n(292572),
    a = n(652215);
let o = {
    async checkGuildTemplateDirty(e) {
        if (!r.A.canWithPartialContext(a.xBc.MANAGE_GUILD, { guildId: e })) return;
        let t = await s.A.loadTemplatesForGuild(e);
        t.body.length > 0 && i.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH", guildTemplate: t.body[0] });
    },
    hideGuildTemplateDirtyTooltip(e) {
        i.h.dispatch({ type: "GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE", guildId: e });
    },
    hideGuildTemplatePromotionTooltip() {
        i.h.dispatch({ type: "GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE" });
    },
};
