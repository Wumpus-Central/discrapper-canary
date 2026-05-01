n.d(t, {
    CG: () => R,
    DJ: () => x,
    IP: () => D,
    Jg: () => U,
    Jz: () => M,
    Pd: () => b,
    QG: () => v,
    af: () => w,
    an: () => r.A,
    fK: () => P,
    n: () => G,
    n3: () => g,
    vJ: () => y,
    we: () => L,
}),
    n(321073);
var i = n(136722),
    a = n(155718),
    r = n(842937),
    s = n(669715),
    l = n(461715),
    o = n(105530),
    d = n(95701),
    c = n(734057),
    _ = n(808728),
    E = n(576705),
    u = n(309010),
    A = n(607567),
    I = n(488926),
    T = n(935208);
n(427262);
var h = n(652215),
    S = n(788868),
    N = n(985018);
let { GUILD_VOICE: f, GUILD_CATEGORY: p, GUILD_STAGE_VOICE: m } = h.rbe;
function O(e, t) {
    return e === t || e === p;
}
function C(e, t, n) {
    let a = I.x3;
    return (
        ((0, d.tr)(t) || t === p) && (a = i.WQ(a, h.xBc.VIEW_CHANNEL)),
        (O(t, f) || O(t, m)) && ((a = i.WQ(a, h.xBc.VIEW_CHANNEL)), (a = i.WQ(a, h.xBc.CONNECT))),
        { id: e, type: n, deny: I.x3, allow: a }
    );
}
function R(e, t, n) {
    var r;
    let s,
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        o = [];
    return (
        (n.length > 0 || l) &&
            o.push(
                ((r = a.r2.ROLE),
                (s = I.x3),
                ((0, d.tr)(t) || t === p) && (s = i.WQ(s, h.xBc.VIEW_CHANNEL)),
                O(t, f) && ((s = i.WQ(s, h.xBc.VIEW_CHANNEL)), (s = i.WQ(s, h.xBc.CONNECT))),
                { id: e, type: r, allow: I.x3, deny: s }),
            ),
        n.forEach((e) => {
            o.push(C(e, t, a.r2.ROLE));
        }),
        o
    );
}
function g(e, t) {
    return C(e, t, a.r2.MEMBER);
}
function L(e, t) {
    return C(e, t, a.r2.ROLE);
}
function D(e) {
    return [{ id: e, type: a.r2.ROLE, deny: h.xBc.SEND_MESSAGES, allow: I.x3 }];
}
function b(e, t, n) {
    let i = e.getGuildId(),
        a = n.getGuild(i),
        r = a?.maxVideoChannelUsers ?? -1,
        l = a?.maxStageVideoChannelUsers ?? -1,
        o = A.Ay.countVoiceStatesForChannel(e.id),
        d = A.Ay.getVoiceStatesForChannel(e),
        c = E.A.can(h.xBc.MOVE_MEMBERS, e) && E.A.can(h.xBc.CONNECT, e),
        _ = !1;
    _ =
        e.type === m
            ? null != i && (t.hasVideo(e.id) || (0, s.t)(d)) && l > 0 && o >= l
            : null != i && t.hasVideo(e.id) && r > 0 && o >= r + +!!c;
    let u = e.userLimit > 0 && o >= e.userLimit;
    return _ || (u && !c);
}
function M(e, t) {
    return t.isGuildStageVoice()
        ? h.gp3
        : null == e
          ? h.DqD
          : Math.max(
                e.features.has(h.GuildFeatures.VIP_REGIONS) ? S.TG[h.TVA.TIER_3].limits.bitrate : h.DqD,
                S.TG[e.premiumTier].limits.bitrate,
            );
}
function P(e) {
    let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: a } = e;
    return (function (e) {
        let { channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: a } = e,
            r = [];
        return (
            t.forEach((e) => {
                if (e.id === i || e.id === n) return;
                let t = a[e.id];
                null != t &&
                    (e.isGuildStageVoice()
                        ? t.forEach((e) => {
                              (0, o.eY)(e.voiceState) === o.zF.ON_STAGE && r.push(e);
                          })
                        : t.forEach((e) => r.push(e)));
            }),
            r
        );
    })({ channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: a }).map((e) => e.user);
}
function U(e) {
    let { type: t } = e;
    switch (t) {
        case h.rbe.DM:
            return N.intl.string(N.t.jN2DfZ);
        case h.rbe.GROUP_DM:
            return N.intl.string(N.t["e5y+gm"]);
        case h.rbe.GUILD_TEXT:
            return N.intl.string(N.t.Pnajj0);
        case h.rbe.GUILD_FORUM:
            return N.intl.string(N.t.GbryDd);
        case h.rbe.GUILD_MEDIA:
            return N.intl.string(N.t.seKITE);
        case h.rbe.GUILD_VOICE:
            return N.intl.string(N.t.BVZqJl);
        case h.rbe.GUILD_STAGE_VOICE:
            return N.intl.string(N.t.EErMzA);
        case h.rbe.GUILD_ANNOUNCEMENT:
            return N.intl.string(N.t.l1dkSD);
        case h.rbe.GUILD_STORE:
            return N.intl.string(N.t["P1/Erq"]);
        case h.rbe.GUILD_CATEGORY:
            return N.intl.string(N.t.vHCZwr);
        default:
            return null;
    }
}
function v(e) {
    if (null == e) return "text";
    let t = e.isMediaChannel();
    if (e.type === h.rbe.GUILD_VOICE) return E.A.can(h.xBc.CONNECT, e) ? "voice" : "voice-locked";
    if (e.type === h.rbe.GUILD_STAGE_VOICE) return E.A.can(h.xBc.CONNECT, e) ? "stage" : "stage-locked";
    if (d.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
    if (e.type === h.rbe.GUILD_FORUM) return t ? "media" : "forum";
    if (e.type === h.rbe.GUILD_MEDIA) return "media";
    else if (d.k3.has(e.type)) return "text";
}
function y(e) {
    let t,
        n = c.A.getChannel(u.A.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === h.rbe.GUILD_TEXT) t = n.id;
    else {
        let n = _.Ay.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return h.BVt.CHANNEL(e, t);
}
function G(e, t, n, i) {
    let a = null == i ? "" : `?summaryId=${i}`;
    return `${location.protocol}//${location.host}${h.BVt.CHANNEL(e, t, n)}${a}`;
}
function w(e, t, n, i) {
    let a,
        r = e.getGuildId(),
        s = (0, l.$m)(r, t);
    if (null != t && s) {
        var o, d, c;
        (o = t.id),
            (d = e.id),
            (c = T.default.castChannelIdAsMessageId(e.id)),
            (a =
                null == r || null == o || null == d
                    ? G(r, o, c)
                    : `${location.protocol}//${location.host}${h.BVt.CHANNEL_THREAD_VIEW(r, o, d, c)}`);
    } else a = i ?? G(r, e.id, n);
    return a;
}
function x(e) {
    if (null == e) return null;
    switch (e.type) {
        case h.rbe.GUILD_ANNOUNCEMENT:
        case h.rbe.GUILD_TEXT:
        case h.rbe.GUILD_FORUM:
        case h.rbe.GUILD_MEDIA:
            return h.liQ.GUILD_CHANNEL;
        case h.rbe.GROUP_DM:
        case h.rbe.DM:
            return h.liQ.DM_CHANNEL;
        default:
            return null;
    }
}
