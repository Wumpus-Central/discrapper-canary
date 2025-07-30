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
    _ = n(411198),
    g = n(51144),
    h = n(358595),
    b = n(981631),
    E = n(245335),
    C = n(388032),
    O = n(273254);
function y(e) {
    let t,
        n,
        l,
        { invite: y, currentUserId: v, guild: x, message: I, onTransitionToInviteChannel: j, onAcceptInstantInvite: S } = e,
        T = null == x ? void 0 : x.id,
        N = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        P = (0, o.e7)([m.Z], () => (null != y && null != y.target_user ? m.Z.getActiveStreamForUser(y.target_user.id, T) : null), [y, T]),
        A = (0, o.e7)([m.Z], () => (null != y && null != y.target_user ? m.Z.getStreamForUser(y.target_user.id, T) : null), [y, T]),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != y && y.target_type === E.Iq.STREAM && null != y.target_user && null != P,
        R = null != y && null != A && null != y.channel && null != y.guild && A.channelId === y.channel.id && A.guildId === y.guild.id;
    a()(null != y, 'Invite cannot be null');
    let { target_type: D, target_user: L } = y;
    a()(D === E.Iq.STREAM && null != L, 'invalid streaming invite');
    let M = v === L.id,
        k = y.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = 'noop';
            (Z ? (j(), (e = 'transition')) : (S(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: y,
                        action: e,
                        inviter_id: I.author.id,
                        invite_message_id: I.id
                    },
                    w
                ));
        }, [y, I, w, Z, j, S]),
        F = null != x;
    if (null == x) {
        if (null == y.guild) return (0, r.jsx)(h.Z, {});
        x = (0, _.Qs)(y.guild);
    }
    let B = null != y.channel ? (0, p.jD)(y.channel) : null,
        G = g.ZP.getName(L);
    F && !R ? (l = M ? C.intl.string(C.t.oBLoZG) : C.intl.formatToPlainString(C.t['0QJmAw'], { name: G })) : ((t = C.intl.string(C.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), Z && ((t = C.intl.string(C.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = M ? C.intl.string(C.t['4hyaHh']) : C.intl.formatToPlainString(C.t.QmlLEh, { name: G })));
    let H = N === x.id && null != B ? (0, r.jsx)(d.Z.Channel, { channel: B }) : C.intl.formatToPlainString(C.t.u0vaDA, { guildName: x.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: C.intl.string(C.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: O.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: x,
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
                              submitting: k,
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
