n(321073);
var i = n(836039),
    r = n(770335),
    a = n(956396),
    s = n(492494),
    l = n(95701),
    o = n(576705),
    d = n(287809),
    c = n(486020),
    u = n(673375),
    _ = n(515718),
    E = n(474090),
    A = n(722178),
    h = n(652215),
    f = n(307731),
    I = n(682901);
let p = new Set([f.Am.PREMIUM_LOCKED, f.Am.ROLE_SUBSCRIPTION_LOCKED]),
    m = new Set([...p, f.Am.GUILD_SUBSCRIPTION_UNAVAILABLE, f.Am.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    g = new Set([
        f.Am.DISALLOW_CUSTOM,
        f.Am.DISALLOW_EXTERNAL,
        f.Am.GUILD_SUBSCRIPTION_UNAVAILABLE,
        f.Am.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function T(e) {
    switch (e.type) {
        case r.i.GUILD:
        case r.i.PACK:
            return !0;
        default:
            return null != e.guildId;
    }
}
function S(e, t) {
    return null != e && null != t && (!T(e) || t === e.guildId);
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
            ? f.Am.DISALLOW_CUSTOM
            : (0, f.Re)(u)
              ? a.A.isPackEmojiUsable(t)
                  ? (0, E.ki)(d.default.getCurrentUser(), I.PremiumTypes.TIER_2)
                      ? null
                      : f.Am.PREMIUM_LOCKED
                  : f.Am.DISALLOW_CUSTOM
              : f.Am.DISALLOW_EXTERNAL;
    if (!T(t)) return null;
    if (u === f.EmojiIntention.GUILD_PROFILE || u === f.EmojiIntention.NO_CUSTOM_EMOJI) return f.Am.DISALLOW_CUSTOM;
    let m = null != n && (0, l.ke)(n.type),
        g = null != n && (0, l.ay)(n.type),
        N = S(t, c),
        C = o.A.can(h.xBc.USE_EXTERNAL_EMOJIS, n);
    if (u === f.EmojiIntention.COMMUNITY_CONTENT)
        return N && null != t.guildId && t.available ? null : f.Am.DISALLOW_EXTERNAL;
    if ((!(0, f.Re)(u) && !S(t, c) && !_) || ((m || g) && !N && !C)) return f.Am.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return f.Am.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let O = d.default.getCurrentUser();
    if (!(p || A.Ay.canUseEmojisEverywhere(O)) && !N) {
        if (u === f.EmojiIntention.STATUS) return f.Am.PREMIUM_LOCKED;
        else if (!t.managed) return f.Am.PREMIUM_LOCKED;
    }
    return (0, s.JN)(t, c ?? void 0)
        ? (0, i.tE)(t.guildId)
            ? f.Am.ROLE_SUBSCRIPTION_UNAVAILABLE
            : f.Am.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || p || A.Ay.canUseAnimatedEmojis(O) || (0, s.kT)(t)
          ? null
          : f.Am.PREMIUM_LOCKED;
}
let C = {
    sanitizeEmojiName(e) {
        for (e = e.replace(f.ZT, "").slice(0, 32); e.length < 2;) e += "_";
        return e;
    },
    filterUnsupportedEmojis: u.A.filterUnsupportedEmojis,
    getURL: u.A.getURL,
    isInternalEmojiForGuildId: S,
    getEmojiUnavailableReason: N,
    isCustomEmoji: T,
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
            (g.has(t) || l.push(e),
                m.has(t) &&
                    (null != e.id && s.add(e.id), p.has(t) && (d || t !== f.Am.PREMIUM_LOCKED || (d = !0), o++)));
        }
        return { emojisDisabled: s, emojisUnfiltered: l, emojisPremiumLockedCount: o, emojiNitroLocked: d };
    },
    isEmojiFiltered(e) {
        let t = N(e);
        return g.has(t);
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
            t === f.Am.PREMIUM_LOCKED ? ((a = !0), s++) : t === f.Am.GUILD_SUBSCRIPTION_UNAVAILABLE && s++;
        }
        return a && s === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = N(e);
        return m.has(t);
    },
    isFileTooBig: (e) => e.size > 2097152,
    isDataTooBig: (e) => (0, _.EW)(e) > 262144,
};
n.d(
    t,
    {},
    {
        Ay: C,
        D_: async function (e) {
            return await u.A.getEmojiColors(e);
        },
        Ez: function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                { id: n, name: i, animated: r } = e;
            return null != n ? c.Ay.getEmojiURL({ id: n, size: t, animated: r ?? !1 }) : u.A.getURL(i);
        },
        N: function (e) {
            return "allNamesString" in e ? e.allNamesString : `:${e.name}:`;
        },
    },
);
