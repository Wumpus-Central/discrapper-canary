n.d(t, {
    CG: () => L,
    DJ: () => w,
    IP: () => g,
    Jg: () => M,
    Jz: () => U,
    Pd: () => b,
    QG: () => y,
    af: () => B,
    an: () => a.A,
    fK: () => P,
    n: () => v,
    n3: () => D,
    vJ: () => G,
    we: () => h,
}),
    n(321073);
var i = n(136722),
    r = n(155718),
    a = n(842937),
    s = n(669715),
    _ = n(461715),
    l = n(105530),
    o = n(95701),
    E = n(734057),
    d = n(808728),
    c = n(576705),
    u = n(309010),
    I = n(607567),
    A = n(488926),
    T = n(935208);
n(427262);
var S = n(652215),
    N = n(788868),
    O = n(985018);
let { GUILD_VOICE: R, GUILD_CATEGORY: f, GUILD_STAGE_VOICE: C } = S.rbe;
function p(e, t) {
    return e === t || e === f;
}
function m(e, t, n) {
    let r = A.x3;
    return (
        ((0, o.tr)(t) || t === f) && (r = i.WQ(r, S.xBc.VIEW_CHANNEL)),
        (p(t, R) || p(t, C)) && ((r = i.WQ(r, S.xBc.VIEW_CHANNEL)), (r = i.WQ(r, S.xBc.CONNECT))),
        { id: e, type: n, deny: A.x3, allow: r }
    );
}
function L(e, t, n) {
    var a;
    let s,
        _ = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = [];
    return (
        (n.length > 0 || _) &&
            l.push(
                ((a = r.r2.ROLE),
                (s = A.x3),
                ((0, o.tr)(t) || t === f) && (s = i.WQ(s, S.xBc.VIEW_CHANNEL)),
                p(t, R) && ((s = i.WQ(s, S.xBc.VIEW_CHANNEL)), (s = i.WQ(s, S.xBc.CONNECT))),
                { id: e, type: a, allow: A.x3, deny: s }),
            ),
        n.forEach((e) => {
            l.push(m(e, t, r.r2.ROLE));
        }),
        l
    );
}
function D(e, t) {
    return m(e, t, r.r2.MEMBER);
}
function h(e, t) {
    return m(e, t, r.r2.ROLE);
}
function g(e) {
    return [{ id: e, type: r.r2.ROLE, deny: S.xBc.SEND_MESSAGES, allow: A.x3 }];
}
function b(e, t, n) {
    let i = e.getGuildId(),
        r = n.getGuild(i),
        a = r?.maxVideoChannelUsers ?? -1,
        _ = r?.maxStageVideoChannelUsers ?? -1,
        l = I.Ay.countVoiceStatesForChannel(e.id),
        o = I.Ay.getVoiceStatesForChannel(e),
        E = c.A.can(S.xBc.MOVE_MEMBERS, e) && c.A.can(S.xBc.CONNECT, e),
        d = !1;
    d =
        e.type === C
            ? null != i && (t.hasVideo(e.id) || (0, s.t)(o)) && _ > 0 && l >= _
            : null != i && t.hasVideo(e.id) && a > 0 && l >= a + +!!E;
    let u = e.userLimit > 0 && l >= e.userLimit;
    return d || (u && !E);
}
function U(e, t) {
    return t.isGuildStageVoice()
        ? S.gp3
        : null == e
          ? S.DqD
          : Math.max(
                e.features.has(S.GuildFeatures.VIP_REGIONS) ? N.TG[S.TVA.TIER_3].limits.bitrate : S.DqD,
                N.TG[e.premiumTier].limits.bitrate,
            );
}
function P(e) {
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
                              (0, l.eY)(e.voiceState) === l.zF.ON_STAGE && a.push(e);
                          })
                        : t.forEach((e) => a.push(e)));
            }),
            a
        );
    })({ channels: t, selectedChannelId: n, selectedVoiceChannelId: i, voiceStates: r }).map((e) => e.user);
}
function M(e) {
    let { type: t } = e;
    switch (t) {
        case S.rbe.DM:
            return O.intl.string(O.t.jN2DfZ);
        case S.rbe.GROUP_DM:
            return O.intl.string(O.t["e5y+gm"]);
        case S.rbe.GUILD_TEXT:
            return O.intl.string(O.t.Pnajj0);
        case S.rbe.GUILD_FORUM:
            return O.intl.string(O.t.GbryDd);
        case S.rbe.GUILD_MEDIA:
            return O.intl.string(O.t.seKITE);
        case S.rbe.GUILD_VOICE:
            return O.intl.string(O.t.BVZqJl);
        case S.rbe.GUILD_STAGE_VOICE:
            return O.intl.string(O.t.EErMzA);
        case S.rbe.GUILD_ANNOUNCEMENT:
            return O.intl.string(O.t.l1dkSD);
        case S.rbe.GUILD_STORE:
            return O.intl.string(O.t["P1/Erq"]);
        case S.rbe.GUILD_CATEGORY:
            return O.intl.string(O.t.vHCZwr);
        default:
            return null;
    }
}
function y(e) {
    if (null == e) return "text";
    let t = e.isMediaChannel();
    if (e.type === S.rbe.GUILD_VOICE) return c.A.can(S.xBc.CONNECT, e) ? "voice" : "voice-locked";
    if (e.type === S.rbe.GUILD_STAGE_VOICE) return c.A.can(S.xBc.CONNECT, e) ? "stage" : "stage-locked";
    if (o.Le.has(e.type)) return e.isForumPost() ? "post" : "thread";
    if (e.type === S.rbe.GUILD_FORUM) return t ? "media" : "forum";
    if (e.type === S.rbe.GUILD_MEDIA) return "media";
    else if (o.k3.has(e.type)) return "text";
}
function G(e) {
    let t,
        n = E.A.getChannel(u.A.getLastSelectedChannelId());
    if (null != n && n.getGuildId() === e && n.type === S.rbe.GUILD_TEXT) t = n.id;
    else {
        let n = d.Ay.getDefaultChannel(e);
        t = null != n ? n.id : null;
    }
    return S.BVt.CHANNEL(e, t);
}
function v(e, t, n, i) {
    let r = null == i ? "" : `?summaryId=${i}`;
    return `${location.protocol}//${location.host}${S.BVt.CHANNEL(e, t, n)}${r}`;
}
function B(e, t, n, i) {
    let r,
        a = e.getGuildId(),
        s = (0, _.$m)(a, t);
    if (null != t && s) {
        var l, o, E;
        (l = t.id),
            (o = e.id),
            (E = T.default.castChannelIdAsMessageId(e.id)),
            (r =
                null == a || null == l || null == o
                    ? v(a, l, E)
                    : `${location.protocol}//${location.host}${S.BVt.CHANNEL_THREAD_VIEW(a, l, o, E)}`);
    } else r = i ?? v(a, e.id, n);
    return r;
}
function w(e) {
    if (null == e) return null;
    switch (e.type) {
        case S.rbe.GUILD_ANNOUNCEMENT:
        case S.rbe.GUILD_TEXT:
        case S.rbe.GUILD_FORUM:
        case S.rbe.GUILD_MEDIA:
            return S.liQ.GUILD_CHANNEL;
        case S.rbe.GROUP_DM:
        case S.rbe.DM:
            return S.liQ.DM_CHANNEL;
        default:
            return null;
    }
}
