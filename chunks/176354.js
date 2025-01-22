r.d(n, {
    B6: function () {
        return N;
    },
    qc: function () {
        return R;
    },
    sp: function () {
        return C;
    }
});
var i = r(47120);
var a = r(757143);
var o = r(653041);
var s = r(738774),
    l = r(906411),
    u = r(889564),
    c = r(131704),
    d = r(496675),
    f = r(594174),
    p = r(768581),
    h = r(563114),
    _ = r(956664),
    m = r(74538),
    g = r(981631),
    E = r(185923);
let v = 2097152,
    y = new Set([E.Z5.PREMIUM_LOCKED, E.Z5.ROLE_SUBSCRIPTION_LOCKED]),
    b = new Set([E.Z5.PREMIUM_LOCKED, E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, E.Z5.ROLE_SUBSCRIPTION_LOCKED, E.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE]),
    I = new Set([E.Z5.DISALLOW_EXTERNAL, E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE, E.Z5.ONLY_GUILD_EMOJIS_ALLOWED]);
function T(e) {
    if (e.type === l.B.GUILD) return !0;
    return null != e.guildId;
}
function S(e, n) {
    return null != e && null != n && (!T(e) || n === e.guildId);
}
function A(e) {
    let { emoji: n, channel: r, guildId: i = null == r ? void 0 : r.getGuildId(), intention: a, forceIncludeExternalGuilds: o } = e;
    if (!T(n)) return null;
    let l = null != r && (0, c.zi)(r.type),
        p = null != r && (0, c.bw)(r.type),
        h = S(n, i),
        _ = d.Z.can(g.Plq.USE_EXTERNAL_EMOJIS, r);
    if (a === E.Hz.COMMUNITY_CONTENT) return h && null != n.guildId && n.available ? null : E.Z5.DISALLOW_EXTERNAL;
    if ((!(0, E.Gt)(a) && !S(n, i) && !o) || ((l || p) && !h && !_)) return E.Z5.DISALLOW_EXTERNAL;
    if (null != n.id && !n.available) return E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE;
    let v = f.default.getCurrentUser();
    if (!m.ZP.canUseEmojisEverywhere(v) && !h) {
        if (a === E.Hz.STATUS) return E.Z5.PREMIUM_LOCKED;
        if (!n.managed) return E.Z5.PREMIUM_LOCKED;
    }
    if ((0, u.Fv)(n, null != i ? i : void 0)) return (0, s.Ol)(n.guildId) ? E.Z5.ROLE_SUBSCRIPTION_UNAVAILABLE : E.Z5.ROLE_SUBSCRIPTION_LOCKED;
    return !n.animated || m.ZP.canUseAnimatedEmojis(v) || (0, u.yH)(n) ? null : E.Z5.PREMIUM_LOCKED;
}
function C(e, n) {
    let r = 0,
        i = 0,
        a = 0,
        o = 0,
        s = 0,
        u = 0;
    return (
        e.forEach((e) => {
            null != e.id ? (e.type === l.B.GUILD && (e.guildId === n ? (e.managed ? o++ : i++) : e.managed ? s++ : a++), e.animated && u++) : r++;
        }),
        {
            unicode: r,
            custom: i,
            customExternal: a,
            managed: o,
            managedExternal: s,
            animated: u
        }
    );
}
async function N(e) {
    return await h.Z.getEmojiColors(e);
}
function R(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        { id: r, name: i, animated: a } = e;
    return null != r
        ? p.ZP.getEmojiURL({
              id: r,
              size: n,
              animated: null != a && a
          })
        : h.Z.getURL(i);
}
n.ZP = {
    sanitizeEmojiName(e) {
        for (e = e.replace(E.sW, '').slice(0, E.Yc); e.length < 2; ) e += '_';
        return e;
    },
    filterUnsupportedEmojis: h.Z.filterUnsupportedEmojis,
    getURL: h.Z.getURL,
    isInternalEmojiForGuildId: S,
    getEmojiUnavailableReason: A,
    isCustomEmoji: T,
    getEmojiUnavailableReasons(e) {
        let { categoryEmojis: n, channel: r, guildId: i, intention: a, computeUnfiltered: o = !1 } = e,
            s = new Set(),
            l = 0,
            u = o ? [] : void 0,
            c = 0,
            d = !1;
        for (let e of n) {
            let n = A({
                emoji: e,
                channel: r,
                guildId: i,
                intention: a
            });
            null != n ? (I.has(n) ? l++ : o && (null == u || u.push(e)), y.has(n) && (!d && n === E.Z5.PREMIUM_LOCKED && (d = !0), null != e.id && s.add(e.id), c++)) : o && (null == u || u.push(e));
        }
        return {
            emojisDisabled: s,
            emojisUnfiltered: u,
            emojisFilteredCount: l,
            emojisPremiumLockedCount: c,
            emojiNitroLocked: d
        };
    },
    isEmojiFiltered(e) {
        let n = A(e);
        return I.has(n);
    },
    isEmojiPremiumLocked(e) {
        let n = A(e);
        return y.has(n);
    },
    isEmojiCategoryNitroLocked(e) {
        let { categoryEmojis: n, channel: r, guildId: i, intention: a } = e,
            o = !1,
            s = 0;
        for (let e of n) {
            let n = A({
                emoji: e,
                channel: r,
                intention: a,
                guildId: i
            });
            n === E.Z5.PREMIUM_LOCKED ? ((o = !0), s++) : n === E.Z5.GUILD_SUBSCRIPTION_UNAVAILABLE && s++;
        }
        return o && s === n.length;
    },
    isEmojiFilteredOrLocked(e) {
        return this.isEmojiFiltered(e) || this.isEmojiPremiumLocked(e);
    },
    isEmojiDisabled(e) {
        let n = A(e);
        return b.has(n);
    },
    isFileTooBig: (e) => e.size > v,
    isDataTooBig: (e) => (0, _.QB)(e) > E.h_
};
