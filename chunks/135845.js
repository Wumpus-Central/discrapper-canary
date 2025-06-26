n.d(t, { Z: () => v });
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
    g = n(51144),
    _ = n(358595),
    b = n(981631),
    x = n(245335),
    y = n(388032),
    E = n(273254);
function v(e) {
    let t,
        n,
        l,
        { invite: v, currentUserId: C, guild: O, message: j, onTransitionToInviteChannel: S, onAcceptInstantInvite: I } = e,
        T = null == O ? void 0 : O.id,
        N = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        P = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getActiveStreamForUser(v.target_user.id, T) : null), [v, T]),
        A = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getStreamForUser(v.target_user.id, T) : null), [v, T]),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != v && v.target_type === x.Iq.STREAM && null != v.target_user && null != P,
        R = null != v && null != A && null != v.channel && null != v.guild && A.channelId === v.channel.id && A.guildId === v.guild.id;
    a()(null != v, 'Invite cannot be null');
    let { target_type: k, target_user: L } = v;
    a()(k === x.Iq.STREAM && null != L, 'invalid streaming invite');
    let D = C === L.id,
        M = v.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = 'noop';
            Z ? (S(), (e = 'transition')) : (I(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: v,
                        action: e,
                        inviter_id: j.author.id,
                        invite_message_id: j.id
                    },
                    w
                );
        }, [v, j, w, Z, S, I]),
        F = null != O;
    if (null == O) {
        if (null == v.guild) return (0, r.jsx)(_.Z, {});
        O = new m.ZP(v.guild);
    }
    let B = null != v.channel ? (0, p.jD)(v.channel) : null,
        G = g.ZP.getName(L);
    F && !R ? (l = D ? y.intl.string(y.t.oBLoZG) : y.intl.formatToPlainString(y.t['0QJmAw'], { name: G })) : ((t = y.intl.string(y.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), Z && ((t = y.intl.string(y.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = D ? y.intl.string(y.t['4hyaHh']) : y.intl.formatToPlainString(y.t.QmlLEh, { name: G })));
    let H = N === O.id && null != B ? (0, r.jsx)(d.Z.Channel, { channel: B }) : y.intl.formatToPlainString(y.t.u0vaDA, { guildName: O.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: y.intl.string(y.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: E.headerLine,
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
