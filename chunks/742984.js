"use strict";
n.d(t, { TB: () => W, Wv: () => G, kY: () => V, lx: () => F, q1: () => B }), n(938796);
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
var m = n(152007),
    E = n(607508),
    g = n(253932);
n(268829);
var A = n(95701),
    I = n(761640),
    T = n(734057),
    S = n(71393),
    y = n(383501),
    v = n(994500),
    N = n(309010),
    C = n(967198),
    R = n(461213),
    O = n(543465),
    b = n(287809),
    D = n(562153),
    L = n(638075),
    w = n(427262);
n(970931);
var M = n(655237),
    x = n(652215);
n(5867);
var P = n(37411),
    k = n(985018);
let U = "> -# *";
function G(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(x.nhx.SPAMMER) || n.isManaged()) return !1;
    let i = n.getGuildId();
    return !(
        (null != i && c.A.isLurking(i)) ||
        (!r.ignoreSameUser && t.id === e.id) ||
        v.A.isBlockedOrIgnored(t.id) ||
        (!r.ignoreStatus && R.A.getStatus() === x.clD.DND) ||
        g.NO.getSetting() ||
        (!r.ignoreNoMessagesSetting && O.Ay.allowNoMessages(n))
    );
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, r.Lt)(e.flags, x.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let a = T.A.getChannel(t);
    e.type === x.lAJ.THREAD_STARTER_MESSAGE && (a = T.A.getChannel(a?.parent_id));
    let o = b.default.getCurrentUser(),
        l = b.default.getUser(e.author?.id);
    if (
        null == a ||
        null == o ||
        null == l ||
        (a.type === x.rbe.GROUP_DM && e.type === x.lAJ.RECIPIENT_REMOVE) ||
        (M.A.areSlayerNotificationsSuppressed() && K(a)) ||
        !G(o, l, a, { ignoreStatus: i, ignoreSameUser: x.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        d.A.isMessageRequest(t)
    )
        return !1;
    if (!n) {
        let e = N.A.getChannelId(C.A.getGuildId());
        if (e === a.id || I.Ay.getCurrentSidebarChannelId(e) === a.id) return !1;
    }
    if (
        v.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = s.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (A.Le.has(a.type)) {
        if (m.A.isMuted(a.id)) return !1;
        let t = (0, E.l)(a);
        return (
            t !== P.CP.NO_MESSAGES &&
            (t === P.CP.ALL_MESSAGES ||
                (0, p.bG)({ rawMessage: e, userId: o.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !A.OU.has(a.type) || y.A.getChannelId() === a.id;
        if (O.Ay.allowAllMessages(a) && t) return !0;
        let n = O.Ay.isSuppressEveryoneEnabled(a.getGuildId()),
            r = O.Ay.isSuppressRolesEnabled(a.getGuildId());
        return (0, p.bG)({ rawMessage: e, userId: o.id, suppressEveryone: n, suppressRoles: r });
    }
}
function V(e, t) {
    if (N.A.getChannelId(C.A.getGuildId()) !== t) return !1;
    let n = T.A.getChannel(t);
    e.type === x.lAJ.THREAD_STARTER_MESSAGE && (n = T.A.getChannel(n?.parent_id));
    let r = b.default.getCurrentUser(),
        i = b.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == r ||
        null == i ||
        n.isManaged() ||
        i.hasFlag(x.nhx.SPAMMER) ||
        v.A.isBlockedOrIgnoredForMessage(e) ||
        i.id === r.id ||
        R.A.getStatus() === x.clD.DND ||
        g.NO.getSetting() ||
        O.Ay.allowNoMessages(n)
    );
}
function B(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = b.default.getCurrentUser(),
        s = b.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == i ||
            null == s ||
            !G(i, s, t, { ignoreStatus: r, ignoreNoMessagesSetting: !0 }) ||
            O.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || N.A.getChannelId(C.A.getGuildId()) !== t.id) &&
        O.Ay.getNewForumThreadsCreated(t)
    );
}
let H = (e, t, n) =>
    `${(0, a.az)(e)} (${(0, a.az)((0, o.m1)(t, b.default, v.A, !0))}${null != n ? `, ${(0, a.az)((0, o.m1)(n, b.default, v.A))}` : ""})`;
function j(e, t, n, r) {
    switch (e.type) {
        case x.rbe.GUILD_ANNOUNCEMENT:
        case x.rbe.GUILD_TEXT:
            return t;
        case x.rbe.GROUP_DM:
            return n;
        case x.rbe.DM:
        default:
            return r;
    }
}
function Y(e) {
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
    if ((0, r.Lt)(e.flags ?? 0, x.pr7.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgi);
    if (void 0 !== e.attachments && e.attachments.length > 0) {
        let t = (0, f.A)(e.attachments[0]);
        return k.intl.formatToPlainString(k.t["51OkwL"], { filename: t });
    }
    return "";
}
function W(e, t, n) {
    let r,
        s = D.Ay.getName(e.getGuildId(), e.id, n),
        a = s;
    switch (e.type) {
        case x.rbe.GUILD_ANNOUNCEMENT:
        case x.rbe.GUILD_TEXT:
        case x.rbe.GUILD_VOICE:
        case x.rbe.ANNOUNCEMENT_THREAD:
        case x.rbe.PUBLIC_THREAD:
        case x.rbe.PRIVATE_THREAD:
            let c = T.A.getChannel(e.parent_id);
            t.type === x.lAJ.THREAD_STARTER_MESSAGE && null != c
                ? (a = H(a, c, T.A.getChannel(c.parent_id)))
                : (0, h.A)(t)
                  ? null != S.A.getGuild(e.getGuildId()) && (a = H(a, e, c))
                  : (a = H(a, e, c));
            break;
        case x.rbe.GROUP_DM:
            (e.isManaged() && n.bot && a === (0, o.m1)(e, b.default, v.A)) || (a = H(a, e));
    }
    let d = t.content;
    if ((0, h.A)(t) && null == (d = L.A.stringify(t, e)))
        throw (
            (new l.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let f = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        p = [];
    if ("message_reference" in t ? (0, u.m)(t) : (0, u.A)(t)) r = k.intl.string(k.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === x.xL.JOIN
                ? k.intl.formatToPlainString(j(e, k.t.E8CgCh, k.t.c6KHWJ, k.t.Fy7rJN), {
                      user: s,
                      game: t.application.name,
                  })
                : t.activity.type === x.xL.JOIN_REQUEST
                  ? k.intl.formatToPlainString(j(e, k.t["/TD0la"], k.t["/TD0la"], k.t["/TD0la"]), {
                        user: s,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === x.xL.LISTEN) {
        let t = j(e, k.t.SaDdmN, k.t.qsODhp, k.t.WeiMTW);
        r = k.intl.formatToPlainString(t, { user: s });
    } else if (null != f && f.length > 0) r = k.intl.formatToPlainString(k.t.zY4v1B, { stickerName: f[0].name });
    else if (t.type === x.lAJ.PREMIUM_REFERRAL)
        r = k.intl.formatToPlainString(k.t.lieTqU, { username: w.Ay.getName(n) });
    else if (null != t.poll) r = k.intl.formatToPlainString(k.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === x.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = k.intl.formatToPlainString(k.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === i.I5.CHECKPOINT_CARD)
        r = k.intl.string(k.t.HWnMTQ);
    else if (
        (({ content: r, emoji: p } = _.Ay.unparseWithMeta(d, e.id, !0)),
        0 !== d.length && e.type === x.rbe.DM && !n.bot && d.startsWith(U))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), p)) e.position -= 2;
    return 0 === r.length && (r = Y(t)), { icon: n.getAvatarURL(e.guild_id, 128), title: a, body: r, emoji: p };
}
function K(e) {
    return e.type === x.rbe.DM || null != e.linkedLobby;
}
