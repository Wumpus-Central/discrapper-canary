"use strict";
n.d(t, { TB: () => j, Wv: () => U, kY: () => F, lx: () => G, q1: () => V }), n(938796);
var r = n(665260),
    i = n(155718),
    s = n(933958),
    a = n(551639),
    o = n(47167),
    l = n(626584),
    u = n(427930),
    c = n(857071);
n(250953);
var d = n(380335),
    _ = n(451909),
    f = n(465856),
    p = n(451919),
    h = n(143413);
n(622794);
var E = n(152007),
    m = n(607508),
    g = n(253932);
n(268829);
var A = n(95701),
    I = n(761640),
    T = n(734057),
    S = n(71393),
    y = n(383501),
    N = n(994500),
    v = n(309010),
    C = n(967198),
    O = n(461213),
    R = n(543465),
    b = n(287809),
    D = n(562153),
    L = n(638075),
    w = n(427262);
n(970931);
var M = n(655237),
    P = n(652215);
n(5867);
var x = n(37411),
    k = n(985018);
function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(P.nhx.SPAMMER) || n.isManaged()) return !1;
    let i = n.getGuildId();
    return !(
        (null != i && c.A.isLurking(i)) ||
        (!r.ignoreSameUser && t.id === e.id) ||
        N.A.isBlockedOrIgnored(t.id) ||
        (!r.ignoreStatus && O.A.getStatus() === P.clD.DND) ||
        g.NO.getSetting() ||
        (!r.ignoreNoMessagesSetting && R.Ay.allowNoMessages(n))
    );
}
function G(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, r.Lt)(e.flags, P.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = T.A.getChannel(t);
    e.type === P.lAJ.THREAD_STARTER_MESSAGE && (o = T.A.getChannel(o?.parent_id));
    let l = b.default.getCurrentUser(),
        u = b.default.getUser(e.author?.id);
    if (
        null == o ||
        null == l ||
        null == u ||
        (o.type === P.rbe.GROUP_DM && e.type === P.lAJ.RECIPIENT_REMOVE) ||
        (M.A.areSlayerNotificationsSuppressed() && ((n = o).type === P.rbe.DM || null != n.linkedLobby)) ||
        !U(l, u, o, { ignoreStatus: a, ignoreSameUser: P.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        d.A.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = v.A.getChannelId(C.A.getGuildId());
        if (e === o.id || I.Ay.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (
        N.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === l.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = s.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (A.Le.has(o.type)) {
        if (E.A.isMuted(o.id)) return !1;
        let t = (0, m.l)(o);
        return (
            t !== x.CP.NO_MESSAGES &&
            (t === x.CP.ALL_MESSAGES ||
                (0, p.bG)({ rawMessage: e, userId: l.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !A.OU.has(o.type) || y.A.getChannelId() === o.id;
        if (R.Ay.allowAllMessages(o) && t) return !0;
        let n = R.Ay.isSuppressEveryoneEnabled(o.getGuildId()),
            r = R.Ay.isSuppressRolesEnabled(o.getGuildId());
        return (0, p.bG)({ rawMessage: e, userId: l.id, suppressEveryone: n, suppressRoles: r });
    }
}
function F(e, t) {
    if (v.A.getChannelId(C.A.getGuildId()) !== t) return !1;
    let n = T.A.getChannel(t);
    e.type === P.lAJ.THREAD_STARTER_MESSAGE && (n = T.A.getChannel(n?.parent_id));
    let r = b.default.getCurrentUser(),
        i = b.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == r ||
        null == i ||
        n.isManaged() ||
        i.hasFlag(P.nhx.SPAMMER) ||
        N.A.isBlockedOrIgnoredForMessage(e) ||
        i.id === r.id ||
        O.A.getStatus() === P.clD.DND ||
        g.NO.getSetting() ||
        R.Ay.allowNoMessages(n)
    );
}
function V(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = b.default.getCurrentUser(),
        s = b.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == i ||
            null == s ||
            !U(i, s, t, { ignoreStatus: r, ignoreNoMessagesSetting: !0 }) ||
            R.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || v.A.getChannelId(C.A.getGuildId()) !== t.id) &&
        R.Ay.getNewForumThreadsCreated(t)
    );
}
let B = (e, t, n) =>
    `${(0, a.az)(e)} (${(0, a.az)((0, o.m1)(t, b.default, N.A, !0))}${null != n ? `, ${(0, a.az)((0, o.m1)(n, b.default, N.A))}` : ""})`;
function H(e, t, n, r) {
    switch (e.type) {
        case P.rbe.GUILD_ANNOUNCEMENT:
        case P.rbe.GUILD_TEXT:
            return t;
        case P.rbe.GROUP_DM:
            return n;
        case P.rbe.DM:
        default:
            return r;
    }
}
function j(e, t, n) {
    let s,
        a = D.Ay.getName(e.getGuildId(), e.id, n),
        c = a;
    switch (e.type) {
        case P.rbe.GUILD_ANNOUNCEMENT:
        case P.rbe.GUILD_TEXT:
        case P.rbe.GUILD_VOICE:
        case P.rbe.ANNOUNCEMENT_THREAD:
        case P.rbe.PUBLIC_THREAD:
        case P.rbe.PRIVATE_THREAD:
            let d = T.A.getChannel(e.parent_id);
            t.type === P.lAJ.THREAD_STARTER_MESSAGE && null != d
                ? (c = B(c, d, T.A.getChannel(d.parent_id)))
                : (0, h.A)(t)
                  ? null != S.A.getGuild(e.getGuildId()) && (c = B(c, e, d))
                  : (c = B(c, e, d));
            break;
        case P.rbe.GROUP_DM:
            (e.isManaged() && n.bot && c === (0, o.m1)(e, b.default, N.A)) || (c = B(c, e));
    }
    let p = t.content;
    if ((0, h.A)(t) && null == (p = L.A.stringify(t, e)))
        throw (
            (new l.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let E = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        m = [];
    if ("message_reference" in t ? (0, u.m)(t) : (0, u.A)(t)) s = k.intl.string(k.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        s =
            t.activity.type === P.xL.JOIN
                ? k.intl.formatToPlainString(H(e, k.t.E8CgCh, k.t.c6KHWJ, k.t.Fy7rJN), {
                      user: a,
                      game: t.application.name,
                  })
                : t.activity.type === P.xL.JOIN_REQUEST
                  ? k.intl.formatToPlainString(H(e, k.t["/TD0la"], k.t["/TD0la"], k.t["/TD0la"]), {
                        user: a,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === P.xL.LISTEN) {
        let t = H(e, k.t.SaDdmN, k.t.qsODhp, k.t.WeiMTW);
        s = k.intl.formatToPlainString(t, { user: a });
    } else if (null != E && E.length > 0) s = k.intl.formatToPlainString(k.t.zY4v1B, { stickerName: E[0].name });
    else if (t.type === P.lAJ.PREMIUM_REFERRAL)
        s = k.intl.formatToPlainString(k.t.lieTqU, { username: w.Ay.getName(n) });
    else if (null != t.poll) s = k.intl.formatToPlainString(k.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === P.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        s = k.intl.formatToPlainString(k.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === i.I5.CHECKPOINT_CARD)
        s = k.intl.string(k.t.HWnMTQ);
    else if (
        (({ content: s, emoji: m } = _.Ay.unparseWithMeta(p, e.id, !0)),
        0 !== p.length && e.type === P.rbe.DM && !n.bot && p.startsWith("> -# *"))
    )
        for (let e of ((s = s.substring(0, 1) + s.substring(4)), m)) e.position -= 2;
    return (
        0 === s.length &&
            (s = (function (e) {
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = "description" in t ? t.description : t.rawDescription,
                        r = "title" in t ? t.title : t.rawTitle;
                    if (null != n) return null != r ? `${r} ${n}` : n;
                    if (null != r) return r;
                    if (null != t.fields && t.fields.length > 0) {
                        let e = t.fields[0],
                            n = "name" in e ? e.name : e.rawName,
                            r = "value" in e ? e.value : e.rawValue;
                        return `${n} ${r}`;
                    }
                }
                if ((0, r.Lt)(e.flags ?? 0, P.pr7.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, f.A)(e.attachments[0]);
                    return k.intl.formatToPlainString(k.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        { icon: n.getAvatarURL(e.guild_id, 128), title: c, body: s, emoji: m }
    );
}
