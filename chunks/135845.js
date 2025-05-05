n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
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
    y = n(388032),
    x = n(273254);
function E(e) {
    let t,
        n,
        l,
        { invite: E, currentUserId: v, guild: O, message: j, onTransitionToInviteChannel: C, onAcceptInstantInvite: S } = e,
        I = null == O ? void 0 : O.id,
        N = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        T = (0, o.e7)([f.Z], () => (null != E && null != E.target_user ? f.Z.getActiveStreamForUser(E.target_user.id, I) : null), [E, I]),
        P = (0, o.e7)([f.Z], () => (null != E && null != E.target_user ? f.Z.getStreamForUser(E.target_user.id, I) : null), [E, I]),
        { analyticsLocations: A } = (0, u.ZP)(c.Z.INVITE_EMBED),
        w = null != E && E.target_type === b.Iq.STREAM && null != E.target_user && null != T,
        Z = null != E && null != P && null != E.channel && null != E.guild && P.channelId === E.channel.id && P.guildId === E.guild.id;
    a()(null != E, 'Invite cannot be null');
    let { target_type: R, target_user: k } = E;
    a()(R === b.Iq.STREAM && null != k, 'invalid streaming invite');
    let L = v === k.id,
        D = E.state === _.r2o.ACCEPTING,
        M = i.useCallback(() => {
            let e = 'noop';
            w ? (C(), (e = 'transition')) : (S(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: E,
                        action: e,
                        inviter_id: j.author.id,
                        invite_message_id: j.id
                    },
                    A
                );
        }, [E, j, A, w, C, S]),
        U = null != O;
    if (null == O) {
        if (null == E.guild) return (0, r.jsx)(g.Z, {});
        O = new m.ZP(E.guild);
    }
    let F = null != E.channel ? (0, p.jD)(E.channel) : null;
    U && !Z ? (l = L ? y.intl.string(y.t.oBLoZG) : y.intl.formatToPlainString(y.t['0QJmAw'], { name: k.username })) : ((t = y.intl.string(y.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), w && ((t = y.intl.string(y.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = L ? y.intl.string(y.t['4hyaHh']) : y.intl.formatToPlainString(y.t.QmlLEh, { name: k.username })));
    let B = N === O.id && null != F ? (0, r.jsx)(d.Z.Channel, { channel: F }) : y.intl.formatToPlainString(y.t.u0vaDA, { guildName: O.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: y.intl.string(y.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: x.headerLine,
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
                              submitting: D,
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
