"use strict";
n.d(t, { Ay: () => S, D_: () => y, Ez: () => v, N: () => N }), n(321073);
var r = n(836039),
    i = n(770335),
    s = n(492494),
    a = n(95701),
    o = n(576705),
    l = n(287809),
    u = n(486020),
    c = n(300703),
    d = n(515718),
    _ = n(927578),
    f = n(652215),
    p = n(307731);
let h = 2097152,
    m = new Set([p.Am.PREMIUM_LOCKED, p.Am.ROLE_SUBSCRIPTION_LOCKED]),
    E = new Set([...m, p.Am.GUILD_SUBSCRIPTION_UNAVAILABLE, p.Am.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    g = new Set([
        p.Am.DISALLOW_CUSTOM,
        p.Am.DISALLOW_EXTERNAL,
        p.Am.GUILD_SUBSCRIPTION_UNAVAILABLE,
        p.Am.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function A(e) {
    return e.type === i.i.GUILD || null != e.guildId;
}
function I(e, t) {
    return null != e && null != t && (!A(e) || t === e.guildId);
}
function T(e) {
    let { emoji: t, channel: n, guildId: i = n?.getGuildId(), intention: u, forceIncludeExternalGuilds: c } = e;
    if (!A(t)) return null;
    if (u === p.b_.GUILD_PROFILE || u === p.b_.NO_CUSTOM_EMOJI) return p.Am.DISALLOW_CUSTOM;
    let d = null != n && (0, a.ke)(n.type),
        h = null != n && (0, a.ay)(n.type),
        m = I(t, i),
        E = o.A.can(f.xBc.USE_EXTERNAL_EMOJIS, n);
    if (u === p.b_.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : p.Am.DISALLOW_EXTERNAL;
    if ((!(0, p.Re)(u) && !I(t, i) && !c) || ((d || h) && !m && !E)) return p.Am.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return p.Am.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let g = l.default.getCurrentUser();
    if (!_.Ay.canUseEmojisEverywhere(g) && !m) {
        if (u === p.b_.STATUS) return p.Am.PREMIUM_LOCKED;
        else if (!t.managed) return p.Am.PREMIUM_LOCKED;
    }
    return (0, s.JN)(t, i ?? void 0)
        ? (0, r.tE)(t.guildId)
            ? p.Am.ROLE_SUBSCRIPTION_UNAVAILABLE
            : p.Am.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || _.Ay.canUseAnimatedEmojis(g) || (0, s.kT)(t)
          ? null
          : p.Am.PREMIUM_LOCKED;
}
let S = {
    sanitizeEmojiName(e) {
        for (e = e.replace(p.ZT, "").slice(0, 32); e.length < 2; ) e += "_";
        return e;
    },
    filterUnsupportedEmojis: c.A.filterUnsupportedEmojis,
    getURL: c.A.getURL,
    isInternalEmojiForGuildId: I,
    getEmojiUnavailableReason: T,
    isCustomEmoji: A,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            s = new Set(),
            a = [],
            o = 0,
            l = !1;
        for (let e of t) {
            let t = T({ emoji: e, channel: n, guildId: r, intention: i });
            if (null == t) {
                a.push(e);
                continue;
            }
            g.has(t) || a.push(e),
                E.has(t) &&
                    (null != e.id && s.add(e.id), m.has(t) && (l || t !== p.Am.PREMIUM_LOCKED || (l = !0), o++));
        }
        return { emojisDisabled: s, emojisUnfiltered: a, emojisPremiumLockedCount: o, emojiNitroLocked: l };
    },
    isEmojiFiltered(e) {
        let t = T(e);
        return g.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = T(e);
        return m.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            s = !1,
            a = 0;
        for (let e of t) {
            let t = T({ emoji: e, channel: n, intention: i, guildId: r });
            t === p.Am.PREMIUM_LOCKED ? ((s = !0), a++) : t === p.Am.GUILD_SUBSCRIPTION_UNAVAILABLE && a++;
        }
        return s && a === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = T(e);
        return E.has(t);
    },
    isFileTooBig: (e) => e.size > h,
    isDataTooBig: (e) => (0, d.EW)(e) > 262144,
};
async function y(e) {
    return await c.A.getEmojiColors(e);
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    return null != n ? u.Ay.getEmojiURL({ id: n, size: t, animated: i ?? !1 }) : c.A.getURL(r);
}
function N(e) {
    return "allNamesString" in e ? e.allNamesString : `:${e.name}:`;
}
