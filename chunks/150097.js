n.d(t, {
    FI: () => k,
    LL: () => G,
    N_: () => M,
    Xi: () => F,
    eF: () => L
}),
    n(789020),
    n(266796),
    n(411104);
var i = n(933557),
    l = n(710845),
    a = n(978003),
    r = n(41776),
    o = n(355298),
    u = n(957730),
    s = n(850908),
    d = n(572804),
    c = n(901461);
n(734934);
var f = n(842619),
    g = n(569471),
    E = n(723170),
    _ = n(695346),
    N = n(131704),
    S = n(433355),
    T = n(592125),
    I = n(430824),
    p = n(19780),
    h = n(699516),
    C = n(944486),
    Z = n(914010),
    v = n(885110),
    m = n(9156),
    A = n(594174),
    y = n(630388),
    P = n(5192),
    U = n(352736),
    D = n(51144),
    R = n(981631),
    O = n(124368),
    b = n(388032);
function G(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && r.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || h.Z.isBlockedOrIgnored(t.id) || (!i.ignoreStatus && v.Z.getStatus() === R.Skl.DND) || _.QZ.getSetting() || (!i.ignoreNoMessagesSetting && m.ZP.allowNoMessages(n)));
}
function L(e, t) {
    var n, i;
    let l = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, y.yE)(e.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let r = T.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (r = T.Z.getChannel(null == r ? void 0 : r.parent_id));
    let u = A.default.getCurrentUser(),
        s = A.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == r ||
        null == u ||
        null == s ||
        (r.type === R.d4z.GROUP_DM && e.type === R.uaV.RECIPIENT_REMOVE) ||
        (f.Z.areSlayerNotificationsSuppressed() && ((i = r).type === R.d4z.DM || null != i.linkedLobby)) ||
        !G(u, s, r, {
            ignoreStatus: a,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        o.Z.isMessageRequest(t)
    )
        return !1;
    if (!l) {
        let e = C.Z.getChannelId(Z.Z.getGuildId());
        if (e === r.id || S.ZP.getCurrentSidebarChannelId(e) === r.id) return !1;
    }
    if (h.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === u.id)) return !1;
    if (N.Ec.has(r.type)) {
        if (g.Z.isMuted(r.id)) return !1;
        let t = (0, E.J)(r);
        return (
            t !== O.iN.NO_MESSAGES &&
            (t === O.iN.ALL_MESSAGES ||
                (0, d.Hl)({
                    rawMessage: e,
                    userId: u.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !N.tx.has(r.type) || p.Z.getChannelId() === r.id;
        if (m.ZP.allowAllMessages(r) && t) return !0;
        let n = m.ZP.isSuppressEveryoneEnabled(r.getGuildId()),
            i = m.ZP.isSuppressRolesEnabled(r.getGuildId());
        return (0, d.Hl)({
            rawMessage: e,
            userId: u.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function M(e, t) {
    var n;
    if (C.Z.getChannelId(Z.Z.getGuildId()) !== t) return !1;
    let i = T.Z.getChannel(t);
    e.type === R.uaV.THREAD_STARTER_MESSAGE && (i = T.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = A.default.getCurrentUser(),
        a = A.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(R.xW$.SPAMMER) || h.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || v.Z.getStatus() === R.Skl.DND || _.QZ.getSetting() || m.ZP.allowNoMessages(i));
}
function k(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = A.default.getCurrentUser(),
        a = A.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == a ||
            !G(l, a, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            m.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || C.Z.getChannelId(Z.Z.getGuildId()) !== t.id) &&
        m.ZP.getNewForumThreadsCreated(t)
    );
}
let w = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, A.default, h.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, A.default, h.Z)) : '', ')');
function W(e, t, n, i) {
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return t;
        case R.d4z.GROUP_DM:
            return n;
        case R.d4z.DM:
        default:
            return i;
    }
}
function F(e, t, n) {
    let r;
    let o = P.ZP.getName(e.getGuildId(), e.id, n),
        d = o;
    switch (e.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let f = T.Z.getChannel(e.parent_id);
            t.type === R.uaV.THREAD_STARTER_MESSAGE && null != f ? (d = w(d, f, T.Z.getChannel(f.parent_id))) : (0, c.Z)(t) ? null != I.Z.getGuild(e.getGuildId()) && (d = w(d, e, f)) : (d = w(d, e, f));
            break;
        case R.d4z.GROUP_DM:
            (e.isManaged() && n.bot && d === (0, i.F6)(e, A.default, h.Z)) || (d = ''.concat(d, ' (').concat((0, i.F6)(e, A.default, h.Z, !0), ')'));
    }
    let g = t.content;
    if ((0, c.Z)(t) && null == (g = U.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, a.s)(t) : (0, a.Z)(t)) r = b.NW.string(b.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        r =
            t.activity.type === R.mFx.JOIN
                ? b.NW.formatToPlainString(W(e, b.t.E8CgCg, b.t.c6KHWF, b.t.Fy7rJC), {
                      user: o,
                      game: t.application.name
                  })
                : t.activity.type === R.mFx.JOIN_REQUEST
                  ? b.NW.formatToPlainString(W(e, b.t['/TD0lZ'], b.t['/TD0lZ'], b.t['/TD0lZ']), {
                        user: o,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === R.mFx.LISTEN) {
        let t = W(e, b.t.SaDdmJ, b.t.qsODho, b.t.WeiMTU);
        r = b.NW.formatToPlainString(t, { user: o });
    } else if (null != E && E.length > 0) r = b.NW.formatToPlainString(b.t.zY4v1N, { stickerName: E[0].name });
    else if (t.type === R.uaV.PREMIUM_REFERRAL) r = b.NW.formatToPlainString(b.t.lieTqa, { username: D.ZP.getName(n) });
    else if (null != t.poll) r = b.NW.formatToPlainString(b.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === R.uaV.POLL_RESULT) {
        var _, N, S;
        let e = null === (S = t.embeds) || void 0 === S ? void 0 : null === (N = S[0]) || void 0 === N ? void 0 : null === (_ = N.fields) || void 0 === _ ? void 0 : _.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        r = b.NW.formatToPlainString(b.t['9WrecH'], { question: n });
    } else r = 0 !== g.length && e.type === R.d4z.DM && !n.bot && g.startsWith('> -# *') ? (r = u.ZP.unparse(g, e.id, !0)).substring(0, 1) + r.substring(4) : u.ZP.unparse(g, e.id, !0);
    return (
        0 === r.length &&
            (r = (function (e) {
                var t;
                if (void 0 !== e.embeds && e.embeds.length > 0) {
                    let t = e.embeds[0],
                        n = 'description' in t ? t.description : t.rawDescription,
                        i = 'title' in t ? t.title : t.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != t.fields && t.fields.length > 0) {
                        let e = t.fields[0],
                            n = 'name' in e ? e.name : e.rawName,
                            i = 'value' in e ? e.value : e.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, y.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, R.iLy.IS_VOICE_MESSAGE)) return b.NW.string(b.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, s.Z)(e.attachments[0]);
                    return b.NW.formatToPlainString(b.t['51OkwM'], { filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: d,
            body: r
        }
    );
}
