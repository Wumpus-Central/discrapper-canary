n.d(t, {
    PC: () => h,
    o_: () => p,
    sO: () => _,
    xo: () => f
}),
    n(47120),
    n(266796);
var r = n(345074),
    i = n(339085),
    o = n(633302),
    a = n(823379),
    s = n(330705);
function l(e) {
    let { guildId: t, emojiId: n, emojiName: r } = e,
        a = i.De.get(t);
    if (null == n && null == r) return null;
    if (null != n)
        if (null != a) return a.getById(n);
        else return null;
    return null != r ? o.ZP.getByName(r) : null;
}
let c = { label: '' };
function u(e, t) {
    let n = Array(r.Sn).fill(c);
    for (let o of t) {
        var i;
        o.position < 0 ||
            o.position >= r.Sn ||
            (n[o.position] = {
                label: o.label,
                emoji:
                    null !=
                    (i = l({
                        guildId: e,
                        emojiId: o.emoji_id,
                        emojiName: o.emoji_name
                    }))
                        ? i
                        : void 0
            });
    }
    return n;
}
function d(e) {
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
function f(e) {
    var t, n, r, i, o;
    return {
        id: e.id,
        name: e.name,
        description: null != (t = e.description) ? t : '',
        icon: e.icon_hash,
        customBanner: e.custom_banner_hash,
        onlineCount: e.online_count,
        memberCount: e.member_count,
        brandColorPrimary: null != (n = e.brand_color_primary) ? n : null,
        visibility: e.visibility,
        traits: u(e.id, null != (r = e.traits) ? r : []),
        gameApplicationIds: null != (i = e.game_application_ids) ? i : [],
        gameActivity: d(e.game_activity),
        features: null != (o = e.features) ? o : [],
        tag: e.tag,
        badge: e.badge,
        badgeColorPrimary: e.badge_color_primary,
        badgeColorSecondary: e.badge_color_secondary,
        badgeHash: e.badge_hash
    };
}
function _(e) {
    let t = {};
    return (
        null != e.name && (t.name = e.name),
        null != e.description && (t.description = e.description),
        void 0 !== e.icon && (t.icon = e.icon),
        void 0 !== e.customBanner && (t.custom_banner = e.customBanner),
        null != e.visibility && (t.visibility = e.visibility),
        void 0 !== e.brandColorPrimary && (t.brand_color_primary = e.brandColorPrimary),
        null != e.traits &&
            (t.traits = e.traits
                .map((e, t) => {
                    var n, r, i;
                    return (null == e ? void 0 : e.label) == null || e.label.length <= 0
                        ? null
                        : {
                              label: e.label,
                              position: t,
                              emoji_id: null == (n = e.emoji) ? void 0 : n.id,
                              emoji_name: null == (r = e.emoji) ? void 0 : r.name,
                              emoji_animated: null == (i = e.emoji) ? void 0 : i.animated
                          };
                })
                .filter(a.lm)),
        null != e.gameApplicationIds && (t.game_application_ids = e.gameApplicationIds),
        void 0 !== e.tag && (t.tag = e.tag),
        void 0 !== e.badge && (t.badge = e.badge),
        void 0 !== e.badgeColorPrimary && (t.badge_color_primary = e.badgeColorPrimary),
        void 0 !== e.badgeColorSecondary && (t.badge_color_secondary = e.badgeColorSecondary),
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
function h(e) {
    var t, n, r, i, o, a;
    let { guild: l, profile: c } = e,
        u = null != c ? f(c) : null;
    return null != u
        ? u
        : null == l
          ? null
          : {
                id: l.id,
                name: l.name,
                description: null != (t = l.description) ? t : '',
                icon: l.icon,
                customBanner: l.banner,
                onlineCount: null != (r = null != (n = l.approximate_presence_count) ? n : e.approximate_presence_count) ? r : 0,
                memberCount: null != (o = null != (i = l.approximate_member_count) ? i : e.approximate_member_count) ? o : 0,
                visibility: s.k.NOT_SPECIFIED,
                traits: [],
                gameApplicationIds: [],
                gameActivity: {},
                features: null != (a = l.features) ? a : [],
                brandColorPrimary: null,
                tag: null,
                badge: null,
                badgeHash: null,
                badgeColorPrimary: null,
                badgeColorSecondary: null
            };
}
