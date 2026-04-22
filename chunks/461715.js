"use strict";
n.d(t, { $m: () => m, CI: () => p, tU: () => h }), n(938796);
var r = n(47167),
    i = n(833291),
    s = n(376943),
    a = n(71393),
    o = n(994500),
    l = n(287809),
    u = n(486020),
    d = n(562153),
    c = n(304162),
    _ = n(652215),
    f = n(381941),
    E = n(985018);
function h(e) {
    let {
        mediaPostEmbedData: t,
        guild: n,
        parentChannel: i,
        postThread: s,
        user: a,
        selectedGuildId: _,
        canAccess: h = !1,
    } = e;
    if (null == t) return null;
    let p = (0, c.et)(t.thumbnail),
        m = !h && t.has_media_attachment,
        g = h ? E.intl.string(E.t.UsZEBI) : E.intl.string(E.t.ReFzYZ),
        A = null != a ? d.Ay.getName(t.guild_id, t.channel_id, a) : void 0,
        I = a?.getAvatarURL(n?.id, 40);
    (null == I || _ !== t.guild_id) &&
        (I = u.Ay.getGuildIconURL({ id: t.guild_id, icon: t.guild_icon, size: 40, canAnimate: !1 }));
    let T =
            (function (e) {
                if (null == e) return !1;
                let { height: t, width: n } = e;
                return null != t && null != n && t >= n;
            })(t.thumbnail) && !m,
        S = t.thumbnail?.filename != null && t.thumbnail?.filename?.startsWith(f._W);
    return {
        title: t.title ?? "",
        subtitle: t.description,
        ctaText: g,
        coverImage: p,
        coverImageOverlayText: m ? E.intl.string(E.t.Yonlia) : void 0,
        parentChannelId: t.parent_channel_id,
        threadId: t.channel_id,
        postThread: s,
        messageId: t.message_id,
        canAccess: h,
        guildId: t.guild_id,
        guildName: n?.name ?? t.guild_name,
        authorId: t?.author_id,
        authorName: A,
        channelName: null != i ? (0, r.m1)(i, l.default, o.A) : void 0,
        avatarUrl: I,
        shouldShowBlurredThumbnailImage: m,
        shouldContainMediaWithBackground: T,
        shouldSpoiler: S,
        obscureAwaitingScan: !1,
        flags: t.flags,
        contentScanVersion: t.content_scan_version,
    };
}
function p(e) {
    if (null == e) return;
    let t = (0, i.l7)(e);
    if (null == t) return;
    let n = (0, i.tl)(t);
    if (null != n) return (0, s.vu)(n);
}
function m(e, t) {
    let n = a.A.getGuild(e);
    if (null == n || null == t) return !1;
    let r =
        n.features.has(_.GuildFeatures.CREATOR_MONETIZABLE) ||
        n.features.has(_.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
