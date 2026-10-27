(n.d(t, { Ay: () => C, D_: () => O, Ez: () => R, N: () => L }), n(321073));
var i = n(836039),
    r = n(770335),
    a = n(182159),
    s = n(492494),
    l = n(95701),
    o = n(576705),
    d = n(287809),
    c = n(486020),
    u = n(350593),
    _ = n(515718),
    E = n(474090),
    A = n(24482),
    h = n(652215),
    f = n(307731),
    I = n(202541);
let p = new Set([f.EmojiDisabledReasons.PREMIUM_LOCKED, f.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
    T = new Set([
        ...p,
        f.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE,
        f.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE,
    ]),
    m = new Set([
        f.EmojiDisabledReasons.DISALLOW_CUSTOM,
        f.EmojiDisabledReasons.DISALLOW_EXTERNAL,
        f.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE,
        f.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function g(e) {
    switch (e.type) {
        case r.i.GUILD:
        case r.i.PACK:
            return !0;
        default:
            return null != e.guildId;
    }
}
function S(e, t) {
    return null != e && null != t && (!g(e) || t === e.guildId);
}
function N(e) {
    let {
        emoji: t,
        channel: n,
        guildId: c = n?.getGuildId(),
        intention: u,
        forceIncludeExternalGuilds: _,
        bypassPremiumEmojiEntitlement: p,
    } = e;
    if (t.type === r.i.PACK)
        return u === f.EmojiIntention.GUILD_PROFILE || u === f.EmojiIntention.NO_CUSTOM_EMOJI
            ? f.EmojiDisabledReasons.DISALLOW_CUSTOM
            : (0, f.isExternalEmojiAllowedForIntention)(u)
              ? a.A.isPackEmojiUsable(t)
                  ? (0, E.ki)(d.default.getCurrentUser(), I.PremiumTypes.TIER_2)
                      ? null
                      : f.EmojiDisabledReasons.PREMIUM_LOCKED
                  : f.EmojiDisabledReasons.DISALLOW_CUSTOM
              : f.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if (!g(t)) return null;
    if (u === f.EmojiIntention.GUILD_PROFILE || u === f.EmojiIntention.NO_CUSTOM_EMOJI)
        return f.EmojiDisabledReasons.DISALLOW_CUSTOM;
    let T = null != n && (0, l.ke)(n.type),
        m = null != n && (0, l.ay)(n.type),
        N = S(t, c),
        C = o.A.can(h.xBc.USE_EXTERNAL_EMOJIS, n);
    if (u === f.EmojiIntention.COMMUNITY_CONTENT)
        return N && null != t.guildId && t.available ? null : f.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if ((!(0, f.isExternalEmojiAllowedForIntention)(u) && !S(t, c) && !_) || ((T || m) && !N && !C))
        return f.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return f.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let O = d.default.getCurrentUser();
    if (!(p || A.Ay.canUseEmojisEverywhere(O)) && !N) {
        if (u === f.EmojiIntention.STATUS) return f.EmojiDisabledReasons.PREMIUM_LOCKED;
        else if (!t.managed) return f.EmojiDisabledReasons.PREMIUM_LOCKED;
    }
    return (0, s.JN)(t, c ?? void 0)
        ? (0, i.tE)(t.guildId)
            ? f.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE
            : f.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || p || A.Ay.canUseAnimatedEmojis(O) || (0, s.kT)(t)
          ? null
          : f.EmojiDisabledReasons.PREMIUM_LOCKED;
}
let C = {
    sanitizeEmojiName(e) {
        for (e = e.replace(f.EMOJI_RE, "").slice(0, f.EMOJI_MAX_LENGTH); e.length < 2;) e += "_";
        return e;
    },
    filterUnsupportedEmojis: u.A.filterUnsupportedEmojis,
    getURL: u.A.getURL,
    isInternalEmojiForGuildId: S,
    getEmojiUnavailableReason: N,
    isCustomEmoji: g,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r, bypassPremiumEmojiEntitlement: a } = e,
            s = new Set(),
            l = [],
            o = 0,
            d = !1;
        for (let e of t) {
            let t = N({ emoji: e, channel: n, guildId: i, intention: r, bypassPremiumEmojiEntitlement: a });
            if (null == t) {
                l.push(e);
                continue;
            }
            (m.has(t) || l.push(e),
                T.has(t) &&
                    (null != e.id && s.add(e.id),
                    p.has(t) && (d || t !== f.EmojiDisabledReasons.PREMIUM_LOCKED || (d = !0), o++)));
        }
        return { emojisDisabled: s, emojisUnfiltered: l, emojisPremiumLockedCount: o, emojiNitroLocked: d };
    },
    isEmojiFiltered(e) {
        let t = N(e);
        return m.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = N(e);
        return p.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r } = e,
            a = !1,
            s = 0;
        for (let e of t) {
            let t = N({ emoji: e, channel: n, intention: r, guildId: i });
            t === f.EmojiDisabledReasons.PREMIUM_LOCKED
                ? ((a = !0), s++)
                : t === f.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE && s++;
        }
        return a && s === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = N(e);
        return T.has(t);
    },
    isFileTooBig: (e) => e.size > 2097152,
    isDataTooBig: (e) => (0, _.EW)(e) > f.EMOJI_MAX_FILESIZE,
};
async function O(e) {
    return await u.A.getEmojiColors(e);
}
function R(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: i, animated: r } = e;
    return null != n ? c.Ay.getEmojiURL({ id: n, size: t, animated: r ?? !1 }) : u.A.getURL(i);
}
function L(e) {
    return "allNamesString" in e ? e.allNamesString : `:${e.name}:`;
}
