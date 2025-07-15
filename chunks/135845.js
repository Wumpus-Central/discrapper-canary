n.d(t, { Z: () => C });
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
    h = n(51144),
    g = n(358595),
    b = n(981631),
    E = n(245335),
    y = n(388032),
    x = n(273254);
function C(e) {
    let t,
        n,
        l,
        { invite: C, currentUserId: v, guild: O, message: j, onTransitionToInviteChannel: I, onAcceptInstantInvite: S } = e,
        T = null == O ? void 0 : O.id,
        N = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        P = (0, o.e7)([m.Z], () => (null != C && null != C.target_user ? m.Z.getActiveStreamForUser(C.target_user.id, T) : null), [C, T]),
        A = (0, o.e7)([m.Z], () => (null != C && null != C.target_user ? m.Z.getStreamForUser(C.target_user.id, T) : null), [C, T]),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != C && C.target_type === E.Iq.STREAM && null != C.target_user && null != P,
        R = null != C && null != A && null != C.channel && null != C.guild && A.channelId === C.channel.id && A.guildId === C.guild.id;
    a()(null != C, 'Invite cannot be null');
    let { target_type: k, target_user: L } = C;
    a()(k === E.Iq.STREAM && null != L, 'invalid streaming invite');
    let D = v === L.id,
        M = C.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = 'noop';
            (Z ? (I(), (e = 'transition')) : (S(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: C,
                        action: e,
                        inviter_id: j.author.id,
                        invite_message_id: j.id
                    },
                    w
                ));
        }, [C, j, w, Z, I, S]),
        F = null != O;
    if (null == O) {
        if (null == C.guild) return (0, r.jsx)(g.Z, {});
        O = (0, _.Qs)(C.guild);
    }
    let B = null != C.channel ? (0, p.jD)(C.channel) : null,
        G = h.ZP.getName(L);
    F && !R ? (l = D ? y.intl.string(y.t.oBLoZG) : y.intl.formatToPlainString(y.t['0QJmAw'], { name: G })) : ((t = y.intl.string(y.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), Z && ((t = y.intl.string(y.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = D ? y.intl.string(y.t['4hyaHh']) : y.intl.formatToPlainString(y.t.QmlLEh, { name: G })));
    let H = N === O.id && null != B ? (0, r.jsx)(d.Z.Channel, { channel: B }) : y.intl.formatToPlainString(y.t.u0vaDA, { guildName: O.name });
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
