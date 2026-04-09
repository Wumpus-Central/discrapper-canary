"use strict";
n.d(t, { $m: () => A, CI: () => E, tU: () => m }), n(938796);
var r = n(47167),
    i = n(833291),
    s = n(376943),
    a = n(71393),
    o = n(994500),
    l = n(287809),
    u = n(486020),
    c = n(562153),
    d = n(304162),
    _ = n(652215),
    f = n(381941),
    p = n(985018);
let h = 40;
function m(e) {
    let {
        mediaPostEmbedData: t,
        guild: n,
        parentChannel: i,
        postThread: s,
        user: a,
        selectedGuildId: _,
        canAccess: m = !1,
    } = e;
    if (null == t) return null;
    let E = (0, d.et)(t.thumbnail),
        A = !m && t.has_media_attachment,
        I = m ? p.intl.string(p.t.UsZEBI) : p.intl.string(p.t.ReFzYZ),
        T = null != a ? c.Ay.getName(t.guild_id, t.channel_id, a) : void 0,
        S = a?.getAvatarURL(n?.id, h);
    (null == S || _ !== t.guild_id) &&
        (S = u.Ay.getGuildIconURL({ id: t.guild_id, icon: t.guild_icon, size: h, canAnimate: !1 }));
    let y = g(t.thumbnail) && !A,
        v = t.thumbnail?.filename != null && t.thumbnail?.filename?.startsWith(f._W);
    return {
        title: t.title ?? "",
        subtitle: t.description,
        ctaText: I,
        coverImage: E,
        coverImageOverlayText: A ? p.intl.string(p.t.Yonlia) : void 0,
        parentChannelId: t.parent_channel_id,
        threadId: t.channel_id,
        postThread: s,
        messageId: t.message_id,
        canAccess: m,
        guildId: t.guild_id,
        guildName: n?.name ?? t.guild_name,
        authorId: t?.author_id,
        authorName: T,
        channelName: null != i ? (0, r.m1)(i, l.default, o.A) : void 0,
        avatarUrl: S,
        shouldShowBlurredThumbnailImage: A,
        shouldContainMediaWithBackground: y,
        shouldSpoiler: v,
        obscureAwaitingScan: !1,
        flags: t.flags,
        contentScanVersion: t.content_scan_version,
    };
}
function E(e) {
    if (null == e) return;
    let t = (0, i.l7)(e);
    if (null == t) return;
    let n = (0, i.tl)(t);
    if (null != n) return (0, s.vu)(n);
}
function g(e) {
    if (null == e) return !1;
    let { height: t, width: n } = e;
    return null != t && null != n && t >= n;
}
function A(e, t) {
    let n = a.A.getGuild(e);
    if (null == n || null == t) return !1;
    let r =
        n.features.has(_.GuildFeatures.CREATOR_MONETIZABLE) ||
        n.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
