i.d(n, {
    FI: function () {
        return U;
    },
    LL: function () {
        return b;
    },
    N_: function () {
        return F;
    },
    Xi: function () {
        return M;
    },
    eF: function () {
        return k;
    }
}),
    i(789020),
    i(411104);
var e = i(933557),
    l = i(710845),
    o = i(978003),
    a = i(41776),
    u = i(355298),
    r = i(957730),
    s = i(850908),
    d = i(572804),
    c = i(901461);
i(734934);
var f = i(569471),
    g = i(723170),
    _ = i(695346),
    N = i(131704),
    E = i(433355),
    I = i(592125),
    h = i(430824),
    v = i(19780),
    T = i(699516),
    p = i(944486),
    Z = i(914010),
    S = i(885110),
    C = i(9156),
    m = i(594174),
    A = i(630388),
    y = i(5192),
    O = i(352736),
    P = i(51144),
    R = i(981631),
    w = i(124368),
    D = i(388032);
function b(t, n, i) {
    let e = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    if (n.hasFlag(R.xW$.SPAMMER) || i.isManaged()) return !1;
    let l = i.getGuildId();
    return !((null != l && a.Z.isLurking(l)) || (!e.ignoreSameUser && n.id === t.id) || T.Z.isBlockedOrIgnored(n.id) || (!e.ignoreStatus && S.Z.getStatus() === R.Skl.DND) || _.QZ.getSetting() || (!e.ignoreNoMessagesSetting && C.ZP.allowNoMessages(i))) && !0;
}
function k(t, n) {
    var i;
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (null != t.flags && (0, A.yE)(t.flags, R.iLy.SUPPRESS_NOTIFICATIONS)) return !1;
    let o = I.Z.getChannel(n);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (o = I.Z.getChannel(null == o ? void 0 : o.parent_id));
    let a = m.default.getCurrentUser(),
        r = m.default.getUser(null === (i = t.author) || void 0 === i ? void 0 : i.id);
    if (
        null == o ||
        null == a ||
        null == r ||
        (o.type === R.d4z.GROUP_DM && t.type === R.uaV.RECIPIENT_REMOVE) ||
        !b(a, r, o, {
            ignoreStatus: l,
            ignoreSameUser: R.V$x.SELF_MENTIONABLE_SYSTEM.has(t.type)
        }) ||
        u.Z.isMessageRequest(n)
    )
        return !1;
    if (!e) {
        let t = p.Z.getChannelId(Z.Z.getGuildId());
        if (t === o.id || E.ZP.getCurrentSidebarChannelId(t) === o.id) return !1;
    }
    if (T.Z.isBlockedOrIgnoredForMessage(t) || (void 0 !== t.activity_instance && null != t.interaction && t.interaction.user.id === a.id)) return !1;
    if (N.Ec.has(o.type)) {
        if (f.Z.isMuted(o.id)) return !1;
        let n = (0, g.J)(o);
        return (
            n !== w.iN.NO_MESSAGES &&
            (n === w.iN.ALL_MESSAGES ||
                (0, d.Hl)({
                    rawMessage: t,
                    userId: a.id,
                    suppressEveryone: !1,
                    suppressRoles: !1
                }))
        );
    }
    {
        let n = !N.tx.has(o.type) || v.Z.getChannelId() === o.id;
        if (C.ZP.allowAllMessages(o) && n) return !0;
        let i = C.ZP.isSuppressEveryoneEnabled(o.getGuildId()),
            e = C.ZP.isSuppressRolesEnabled(o.getGuildId());
        return (0, d.Hl)({
            rawMessage: t,
            userId: a.id,
            suppressEveryone: i,
            suppressRoles: e
        });
    }
}
function F(t, n) {
    var i;
    if (p.Z.getChannelId(Z.Z.getGuildId()) !== n) return !1;
    let e = I.Z.getChannel(n);
    t.type === R.uaV.THREAD_STARTER_MESSAGE && (e = I.Z.getChannel(null == e ? void 0 : e.parent_id));
    let l = m.default.getCurrentUser(),
        o = m.default.getUser(null === (i = t.author) || void 0 === i ? void 0 : i.id);
    return !(null == e || null == l || null == o || e.isManaged() || o.hasFlag(R.xW$.SPAMMER) || T.Z.isBlockedOrIgnoredForMessage(t) || o.id === l.id || S.Z.getStatus() === R.Skl.DND || _.QZ.getSetting() || C.ZP.allowNoMessages(e)) && !0;
}
function U(t, n) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        e = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = m.default.getCurrentUser(),
        o = m.default.getUser(t.ownerId);
    return (
        !(
            null == n ||
            null == l ||
            null == o ||
            !b(l, o, n, {
                ignoreStatus: e,
                ignoreNoMessagesSetting: !0
            }) ||
            C.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)
        ) &&
        (!!i || p.Z.getChannelId(Z.Z.getGuildId()) !== n.id) &&
        C.ZP.getNewForumThreadsCreated(n)
    );
}
let L = (t, n, i) =>
    ''
        .concat(t, ' (')
        .concat((0, e.F6)(n, m.default, T.Z, !0))
        .concat(null != i ? ', '.concat((0, e.F6)(i, m.default, T.Z)) : '', ')');
