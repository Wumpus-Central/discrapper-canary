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
    E = n(245335),
    x = n(388032),
    y = n(273254);
function v(e) {
    let t,
        n,
        l,
        { invite: v, currentUserId: O, guild: j, message: C, onTransitionToInviteChannel: S, onAcceptInstantInvite: I } = e,
        N = null == j ? void 0 : j.id,
        T = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        P = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getActiveStreamForUser(v.target_user.id, N) : null), [v, N]),
        A = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getStreamForUser(v.target_user.id, N) : null), [v, N]),
        { analyticsLocations: w } = (0, u.ZP)(c.Z.INVITE_EMBED),
        Z = null != v && v.target_type === E.Iq.STREAM && null != v.target_user && null != P,
        R = null != v && null != A && null != v.channel && null != v.guild && A.channelId === v.channel.id && A.guildId === v.guild.id;
    a()(null != v, 'Invite cannot be null');
    let { target_type: k, target_user: D } = v;
    a()(k === E.Iq.STREAM && null != D, 'invalid streaming invite');
    let L = O === D.id,
        M = v.state === b.r2o.ACCEPTING,
        U = i.useCallback(() => {
            let e = 'noop';
            Z ? (S(), (e = 'transition')) : (I(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: v,
                        action: e,
                        inviter_id: C.author.id,
                        invite_message_id: C.id
                    },
                    w
                );
        }, [v, C, w, Z, S, I]),
        F = null != j;
    if (null == j) {
        if (null == v.guild) return (0, r.jsx)(_.Z, {});
        j = new m.ZP(v.guild);
    }
    let B = null != v.channel ? (0, p.jD)(v.channel) : null,
        G = g.ZP.getName(D);
    F && !R ? (l = L ? x.intl.string(x.t.oBLoZG) : x.intl.formatToPlainString(x.t['0QJmAw'], { name: G })) : ((t = x.intl.string(x.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), Z && ((t = x.intl.string(x.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (l = L ? x.intl.string(x.t['4hyaHh']) : x.intl.formatToPlainString(x.t.QmlLEh, { name: G })));
    let H = T === j.id && null != B ? (0, r.jsx)(d.Z.Channel, { channel: B }) : x.intl.formatToPlainString(x.t.u0vaDA, { guildName: j.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: x.intl.string(x.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: y.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: j,
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
