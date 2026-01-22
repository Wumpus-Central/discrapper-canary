n.d(t, {
    TB: () => B,
    Wv: () => M,
    kY: () => V,
    lx: () => U,
    q1: () => F,
}),
    n(938796),
    n(228524),
    n(65821),
    n(896048);
var l = n(665260),
    r = n(155718),
    i = n(933958),
    a = n(551639),
    s = n(47167),
    o = n(626584),
    c = n(427930),
    u = n(857071),
    d = n(380335),
    f = n(451909),
    p = n(465856),
    b = n(451919),
    g = n(143413),
    m = n(152007),
    h = n(607508),
    A = n(253932),
    y = n(95701),
    _ = n(761640),
    E = n(734057),
    v = n(71393),
    O = n(383501),
    x = n(994500),
    S = n(309010),
    N = n(967198),
    C = n(461213),
    j = n(543465),
    T = n(287809),
    I = n(562153),
    w = n(638075),
    R = n(427262);
n(970931);
var P = n(655237),
    D = n(652215),
    k = n(37411),
    L = n(985018);
function M(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(D.nhx.SPAMMER) || n.isManaged()) return !1;
    let r = n.getGuildId();
    return !(
        (null != r && u.A.isLurking(r)) ||
        (!l.ignoreSameUser && t.id === e.id) ||
        x.A.isBlockedOrIgnored(t.id) ||
        (!l.ignoreStatus && C.A.getStatus() === D.clD.DND) ||
        A.NO.getSetting() ||
        (!l.ignoreNoMessagesSetting && j.Ay.allowNoMessages(n))
    );
}
function U(e, t) {
    var n, r;
    let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, l.Lt)(e.flags, D.pr7.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = E.A.getChannel(t);
    e.type === D.lAJ.THREAD_STARTER_MESSAGE && (o = E.A.getChannel(null == o ? void 0 : o.parent_id));
    let c = T.default.getCurrentUser(),
        u = T.default.getUser(null == (n = e.author) ? void 0 : n.id);
    if (
        null == o ||
        null == c ||
        null == u ||
        (o.type === D.rbe.GROUP_DM && e.type === D.lAJ.RECIPIENT_REMOVE) ||
        (P.A.areSlayerNotificationsSuppressed() && ((r = o).type === D.rbe.DM || null != r.linkedLobby)) ||
        !M(c, u, o, {
            ignoreStatus: s,
            ignoreSameUser: D.MRS.SELF_MENTIONABLE_SYSTEM.has(e.type),
        }) ||
        d.A.isMessageRequest(t)
    )
        return !1;
    if (!a) {
        let e = S.A.getChannelId(N.A.getGuildId());
        if (e === o.id || _.Ay.getCurrentSidebarChannelId(e) === o.id) return !1;
    }
    if (
        x.A.isBlockedOrIgnoredForMessage(e) ||
        (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === c.id)
    )
        return !1;
    if (null != e.application_id) {
        let n = i.Ay.getCurrentEmbeddedActivity();
        if ((null == n ? void 0 : n.applicationId) === e.application_id && n.location.channel_id === t) return !1;
    }
    if (y.Le.has(o.type)) {
        if (m.A.isMuted(o.id)) return !1;
        let t = (0, h.l)(o);
        return (
            t !== k.CP.NO_MESSAGES &&
            (t === k.CP.ALL_MESSAGES ||
                (0, b.bG)({
                    rawMessage: e,
                    userId: c.id,
                    suppressEveryone: !1,
                    suppressRoles: !1,
                }))
        );
    }
    {
        let t = !y.OU.has(o.type) || O.A.getChannelId() === o.id;
        if (j.Ay.allowAllMessages(o) && t) return !0;
        let n = j.Ay.isSuppressEveryoneEnabled(o.getGuildId()),
            l = j.Ay.isSuppressRolesEnabled(o.getGuildId());
        return (0, b.bG)({
            rawMessage: e,
            userId: c.id,
            suppressEveryone: n,
            suppressRoles: l,
        });
    }
}
function V(e, t) {
    var n;
    if (S.A.getChannelId(N.A.getGuildId()) !== t) return !1;
    let l = E.A.getChannel(t);
    e.type === D.lAJ.THREAD_STARTER_MESSAGE && (l = E.A.getChannel(null == l ? void 0 : l.parent_id));
    let r = T.default.getCurrentUser(),
        i = T.default.getUser(null == (n = e.author) ? void 0 : n.id);
    return !(
        null == l ||
        null == r ||
        null == i ||
        l.isManaged() ||
        i.hasFlag(D.nhx.SPAMMER) ||
        x.A.isBlockedOrIgnoredForMessage(e) ||
        i.id === r.id ||
        C.A.getStatus() === D.clD.DND ||
        A.NO.getSetting() ||
        j.Ay.allowNoMessages(l)
    );
}
function F(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        r = T.default.getCurrentUser(),
        i = T.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == r ||
            null == i ||
            !M(r, i, t, {
                ignoreStatus: l,
                ignoreNoMessagesSetting: !0,
            }) ||
            j.Ay.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || S.A.getChannelId(N.A.getGuildId()) !== t.id) &&
        j.Ay.getNewForumThreadsCreated(t)
    );
}
let G = (e, t, n) =>
    ""
        .concat((0, a.az)(e, !0), " (")
        .concat((0, a.az)((0, s.m1)(t, T.default, x.A, !0), !0))
        .concat(null != n ? ", ".concat((0, a.az)((0, s.m1)(n, T.default, x.A), !0)) : "", ")");