function G(t, n, i, e) {
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
            return n;
        case R.d4z.GROUP_DM:
            return i;
        case R.d4z.DM:
        default:
            return e;
    }
}
function M(t, n, i) {
    let a;
    let u = y.ZP.getName(t.getGuildId(), t.id, i),
        d = u;
    switch (t.type) {
        case R.d4z.GUILD_ANNOUNCEMENT:
        case R.d4z.GUILD_TEXT:
        case R.d4z.GUILD_VOICE:
        case R.d4z.ANNOUNCEMENT_THREAD:
        case R.d4z.PUBLIC_THREAD:
        case R.d4z.PRIVATE_THREAD:
            let f = I.Z.getChannel(t.parent_id);
            n.type === R.uaV.THREAD_STARTER_MESSAGE && null != f ? (d = L(d, f, I.Z.getChannel(f.parent_id))) : (0, c.Z)(n) ? null != h.Z.getGuild(t.getGuildId()) && (d = L(d, t, f)) : (d = L(d, t, f));
            break;
        case R.d4z.GROUP_DM:
            !(t.isManaged() && i.bot && d === (0, e.F6)(t, m.default, T.Z)) && (d = ''.concat(d, ' (').concat((0, e.F6)(t, m.default, T.Z, !0), ')'));
    }
    let g = n.content;
    if ((0, c.Z)(n) && null == (g = O.Z.stringify(n, t))) throw (new l.Z('NotificationTextUtils').warn('SystemMessageUtils.stringify(...) could not convert', n), Error('failed to stringify system message'));
    let _ = 'sticker_items' in n ? n.sticker_items : 'stickerItems' in n ? n.stickerItems : n.stickers;
    if ('message_reference' in n ? (0, o.s)(n) : (0, o.Z)(n)) a = D.intl.string(D.t['9ddYKi']);
    else if (null != n.activity && null != n.application)
        a =
            n.activity.type === R.mFx.JOIN
                ? D.intl.formatToPlainString(G(t, D.t.E8CgCg, D.t.c6KHWF, D.t.Fy7rJC), {
                      user: u,
                      game: n.application.name
                  })
                : n.activity.type === R.mFx.JOIN_REQUEST
                  ? D.intl.formatToPlainString(G(t, D.t['/TD0lZ'], D.t['/TD0lZ'], D.t['/TD0lZ']), {
                        user: u,
                        game: n.application.name
                    })
                  : '';
    else if (null != n.activity && n.activity.type === R.mFx.LISTEN) {
        let n = G(t, D.t.SaDdmJ, D.t.qsODho, D.t.WeiMTU);
        a = D.intl.formatToPlainString(n, { user: u });
    } else if (null != _ && _.length > 0) a = D.intl.formatToPlainString(D.t.zY4v1N, { stickerName: _[0].name });
    else if (n.type === R.uaV.PREMIUM_REFERRAL) a = D.intl.formatToPlainString(D.t.lieTqa, { username: P.ZP.getName(i) });
    else if (null != n.poll) a = D.intl.formatToPlainString(D.t.ImizdH, { question: n.poll.question.text });
    else if (n.type === R.uaV.POLL_RESULT) {
        var N, E, v;
        let t = null === (v = n.embeds) || void 0 === v ? void 0 : null === (E = v[0]) || void 0 === E ? void 0 : null === (N = E.fields) || void 0 === N ? void 0 : N.find((t) => ('name' in t ? t.name : t.rawName) === 'poll_question_text'),
            i = null != t ? ('value' in t ? t.value : t.rawValue) : '';
        a = D.intl.formatToPlainString(D.t['9WrecH'], { question: i });
    } else a = 0 !== g.length && t.type === R.d4z.DM && !i.bot && g.startsWith('> -# *') ? (a = r.ZP.unparse(g, t.id, !0)).substring(0, 1) + a.substring(4) : r.ZP.unparse(g, t.id, !0);
    return (
        0 === a.length &&
            (a = (function (t) {
                var n;
                if (void 0 !== t.embeds && t.embeds.length > 0) {
                    let n = t.embeds[0],
                        i = 'description' in n ? n.description : n.rawDescription,
                        e = 'title' in n ? n.title : n.rawTitle;
                    if (null != i) return null != e ? ''.concat(e, ' ').concat(i) : i;
                    if (null != e) return e;
                    if (null != n.fields && n.fields.length > 0) {
                        let t = n.fields[0],
                            i = 'name' in t ? t.name : t.rawName,
                            e = 'value' in t ? t.value : t.rawValue;
                        return ''.concat(i, ' ').concat(e);
                    }
                }
                if ((0, A.yE)(null !== (n = t.flags) && void 0 !== n ? n : 0, R.iLy.IS_VOICE_MESSAGE)) return D.intl.string(D.t.slFYgo);
                if (void 0 !== t.attachments && t.attachments.length > 0) {
                    let n = (0, s.Z)(t.attachments[0]);
                    return D.intl.formatToPlainString(D.t['51OkwM'], { filename: n });
                }
                return '';
            })(n)),
        {
            icon: i.getAvatarURL(t.guild_id, 128),
            title: d,
            body: a
        }
    );
}
