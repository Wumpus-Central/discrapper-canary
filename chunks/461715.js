n(938796);
var i = n(665260),
    r = n(47167),
    a = n(486889),
    s = n(376943),
    l = n(71393),
    o = n(994500),
    d = n(287809),
    c = n(486020),
    u = n(562153),
    _ = n(304162),
    E = n(652215),
    A = n(792996);
n.d(
    t,
    {},
    {
        $m: function (e, t) {
            let n = l.A.getGuild(e);
            if (null == n || null == t) return !1;
            let i =
                n.features.has(E.GuildFeatures.CREATOR_MONETIZABLE) ||
                n.features.has(E.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL);
            return !0 === t.isMediaChannel() && i;
        },
        CI: function (e) {
            if (null == e) return;
            let t = (0, a.l7)(e);
            if (null == t) return;
            let n = (0, a.tl)(t);
            if (null != n) return (0, s.vu)(n);
        },
        tU: function (e) {
            let {
                mediaPostEmbedData: t,
                guild: n,
                parentChannel: a,
                postThread: s,
                user: l,
                selectedGuildId: f,
                canAccess: h = !1,
            } = e;
            if (null == t) return null;
            let I = (0, _.et)(t.thumbnail),
                p = !h && t.has_media_attachment,
                m = h ? A.intl.string(A.t.UsZEBI) : A.intl.string(A.t.ReFzYZ),
                g = null != l ? u.Ay.getName(t.guild_id, t.channel_id, l) : void 0,
                T = l?.getAvatarURL(n?.id, 40);
            (null == T || f !== t.guild_id) &&
                (T = c.Ay.getGuildIconURL({ id: t.guild_id, icon: t.guild_icon, size: 40, canAnimate: !1 }));
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
                ctaText: m,
                coverImage: I,
                coverImageOverlayText: p ? A.intl.string(A.t.Yonlia) : void 0,
                parentChannelId: t.parent_channel_id,
                threadId: t.channel_id,
                postThread: s,
                messageId: t.message_id,
                canAccess: h,
                guildId: t.guild_id,
                guildName: n?.name ?? t.guild_name,
                authorId: t?.author_id,
                authorName: g,
                channelName: null != a ? (0, r.m1)(a, d.default, o.A) : void 0,
                avatarUrl: T,
                shouldShowBlurredThumbnailImage: p,
                shouldContainMediaWithBackground: S,
                shouldSpoiler: N,
                obscureAwaitingScan: !1,
                flags: t.flags,
                contentScanVersion: t.content_scan_version,
            };
        },
    },
);
