n.d(t, { Z: () => y });
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
    m = n(199902),
    f = n(914010),
    g = n(411198),
    h = n(51144),
    _ = n(358595),
    b = n(981631),
    E = n(245335),
    x = n(388032),
    v = n(273254);
function y(e) {
    let t,
        n,
        l,
        { invite: y, currentUserId: C, guild: O, message: j, onTransitionToInviteChannel: I, onAcceptInstantInvite: S } = e,
        T = null == O ? void 0 : O.id,
        N = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        P = (0, o.e7)([m.Z], () => (null != y && null != y.target_user ? m.Z.getActiveStreamForUser(y.target_user.id, T) : null), [y, T]),
        A = (0, o.e7)([m.Z], () => (null != y && null != y.target_user ? m.Z.getStreamForUser(y.target_user.id, T) : null), [y, T]),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != y && y.target_type === E.Iq.STREAM && null != y.target_user && null != P,
        R = null != y && null != A && null != y.channel && null != y.guild && A.channelId === y.channel.id && A.guildId === y.guild.id;
    a()(null != y, 'Invite cannot be null');
    let { target_type: k, target_user: L } = y;
    a()(k === E.Iq.STREAM && null != L, 'invalid streaming invite');
    let D = C === L.id,
        M = y.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = 'noop';
            (Z ? (I(), (e = 'transition')) : (S(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: y,
                        action: e,
                        inviter_id: j.author.id,
                        invite_message_id: j.id
                    },
                    w
                ));
        }, [y, j, w, Z, I, S]),
        F = null != O;
    if (null == O) {
        if (null == y.guild) return (0, r.jsx)(_.Z, {});
        O = (0, g.Qs)(y.guild);
    }
    let B = null != y.channel ? (0, p.jD)(y.channel) : null,
        G = h.ZP.getName(L);
    F && !R ? (l = D ? x.intl.string(x.t.oBLoZG) : x.intl.formatToPlainString(x.t['0QJmAw'], { name: G })) : ((t = x.intl.string(x.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), Z && ((t = x.intl.string(x.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = D ? x.intl.string(x.t['4hyaHh']) : x.intl.formatToPlainString(x.t.QmlLEh, { name: G })));
    let H = N === O.id && null != B ? (0, r.jsx)(d.Z.Channel, { channel: B }) : x.intl.formatToPlainString(x.t.u0vaDA, { guildName: O.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: x.intl.string(x.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: v.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: O,
                                onClick: F && R ? U : void 0
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: l,
                                onClick: F && R ? U : void 0,
                                children: H
                            })
                        ]
                    }),
                    R
                        ? (0, r.jsx)(d.Z.Button, {
                              disabled: F && !R,
                              onClick: U,
                              submitting: M,
                              isDisabled: Z && R,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
