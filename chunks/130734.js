n.d(t, { Z: () => g });
var r,
    i = n(442837),
    l = n(433517),
    a = n(570140);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                o(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let u = 'hasSeenGuildTemplatePromotionTooltip',
    d = {},
    p = !0 === l.K.get(u);
function h(e) {
    let { guildId: t } = e;
    d = c(s({}, d), { [t]: !1 });
}
class f extends (r = i.ZP.Store) {
    shouldShowGuildTemplateDirtyTooltip(e) {
        var t;
        return null != (t = d[e]) && t;
    }
    shouldShowGuildTemplatePromotionTooltip() {
        return !p;
    }
}
o(f, 'displayName', 'GuildTemplateTooltipStore');
let g = new f(a.Z, {
    GUILD_TEMPLATE_DIRTY_TOOLTIP_REFRESH: function (e) {
        let { guildTemplate: t } = e;
        d = c(s({}, d), { [t.source_guild_id]: t.is_dirty || !1 });
    },
    GUILD_TEMPLATE_PROMOTION_TOOLTIP_HIDE: function () {
        l.K.set(u, !0), (p = !0);
    },
    GUILD_TEMPLATE_SYNC_SUCCESS: function (e) {
        d = c(s({}, d), { [e.guildTemplate.source_guild_id]: !1 });
    },
    GUILD_TEMPLATE_DIRTY_TOOLTIP_HIDE: h,
    GUILD_TEMPLATE_DELETE_SUCCESS: h
});
