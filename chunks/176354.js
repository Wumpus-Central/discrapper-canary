n.d(t, {
    B6: () => S,
    ZP: () => v,
    nY: () => T,
    qc: () => I,
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
    p = n(981631),
    _ = n(185923);
let m = 2097152,
    h = new Set([_.Z5.PREMIUM_LOCKED, _.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    g = new Set([...h, _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, _.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    E = new Set([
        _.Z5.DISALLOW_CUSTOM,
        _.Z5.DISALLOW_EXTERNAL,
        _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE,
        _.Z5.ONLY_GUILD_EMOJIS_ALLOWED,
    ]);
function b(e) {
    return e.type === i.B.GUILD || null != e.guildId;
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
    if (c === _.Hz.GUILD_PROFILE) return _.Z5.DISALLOW_CUSTOM;
    let d = null != n && (0, o.zi)(n.type),
        m = null != n && (0, o.bw)(n.type),
        h = y(t, i),
        g = s.Z.can(p.Plq.USE_EXTERNAL_EMOJIS, n);
    if (c === _.Hz.COMMUNITY_CONTENT) return h && null != t.guildId && t.available ? null : _.Z5.DISALLOW_EXTERNAL;
    if ((!(0, _.Gt)(c) && !y(t, i) && !u) || ((d || m) && !h && !g)) return _.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let E = l.default.getCurrentUser();
    if (!f.ZP.canUseEmojisEverywhere(E) && !h) {
        if (c === _.Hz.STATUS) return _.Z5.PREMIUM_LOCKED;
        else if (!t.managed) return _.Z5.PREMIUM_LOCKED;
    }
    return (0, a.Fv)(t, null != i ? i : void 0)
        ? (0, r.Ol)(t.guildId)
            ? _.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE
            : _.Z5.ROLE_SUBSCRIPTION_LOCKED
        : !t.animated || f.ZP.canUseAnimatedEmojis(E) || (0, a.yH)(t)
          ? null
          : _.Z5.PREMIUM_LOCKED;
}
let v = {
    sanitizeEmojiName(e) {
        for (e = e.replace(_.sW, "").slice(0, _.Yc); e.length < 2; ) e += "_";
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
                intention: i,
            });
            if (null == t) {
                o.push(e);
                continue;
            }
            E.has(t) || o.push(e),
                g.has(t) &&
                    (null != e.id && a.add(e.id), h.has(t) && (l || t !== _.Z5.PREMIUM_LOCKED || (l = !0), s++));
        }
        return {
            emojisDisabled: a,
            emojisUnfiltered: o,
            emojisPremiumLockedCount: s,
            emojiNitroLocked: l,
        };
    },
    isEmojiFiltered(e) {
        let t = O(e);
        return E.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = O(e);
        return h.has(t);
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
                guildId: r,
            });
            t === _.Z5.PREMIUM_LOCKED ? ((a = !0), o++) : t === _.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && o++;
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
    isFileTooBig: (e) => e.size > m,
    isDataTooBig: (e) => (0, d.QB)(e) > _.h_,
};
async function S(e) {
    return await u.Z.getEmojiColors(e);
}
function I(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: r, animated: i } = e;
    return null != n
        ? c.ZP.getEmojiURL({
              id: n,
              size: t,
              animated: null != i && i,
          })
        : u.Z.getURL(r);
}
function T(e) {
    return "allNamesString" in e ? e.allNamesString : ":".concat(e.name, ":");
}
