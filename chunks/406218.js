n.d(t, {
    o_: () => p,
    sO: () => f,
    xo: () => d
}),
    n(47120),
    n(266796);
var r = n(345074),
    i = n(339085),
    o = n(633302),
    a = n(823379);
function s(e) {
    let { guildId: t, emojiId: n, emojiName: r } = e,
        a = i.De.get(t);
    return null == n && null == r ? null : null != n ? (null != a ? a.getById(n) : null) : null != r ? o.ZP.getByName(r) : null;
}
let l = { label: '' };
function c(e, t) {
    let n = Array(r.Sn).fill(l);
    for (let o of t) {
        var i;
        !(o.position < 0) &&
            !(o.position >= r.Sn) &&
            (n[o.position] = {
                label: o.label,
                emoji:
                    null !==
                        (i = s({
                            guildId: e,
                            emojiId: o.emoji_id,
                            emojiName: o.emoji_name
                        })) && void 0 !== i
                        ? i
                        : void 0
            });
    }
    return n;
}
function u(e) {
    return null == e
        ? {}
        : Object.entries(e).reduce((e, t) => {
              let [n, r] = t;
              return (
                  (e[n.toString()] = {
                      level: r.activity_level,
                      score: r.activity_score
                  }),
                  e
              );
          }, {});
}
function d(e) {
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
        traits: c(e.id, null !== (t = e.traits) && void 0 !== t ? t : []),
        gameApplicationIds: null !== (n = e.game_application_ids) && void 0 !== n ? n : [],
        gameActivity: u(e.game_activity)
    };
}
function f(e) {
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
                    var n, r, i;
                    return (null == e ? void 0 : e.label) == null || e.label.length <= 0
                        ? null
                        : {
                              label: e.label,
                              position: t,
                              emoji_id: null === (n = e.emoji) || void 0 === n ? void 0 : n.id,
                              emoji_name: null === (r = e.emoji) || void 0 === r ? void 0 : r.name,
                              emoji_animated: null === (i = e.emoji) || void 0 === i ? void 0 : i.animated
                          };
                })
                .filter(a.lm)),
        null != e.gameApplicationIds && (t.game_application_ids = e.gameApplicationIds),
        t
    );
}
function p(e) {
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
