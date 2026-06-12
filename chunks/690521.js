"use strict";
n.d(t, { Ay: () => T, D_: () => S, Ez: () => y, N: () => N }), n(321073);
var i = n(836039),
    r = n(770335),
    s = n(492494),
    a = n(95701),
    o = n(576705),
    l = n(287809),
    u = n(486020),
    c = n(350593),
    d = n(515718),
    _ = n(428262),
    h = n(652215),
    f = n(307731);
let p = new Set([f.EmojiDisabledReasons.PREMIUM_LOCKED, f.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
    E = new Set([
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
    return e.type === r.i.GUILD || null != e.guildId;
}
function A(e, t) {
    return null != e && null != t && (!g(e) || t === e.guildId);
}
function I(e) {
    let { emoji: t, channel: n, guildId: r = n?.getGuildId(), intention: u, forceIncludeExternalGuilds: c } = e;
    if (!g(t)) return null;
    if (u === f.EmojiIntention.GUILD_PROFILE || u === f.EmojiIntention.NO_CUSTOM_EMOJI)
        return f.EmojiDisabledReasons.DISALLOW_CUSTOM;
    let d = null != n && (0, a.ke)(n.type),
        p = null != n && (0, a.ay)(n.type),
        E = A(t, r),
        m = o.A.can(h.xBc.USE_EXTERNAL_EMOJIS, n);
    if (u === f.EmojiIntention.COMMUNITY_CONTENT)
        return E && null != t.guildId && t.available ? null : f.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if ((!(0, f.isExternalEmojiAllowedForIntention)(u) && !A(t, r) && !c) || ((d || p) && !E && !m))
        return f.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return f.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let I = l.default.getCurrentUser();
    if (!_.Ay.canUseEmojisEverywhere(I) && !E) {
        if (u === f.EmojiIntention.STATUS) return f.EmojiDisabledReasons.PREMIUM_LOCKED;
        else if (!t.managed) return f.EmojiDisabledReasons.PREMIUM_LOCKED;
    }
    return (0, s.JN)(t, r ?? void 0)
        ? (0, i.tE)(t.guildId)
            ? f.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE
            : f.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || _.Ay.canUseAnimatedEmojis(I) || (0, s.kT)(t)
          ? null
          : f.EmojiDisabledReasons.PREMIUM_LOCKED;
}
let T = {
    sanitizeEmojiName(e) {
        for (e = e.replace(f.EMOJI_RE, "").slice(0, f.EMOJI_MAX_LENGTH); e.length < 2; ) e += "_";
        return e;
    },
    filterUnsupportedEmojis: c.A.filterUnsupportedEmojis,
    getURL: c.A.getURL,
    isInternalEmojiForGuildId: A,
    getEmojiUnavailableReason: I,
    isCustomEmoji: g,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r } = e,
            s = new Set(),
            a = [],
            o = 0,
            l = !1;
        for (let e of t) {
            let t = I({ emoji: e, channel: n, guildId: i, intention: r });
            if (null == t) {
                a.push(e);
                continue;
            }
            m.has(t) || a.push(e),
                E.has(t) &&
                    (null != e.id && s.add(e.id),
                    p.has(t) && (l || t !== f.EmojiDisabledReasons.PREMIUM_LOCKED || (l = !0), o++));
        }
        return { emojisDisabled: s, emojisUnfiltered: a, emojisPremiumLockedCount: o, emojiNitroLocked: l };
    },
    isEmojiFiltered(e) {
        let t = I(e);
        return m.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = I(e);
        return p.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r } = e,
            s = !1,
            a = 0;
        for (let e of t) {
            let t = I({ emoji: e, channel: n, intention: r, guildId: i });
            t === f.EmojiDisabledReasons.PREMIUM_LOCKED
                ? ((s = !0), a++)
                : t === f.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE && a++;
        }
        return s && a === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = I(e);
        return E.has(t);
    },
    isFileTooBig: (e) => e.size > 2097152,
    isDataTooBig: (e) => (0, d.EW)(e) > f.EMOJI_MAX_FILESIZE,
};
async function S(e) {
    return await c.A.getEmojiColors(e);
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: i, animated: r } = e;
    return null != n ? u.Ay.getEmojiURL({ id: n, size: t, animated: r ?? !1 }) : c.A.getURL(i);
}
function N(e) {
    return "allNamesString" in e ? e.allNamesString : `:${e.name}:`;
}
