"use strict";
n.d(t, { $m: () => m, CI: () => p, tU: () => f }), n(938796);
var r = n(833291),
    i = n(376943),
    a = n(71393),
    s = n(486020),
    o = n(562153),
    l = n(304162),
    u = n(652215),
    c = n(381941),
    d = n(985018);
let _ = 40;
function f(e) {
    let {
        mediaPostEmbedData: t,
        guild: n,
        parentChannel: r,
        postThread: i,
        user: a,
        selectedGuildId: u,
        canAccess: f = !1,
    } = e;
    if (null == t) return null;
    let p = (0, l.et)(t.thumbnail),
        m = !f && t.has_media_attachment,
        g = f ? d.intl.string(d.t.UsZEBI) : d.intl.string(d.t.ReFzYZ),
        E = null != a ? o.Ay.getName(t.guild_id, t.channel_id, a) : void 0,
        A = a?.getAvatarURL(n?.id, _);
    (null == A || u !== t.guild_id) &&
        (A = s.Ay.getGuildIconURL({ id: t.guild_id, icon: t.guild_icon, size: _, canAnimate: !1 }));
    let I = h(t.thumbnail) && !m,
        T = t.thumbnail?.filename != null && t.thumbnail?.filename?.startsWith(c._W);
    return {
        title: t.title ?? "",
        subtitle: t.description,
        ctaText: g,
        coverImage: p,
        coverImageOverlayText: m ? d.intl.string(d.t.Yonlia) : void 0,
        parentChannelId: t.parent_channel_id,
        threadId: t.channel_id,
        postThread: i,
        messageId: t.message_id,
        canAccess: f,
        guildId: t.guild_id,
        guildName: n?.name ?? t.guild_name,
        authorId: t?.author_id,
        authorName: E,
        channelName: r?.name,
        avatarUrl: A,
        shouldShowBlurredThumbnailImage: m,
        shouldContainMediaWithBackground: I,
        shouldSpoiler: T,
        obscureAwaitingScan: !1,
        flags: t.flags,
        contentScanVersion: t.content_scan_version,
    };
}
function p(e) {
    if (null == e) return;
    let t = (0, r.l7)(e);
    if (null == t) return;
    let n = (0, r.tl)(t);
    if (null != n) return (0, i.vu)(n);
}
function h(e) {
    if (null == e) return !1;
    let { height: t, width: n } = e;
    return null != t && null != n && t >= n;
}
function m(e, t) {
    let n = a.A.getGuild(e);
    if (null == n || null == t) return !1;
    let r =
        n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE) ||
        n.features.has(u.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
