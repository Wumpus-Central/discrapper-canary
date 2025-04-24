n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(447543),
    c = n(100527),
    u = n(906732),
    d = n(955415),
    p = n(131704),
    m = n(601964),
    f = n(199902),
    h = n(914010),
    g = n(358595),
    _ = n(981631),
    b = n(245335),
    x = n(388032),
    y = n(273254);
function v(e) {
    let t,
        n,
        l,
        { invite: v, currentUserId: E, guild: O, message: j, onTransitionToInviteChannel: C, onAcceptInstantInvite: S } = e,
        I = null == O ? void 0 : O.id,
        N = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        T = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getActiveStreamForUser(v.target_user.id, I) : null), [v, I]),
        P = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getStreamForUser(v.target_user.id, I) : null), [v, I]),
        { analyticsLocations: A } = (0, u.ZP)(c.Z.INVITE_EMBED),
        w = null != v && v.target_type === b.Iq.STREAM && null != v.target_user && null != T,
        Z = null != v && null != P && null != v.channel && null != v.guild && P.channelId === v.channel.id && P.guildId === v.guild.id;
    a()(null != v, 'Invite cannot be null');
    let { target_type: R, target_user: k } = v;
    a()(R === b.Iq.STREAM && null != k, 'invalid streaming invite');
    let D = E === k.id,
        L = v.state === _.r2o.ACCEPTING,
        M = i.useCallback(() => {
            let e = 'noop';
            w ? (C(), (e = 'transition')) : (S(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: v,
                        action: e,
                        inviter_id: j.author.id,
                        invite_message_id: j.id
                    },
                    A
                );
        }, [v, j, A, w, C, S]),
        U = null != O;
    if (null == O) {
        if (null == v.guild) return (0, r.jsx)(g.Z, {});
        O = new m.ZP(v.guild);
    }
    let F = null != v.channel ? (0, p.jD)(v.channel) : null;
    U && !Z ? (l = D ? x.intl.string(x.t.oBLoZG) : x.intl.formatToPlainString(x.t['0QJmAw'], { name: k.username })) : ((t = x.intl.string(x.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), w && ((t = x.intl.string(x.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = D ? x.intl.string(x.t['4hyaHh']) : x.intl.formatToPlainString(x.t.QmlLEh, { name: k.username })));
    let B = N === O.id && null != F ? (0, r.jsx)(d.Z.Channel, { channel: F }) : x.intl.formatToPlainString(x.t.u0vaDA, { guildName: O.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: x.intl.string(x.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: y.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: O,
                                onClick: U && Z ? M : void 0
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: l,
                                onClick: U && Z ? M : void 0,
                                children: B
                            })
                        ]
                    }),
                    Z
                        ? (0, r.jsx)(d.Z.Button, {
                              disabled: U && !Z,
                              onClick: M,
                              submitting: L,
                              isDisabled: w && Z,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
