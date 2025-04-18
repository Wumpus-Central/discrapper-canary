n.d(t, { Z: () => v });
var r = n(200651),
    i = n(192379),
    a = n(512722),
    l = n.n(a),
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
        a,
        { invite: v, currentUserId: E, guild: O, inviterId: N, onTransitionToInviteChannel: j, onAcceptInstantInvite: C } = e,
        S = null == O ? void 0 : O.id,
        I = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        T = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getActiveStreamForUser(v.target_user.id, S) : null), [v, S]),
        P = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getStreamForUser(v.target_user.id, S) : null), [v, S]),
        { analyticsLocations: A } = (0, u.ZP)(c.Z.INVITE_EMBED),
        w = null != v && v.target_type === b.Iq.STREAM && null != v.target_user && null != T,
        Z = null != v && null != P && null != v.channel && null != v.guild && P.channelId === v.channel.id && P.guildId === v.guild.id;
    l()(null != v, 'Invite cannot be null');
    let { target_type: R, target_user: k } = v;
    l()(R === b.Iq.STREAM && null != k, 'invalid streaming invite');
    let D = E === k.id,
        L = v.state === _.r2o.ACCEPTING,
        M = i.useCallback(() => {
            let e = 'noop';
            w ? (j(), (e = 'transition')) : (C(), (e = 'accept')),
                (0, s.r$)(
                    {
                        invite: v,
                        action: e,
                        inviter_id: N
                    },
                    A
                );
        }, [v, N, A, w, j, C]),
        W = null != O;
    if (null == O) {
        if (null == v.guild) return (0, r.jsx)(g.Z, {});
        O = new m.ZP(v.guild);
    }
    let U = null != v.channel ? (0, p.jD)(v.channel) : null;
    W && !Z ? (a = D ? x.NW.string(x.t.oBLoZG) : x.NW.formatToPlainString(x.t['0QJmAw'], { name: k.username })) : ((t = x.NW.string(x.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), w && ((t = x.NW.string(x.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (a = D ? x.NW.string(x.t['4hyaHh']) : x.NW.formatToPlainString(x.t.QmlLEh, { name: k.username })));
    let F = I === O.id && null != U ? (0, r.jsx)(d.Z.Channel, { channel: U }) : x.NW.formatToPlainString(x.t.u0vaDA, { guildName: O.name });
    return (0, r.jsxs)(d.Z, {
        children: [
            (0, r.jsx)(d.Z.Header, { text: x.NW.string(x.t['wS+5WV']) }),
            (0, r.jsxs)(d.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: y.headerLine,
                        children: [
                            (0, r.jsx)(d.Z.Icon, {
                                guild: O,
                                onClick: W && Z ? M : void 0
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: a,
                                onClick: W && Z ? M : void 0,
                                children: F
                            })
                        ]
                    }),
                    Z
                        ? (0, r.jsx)(d.Z.Button, {
                              disabled: W && !Z,
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
