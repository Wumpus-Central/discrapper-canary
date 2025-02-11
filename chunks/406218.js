t.d(n, {
    s: () => c,
    x: () => s
}),
    t(47120);
var l = t(345074),
    i = t(339085),
    a = t(633302),
    r = t(823379);
let o = { label: '' };
function s(e) {
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: e.brand_color_primary,
        visibility: e.visibility,
        traits: (function (e, n) {
            let t = Array(l.Sn).fill(o);
            for (let o of n) {
                var r;
                !(o.position < 0) &&
                    !(o.position >= l.Sn) &&
                    (t[o.position] = {
                        label: o.label,
                        emoji:
                            null !==
                                (r = (function (e) {
                                    let { guildId: n, emojiId: t, emojiName: l } = e,
                                        r = i.De.get(n);
                                    return null == t && null == l ? null : null != t ? (null != r ? r.getById(t) : null) : null != l ? a.ZP.getByName(l) : null;
                                })({
                                    guildId: e,
                                    emojiId: o.emoji_id,
                                    emojiName: o.emoji_name
                                })) && void 0 !== r
                                ? r
                                : void 0
                    });
            }
            return t;
        })(e.id, e.traits)
    };
}
function c(e) {
    let n = {};
    return (
        null != e.name && (n.name = e.name),
        null != e.description && (n.description = e.description),
        null != e.icon && (n.icon = e.icon),
        null != e.visibility && (n.visibility = e.visibility),
        null != e.brandColorPrimary && (n.brand_color_primary = e.brandColorPrimary),
        null != e.traits &&
            (n.traits = e.traits
                .map((e, n) => {
                    var t, l, i;
                    return (null == e ? void 0 : e.label) == null || e.label.length <= 0
                        ? null
                        : {
                              label: e.label,
                              position: n,
                              emoji_id: null === (t = e.emoji) || void 0 === t ? void 0 : t.id,
                              emoji_name: null === (l = e.emoji) || void 0 === l ? void 0 : l.name,
                              emoji_animated: null === (i = e.emoji) || void 0 === i ? void 0 : i.animated
                          };
                })
                .filter(r.lm)),
        n
    );
}
