n.d(t, { Z: () => O });
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
    _ = n(51144),
    h = n(358595),
    b = n(981631),
    E = n(245335),
    C = n(388032),
    v = n(273254);
function O(e) {
    let t,
        n,
        l,
        { invite: O, currentUserId: x, guild: y, message: I, onTransitionToInviteChannel: j, onAcceptInstantInvite: S } = e,
        T = null == y ? void 0 : y.id,
        N = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        P = (0, o.e7)([m.Z], () => (null != O && null != O.target_user ? m.Z.getActiveStreamForUser(O.target_user.id, T) : null), [O, T]),
        A = (0, o.e7)([m.Z], () => (null != O && null != O.target_user ? m.Z.getStreamForUser(O.target_user.id, T) : null), [O, T]),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != O && O.target_type === E.Iq.STREAM && null != O.target_user && null != P,
        R = null != O && null != A && null != O.channel && null != O.guild && A.channelId === O.channel.id && A.guildId === O.guild.id;
    a()(null != O, 'Invite cannot be null');
    let { target_type: D, target_user: L } = O;
    a()(D === E.Iq.STREAM && null != L, 'invalid streaming invite');
    let M = x === L.id,
        k = O.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = 'noop';
            (Z ? (j(), (e = 'transition')) : (S(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: O,
                        action: e,
                        inviter_id: I.author.id,
                        invite_message_id: I.id
                    },
                    w
                ));
        }, [O, I, w, Z, j, S]),
        F = null != y;
    if (null == y) {
        if (null == O.guild) return (0, r.jsx)(h.Z, {});
        y = (0, g.Qs)(O.guild);
    }
    let B = null != O.channel ? (0, p.jD)(O.channel) : null,
        G = _.ZP.getName(L);
    F && !R ? (l = M ? C.intl.string(C.t.oBLoZG) : C.intl.formatToPlainString(C.t['0QJmAw'], { name: G })) : ((t = C.intl.string(C.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), Z && ((t = C.intl.string(C.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = M ? C.intl.string(C.t['4hyaHh']) : C.intl.formatToPlainString(C.t.QmlLEh, { name: G })));
    let V = N === y.id && null != B ? (0, r.jsx)(d.Z.Channel, { channel: B }) : C.intl.formatToPlainString(C.t.u0vaDA, { guildName: y.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: C.intl.string(C.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: v.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: y,
                                onClick: F && R ? U : void 0
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: l,
                                onClick: F && R ? U : void 0,
                                children: V
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
