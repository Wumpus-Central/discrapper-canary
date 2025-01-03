var i,
    r,
    l,
    a,
    s = n(442837),
    o = n(433517),
    c = n(570140);
let d = 'hasSeenGuildTemplatePromotionTooltip',
    u = {},
    h = !0 === o.K.get(d);
function m(e) {
    let { guildId: t } = e;
    u = {
        ...u,
        [t]: !1
    };
}
class p extends (a = s.ZP.Store) {
    shouldShowGuildTemplateDirtyTooltip(e) {
        var t;
        return null !== (t = u[e]) && void 0 !== t && t;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !h;
    }
}
(l = 'GuildTemplateTooltipStore'),
    (r = 'displayName') in (i = p)
        ? Object.defineProperty(i, r, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (i[r] = l),
    (t.Z = new p(c.Z, {
        GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
            let { guildTemplate: t } = e;
            u = {
                ...u,
                [t.source_guild_id]: t.is_dirty || !1
            };
        },
        GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
            o.K.set(d, !0), (h = !0);
        },
        GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
            u = {
                ...u,
                [e.guildTemplate.source_guild_id]: !1
            };
        },
        GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: m,
        GUILD_TEMPLATE_DELETE_SUCCESS: m
    }));
