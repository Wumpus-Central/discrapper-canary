"use strict";
n.d(t, { $m: () => f, CI: () => I, tU: () => h }), n(938796);
var i = n(665260),
    r = n(47167),
    a = n(721779),
    s = n(376943),
    l = n(71393),
    o = n(994500),
    d = n(287809),
    c = n(486020),
    u = n(562153),
    _ = n(304162),
    E = n(652215),
    A = n(375708);
function h(e) {
    let {
        mediaPostEmbedData: t,
        guild: n,
        parentChannel: a,
        postThread: s,
        user: l,
        selectedGuildId: h,
        canAccess: I = !1,
    } = e;
    if (null == t) return null;
    let f = (0, _.et)(t.thumbnail),
        p = !I && t.has_media_attachment,
        T = I ? A.intl.string(A.t.UsZEBI) : A.intl.string(A.t.ReFzYZ),
        m = null != l ? u.Ay.getName(t.guild_id, t.channel_id, l) : void 0,
        g = l?.getAvatarURL(n?.id, 40);
    (null == g || h !== t.guild_id) &&
        (g = c.Ay.getGuildIconURL({ id: t.guild_id, icon: t.guild_icon, size: 40, canAnimate: !1 }));
    let S =
            (function (e) {
                if (null == e) return !1;
                let { height: t, width: n } = e;
                return null != t && null != n && t >= n;
            })(t.thumbnail) && !p,
        N = (0, i.Lt)(t.thumbnail?.flags ?? 0, E.sbO.IS_SPOILER);
    return {
        title: t.title ?? "",
        subtitle: t.description,
        ctaText: T,
        coverImage: f,
        coverImageOverlayText: p ? A.intl.string(A.t.Yonlia) : void 0,
        parentChannelId: t.parent_channel_id,
        threadId: t.channel_id,
        postThread: s,
        messageId: t.message_id,
        canAccess: I,
        guildId: t.guild_id,
        guildName: n?.name ?? t.guild_name,
        authorId: t?.author_id,
        authorName: m,
        channelName: null != a ? (0, r.m1)(a, d.default, o.A) : void 0,
        avatarUrl: g,
        shouldShowBlurredThumbnailImage: p,
        shouldContainMediaWithBackground: S,
        shouldSpoiler: N,
        obscureAwaitingScan: !1,
        flags: t.flags,
        contentScanVersion: t.content_scan_version,
    };
}
function I(e) {
    if (null == e) return;
    let t = (0, a.l7)(e);
    if (null == t) return;
    let n = (0, a.tl)(t);
    if (null != n) return (0, s.vu)(n);
}
function f(e, t) {
    let n = l.A.getGuild(e);
    if (null == n || null == t) return !1;
    let i =
        n.features.has(E.GuildFeatures.CREATOR_MONETIZABLE) ||
        n.features.has(E.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && i;
}
