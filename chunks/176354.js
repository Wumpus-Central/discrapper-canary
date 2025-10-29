n.d(t, {
    B6: () => T,
    ZP: () => I,
    nY: () => A,
    qc: () => S,
}),
    n(388685),
    n(704826),
    n(35282),
    n(539854);
var r = n(738774),
    i = n(906411),
    a = n(889564),
    o = n(586132),
    s = n(131704),
    l = n(496675),
    c = n(594174),
    u = n(768581),
    d = n(563114),
    f = n(956664),
    _ = n(74538),
    p = n(981631),
    h = n(185923);
let m = 2097152,
    g = new Set([h.Z5.PREMIUM_LOCKED, h.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    E = new Set([...g, h.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, h.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    b = new Set([
        h.Z5.DISALLOW_CUSTOM,
        h.Z5.DISALLOW_EXTERNAL,
        h.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE,
        h.Z5.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function y(e) {
    return e.type === i.B.GUILD || null != e.guildId;
}
function O(e, t) {
    return null != e && null != t && (!y(e) || t === e.guildId);
}
function v(e) {
    let {
        emoji: t,
        channel: n,
        guildId: i = null == n ? void 0 : n.getGuildId(),
        intention: o,
        forceIncludeExternalGuilds: u,
    } = e;
    if (!y(t)) return null;
    if (o === h.Hz.GUILD_PROFILE) return h.Z5.DISALLOW_CUSTOM;
    let d = null != n && (0, s.zi)(n.type),
        f = null != n && (0, s.bw)(n.type),
        m = O(t, i),
        g = l.Z.can(p.Plq.USE_EXTERNAL_EMOJIS, n);
    if (o === h.Hz.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : h.Z5.DISALLOW_EXTERNAL;
    if ((!(0, h.Gt)(o) && !O(t, i) && !u) || ((d || f) && !m && !g)) return h.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return h.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let E = c.default.getCurrentUser();
    if (!_.ZP.canUseEmojisEverywhere(E) && !m) {
        if (o === h.Hz.STATUS) return h.Z5.PREMIUM_LOCKED;
        else if (!t.managed) return h.Z5.PREMIUM_LOCKED;
    }
    return (0, a.Fv)(t, null != i ? i : void 0)
        ? (0, r.Ol)(t.guildId)
            ? h.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE
            : h.Z5.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || _.ZP.canUseAnimatedEmojis(E) || (0, a.yH)(t)
          ? null
          : h.Z5.PREMIUM_LOCKED;
}
let I = {
    sanitizeEmojiName(e) {
        for (e = e.replace(h.sW, "").slice(0, h.Yc); e.length < 2; ) e += "_";
        return e;
    },
    filterUnsupportedEmojis: d.Z.filterUnsupportedEmojis,
    getURL: d.Z.getURL,
    isInternalEmojiForGuildId: O,
    getEmojiUnavailableReason: v,
    isCustomEmoji: y,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            a = new Set(),
            o = [],
            s = 0,
            l = !1;
        for (let e of t) {
            let t = v({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i,
            });
            if (null == t) {
                o.push(e);
                continue;
            }
            b.has(t) || o.push(e),
                E.has(t) &&
                    (null != e.id && a.add(e.id), g.has(t) && (l || t !== h.Z5.PREMIUM_LOCKED || (l = !0), s++));
        }
        return {
            emojisDisabled: a,
            emojisUnfiltered: o,
            emojisPremiumLockedCount: s,
            emojiNitroLocked: l,
        };
    },
    isEmojiFiltered(e) {
        let t = v(e);
        return b.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = v(e);
        return g.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            a = !1,
            o = 0;
        for (let e of t) {
            let t = v({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r,
            });
            t === h.Z5.PREMIUM_LOCKED ? ((a = !0), o++) : t === h.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++;
        }
        return a && o === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = v(e);
        return E.has(t);
    },
    isFileTooBig: (e) => e.size > m,
    isDataTooBig: (e) => (0, f.QB)(e) > h.h_,
};
async function T(e) {
    return await d.Z.getEmojiColors(e);
}
function S(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    if (null != n) {
        let e = (0, o.W)({ location: "emoji_url" }).enabled;
        return u.ZP.getEmojiURL({
            id: n,
            size: t,
            animated: null != i && i,
            forceSDR: e,
        });
    }
    return d.Z.getURL(r);
}
function A(e) {
    return "allNamesString" in e ? e.allNamesString : ":".concat(e.name, ":");
}
