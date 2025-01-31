n.d(t, {
    B6: () => S,
    ZP: () => T,
    qc: () => A,
    sp: () => b
}),
    n(47120),
    n(757143),
    n(653041);
var i = n(738774),
    r = n(906411),
    a = n(889564),
    s = n(131704),
    o = n(496675),
    l = n(594174),
    u = n(768581),
    c = n(563114),
    d = n(956664),
    f = n(74538),
    _ = n(981631),
    p = n(185923);
let h = 2097152,
    m = new Set([p.Z5.PREMIUM_LOCKED, p.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    g = new Set([p.Z5.PREMIUM_LOCKED, p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, p.Z5.ROLE_SUBSCRIPTION_LOCKED, p.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    E = new Set([p.Z5.DISALLOW_EXTERNAL, p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, p.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);
function v(e) {
    return e.type === r.B.GUILD || null != e.guildId;
}
function y(e, t) {
    return null != e && null != t && (!v(e) || t === e.guildId);
}
function I(e) {
    let { emoji: t, channel: n, guildId: r = null == n ? void 0 : n.getGuildId(), intention: u, forceIncludeExternalGuilds: c } = e;
    if (!v(t)) return null;
    let d = null != n && (0, s.zi)(n.type),
        h = null != n && (0, s.bw)(n.type),
        m = y(t, r),
        g = o.Z.can(_.Plq.USE_EXTERNAL_EMOJIS, n);
    if (u === p.Hz.COMMUNITY_CONTENT) return m && null != t.guildId && t.available ? null : p.Z5.DISALLOW_EXTERNAL;
    if ((!(0, p.Gt)(u) && !y(t, r) && !c) || ((d || h) && !m && !g)) return p.Z5.DISALLOW_EXTERNAL;
    if (null != t.id && !t.available) return p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let E = l.default.getCurrentUser();
    return f.ZP.canUseEmojisEverywhere(E) || m || (u !== p.Hz.STATUS && t.managed) ? ((0, a.Fv)(t, null != r ? r : void 0) ? ((0, i.Ol)(t.guildId) ? p.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : p.Z5.ROLE_SUBSCRIPTION_LOCKED) : !t.animated || f.ZP.canUseAnimatedEmojis(E) || (0, a.yH)(t) ? null : p.Z5.PREMIUM_LOCKED) : p.Z5.PREMIUM_LOCKED;
}
function b(e, t) {
    let n = 0,
        i = 0,
        a = 0,
        s = 0,
        o = 0,
        l = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === r.B.GUILD && (e.guildId === t ? (e.managed ? s++ : i++) : e.managed ? o++ : a++), e.animated && l++) : n++;
        }),
        {
            unicode: n,
            custom: i,
            customExternal: a,
            managed: s,
            managedExternal: o,
            animated: l
        }
    );
}
let T = {
    sanitizeEmojiName(e) {
        for (e = e.replace(p.sW, '').slice(0, p.Yc); e.length < 2; ) e += '_';
        return e;
    },
    filterUnsupportedEmojis: c.Z.filterUnsupportedEmojis,
    getURL: c.Z.getURL,
    isInternalEmojiForGuildId: y,
    getEmojiUnavailableReason: I,
    isCustomEmoji: v,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r, computeUnfiltered: a = !1 } = e,
            s = new Set(),
            o = 0,
            l = a ? [] : void 0,
            u = 0,
            c = !1;
        for (let e of t) {
            let t = I({
                emoji: e,
                channel: n,
                guildId: i,
                intention: r
            });
            null != t ? (E.has(t) ? o++ : a && (null == l || l.push(e)), m.has(t) && (c || t !== p.Z5.PREMIUM_LOCKED || (c = !0), null != e.id && s.add(e.id), u++)) : a && (null == l || l.push(e));
        }
        return {
            emojisDisabled: s,
            emojisUnfiltered: l,
            emojisFilteredCount: o,
            emojisPremiumLockedCount: u,
            emojiNitroLocked: c
        };
    },
    isEmojiFiltered(e) {
        let t = I(e);
        return E.has(t);
    },
    isEmojiPremiumLocked(e) {
        let t = I(e);
        return m.has(t);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: t, channel: n, guildId: i, intention: r } = e,
            a = !1,
            s = 0;
        for (let e of t) {
            let t = I({
                emoji: e,
                channel: n,
                intention: r,
                guildId: i
            });
            t === p.Z5.PREMIUM_LOCKED ? ((a = !0), s++) : t === p.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && s++;
        }
        return a && s === t.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let t = I(e);
        return g.has(t);
    },
    isFileTooBig: (e) => e.size > h,
    isDataTooBig: (e) => (0, d.QB)(e) > p.h_
};
async function S(e) {
    return await c.Z.getEmojiColors(e);
}
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: n, name: i, animated: r } = e;
    return null != n
        ? u.ZP.getEmojiURL({
              id: n,
              size: t,
              animated: null != r && r
          })
        : c.Z.getURL(i);
}
