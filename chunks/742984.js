"use strict";
n.d(t, { TB: () => W, Wv: () => G, kY: () => F, lx: () => V, q1: () => B }), n(938796);
var r = n(665260),
    i = n(155718),
    a = n(933958),
    s = n(551639),
    o = n(47167),
    l = n(626584),
    u = n(427930),
    c = n(857071),
    d = n(380335),
    _ = n(451909),
    f = n(465856),
    p = n(451919),
    h = n(143413),
    m = n(152007),
    g = n(607508),
    E = n(253932),
    A = n(95701),
    I = n(761640),
    T = n(734057),
    y = n(71393),
    S = n(383501),
    v = n(994500),
    C = n(309010),
    b = n(967198),
    N = n(461213),
    R = n(543465),
    O = n(287809),
    D = n(562153),
    L = n(638075),
    w = n(427262);
n(970931);
var x = n(655237),
    P = n(652215),
    M = n(37411),
    k = n(985018);
let U = "> -# *";
function G(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(P.nhx.SPAMMER) || n.isManaged()) return !1;
    let i = n.getGuildId();
    return !(
        (null != i && c.A.isLurking(i)) ||
        (!r.ignoreSameUser && t.id === e.id) ||
        v.A.isBlockedOrIgnored(t.id) ||
        (!r.ignoreStatus && N.A.getStatus() === P.clD.DND) ||
        E.NO.getSetting() ||
        (!r.ignoreNoMessagesSetting && R.Ay.allowNoMessages(n))
    );
}
function V(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, r.Lt)(e.flags, P.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = T.A.getChannel(t);
    e.type === P.lAJ.THREAD_STARTER_MESSAGE && (s = T.A.getChannel(s?.parent_id));
    let o = O.default.getCurrentUser(),
        l = O.default.getUser(e.author?.id);
    if (
        null == s ||
        null == o ||
        null == l ||
        (s.type === P.rbe.GROUP_DM && e.type === P.lAJ.RECIPIENT_REMOVE) ||
        (x.A.areSlayerNotificationsSuppressed() && K(s)) ||
        !G(o, l, s, { ignoreStatus: i, ignoreSameUser: P.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type) }) ||
        d.A.isMessageRequest(t)
    )
        return !1;
    if (!n) {
        let e = C.A.getChannelId(b.A.getGuildId());
        if (e === s.id || I.Ay.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (
        v.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = a.Ay.getCurrentEmbeddedActivity();
        if (n?.applicationId === e.application_id && n.location.channel_id === t) return !1;
    }
    if (A.Le.has(s.type)) {
        if (m.A.isMuted(s.id)) return !1;
        let t = (0, g.l)(s);
        return (
            t !== M.CP.NO_MESSAGES &&
            (t === M.CP.ALL_MESSAGES ||
                (0, p.bG)({ rawMessage: e, userId: o.id, suppressEveryone: !1, suppressRoles: !1 }))
        );
    }
    {
        let t = !A.OU.has(s.type) || S.A.getChannelId() === s.id;
        if (R.Ay.allowAllMessages(s) && t) return !0;
        let n = R.Ay.isSuppressEveryoneEnabled(s.getGuildId()),
            r = R.Ay.isSuppressRolesEnabled(s.getGuildId());
        return (0, p.bG)({ rawMessage: e, userId: o.id, suppressEveryone: n, suppressRoles: r });
    }
}
function F(e, t) {
    if (C.A.getChannelId(b.A.getGuildId()) !== t) return !1;
    let n = T.A.getChannel(t);
    e.type === P.lAJ.THREAD_STARTER_MESSAGE && (n = T.A.getChannel(n?.parent_id));
    let r = O.default.getCurrentUser(),
        i = O.default.getUser(e.author?.id);
    return !(
        null == n ||
        null == r ||
        null == i ||
        n.isManaged() ||
        i.hasFlag(P.nhx.SPAMMER) ||
        v.A.isBlockedOrIgnoredForMessage(e) ||
        i.id === r.id ||
        N.A.getStatus() === P.clD.DND ||
        E.NO.getSetting() ||
        R.Ay.allowNoMessages(n)
    );
}
function B(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = O.default.getCurrentUser(),
        a = O.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == i ||
            null == a ||
            !G(i, a, t, { ignoreStatus: r, ignoreNoMessagesSetting: !0 }) ||
            R.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || C.A.getChannelId(b.A.getGuildId()) !== t.id) &&
        R.Ay.getNewForumThreadsCreated(t)
    );
}
let j = (e, t, n) =>
    `${(0, s.az)(e)} (${(0, s.az)((0, o.m1)(t, O.default, v.A, !0))}${null != n ? `, ${(0, s.az)((0, o.m1)(n, O.default, v.A))}` : ""})`;
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
    if ((0, r.Lt)(e.flags ?? 0, P.pr7.IS_VOICE_MESSAGE)) return k.intl.string(k.t.slFYgi);
    if (void 0 !== e.attachments && e.attachments.length > 0) {
        let t = (0, f.A)(e.attachments[0]);
        return k.intl.formatToPlainString(k.t["51OkwL"], { filename: t });
    }
    return "";
}
function W(e, t, n) {
    let r,
        a = D.Ay.getName(e.getGuildId(), e.id, n),
        s = a;
    switch (e.type) {
        case P.rbe.GUILD_ANNOUNCEMENT:
        case P.rbe.GUILD_TEXT:
        case P.rbe.GUILD_VOICE:
        case P.rbe.ANNOUNCEMENT_THREAD:
        case P.rbe.PUBLIC_THREAD:
        case P.rbe.PRIVATE_THREAD:
            let c = T.A.getChannel(e.parent_id);
            t.type === P.lAJ.THREAD_STARTER_MESSAGE && null != c
                ? (s = j(s, c, T.A.getChannel(c.parent_id)))
                : (0, h.A)(t)
                  ? null != y.A.getGuild(e.getGuildId()) && (s = j(s, e, c))
                  : (s = j(s, e, c));
            break;
        case P.rbe.GROUP_DM:
            (e.isManaged() && n.bot && s === (0, o.m1)(e, O.default, v.A)) || (s = j(s, e));
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
        r = k.intl.formatToPlainString(t, { user: a });
    } else if (null != f && f.length > 0) r = k.intl.formatToPlainString(k.t.zY4v1B, { stickerName: f[0].name });
    else if (t.type === P.lAJ.PREMIUM_REFERRAL)
        r = k.intl.formatToPlainString(k.t.lieTqU, { username: w.Ay.getName(n) });
    else if (null != t.poll) r = k.intl.formatToPlainString(k.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === P.lAJ.POLL_RESULT) {
        let e = t.embeds?.[0]?.fields?.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = k.intl.formatToPlainString(k.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === i.I5.CHECKPOINT_CARD)
        r = k.intl.string(k.t.HWnMTQ);
    else if (
        (({ content: r, emoji: p } = _.Ay.unparseWithMeta(d, e.id, !0)),
        0 !== d.length && e.type === P.rbe.DM && !n.bot && d.startsWith(U))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), p)) e.position -= 2;
    return 0 === r.length && (r = Y(t)), { icon: n.getAvatarURL(e.guild_id, 128), title: s, body: r, emoji: p };
}
function K(e) {
    return e.type === P.rbe.DM || null != e.linkedLobby;
}
