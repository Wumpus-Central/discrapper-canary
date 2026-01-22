n.d(t, {
    Ay: () => A,
    D_: () => v,
    Ez: () => S,
    N: () => I,
}),
    n(896048),
    n(747238),
    n(812715),
    n(321073);
var r = n(836039),
    i = n(770335),
    a = n(492494),
    s = n(95701),
    o = n(576705),
    l = n(287809),
    c = n(486020),
    u = n(300703),
    d = n(515718),
    f = n(927578),
    p = n(652215),
    _ = n(307731);
let h = 2097152,
    m = new Set([_.Am.PREMIUM_LOCKED, _.Am.ROLE_SUBSCRIPTION_LOCKED]),
    g = new Set([...m, _.Am.GUILD_SUBSCRIPTION_UNAVAILABLE, _.Am.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    E = new Set([
        _.Am.DISALLOW_CUSTOM,
        _.Am.DISALLOW_EXTERNAL,
        _.Am.GUILD_SUBSCRIPTION_UNAVAILABLE,
        _.Am.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function b(e) {
    return e.type === i.i.GUILD || null != e.guildId;
}
function y(e, t) {
    return null != e && null != t && (!b(e) || t === e.guildId);
}
function O(e) {
    let {
        emoji: t,
        channel: n,
        guildId: i = null == n ? void 0 : n.getGuildId(),
        intention: c,
        forceIncludeExternalGuilds: u,
    } = e;
    if (!b(t)) return null;
    if (c === _.b_.GUILD_PROFILE) return _.Am.DISALLOW_CUSTOM;
    let d = null != n && (0, s.ke)(n.type),
        h = null != n && (0, s.ay)(n.type),
        m = y(t, i),
        g = o.A.can(p.xBc.USE_EXTERNAL_EMOJIS, n);
    if (c === _.b_.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : _.Am.DISALLOW_EXTERNAL;
    if ((!(0, _.Re)(c) && !y(t, i) && !u) || ((d || h) && !m && !g)) return _.Am.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return _.Am.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let E = l.default.getCurrentUser();
    if (!f.Ay.canUseEmojisEverywhere(E) && !m) {
        if (c === _.b_.STATUS) return _.Am.PREMIUM_LOCKED;
        else if (!t.managed) return _.Am.PREMIUM_LOCKED;
    }
    return (0, a.JN)(t, null != i ? i : void 0)
        ? (0, r.tE)(t.guildId)
            ? _.Am.ROLE_SUBSCRIPTION_UNAVAILABLE
            : _.Am.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || f.Ay.canUseAnimatedEmojis(E) || (0, a.kT)(t)
          ? null
          : _.Am.PREMIUM_LOCKED;
}
let A = {
    sanitizeEmojiName(e) {
        for (e = e.replace(_.ZT, "").slice(0, _.zj); e.length < 2; ) e += "_";
        return e;
    },
    filterUnsupportedEmojis: u.A.filterUnsupportedEmojis,
    getURL: u.A.getURL,
    isInternalEmojiForGuildId: y,
    getEmojiUnavailableReason: O,
    isCustomEmoji: b,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            a = new Set(),
            s = [],
            o = 0,
            l = !1;
        for (let e of t) {
            let t = O({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i,
            });
            if (null == t) {
                s.push(e);
                continue;
            }
            E.has(t) || s.push(e),
                g.has(t) &&
                    (null != e.id && a.add(e.id), m.has(t) && (l || t !== _.Am.PREMIUM_LOCKED || (l = !0), o++));
        }
        return {
            emojisDisabled: a,
            emojisUnfiltered: s,
            emojisPremiumLockedCount: o,
            emojiNitroLocked: l,
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
            s = 0;
        for (let e of t) {
            let t = O({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r,
            });
            t === _.Am.PREMIUM_LOCKED ? ((a = !0), s++) : t === _.Am.GUILD_SUBSCRIPTION_UNAVAILABLE && s++;
        }
        return a && s === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = O(e);
        return g.has(t);
    },
    isFileTooBig: (e) => e.size > h,
    isDataTooBig: (e) => (0, d.EW)(e) > _.W5,
};
async function v(e) {
    return await u.A.getEmojiColors(e);
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    return null != n
        ? c.Ay.getEmojiURL({
              id: n,
              size: t,
              animated: null != i && i,
          })
        : u.A.getURL(r);
}
function I(e) {
    return "allNamesString" in e ? e.allNamesString : ":".concat(e.name, ":");
}
