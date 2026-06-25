"use strict";
n.d(t, { $m: () => m, CI: () => E, tU: () => p }), n(938796);
var i = n(665260),
    r = n(47167),
    s = n(833291),
    a = n(376943),
    o = n(71393),
    l = n(994500),
    u = n(287809),
    c = n(486020),
    d = n(562153),
    _ = n(304162),
    h = n(652215),
    f = n(375708);
function p(e) {
    let {
        mediaPostEmbedData: t,
        guild: n,
        parentChannel: s,
        postThread: a,
        user: o,
        selectedGuildId: p,
        canAccess: E = !1,
    } = e;
    if (null == t) return null;
    let m = (0, _.et)(t.thumbnail),
        g = !E && t.has_media_attachment,
        A = E ? f.intl.string(f.t.UsZEBI) : f.intl.string(f.t.ReFzYZ),
        I = null != o ? d.Ay.getName(t.guild_id, t.channel_id, o) : void 0,
        T = o?.getAvatarURL(n?.id, 40);
    (null == T || p !== t.guild_id) &&
        (T = c.Ay.getGuildIconURL({ id: t.guild_id, icon: t.guild_icon, size: 40, canAnimate: !1 }));
    let S =
            (function (e) {
                if (null == e) return !1;
                let { height: t, width: n } = e;
                return null != t && null != n && t >= n;
            })(t.thumbnail) && !g,
        y = (0, i.Lt)(t.thumbnail?.flags ?? 0, h.sbO.IS_SPOILER);
    return {
        title: t.title ?? "",
        subtitle: t.description,
        ctaText: A,
        coverImage: m,
        coverImageOverlayText: g ? f.intl.string(f.t.Yonlia) : void 0,
        parentChannelId: t.parent_channel_id,
        threadId: t.channel_id,
        postThread: a,
        messageId: t.message_id,
        canAccess: E,
        guildId: t.guild_id,
        guildName: n?.name ?? t.guild_name,
        authorId: t?.author_id,
        authorName: I,
        channelName: null != s ? (0, r.m1)(s, u.default, l.A) : void 0,
        avatarUrl: T,
        shouldShowBlurredThumbnailImage: g,
        shouldContainMediaWithBackground: S,
        shouldSpoiler: y,
        obscureAwaitingScan: !1,
        flags: t.flags,
        contentScanVersion: t.content_scan_version,
    };
}
function E(e) {
    if (null == e) return;
    let t = (0, s.l7)(e);
    if (null == t) return;
    let n = (0, s.tl)(t);
    if (null != n) return (0, a.vu)(n);
}
function m(e, t) {
    let n = o.A.getGuild(e);
    if (null == n || null == t) return !1;
    let i =
        n.features.has(h.GuildFeatures.CREATOR_MONETIZABLE) ||
        n.features.has(h.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && i;
}
