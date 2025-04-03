n.d(t, {
    B6: () => S,
    ZP: () => I,
    qc: () => T,
    sp: () => O
}),
    n(47120),
    n(757143),
    n(301563),
    n(653041);
var r = n(738774),
    i = n(906411),
    o = n(889564),
    a = n(131704),
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
function v(e) {
    let { emoji: t, channel: n, guildId: i = null == n ? void 0 : n.getGuildId(), intention: c, forceIncludeExternalGuilds: u } = e;
    if (!b(t)) return null;
    if (c === p.Hz.GUILD_PROFILE) return p.Z5.DISALLOW_CUSTOM;
    let d = null != n && (0, a.zi)(n.type),
        h = null != n && (0, a.bw)(n.type),
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
    return (0, o.Fv)(t, null != i ? i : void 0) ? ((0, r.Ol)(t.guildId) ? p.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : p.Z5.ROLE_SUBSCRIPTION_LOCKED) : !t.animated || f.ZP.canUseAnimatedEmojis(E) || (0, o.yH)(t) ? null : p.Z5.PREMIUM_LOCKED;
}
function O(e, t) {
    let n = 0,
        r = 0,
        o = 0,
        a = 0,
        s = 0,
        l = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === i.B.GUILD && (e.guildId === t ? (e.managed ? a++ : r++) : e.managed ? s++ : o++), e.animated && l++) : n++;
        }),
        {
            unicode: n,
            custom: r,
            customExternal: o,
            managed: a,
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
    getEmojiUnavailableReason: v,
    isCustomEmoji: b,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            o = new Set(),
            a = [],
            s = 0,
            l = !1;
        for (let e of t) {
            let t = v({
                emoji: e,
                channel: n,
                guildId: r,
                intention: i
            });
            if (null == t) {
                a.push(e);
                continue;
            }
            E.has(t) || a.push(e), g.has(t) && (null != e.id && o.add(e.id), m.has(t) && (l || t !== p.Z5.PREMIUM_LOCKED || (l = !0), s++));
        }
        return {
            emojisDisabled: o,
            emojisUnfiltered: a,
            emojisPremiumLockedCount: s,
            emojiNitroLocked: l
        };
    },
    isEmojiFiltered(e) {
        let t = v(e);
        return E.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = v(e);
        return m.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: r, intention: i } = e,
            o = !1,
            a = 0;
        for (let e of t) {
            let t = v({
                emoji: e,
                channel: n,
                intention: i,
                guildId: r
            });
            t === p.Z5.PREMIUM_LOCKED ? ((o = !0), a++) : t === p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && a++;
        }
        return o && a === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = v(e);
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