function H(e, t, n, l) {
    switch (e.type) {
        case D.rbe.GUILD_ANNOUNCEMENT:
        case D.rbe.GUILD_TEXT:
            return t;
        case D.rbe.GROUP_DM:
            return n;
        case D.rbe.DM:
        default:
            return l;
    }
}
function B(e, t, n) {
    let i,
        a = I.Ay.getName(e.getGuildId(), e.id, n),
        u = a;
    switch (e.type) {
        case D.rbe.GUILD_ANNOUNCEMENT:
        case D.rbe.GUILD_TEXT:
        case D.rbe.GUILD_VOICE:
        case D.rbe.ANNOUNCEMENT_THREAD:
        case D.rbe.PUBLIC_THREAD:
        case D.rbe.PRIVATE_THREAD:
            let d = E.A.getChannel(e.parent_id);
            t.type === D.lAJ.THREAD_STARTER_MESSAGE && null != d
                ? (u = G(u, d, E.A.getChannel(d.parent_id)))
                : (0, g.A)(t)
                  ? null != v.A.getGuild(e.getGuildId()) && (u = G(u, e, d))
                  : (u = G(u, e, d));
            break;
        case D.rbe.GROUP_DM:
            (e.isManaged() && n.bot && u === (0, s.m1)(e, T.default, x.A)) || (u = G(u, e));
    }
    let b = t.content;
    if ((0, g.A)(t) && null == (b = w.A.stringify(t, e)))
        throw (
            (new o.A("NotificationTextUtils").warn("SystemMessageUtils.stringify(...) could not convert", {
                message: t,
            }),
            Error("failed to stringify system message"))
        );
    let m = "sticker_items" in t ? t.sticker_items : "stickerItems" in t ? t.stickerItems : t.stickers,
        h = [];
    if ("message_reference" in t ? (0, c.m)(t) : (0, c.A)(t)) i = L.intl.string(L.t["9ddYKt"]);
    else if (null != t.activity && null != t.application)
        i =
            t.activity.type === D.xL.JOIN
                ? L.intl.formatToPlainString(H(e, L.t.E8CgCh, L.t.c6KHWJ, L.t.Fy7rJN), {
                      user: a,
                      game: t.application.name,
                  })
                : t.activity.type === D.xL.JOIN_REQUEST
                  ? L.intl.formatToPlainString(H(e, L.t["/TD0la"], L.t["/TD0la"], L.t["/TD0la"]), {
                        user: a,
                        game: t.application.name,
                    })
                  : "";
    else if (null != t.activity && t.activity.type === D.xL.LISTEN) {
        let t = H(e, L.t.SaDdmN, L.t.qsODhp, L.t.WeiMTW);
        i = L.intl.formatToPlainString(t, { user: a });
    } else if (null != m && m.length > 0) i = L.intl.formatToPlainString(L.t.zY4v1B, { stickerName: m[0].name });
    else if (t.type === D.lAJ.PREMIUM_REFERRAL)
        i = L.intl.formatToPlainString(L.t.lieTqU, { username: R.Ay.getName(n) });
    else if (null != t.poll) i = L.intl.formatToPlainString(L.t.ImizdM, { question: t.poll.question.text });
    else if (t.type === D.lAJ.POLL_RESULT) {
        var A, y, _;
        let e =
                null == (_ = t.embeds) || null == (y = _[0]) || null == (A = y.fields)
                    ? void 0
                    : A.find((e) => ("name" in e ? e.name : e.rawName) === "poll_question_text"),
            n = null != e ? ("value" in e ? e.value : e.rawValue) : "";
        i = L.intl.formatToPlainString(L.t["9WrecI"], { question: n });
    } else if (null != t.components && t.components.length > 0 && t.components[0].type === r.I5.CHECKPOINT_CARD)
        i = L.intl.string(L.t.HWnMTQ);
    else if (
        (({ content: i, emoji: h } = f.Ay.unparseWithMeta(b, e.id, !0)),
        0 !== b.length && e.type === D.rbe.DM && !n.bot && b.startsWith("> -# *"))
    )
        for (let e of ((i = i.substring(0, 1) + i.substring(4)), h)) e.position -= 2;
    return (
        0 === i.length &&
            (i = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = "description" in t ? t.description : t.rawDescription,
                        l = "title" in t ? t.title : t.rawTitle;
                    if (null != n) return null != l ? "".concat(l, " ").concat(n) : n;
                    if (null != l) return l;
                    if (null != t.fields && t.fields.length > 0) {
                        let e = t.fields[0],
                            n = "name" in e ? e.name : e.rawName,
                            l = "value" in e ? e.value : e.rawValue;
                        return "".concat(n, " ").concat(l);
                    }
                }
                if ((0, l.Lt)(null != (t = e.flags) ? t : 0, D.pr7.IS_VOICE_MESSAGE)) return L.intl.string(L.t.slFYgi);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, p.A)(e.attachments[0]);
                    return L.intl.formatToPlainString(L.t["51OkwL"], { filename: t });
                }
                return "";
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: u,
            body: i,
            emoji: h,
        }
    );
}
