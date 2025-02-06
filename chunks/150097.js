n.d(e, {
    FI: () => k,
    LL: () => G,
    N_: () => M,
    Xi: () => V,
    eF: () => L
}),
    n(789020),
    n(411104);
var i = n(933557),
    l = n(710845),
    a = n(978003),
    o = n(41776),
    u = n(355298),
    r = n(957730),
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
    p = n(885110),
    v = n(9156),
    m = n(594174),
    y = n(630388),
    A = n(5192),
    P = n(352736),
    D = n(51144),
    R = n(981631),
    U = n(124368),
    O = n(388032);
function G(t, e, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (e.hasFlag(R.xW$.SPAMMER) || n.isManaged()) return !1;
    let l = n.getGuildId();
    return !((null != l && o.Z.isLurking(l)) || (!i.ignoreSameUser && e.id === t.id) || I.Z.isBlockedOrIgnored(e.id) || (!i.ignoreStatus && p.Z.getStatus() === R.Skl.DND) || E.QZ.getSetting() || (!i.ignoreNoMessagesSetting && v.ZP.allowNoMessages(n)));
}
function L(t, e) {
    var n;
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, y.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let a = S.Z.getChannel(e);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (a = S.Z.getChannel(null == a ? void 0 : a.parent_id));
    let o = m.default.getCurrentUser(),
        r = m.default.getUser(null === (n = t.author) || void 0 === n ? void 0 : n.id);
    if (
        null == a ||
        null == o ||
        null == r ||
        (a.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE) ||
        !G(o, r, a, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        u.Z.isMessageRequest(e)
    )
        return !1;
    if (!i) {
        let t = Z.Z.getChannelId(C.Z.getGuildId());
        if (t === a.id || N.ZP.getCurrentSidebarChannelId(t) === a.id) return !1;
    }
    if (I.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === o.id)) return !1;
    if (_.Ec.has(a.type)) {
        if (f.Z.isMuted(a.id)) return !1;
        let e = (0, g.J)(a);
        return (
            e !== U.iN.NO_MESSAGES &&
            (e === U.iN.ALL_MESSAGES ||
                (0, s.Hl)({
                    rawMessage: t,
                    userId: o.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let e = !_.tx.has(a.type) || h.Z.getChannelId() === a.id;
        if (v.ZP.allowAllMessages(a) && e) return !0;
        let n = v.ZP.isSuppressEveryoneEnabled(a.getGuildId()),
            i = v.ZP.isSuppressRolesEnabled(a.getGuildId());
        return (0, s.Hl)({
            rawMessage: t,
            userId: o.id,
            suppressEveryone: n,
            suppressRoles: i
        });
    }
}
function M(t, e) {
    var n;
    if (Z.Z.getChannelId(C.Z.getGuildId()) !== e) return !1;
    let i = S.Z.getChannel(e);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (i = S.Z.getChannel(null == i ? void 0 : i.parent_id));
    let l = m.default.getCurrentUser(),
        a = m.default.getUser(null === (n = t.author) || void 0 === n ? void 0 : n.id);
    return !(null == i || null == l || null == a || i.isManaged() || a.hasFlag(R.xW$.SPAMMER) || I.Z.isBlockedOrIgnoredForMessage(t) || a.id === l.id || p.Z.getStatus() === R.Skl.DND || E.QZ.getSetting() || v.ZP.allowNoMessages(i));
}
function k(t, e) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.default.getCurrentUser(),
        a = m.default.getUser(t.ownerId);
    return (
        !(
            null == e ||
            null == l ||
            null == a ||
            !G(l, a, e, {
                ignoreStatus: i,
                ignoreNoMessagesSetting: !0
            }) ||
            v.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
        ) &&
        (!!n || Z.Z.getChannelId(C.Z.getGuildId()) !== e.id) &&
        v.ZP.getNewForumThreadsCreated(e)
    );
}
let w = (t, e, n) =>
    ''
        .concat(t, ' (')
        .concat((0, i.F6)(e, m.default, I.Z, !0))
        .concat(null != n ? ', '.concat((0, i.F6)(n, m.default, I.Z)) : '', ')');
function b(t, e, n, i) {
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return e;
        case R.d4z.GROUP_DM:
            return n;
        case R.d4z.DM:
        default:
            return i;
    }
}
function V(t, e, n) {
    let o;
    let u = A.ZP.getName(t.getGuildId(), t.id, n),
        s = u;
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let f = S.Z.getChannel(t.parent_id);
            e.type === R.uaV.THREAD_STARTER_MESSAGE && null != f ? (s = w(s, f, S.Z.getChannel(f.parent_id))) : (0, c.Z)(e) ? null != T.Z.getGuild(t.getGuildId()) && (s = w(s, t, f)) : (s = w(s, t, f));
            break;
        case R.d4z.GROUP_DM:
            (t.isManaged() && n.bot && s === (0, i.F6)(t, m.default, I.Z)) || (s = ''.concat(s, ' (').concat((0, i.F6)(t, m.default, I.Z, !0), ')'));
    }
    let g = e.content;
    if ((0, c.Z)(e) && null == (g = P.Z.stringify(e, t))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', e), Error('failed to stringify system message'));
    let E = 'sticker_items' in e ? e.sticker_items : 'stickerItems' in e ? e.stickerItems : e.stickers;
    if ('message_reference' in e ? (0, a.s)(e) : (0, a.Z)(e)) o = O.intl.string(O.t['9ddYKi']);
    else if (null != e.activity && null != e.application)
        o =
            e.activity.type === R.mFx.JOIN
                ? O.intl.formatToPlainString(b(t, O.t.E8CgCg, O.t.c6KHWF, O.t.Fy7rJC), {
                      user: u,
                      game: e.application.name
                  })
                : e.activity.type === R.mFx.JOIN_REQUEST
                  ? O.intl.formatToPlainString(b(t, O.t['/TD0lZ'], O.t['/TD0lZ'], O.t['/TD0lZ']), {
                        user: u,
                        game: e.application.name
                    })
                  : '';
    else if (null != e.activity && e.activity.type === R.mFx.LISTEN) {
        let e = b(t, O.t.SaDdmJ, O.t.qsODho, O.t.WeiMTU);
        o = O.intl.formatToPlainString(e, { user: u });
    } else if (null != E && E.length > 0) o = O.intl.formatToPlainString(O.t.zY4v1N, { stickerName: E[0].name });
    else if (e.type === R.uaV.PREMIUM_REFERRAL) o = O.intl.formatToPlainString(O.t.lieTqa, { username: D.ZP.getName(n) });
    else if (null != e.poll) o = O.intl.formatToPlainString(O.t.ImizdH, { question: e.poll.question.text });
    else if (e.type === R.uaV.POLL_RESULT) {
        var _, N, h;
        let t = null === (h = e.embeds) || void 0 === h ? void 0 : null === (N = h[0]) || void 0 === N ? void 0 : null === (_ = N.fields) || void 0 === _ ? void 0 : _.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            n = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        o = O.intl.formatToPlainString(O.t['9WrecH'], { question: n });
    } else o = 0 !== g.length && t.type === R.d4z.DM && !n.bot && g.startsWith('> -# *') ? (o = r.ZP.unparse(g, t.id, !0)).substring(0, 1) + o.substring(4) : r.ZP.unparse(g, t.id, !0);
    return (
        0 === o.length &&
            (o = (function (t) {
                var e;
                if (void 0 !== t.embeds && t.embeds.length > 0) {
                    let e = t.embeds[0],
                        n = 'description' in e ? e.description : e.rawDescription,
                        i = 'title' in e ? e.title : e.rawTitle;
                    if (null != n) return null != i ? ''.concat(i, ' ').concat(n) : n;
                    if (null != i) return i;
                    if (null != e.fields && e.fields.length > 0) {
                        let t = e.fields[0],
                            n = 'name' in t ? t.name : t.rawName,
                            i = 'value' in t ? t.value : t.rawValue;
                        return ''.concat(n, ' ').concat(i);
                    }
                }
                if ((0, y.yE)(null !== (e = t.flags) && void 0 !== e ? e : 0, R.iLy.IS_VOICE_MESSAGE)) return O.intl.string(O.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let e = (0, d.Z)(t.attachments[0]);
                    return O.intl.formatToPlainString(O.t['51OkwM'], { filename: e });
                }
                return '';
            })(e)),
        {
            icon: n.getAvatarURL(t.guild_id, 128),
            title: s,
            body: o
        }
    );
}
