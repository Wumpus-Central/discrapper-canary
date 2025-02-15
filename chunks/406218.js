n.d(t, {
    o_: () => f,
    sO: () => d,
    xo: () => c
}),
    n(47120),
    n(724458);
var i = n(345074),
    r = n(339085),
    a = n(633302),
    s = n(823379);
function o(e) {
    let { guildId: t, emojiId: n, emojiName: i } = e,
        s = r.De.get(t);
    return null == n && null == i ? null : null != n ? (null != s ? s.getById(n) : null) : null != i ? a.ZP.getByName(i) : null;
}
let l = { label: '' };
function u(e, t) {
    let n = Array(i.Sn).fill(l);
    for (let a of t) {
        var r;
        !(a.position < 0) &&
            !(a.position >= i.Sn) &&
            (n[a.position] = {
                label: a.label,
                emoji:
                    null !==
                        (r = o({
                            guildId: e,
                            emojiId: a.emoji_id,
                            emojiName: a.emoji_name
                        })) && void 0 !== r
                        ? r
                        : void 0
            });
    }
    return n;
}
function c(e) {
    var t, n;
    return {
        id: e.id,
        name: e.name,
        description: e.description,
        icon: e.icon_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: e.brand_color_primary,
        visibility: e.visibility,
        traits: u(e.id, null !== (t = e.traits) && void 0 !== t ? t : []),
        gameApplicationIds: null !== (n = e.game_application_ids) && void 0 !== n ? n : []
    };
}
function d(e) {
    let t = {};
    return (
        null != e.name && (t.name = e.name),
        null != e.description && (t.description = e.description),
        null != e.icon && (t.icon = e.icon),
        null != e.visibility && (t.visibility = e.visibility),
        null != e.brandColorPrimary && (t.brand_color_primary = e.brandColorPrimary),
        null != e.traits &&
            (t.traits = e.traits
                .map((e, t) => {
                    var n, i, r;
                    return (null == e ? void 0 : e.label) == null || e.label.length <= 0
                        ? null
                        : {
                              label: e.label,
                              position: t,
                              emoji_id: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                              emoji_name: null === (i = e.emoji) || void 0 === i ? void 0 : i.name,
                              emoji_animated: null === (r = e.emoji) || void 0 === r ? void 0 : r.animated
                          };
                })
                .filter(s.lm)),
        null != e.gameApplicationIds && (t.game_application_ids = e.gameApplicationIds),
        t
    );
}
function f(e) {
    return e.reduce(
        (e, t) => (
            (e[t.game_application_id] = {
                level: t.activity_level,
                score: t.activity_score
            }),
            e
        ),
        {}
    );
}
