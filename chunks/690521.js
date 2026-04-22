"use strict";
n.d(t, { Ay: () => T, D_: () => S, Ez: () => y, N: () => N }), n(321073);
var r = n(836039),
    i = n(770335),
    s = n(492494),
    a = n(95701),
    o = n(576705),
    l = n(287809),
    u = n(486020),
    d = n(300703),
    c = n(515718),
    _ = n(927578),
    f = n(652215),
    E = n(307731);
let h = new Set([E.EmojiDisabledReasons.PREMIUM_LOCKED, E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED]),
    p = new Set([
        ...h,
        E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE,
        E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE,
    ]),
    m = new Set([
        E.EmojiDisabledReasons.DISALLOW_CUSTOM,
        E.EmojiDisabledReasons.DISALLOW_EXTERNAL,
        E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE,
        E.EmojiDisabledReasons.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function g(e) {
    return e.type === i.i.GUILD || null != e.guildId;
}
function A(e, t) {
    return null != e && null != t && (!g(e) || t === e.guildId);
}
function I(e) {
    let { emoji: t, channel: n, guildId: i = n?.getGuildId(), intention: u, forceIncludeExternalGuilds: d } = e;
    if (!g(t)) return null;
    if (u === E.EmojiIntention.GUILD_PROFILE || u === E.EmojiIntention.NO_CUSTOM_EMOJI)
        return E.EmojiDisabledReasons.DISALLOW_CUSTOM;
    let c = null != n && (0, a.ke)(n.type),
        h = null != n && (0, a.ay)(n.type),
        p = A(t, i),
        m = o.A.can(f.xBc.USE_EXTERNAL_EMOJIS, n);
    if (u === E.EmojiIntention.COMMUNITY_CONTENT)
        return p && null != t.guildId && t.available ? null : E.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if ((!(0, E.isExternalEmojiAllowedForIntention)(u) && !A(t, i) && !d) || ((c || h) && !p && !m))
        return E.EmojiDisabledReasons.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let I = l.default.getCurrentUser();
    if (!_.Ay.canUseEmojisEverywhere(I) && !p) {
        if (u === E.EmojiIntention.STATUS) return E.EmojiDisabledReasons.PREMIUM_LOCKED;
        else if (!t.managed) return E.EmojiDisabledReasons.PREMIUM_LOCKED;
    }
    return (0, s.JN)(t, i ?? void 0)
        ? (0, r.tE)(t.guildId)
            ? E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_UNAVAILABLE
            : E.EmojiDisabledReasons.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || _.Ay.canUseAnimatedEmojis(I) || (0, s.kT)(t)
          ? null
          : E.EmojiDisabledReasons.PREMIUM_LOCKED;
}
let T = {
    sanitizeEmojiName(e) {
        for (e = e.replace(E.EMOJI_RE, "").slice(0, E.EMOJI_MAX_LENGTH); e.length < 2; ) e += "_";
        return e;
    },
    filterUnsupportedEmojis: d.A.filterUnsupportedEmojis,
    getURL: d.A.getURL,
    isInternalEmojiForGuildId: A,
    getEmojiUnavailableReason: I,
    isCustomEmoji: g,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            s = new Set(),
            a = [],
            o = 0,
            l = !1;
        for (let e of t) {
            let t = I({ emoji: e, channel: n, guildId: r, intention: i });
            if (null == t) {
                a.push(e);
                continue;
            }
            m.has(t) || a.push(e),
                p.has(t) &&
                    (null != e.id && s.add(e.id),
                    h.has(t) && (l || t !== E.EmojiDisabledReasons.PREMIUM_LOCKED || (l = !0), o++));
        }
        return { emojisDisabled: s, emojisUnfiltered: a, emojisPremiumLockedCount: o, emojiNitroLocked: l };
    },
    isEmojiFiltered(e) {
        let t = I(e);
        return m.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = I(e);
        return h.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            s = !1,
            a = 0;
        for (let e of t) {
            let t = I({ emoji: e, channel: n, intention: i, guildId: r });
            t === E.EmojiDisabledReasons.PREMIUM_LOCKED
                ? ((s = !0), a++)
                : t === E.EmojiDisabledReasons.GUILD_SUBSCRIPTION_UNAVAILABLE && a++;
        }
        return s && a === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = I(e);
        return p.has(t);
    },
    isFileTooBig: (e) => e.size > 2097152,
    isDataTooBig: (e) => (0, c.EW)(e) > E.EMOJI_MAX_FILESIZE,
};
async function S(e) {
    return await d.A.getEmojiColors(e);
}
function y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    return null != n ? u.Ay.getEmojiURL({ id: n, size: t, animated: i ?? !1 }) : d.A.getURL(r);
}
function N(e) {
    return "allNamesString" in e ? e.allNamesString : `:${e.name}:`;
}
