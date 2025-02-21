n.d(t, {
    B6: () => I,
    ZP: () => S,
    qc: () => T,
    sp: () => O
}),
    n(47120),
    n(757143),
    n(301563),
    n(653041);
var r = n(738774),
    i = n(906411),
    o = n(889564),
    a = n(131704),
    s = n(496675),
    l = n(594174),
    c = n(768581),
    u = n(563114),
    d = n(956664),
    f = n(74538),
    p = n(981631),
    _ = n(185923);
let h = 2097152,
    m = new Set([_.Z5.PREMIUM_LOCKED, _.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    g = new Set([...m, _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, _.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    E = new Set([_.Z5.DISALLOW_CUSTOM, _.Z5.DISALLOW_EXTERNAL, _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, _.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);
function v(e) {
    return e.type === i.B.GUILD || null != e.guildId;
}
function b(e, t) {
    return null != e && null != t && (!v(e) || t === e.guildId);
}
function y(e) {
    let { emoji: t, channel: n, guildId: i = null == n ? void 0 : n.getGuildId(), intention: c, forceIncludeExternalGuilds: u } = e;
    if (!v(t)) return null;
    if (c === _.Hz.GUILD_PROFILE) return _.Z5.DISALLOW_CUSTOM;
    let d = null != n && (0, a.zi)(n.type),
        h = null != n && (0, a.bw)(n.type),
        m = b(t, i),
        g = s.Z.can(p.Plq.USE_EXTERNAL_EMOJIS, n);
    if (c === _.Hz.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : _.Z5.DISALLOW_EXTERNAL;
    if ((!(0, _.Gt)(c) && !b(t, i) && !u) || ((d || h) && !m && !g)) return _.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let E = l.default.getCurrentUser();
    return f.ZP.canUseEmojisEverywhere(E) || m || (c !== _.Hz.STATUS && t.managed) ? ((0, o.Fv)(t, null != i ? i : void 0) ? ((0, r.Ol)(t.guildId) ? _.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : _.Z5.ROLE_SUBSCRIPTION_LOCKED) : !t.animated || f.ZP.canUseAnimatedEmojis(E) || (0, o.yH)(t) ? null : _.Z5.PREMIUM_LOCKED) : _.Z5.PREMIUM_LOCKED;
}
function O(e, t) {
    let n = 0,
        r = 0,
        o = 0,
        a = 0,
        s = 0,
        l = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === i.B.GUILD && (e.guildId === t ? (e.managed ? a++ : r++) : e.managed ? s++ : o++), e.animated && l++) : n++;
        }),
        {
            unicode: n,
            custom: r,
            customExternal: o,
            managed: a,
            managedExternal: s,
            animated: l
        }
    );
}
let S = {
    sanitizeEmojiName(e) {
        for (e = e.replace(_.sW, '').slice(0, _.Yc); e.length < 2; ) e += '_';
        return e;
    },
    filterUnsupportedEmojis: u.Z.filterUnsupportedEmojis,
    getURL: u.Z.getURL,
    isInternalEmojiForGuildId: b,
    getEmojiUnavailableReason: y,
    isCustomEmoji: v,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            o = new Set(),
            a = [],
            s = 0,
            l = !1;
        for (let e of t) {
            let t = y({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i
            });
            if (null == t) {
                a.push(e);
                continue;
            }
            E.has(t) || a.push(e), g.has(t) && (null != e.id && o.add(e.id), m.has(t) && (l || t !== _.Z5.PREMIUM_LOCKED || (l = !0), s++));
        }
        return {
            emojisDisabled: o,
            emojisUnfiltered: a,
            emojisPremiumLockedCount: s,
            emojiNitroLocked: l
        };
    },
    isEmojiFiltered(e) {
        let t = y(e);
        return E.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = y(e);
        return m.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            o = !1,
            a = 0;
        for (let e of t) {
            let t = y({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r
            });
            t === _.Z5.PREMIUM_LOCKED ? ((o = !0), a++) : t === _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && a++;
        }
        return o && a === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = y(e);
        return g.has(t);
    },
    isFileTooBig: (e) => e.size > h,
    isDataTooBig: (e) => (0, d.QB)(e) > _.h_
};
async function I(e) {
    return await u.Z.getEmojiColors(e);
}
function T(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    return null != n
        ? c.ZP.getEmojiURL({
              id: n,
              size: t,
              animated: null != i && i
          })
        : u.Z.getURL(r);
}
