n.d(t, {
    B6: () => S,
    ZP: () => I,
    qc: () => T,
    sp: () => v
}),
    n(388685),
    n(704826),
    n(35282),
    n(539854);
var r = n(738774),
    i = n(906411),
    a = n(889564),
    o = n(131704),
    s = n(496675),
    l = n(594174),
    c = n(768581),
    u = n(563114),
    d = n(956664),
    f = n(74538),
    _ = n(981631),
    p = n(185923);
let h = 2097152,
    m = new Set([p.Z5.PREMIUM_LOCKED, p.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    g = new Set([...m, p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, p.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    E = new Set([p.Z5.DISALLOW_CUSTOM, p.Z5.DISALLOW_EXTERNAL, p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, p.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);
function b(e) {
    return e.type === i.B.GUILD || null != e.guildId;
}
function y(e, t) {
    return null != e && null != t && (!b(e) || t === e.guildId);
}
function O(e) {
    let { emoji: t, channel: n, guildId: i = null == n ? void 0 : n.getGuildId(), intention: c, forceIncludeExternalGuilds: u } = e;
    if (!b(t)) return null;
    if (c === p.Hz.GUILD_PROFILE) return p.Z5.DISALLOW_CUSTOM;
    let d = null != n && (0, o.zi)(n.type),
        h = null != n && (0, o.bw)(n.type),
        m = y(t, i),
        g = s.Z.can(_.Plq.USE_EXTERNAL_EMOJIS, n);
    if (c === p.Hz.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : p.Z5.DISALLOW_EXTERNAL;
    if ((!(0, p.Gt)(c) && !y(t, i) && !u) || ((d || h) && !m && !g)) return p.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let E = l.default.getCurrentUser();
    if (!f.ZP.canUseEmojisEverywhere(E) && !m) {
        if (c === p.Hz.STATUS) return p.Z5.PREMIUM_LOCKED;
        else if (!t.managed) return p.Z5.PREMIUM_LOCKED;
    }
    return (0, a.Fv)(t, null != i ? i : void 0) ? ((0, r.Ol)(t.guildId) ? p.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : p.Z5.ROLE_SUBSCRIPTION_LOCKED) : !t.animated || f.ZP.canUseAnimatedEmojis(E) || (0, a.yH)(t) ? null : p.Z5.PREMIUM_LOCKED;
}
function v(e, t) {
    let n = 0,
        r = 0,
        a = 0,
        o = 0,
        s = 0,
        l = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === i.B.GUILD && (e.guildId === t ? (e.managed ? o++ : r++) : e.managed ? s++ : a++), e.animated && l++) : n++;
        }),
        {
            unicode: n,
            custom: r,
            customExternal: a,
            managed: o,
            managedExternal: s,
            animated: l
        }
    );
}
let I = {
    sanitizeEmojiName(e) {
        for (e = e.replace(p.sW, '').slice(0, p.Yc); e.length < 2; ) e += '_';
        return e;
    },
    filterUnsupportedEmojis: u.Z.filterUnsupportedEmojis,
    getURL: u.Z.getURL,
    isInternalEmojiForGuildId: y,
    getEmojiUnavailableReason: O,
    isCustomEmoji: b,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            a = new Set(),
            o = [],
            s = 0,
            l = !1;
        for (let e of t) {
            let t = O({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i
            });
            if (null == t) {
                o.push(e);
                continue;
            }
            E.has(t) || o.push(e), g.has(t) && (null != e.id && a.add(e.id), m.has(t) && (l || t !== p.Z5.PREMIUM_LOCKED || (l = !0), s++));
        }
        return {
            emojisDisabled: a,
            emojisUnfiltered: o,
            emojisPremiumLockedCount: s,
            emojiNitroLocked: l
        };
    },
    isEmojiFiltered(e) {
        let t = O(e);
        return E.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = O(e);
        return m.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            a = !1,
            o = 0;
        for (let e of t) {
            let t = O({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r
            });
            t === p.Z5.PREMIUM_LOCKED ? ((a = !0), o++) : t === p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++;
        }
        return a && o === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = O(e);
        return g.has(t);
    },
    isFileTooBig: (e) => e.size > h,
    isDataTooBig: (e) => (0, d.QB)(e) > p.h_
};
async function S(e) {
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
