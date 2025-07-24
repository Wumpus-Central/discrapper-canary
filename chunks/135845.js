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
    m = n(199902),
    f = n(914010),
    g = n(411198),
    _ = n(51144),
    h = n(358595),
    b = n(981631),
    E = n(245335),
    C = n(388032),
    x = n(273254);
function v(e) {
    let t,
        n,
        l,
        { invite: v, currentUserId: O, guild: y, message: j, onTransitionToInviteChannel: I, onAcceptInstantInvite: S } = e,
        T = null == y ? void 0 : y.id,
        N = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        P = (0, o.e7)([m.Z], () => (null != v && null != v.target_user ? m.Z.getActiveStreamForUser(v.target_user.id, T) : null), [v, T]),
        A = (0, o.e7)([m.Z], () => (null != v && null != v.target_user ? m.Z.getStreamForUser(v.target_user.id, T) : null), [v, T]),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != v && v.target_type === E.Iq.STREAM && null != v.target_user && null != P,
        R = null != v && null != A && null != v.channel && null != v.guild && A.channelId === v.channel.id && A.guildId === v.guild.id;
    a()(null != v, 'Invite cannot be null');
    let { target_type: L, target_user: D } = v;
    a()(L === E.Iq.STREAM && null != D, 'invalid streaming invite');
    let k = O === D.id,
        M = v.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = 'noop';
            (Z ? (I(), (e = 'transition')) : (S(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: v,
                        action: e,
                        inviter_id: j.author.id,
                        invite_message_id: j.id
                    },
                    w
                ));
        }, [v, j, w, Z, I, S]),
        F = null != y;
    if (null == y) {
        if (null == v.guild) return (0, r.jsx)(h.Z, {});
        y = (0, g.Qs)(v.guild);
    }
    let B = null != v.channel ? (0, p.jD)(v.channel) : null,
        G = _.ZP.getName(D);
    F && !R ? (l = k ? C.intl.string(C.t.oBLoZG) : C.intl.formatToPlainString(C.t['0QJmAw'], { name: G })) : ((t = C.intl.string(C.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), Z && ((t = C.intl.string(C.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = k ? C.intl.string(C.t['4hyaHh']) : C.intl.formatToPlainString(C.t.QmlLEh, { name: G })));
    let H = N === y.id && null != B ? (0, r.jsx)(d.Z.Channel, { channel: B }) : C.intl.formatToPlainString(C.t.u0vaDA, { guildName: y.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: C.intl.string(C.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: x.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: y,
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
