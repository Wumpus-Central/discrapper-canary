n.d(t, {
    FI: () => W,
    LL: () => G,
    N_: () => M,
    Xi: () => b,
    eF: () => L
}),
    n(789020),
    n(266796),
    n(411104);
var i = n(933557),
    l = n(710845),
    a = n(978003),
    o = n(41776),
    r = n(355298),
    u = n(957730),
    d = n(850908),
    s = n(572804),
    c = n(901461);
n(734934);
var f = n(569471),
    g = n(723170),
    E = n(695346),
    _ = n(131704),
    N = n(433355),
    S = n(592125),
    T = n(430824),
    h = n(19780),
    I = n(699516),
    Z = n(944486),
    C = n(914010),
    v = n(885110),
    p = n(9156),
    m = n(594174),
    A = n(630388),
    y = n(5192),
    U = n(352736),
    P = n(51144),
    D = n(981631),
    R = n(124368),
    O = n(388032);
function G(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (t.hasFlag(D.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && t.id === e.id) || I.Z.isBlockedOrIgnored(t.id) || (!i.ignoreStatus && v.Z.getStatus() === D.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && p.ZP.allowNoMessages(n)));
}
function L(e, t) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != e.flags && (0, A.yE)(e.flags, D.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let a = S.Z.getChannel(t);
    e.type === D.uaV.THREAD_STARTER_MESSAGE && (a = S.Z.getChannel(null == a ? void 0 : a.parent_id));
    let o = m.default.getCurrentUser(),
        u = m.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    if (
        null == a ||
        null == o ||
        null == u ||
        (a.type === D.d4z.GROUP_DM && e.type === D.uaV.RECIPIENT_REMOVE) ||
        !G(o, u, a, {
            ignoreStatus: l,
            ignoreSameUser: D.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)
        }) ||
        r.Z.isMessageRequest(t)
    )
        return !1;
    if (!i) {
        let e = Z.Z.getChannelId(C.Z.getGuildId());
        if (e === a.id || N.ZP.getCurrentSidebarChannelId(e) === a.id) return !1;
    }
    if (I.Z.isBlockedOrIgnoredForMessage(e) || (void 0 !== e.activity_instance && null != e.interaction && e.interaction.user.id === o.id)) return !1;
    if (_.Ec.has(a.type)) {
        if (f.Z.isMuted(a.id)) return !1;
        let t = (0, g.J)(a);
        return (
            t !== R.iN.NO_MESSAGES &&
            (t === R.iN.ALL_MESSAGES ||
                (0, s.Hl)({
                    rawMessage: e,
                    userId: o.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let t = !_.tx.has(a.type) || h.Z.getChannelId() === a.id;
        if (p.ZP.allowAllMessages(a) && t) return !0;
        let n = p.ZP.isSuppressEveryoneEnabled(a.getGuildId()),
            i = p.ZP.isSuppressRolesEnabled(a.getGuildId());
        return (0, s.Hl)({
            rawMessage: e,
            userId: o.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function M(e, t) {
    var n;
    if (Z.Z.getChannelId(C.Z.getGuildId()) !== t) return !1;
    let i = S.Z.getChannel(t);
    e.type === D.uaV.THREAD_STARTER_MESSAGE && (i = S.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = m.default.getCurrentUser(),
        a = m.default.getUser(null === (n = e.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(D.xW$.SPAMMER) || I.Z.isBlockedOrIgnoredForMessage(e) || a.id === l.id || v.Z.getStatus() === D.Skl.DND || E.QZ.getSetting() || p.ZP.allowNoMessages(i));
}
function W(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.default.getCurrentUser(),
        a = m.default.getUser(e.ownerId);
    return (
        !(
            null == t ||
            null == l ||
            null == a ||
            !G(l, a, t, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            p.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id)
        ) &&
        (!!n || Z.Z.getChannelId(C.Z.getGuildId()) !== t.id) &&
        p.ZP.getNewForumThreadsCreated(t)
    );
}
let k = (e, t, n) =>
    ''
        .concat(e, ' (')
        .concat((0, i.F6)(t, m.default, I.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, m.default, I.Z)) : '', ')');
function w(e, t, n, i) {
    switch (e.type) {
        case D.d4z.GUILD_ANNOUNCEMENT:
        case D.d4z.GUILD_TEXT:
            return t;
        case D.d4z.GROUP_DM:
            return n;
        case D.d4z.DM:
        default:
            return i;
    }
}
function b(e, t, n) {
    let o;
    let r = y.ZP.getName(e.getGuildId(), e.id, n),
        s = r;
    switch (e.type) {
        case D.d4z.GUILD_ANNOUNCEMENT:
        case D.d4z.GUILD_TEXT:
        case D.d4z.GUILD_VOICE:
        case D.d4z.ANNOUNCEMENT_THREAD:
        case D.d4z.PUBLIC_THREAD:
        case D.d4z.PRIVATE_THREAD:
            let f = S.Z.getChannel(e.parent_id);
            t.type === D.uaV.THREAD_STARTER_MESSAGE && null != f ? (s = k(s, f, S.Z.getChannel(f.parent_id))) : (0, c.Z)(t) ? null != T.Z.getGuild(e.getGuildId()) && (s = k(s, e, f)) : (s = k(s, e, f));
            break;
        case D.d4z.GROUP_DM:
            (e.isManaged() && n.bot && s === (0, i.F6)(e, m.default, I.Z)) || (s = ''.concat(s, ' (').concat((0, i.F6)(e, m.default, I.Z, !0), ')'));
    }
    let g = t.content;
    if ((0, c.Z)(t) && null == (g = U.Z.stringify(t, e))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', t), Error('failed to stringify system message'));
    let E = 'sticker_items' in t ? t.sticker_items : 'stickerItems' in t ? t.stickerItems : t.stickers;
    if ('message_reference' in t ? (0, a.s)(t) : (0, a.Z)(t)) o = O.NW.string(O.t['9ddYKi']);
    else if (null != t.activity && null != t.application)
        o =
            t.activity.type === D.mFx.JOIN
                ? O.NW.formatToPlainString(w(e, O.t.E8CgCg, O.t.c6KHWF, O.t.Fy7rJC), {
                      user: r,
                      game: t.application.name
                  })
                : t.activity.type === D.mFx.JOIN_REQUEST
                  ? O.NW.formatToPlainString(w(e, O.t['/TD0lZ'], O.t['/TD0lZ'], O.t['/TD0lZ']), {
                        user: r,
                        game: t.application.name
                    })
                  : '';
    else if (null != t.activity && t.activity.type === D.mFx.LISTEN) {
        let t = w(e, O.t.SaDdmJ, O.t.qsODho, O.t.WeiMTU);
        o = O.NW.formatToPlainString(t, { user: r });
    } else if (null != E && E.length > 0) o = O.NW.formatToPlainString(O.t.zY4v1N, { stickerName: E[0].name });
    else if (t.type === D.uaV.PREMIUM_REFERRAL) o = O.NW.formatToPlainString(O.t.lieTqa, { username: P.ZP.getName(n) });
    else if (null != t.poll) o = O.NW.formatToPlainString(O.t.ImizdH, { question: t.poll.question.text });
    else if (t.type === D.uaV.POLL_RESULT) {
        var _, N, h;
        let e = null === (h = t.embeds) || void 0 === h ? void 0 : null === (N = h[0]) || void 0 === N ? void 0 : null === (_ = N.fields) || void 0 === _ ? void 0 : _.find((e) => ('name' in e ? e.name : e.rawName) === 'poll_question_text'),
            n = null != e ? ('value' in e ? e.value : e.rawValue) : '';
        o = O.NW.formatToPlainString(O.t['9WrecH'], { question: n });
    } else o = 0 !== g.length && e.type === D.d4z.DM && !n.bot && g.startsWith('> -# *') ? (o = u.ZP.unparse(g, e.id, !0)).substring(0, 1) + o.substring(4) : u.ZP.unparse(g, e.id, !0);
    return (
        0 === o.length &&
            (o = (function (e) {
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
                if ((0, A.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, D.iLy.IS_VOICE_MESSAGE)) return O.NW.string(O.t.slFYgo);
                if (void 0 !== e.attachments && e.attachments.length > 0) {
                    let t = (0, d.Z)(e.attachments[0]);
                    return O.NW.formatToPlainString(O.t['51OkwM'], { filename: t });
                }
                return '';
            })(t)),
        {
            icon: n.getAvatarURL(e.guild_id, 128),
            title: s,
            body: o
        }
    );
}
