n.d(t, { A: () => c });
var i = n(311907),
    r = n(506774),
    a = n(73153);
let l = "hasSeenGuildTemplatePromotionTooltip",
    s = {},
    o = !0 === r.w.get(l);
function d(e) {
    let { guildId: t } = e;
    s = { ...s, [t]: !1 };
}
class u extends i.Ay.Store {
    static displayName = "GuildTemplateTooltipStore";
    shouldShowGuildTemplateDirtyTooltip(e) {
        return s[e] ?? !1;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !o;
    }
}
let c = new u(a.h, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        s = { ...s, [t.source_guild_id]: t.is_dirty || !1 };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        r.w.set(l, !0), (o = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        s = { ...s, [e.guildTemplate.source_guild_id]: !1 };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: d,
    GUILD_TEMPLATE_DELETE_SUCCESS: d,
});
