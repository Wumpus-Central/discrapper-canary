n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(512722),
    l = n.n(r),
    a = n(442837),
    o = n(955415),
    s = n(131704),
    c = n(601964),
    d = n(199902),
    u = n(914010),
    m = n(358595),
    h = n(981631),
    f = n(245335),
    p = n(388032),
    _ = n(658412);
function g(e) {
    let t,
        n,
        r,
        { invite: g, currentUserId: E, guild: C, onTransitionToInviteChannel: I, onAcceptInstantInvite: x } = e,
        N = null == C ? void 0 : C.id,
        v = (0, a.e7)([u.Z], () => u.Z.getGuildId()),
        T = (0, a.e7)([d.Z], () => (null != g && null != g.target_user ? d.Z.getActiveStreamForUser(g.target_user.id, N) : null), [g, N]),
        S = (0, a.e7)([d.Z], () => (null != g && null != g.target_user ? d.Z.getStreamForUser(g.target_user.id, N) : null), [g, N]),
        A = null != g && g.target_type === f.Iq.STREAM && null != g.target_user && null != T,
        b = null != g && null != S && null != g.channel && null != g.guild && S.channelId === g.channel.id && S.guildId === g.guild.id;
    l()(null != g, 'Invite cannot be null');
    let { target_type: j, target_user: R } = g;
    l()(j === f.Iq.STREAM && null != R, 'invalid streaming invite');
    let Z = E === R.id,
        P = g.state === h.r2o.ACCEPTING,
        L = null != C;
    if (null == C) {
        if (null == g.guild) return (0, i.jsx)(m.Z, {});
        C = new c.ZP(g.guild);
    }
    let y = null != g.channel ? (0, s.jD)(g.channel) : null,
        O = A ? I : x;
    L && !b ? (r = Z ? p.intl.string(p.t.oBLoZG) : p.intl.formatToPlainString(p.t['0QJmAw'], { name: R.username })) : ((t = p.intl.string(p.t['I6JG4+'])), (n = o.Z.Button.Colors.GREEN), A && ((t = p.intl.string(p.t['Q1W99/'])), (n = o.Z.Button.Colors.PRIMARY)), (r = Z ? p.intl.string(p.t['4hyaHh']) : p.intl.formatToPlainString(p.t.QmlLEh, { name: R.username })));
    let M = v === C.id && null != y ? (0, i.jsx)(o.Z.Channel, { channel: y }) : p.intl.formatToPlainString(p.t.u0vaDA, { guildName: C.name });
    return (0, i.jsxs)(o.Z, {
        children: [
            (0, i.jsx)(o.Z.Header, { text: p.intl.string(p.t['wS+5WV']) }),
            (0, i.jsxs)(o.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: _.headerLine,
                        children: [
                            (0, i.jsx)(o.Z.Icon, {
                                guild: C,
                                onClick: L && b ? O : void 0
                            }),
                            (0, i.jsx)(o.Z.Info, {
                                title: r,
                                onClick: L && b ? O : void 0,
                                children: M
                            })
                        ]
                    }),
                    b
                        ? (0, i.jsx)(o.Z.Button, {
                              disabled: L && !b,
                              onClick: O,
                              submitting: P,
                              isDisabled: A && b,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
