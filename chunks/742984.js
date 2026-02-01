n.d(t, {
    TB: () => W,
    Wv: () => U,
    kY: () => V,
    lx: () => G,
    q1: () => F,
}),
    n(938796),
    n(228524),
    n(65821),
    n(896048);
var r = n(665260),
    i = n(155718),
    a = n(933958),
    o = n(551639),
    s = n(47167),
    l = n(626584),
    c = n(427930),
    u = n(857071),
    d = n(380335),
    f = n(451909),
    p = n(465856),
    _ = n(451919),
    h = n(143413),
    m = n(152007),
    g = n(607508),
    E = n(253932),
    y = n(95701),
    b = n(761640),
    O = n(734057),
    v = n(71393),
    A = n(383501),
    I = n(994500),
    S = n(309010),
    T = n(967198),
    C = n(461213),
    N = n(543465),
    w = n(287809),
    R = n(562153),
    P = n(638075),
    D = n(427262);
n(970931);
var L = n(655237),
    x = n(652215),
    M = n(37411),
    j = n(985018);
let k = "> -# *";

function U(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(x.nhx.SPAMMER) || n.isManaged()) return !1;
    let i = n.getGuildId();
    return !(
        (null != i && u.A.isLurking(i)) ||
        (!r.ignoreSameUser && t.id === e.id) ||
        I.A.isBlockedOrIgnored(t.id) ||
        (!r.ignoreStatus && C.A.getStatus() === x.clD.DND) ||
        E.NO.getSetting() ||
        (!r.ignoreNoMessagesSetting && N.Ay.allowNoMessages(n))
    );
}

function G(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, r.Lt)(e.flags, x.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let s = O.A.getChannel(t);
    e.type === x.lAJ.THREAD_STARTER_MESSAGE && (s = O.A.getChannel(null == s ? void 0 : s.parent_id));
    let l = w.default.getCurrentUser(),
        c = w.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == s ||
        null == l ||
        null == c ||
        (s.type === x.rbe.GROUP_DM && e.type === x.lAJ.RECIPIENT_REMOVE) ||
        (L.A.areSlayerNotificationsSuppressed() && K(s)) ||
        !U(l, c, s, {
            ignoreStatus: o,
            ignoreSameUser: x.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type),
        }) ||
        d.A.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = S.A.getChannelId(T.A.getGuildId());
        if (e === s.id || b.Ay.getCurrentSidebarChannelId(e) === s.id) return !1;
    }
    if (
        I.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === l.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = a.Ay.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.channel_id === t) return !1;
    }
    if (y.Le.has(s.type)) {
        if (m.A.isMuted(s.id)) return !1;
        let t = (0, g.l)(s);
        return (
            t !== M.CP.NO_MESSAGES &&
            (t === M.CP.ALL_MESSAGES ||
                (0, _.bG)({
                    rawMessage: e,
                    userId: l.id,
                    suppressEveryone: !1,
                    suppressRoles: !1,
                }))
        );
    }
    {
        let t = !y.OU.has(s.type) || A.A.getChannelId() === s.id;
        if (N.Ay.allowAllMessages(s) && t) return !0;
        let n = N.Ay.isSuppressEveryoneEnabled(s.getGuildId()),
            r = N.Ay.isSuppressRolesEnabled(s.getGuildId());
        return (0, _.bG)({
            rawMessage: e,
            userId: l.id,
            suppressEveryone: n,
            suppressRoles: r,
        });
    }
}

function V(e, t) {
    var n;
    if (S.A.getChannelId(T.A.getGuildId()) !== t) return !1;
    let r = O.A.getChannel(t);
    e.type === x.lAJ.THREAD_STARTER_MESSAGE && (r = O.A.getChannel(null == r ? void 0 : r.parent_id));
    let i = w.default.getCurrentUser(),
        a = w.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(
        null == r ||
        null == i ||
        null == a ||
        r.isManaged() ||
        a.hasFlag(x.nhx.SPAMMER) ||
        I.A.isBlockedOrIgnoredForMessage(e) ||
        a.id === i.id ||
        C.A.getStatus() === x.clD.DND ||
        E.NO.getSetting() ||
        N.Ay.allowNoMessages(r)
    );
}

function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = w.default.getCurrentUser(),
        a = w.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == i ||
            null == a ||
            !U(i, a, t, {
                ignoreStatus: r,
                ignoreNoMessagesSetting: !0,
            }) ||
            N.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || S.A.getChannelId(T.A.getGuildId()) !== t.id) &&
        N.Ay.getNewForumThreadsCreated(t)
    );
}
let B = (e, t, n) =>
    ""
        .concat((0, o.az)(e), " (")
        .concat((0, o.az)((0, s.m1)(t, w.default, I.A, !0)))
        .concat(null != n ? ", ".concat((0, o.az)((0, s.m1)(n, w.default, I.A))) : "", ")");

