n.d(t, { Z: () => p });
var i,
    l,
    r,
    a = n(442837),
    s = n(433517),
    o = n(570140);
let c = 'hasSeenGuildTemplatePromotionTooltip',
    d = {},
    u = !0 === s.K.get(c);
function h(e) {
    let { guildId: t } = e;
    d = {
        ...d,
        [t]: !1
    };
}
class m extends (r = a.ZP.Store) {
    shouldShowGuildTemplateDirtyTooltip(e) {
        var t;
        return null !== (t = d[e]) && void 0 !== t && t;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !u;
    }
}
(l = 'GuildTemplateTooltipStore'),
    (i = 'displayName') in m
        ? Object.defineProperty(m, i, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (m[i] = l);
let p = new m(o.Z, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        d = {
            ...d,
            [t.source_guild_id]: t.is_dirty || !1
        };
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        s.K.set(c, !0), (u = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        d = {
            ...d,
            [e.guildTemplate.source_guild_id]: !1
        };
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: h,
    GUILD_TEMPLATE_DELETE_SUCCESS: h
});
