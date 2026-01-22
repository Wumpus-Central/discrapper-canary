n.d(t, {
    $m: () => m,
    CI: () => _,
    tU: () => p,
}),
    n(228524),
    n(938796);
var r = n(833291),
    i = n(376943),
    a = n(71393),
    s = n(486020),
    o = n(562153),
    l = n(304162),
    c = n(652215),
    u = n(381941),
    d = n(985018);
let f = 40;
function p(e) {
    var t, n, r, i, a;
    let {
        mediaPostEmbedData: c,
        guild: p,
        parentChannel: _,
        postThread: m,
        user: g,
        selectedGuildId: E,
        canAccess: b = !1,
    } = e;
    if (null == c) return null;
    let y = (0, l.et)(c.thumbnail),
        O = !b && c.has_media_attachment,
        A = b ? d.intl.string(d.t.UsZEBI) : d.intl.string(d.t.ReFzYZ),
        v = null != g ? o.Ay.getName(c.guild_id, c.channel_id, g) : void 0,
        S = null == g ? void 0 : g.getAvatarURL(null == p ? void 0 : p.id, f);
    (null == S || E !== c.guild_id) &&
        (S = s.Ay.getGuildIconURL({
            id: c.guild_id,
            icon: c.guild_icon,
            size: f,
            canAnimate: !1,
        }));
    let I = h(c.thumbnail) && !O,
        T =
            (null == (r = c.thumbnail) ? void 0 : r.filename) != null &&
            (null == (a = c.thumbnail) || null == (i = a.filename) ? void 0 : i.startsWith(u._W));
    return {
        title: null != (t = c.title) ? t : "",
        subtitle: c.description,
        ctaText: A,
        coverImage: y,
        coverImageOverlayText: O ? d.intl.string(d.t.Yonlia) : void 0,
        parentChannelId: c.parent_channel_id,
        threadId: c.channel_id,
        postThread: m,
        messageId: c.message_id,
        canAccess: b,
        guildId: c.guild_id,
        guildName: null != (n = null == p ? void 0 : p.name) ? n : c.guild_name,
        authorId: null == c ? void 0 : c.author_id,
        authorName: v,
        channelName: null == _ ? void 0 : _.name,
        avatarUrl: S,
        shouldShowBlurredThumbnailImage: O,
        shouldContainMediaWithBackground: I,
        shouldSpoiler: T,
        obscureAwaitingScan: !1,
        flags: c.flags,
        contentScanVersion: c.content_scan_version,
    };
}
function _(e) {
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
        n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE) ||
        n.features.has(c.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
    return !0 === t.isMediaChannel() && r;
}