function H(e, t, n, r) {
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
    var t;
    if (void 0 !== e.embeds && e.embeds.length > 0) {
        let t = e.embeds[0],
            n = "description" in t ? t.description : t.rawDescription,
            r = "title" in t ? t.title : t.rawTitle;
        if (null != n) return null != r ? "".concat(r, " ").concat(n) : n;
        if (null != r) return r;
        if (null != t.fields && t.fields.length > 0) {
            let e = t.fields[0],
                n = "name" in e ? e.name : e.rawName,
                r = "value" in e ? e.value : e.rawValue;
            return "".concat(n, " ").concat(r);
        }
    }
    if ((0, r.Lt)(null != (t = e.flags) ? t : 0, x.pr7.IS_VOICE_MESSAGE)) return j.intl.string(j.t.slFYgi);
    if (void 0 !== e.attachments && e.attachments.length > 0) {
        let t = (0, p.A)(e.attachments[0]);
        return j.intl.formatToPlainString(j.t["51OkwL"], {
            filename: t,
        });
    }
    return "";
}

function W(e, t, n) {
    let r,
        a = R.Ay.getName(e.getGuildId(), e.id, n),
        o = a;
    switch (e.type) {
        case x.rbe.GUILD_ANNOUNCEMENT:
        case x.rbe.GUILD_TEXT:
        case x.rbe.GUILD_VOICE:
        case x.rbe.ANNOUNCEMENT_THREAD:
        case x.rbe.PUBLIC_THREAD:
        case x.rbe.PRIVATE_THREAD:
            let u = O.A.getChannel(e.parent_id);
            t.type === x.lAJ.THREAD_STARTER_MESSAGE && null != u
                ? (o = B(o, u, O.A.getChannel(u.parent_id)))
                : (0, h.A)(t)
                  ? null != v.A.getGuild(e.getGuildId()) && (o = B(o, e, u))
                  : (o = B(o, e, u));
            break;
        case x.rbe.GROUP_DM:
            (e.isManaged() && n.bot && o === (0, s.m1)(e, w.default, I.A)) || (o = B(o, e));
    }
    let d = t.content;
    if ((0, h.A)(t) && null == (d = P.A.stringify(t, e)))
        throw (
            (new l.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let p = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        _ = [];
    if ("message_reference" in t ? (0, c.m)(t) : (0, c.A)(t)) r = j.intl.string(j.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === x.xL.JOIN
                ? j.intl.formatToPlainString(H(e, j.t.E8CgCh, j.t.c6KHWJ, j.t.Fy7rJN), {
                      user: a,
                      game: t.application.name,
                  })
                : t.activity.type === x.xL.JOIN_REQUEST
                  ? j.intl.formatToPlainString(H(e, j.t["/TD0la"], j.t["/TD0la"], j.t["/TD0la"]), {
                        user: a,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === x.xL.LISTEN) {
        let t = H(e, j.t.SaDdmN, j.t.qsODhp, j.t.WeiMTW);
        r = j.intl.formatToPlainString(t, {
            user: a,
        });
    } else if (null != p && p.length > 0)
        r = j.intl.formatToPlainString(j.t.zY4v1B, {
            stickerName: p[0].name,
        });
    else if (t.type === x.lAJ.PREMIUM_REFERRAL)
        r = j.intl.formatToPlainString(j.t.lieTqU, {
            username: D.Ay.getName(n),
        });
    else if (null != t.poll)
        r = j.intl.formatToPlainString(j.t.ImizdM, {
            question: t.poll.question.text,
        });
    else if (t.type === x.lAJ.POLL_RESULT) {
        var m, g, E;
        let e =
                null == (E = t.embeds) || null == (g = E[0]) || null == (m = g.fields)
                    ? void 0
                    : m.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        r = j.intl.formatToPlainString(j.t["9WrecI"], {
            question: n,
        });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === i.I5.CHECKPOINT_CARD)
        r = j.intl.string(j.t.HWnMTQ);
    else if (
        (({ content: r, emoji: _ } = f.Ay.unparseWithMeta(d, e.id, !0)),
        0 !== d.length && e.type === x.rbe.DM && !n.bot && d.startsWith(k))
    )
        for (let e of ((r = r.substring(0, 1) + r.substring(4)), _)) e.position -= 2;
    return (
        0 === r.length && (r = Y(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: o,
            body: r,
            emoji: _,
        }
    );
}

function K(e) {
    return e.type === x.rbe.DM || null != e.linkedLobby;
}
