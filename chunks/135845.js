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
        { invite: v, currentUserId: E, guild: O, onTransitionToInviteChannel: N, onAcceptInstantInvite: j } = e,
        C = null == O ? void 0 : O.id,
        I = (0, o.e7)([h.Z], () => h.Z.getGuildId()),
        S = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getActiveStreamForUser(v.target_user.id, C) : null), [v, C]),
        T = (0, o.e7)([f.Z], () => (null != v && null != v.target_user ? f.Z.getStreamForUser(v.target_user.id, C) : null), [v, C]),
        { analyticsLocations: P } = (0, u.ZP)(c.Z.INVITE_EMBED),
        A = null != v && v.target_type === b.Iq.STREAM && null != v.target_user && null != S,
        w = null != v && null != T && null != v.channel && null != v.guild && T.channelId === v.channel.id && T.guildId === v.guild.id;
    l()(null != v, 'Invite cannot be null');
    let { target_type: Z, target_user: k } = v;
    l()(Z === b.Iq.STREAM && null != k, 'invalid streaming invite');
    let R = E === k.id,
        D = v.state === _.r2o.ACCEPTING,
        L = i.useCallback(() => {
            let e = 'noop';
            A ? (N(), (e = 'transition')) : (j(), (e = 'accept')), (0, s.r$)(v, e, P);
        }, [v, P, A, N, j]),
        M = null != O;
    if (null == O) {
        if (null == v.guild) return (0, r.jsx)(g.Z, {});
        O = new m.ZP(v.guild);
    }
    let W = null != v.channel ? (0, p.jD)(v.channel) : null;
    M && !w ? (a = R ? x.NW.string(x.t.oBLoZG) : x.NW.formatToPlainString(x.t['0QJmAw'], { name: k.username })) : ((t = x.NW.string(x.t['I6JG4+'])), (n = d.Z.Button.Colors.GREEN), A && ((t = x.NW.string(x.t['Q1W99/'])), (n = d.Z.Button.Colors.PRIMARY)), (a = R ? x.NW.string(x.t['4hyaHh']) : x.NW.formatToPlainString(x.t.QmlLEh, { name: k.username })));
    let U = I === O.id && null != W ? (0, r.jsx)(d.Z.Channel, { channel: W }) : x.NW.formatToPlainString(x.t.u0vaDA, { guildName: O.name });
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
                                onClick: M && w ? L : void 0
                            }),
                            (0, r.jsx)(d.Z.Info, {
                                title: a,
                                onClick: M && w ? L : void 0,
                                children: U
                            })
                        ]
                    }),
                    w
                        ? (0, r.jsx)(d.Z.Button, {
                              disabled: M && !w,
                              onClick: L,
                              submitting: D,
                              isDisabled: A && w,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
