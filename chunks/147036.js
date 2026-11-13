n(321073);
var i = n(136722),
    r = n(155718),
    a = n(842937),
    s = n(669715),
    l = n(461715),
    o = n(105530),
    d = n(95701),
    c = n(734057),
    u = n(808728),
    _ = n(576705),
    E = n(309010),
    A = n(607567),
    f = n(488926),
    h = n(811091);
n(427262);
var I = n(652215),
    p = n(682901),
    m = n(792996);
let { GUILD_VOICE: T, GUILD_CATEGORY: g, GUILD_STAGE_VOICE: S } = I.rbe;
function N(e, t) {
    return e === t || e === g;
}
function C(e, t, n) {
    let r = f.x3;
    return (
        ((0, d.tr)(t) || t === g) && (r = i.WQ(r, I.xBc.VIEW_CHANNEL)),
        (N(t, T) || N(t, S)) && ((r = i.WQ(r, I.xBc.VIEW_CHANNEL)), (r = i.WQ(r, I.xBc.CONNECT))),
        { id: e, type: n, deny: f.x3, allow: r }
    );
}
function O(e, t, n, i) {
    let r = null == i ? "" : `?summaryId=${i}`;
    return `${location.protocol}//${location.host}${I.BVt.CHANNEL(e, t, n)}${r}`;
}
n.d(
    t,
    { an: () => a.A },
    {
        CG: function (e, t, n) {
            var a;
            let s,
                l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                o = [];
            return (
                (n.length > 0 || l) &&
                    o.push(
                        ((a = r.r2.ROLE),
                        (s = f.x3),
                        ((0, d.tr)(t) || t === g) && (s = i.WQ(s, I.xBc.VIEW_CHANNEL)),
                        N(t, T) && ((s = i.WQ(s, I.xBc.VIEW_CHANNEL)), (s = i.WQ(s, I.xBc.CONNECT))),
                        { id: e, type: a, allow: f.x3, deny: s }),
                    ),
                n.forEach((e) => {
                    o.push(C(e, t, r.r2.ROLE));
                }),
                o
            );
        },
        DJ: function (e) {
            if (null == e) return null;
            switch (e.type) {
                case I.rbe.GUILD_ANNOUNCEMENT:
                case I.rbe.GUILD_TEXT:
                case I.rbe.GUILD_FORUM:
                case I.rbe.GUILD_MEDIA:
                case I.rbe.GUILD_APP:
                    return I.liQ.GUILD_CHANNEL;
                case I.rbe.GROUP_DM:
                case I.rbe.DM:
                    return I.liQ.DM_CHANNEL;
                default:
                    return null;
            }
        },
        IP: function (e) {
            return [{ id: e, type: r.r2.ROLE, deny: I.xBc.SEND_MESSAGES, allow: f.x3 }];
        },
        Jg: function (e) {
            let { type: t } = e;
            switch (t) {
                case I.rbe.DM:
                    return m.intl.string(m.t.jN2DfZ);
                case I.rbe.GROUP_DM:
                    return m.intl.string(m.t["e5y+gm"]);
                case I.rbe.GUILD_TEXT:
                    return m.intl.string(m.t.Pnajj0);
                case I.rbe.GUILD_FORUM:
                    return m.intl.string(m.t.GbryDd);
                case I.rbe.GUILD_MEDIA:
                    return m.intl.string(m.t.seKITE);
                case I.rbe.GUILD_VOICE:
                    return m.intl.string(m.t.BVZqJl);
                case I.rbe.GUILD_STAGE_VOICE:
                    return m.intl.string(m.t.EErMzA);
                case I.rbe.GUILD_ANNOUNCEMENT:
                    return m.intl.string(m.t.l1dkSD);
                case I.rbe.GUILD_STORE:
                    return m.intl.string(m.t["P1/Erq"]);
                case I.rbe.GUILD_CATEGORY:
                    return m.intl.string(m.t.vHCZwr);
                case I.rbe.PRIVATE_THREAD:
                    return m.intl.string(m.t.F1zyvU);
                case I.rbe.ANNOUNCEMENT_THREAD:
                case I.rbe.PUBLIC_THREAD:
                case I.rbe.MEDIA_THREAD:
                    return m.intl.string(m.t["7Xm5QI"]);
                case I.rbe.GUILD_APP:
                    return m.intl.string(m.t.ZkcrC2);
                case I.rbe.GUILD_DIRECTORY:
                case I.rbe.LOBBY:
                case I.rbe.DM_SDK:
                case I.rbe.GUILD_SPACE:
                case I.rbe.UNKNOWN:
                default:
                    return null;
            }
        },
        Jz: function (e, t) {
            return t.isGuildStageVoice()
                ? 64e3
                : null == e
                  ? 96e3
                  : Math.max(
                        e.features.has(I.GuildFeatures.VIP_REGIONS) ? p.TG[I.TVA.TIER_3].limits.bitrate : 96e3,
                        p.TG[e.premiumTier].limits.bitrate,
                    );
        },
        Pd: function (e, t, n) {
            let i = e.getGuildId(),
                r = n.getGuild(i),
                a = r?.maxVideoChannelUsers ?? -1,
                l = r?.maxStageVideoChannelUsers ?? -1,
                o = A.Ay.countVoiceStatesForChannel(e.id),
                d = A.Ay.getVoiceStatesForChannel(e),
                c = _.A.can(I.xBc.MOVE_MEMBERS, e) && _.A.can(I.xBc.CONNECT, e),
                u = !1;
            u =
                e.type === S
                    ? null != i && (t.hasVideo(e.id) || (0, s.t)(d)) && l > 0 && o >= l
                    : null != i && t.hasVideo(e.id) && a > 0 && o >= a + +!!c;
            let E = e.userLimit > 0 && o >= e.userLimit;
            return u || (E && !c);
        },
        QG: function (e) {
            if (null == e) return "text";
            let t = e.isNSFW(),
                n = e.isSpoilerChannel(),
                i = e.isMediaChannel();
            if (e.type === I.rbe.GUILD_VOICE)
                return _.A.can(I.xBc.CONNECT, e) ? (t ? "voice-nsfw" : n ? "voice-spoiler" : "voice") : "voice-locked";
            if (e.type === I.rbe.GUILD_STAGE_VOICE) return _.A.can(I.xBc.CONNECT, e) ? "stage" : "stage-locked";
            if (d.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
            if (e.type === I.rbe.GUILD_FORUM)
                return i ? (t ? "media-nsfw" : "media") : t ? "forum-nsfw" : n ? "forum-spoiler" : "forum";
            if (e.type === I.rbe.GUILD_MEDIA) return t ? "media-nsfw" : "media";
            else if (e.type === I.rbe.GUILD_ANNOUNCEMENT)
                return t ? "announcement-nsfw" : n ? "announcement-spoiler" : "announcement";
            else if (e.type === I.rbe.GUILD_APP) return t ? "app-nsfw" : n ? "app-spoiler" : "app";
            else if (d.k3.has(e.type)) return t ? "text-nsfw" : n ? "text-spoiler" : "text";
        },
        af: function (e, t, n, i) {
            let r,
                a = e.getGuildId(),
                s = (0, l.$m)(a, t);
            if (null != t && s) {
                var o, d, c;
                ((o = t.id),
                    (d = e.id),
                    (c = h.default.castChannelIdAsMessageId(e.id)),
                    (r =
                        null == a || null == o || null == d
                            ? O(a, o, c)
                            : `${location.protocol}//${location.host}${I.BVt.CHANNEL_THREAD_VIEW(a, o, d, c)}`));
            } else r = i ?? O(a, e.id, n);
            return r;
        },
        fK: function (e) {
            let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e;
            return (function (e) {
                let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r } = e,
                    a = [];
                return (
                    t.forEach((e) => {
                        if (e.id === i || e.id === n) return;
                        let t = r[e.id];
                        null != t &&
                            (e.isGuildStageVoice()
                                ? t.forEach((e) => {
                                      (0, o.eY)(e.voiceState) === o.zF.ON_STAGE && a.push(e);
                                  })
                                : t.forEach((e) => a.push(e)));
                    }),
                    a
                );
            })({ channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r }).map((e) => e.user);
        },
        n: O,
        n3: function (e, t) {
            return C(e, t, r.r2.MEMBER);
        },
        vJ: function (e) {
            let t,
                n = c.A.getChannel(E.Ay.getLastSelectedChannelId());
            if (null != n && n.getGuildId() === e && n.type === I.rbe.GUILD_TEXT) t = n.id;
            else {
                let n = u.A.getDefaultChannel(e);
                t = null != n ? n.id : null;
            }
            return I.BVt.CHANNEL(e, t);
        },
        we: function (e, t) {
            return C(e, t, r.r2.ROLE);
        },
    },
);
