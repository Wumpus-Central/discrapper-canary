n.d(t, { Ay: () => g, D_: () => S, Ez: () => N, N: () => C }), n(321073);
var i = n(836039),
    r = n(770335),
    a = n(492494),
    s = n(95701),
    l = n(576705),
    o = n(287809),
    d = n(486020),
    c = n(350593),
    u = n(515718),
    _ = n(158045),
    E = n(652215),
    A = n(307731);
let h = new Set([A.EmojiDisabledReasons.PREMIUM_LOCKED, A.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
    I = new Set([
        ...h,
        A.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE,
        A.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE,
    ]),
    f = new Set([
        A.EmojiDisabledReasons.DISALLOW_CUSTOM,
        A.EmojiDisabledReasons.DISALLOW_EXTERNAL,
        A.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE,
        A.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function p(e) {
    return e.type === r.i.GUILD || null != e.guildId;
}
function T(e, t) {
    return null != e && null != t && (!p(e) || t === e.guildId);
}
function m(e) {
    let {
        emoji: t,
        channel: n,
        guildId: r = n?.getGuildId(),
        intention: d,
        forceIncludeExternalGuilds: c,
        bypassPremiumEmojiEntitlement: u,
    } = e;
    if (!p(t)) return null;
    if (d === A.EmojiIntention.GUILD_PROFILE || d === A.EmojiIntention.NO_CUSTOM_EMOJI)
        return A.EmojiDisabledReasons.DISALLOW_CUSTOM;
    let h = null != n && (0, s.ke)(n.type),
        I = null != n && (0, s.ay)(n.type),
        f = T(t, r),
        m = l.A.can(E.xBc.USE_EXTERNAL_EMOJIS, n);
    if (d === A.EmojiIntention.COMMUNITY_CONTENT)
        return f && null != t.guildId && t.available ? null : A.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if ((!(0, A.isExternalEmojiAllowedForIntention)(d) && !T(t, r) && !c) || ((h || I) && !f && !m))
        return A.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return A.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let g = o.default.getCurrentUser();
    if (!(u || _.Ay.canUseEmojisEverywhere(g)) && !f) {
        if (d === A.EmojiIntention.STATUS) return A.EmojiDisabledReasons.PREMIUM_LOCKED;
        else if (!t.managed) return A.EmojiDisabledReasons.PREMIUM_LOCKED;
    }
    return (0, a.JN)(t, r ?? void 0)
        ? (0, i.tE)(t.guildId)
            ? A.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE
            : A.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || u || _.Ay.canUseAnimatedEmojis(g) || (0, a.kT)(t)
          ? null
          : A.EmojiDisabledReasons.PREMIUM_LOCKED;
}
let g = {
    sanitizeEmojiName(e) {
        for (e = e.replace(A.EMOJI_RE, "").slice(0, A.EMOJI_MAX_LENGTH); e.length < 2; ) e += "_";
        return e;
    },
    filterUnsupportedEmojis: c.A.filterUnsupportedEmojis,
    getURL: c.A.getURL,
    isInternalEmojiForGuildId: T,
    getEmojiUnavailableReason: m,
    isCustomEmoji: p,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r, bypassPremiumEmojiEntitlement: a } = e,
            s = new Set(),
            l = [],
            o = 0,
            d = !1;
        for (let e of t) {
            let t = m({ emoji: e, channel: n, guildId: i, intention: r, bypassPremiumEmojiEntitlement: a });
            if (null == t) {
                l.push(e);
                continue;
            }
            f.has(t) || l.push(e),
                I.has(t) &&
                    (null != e.id && s.add(e.id),
                    h.has(t) && (d || t !== A.EmojiDisabledReasons.PREMIUM_LOCKED || (d = !0), o++));
        }
        return { emojisDisabled: s, emojisUnfiltered: l, emojisPremiumLockedCount: o, emojiNitroLocked: d };
    },
    isEmojiFiltered(e) {
        let t = m(e);
        return f.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = m(e);
        return h.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r } = e,
            a = !1,
            s = 0;
        for (let e of t) {
            let t = m({ emoji: e, channel: n, intention: r, guildId: i });
            t === A.EmojiDisabledReasons.PREMIUM_LOCKED
                ? ((a = !0), s++)
                : t === A.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE && s++;
        }
        return a && s === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = m(e);
        return I.has(t);
    },
    isFileTooBig: (e) => e.size > 2097152,
    isDataTooBig: (e) => (0, u.EW)(e) > A.EMOJI_MAX_FILESIZE,
};
async function S(e) {
    return await c.A.getEmojiColors(e);
}
function N(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: i, animated: r } = e;
    return null != n ? d.Ay.getEmojiURL({ id: n, size: t, animated: r ?? !1 }) : c.A.getURL(i);
}
function C(e) {
    return "allNamesString" in e ? e.allNamesString : `:${e.name}:`;
}
