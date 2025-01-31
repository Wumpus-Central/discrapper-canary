n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var l = n(512722),
    a = n.n(l),
    r = n(442837),
    s = n(955415),
    o = n(131704),
    c = n(601964),
    d = n(199902),
    u = n(914010),
    m = n(358595),
    h = n(981631),
    _ = n(245335),
    p = n(388032),
    g = n(658412);
function f(e) {
    let t,
        n,
        l,
        { invite: f, currentUserId: x, guild: E, onTransitionToInviteChannel: C, onAcceptInstantInvite: v } = e,
        I = null == E ? void 0 : E.id,
        N = (0, r.e7)([u.Z], () => u.Z.getGuildId()),
        S = (0, r.e7)([d.Z], () => (null != f && null != f.target_user ? d.Z.getActiveStreamForUser(f.target_user.id, I) : null), [f, I]),
        T = (0, r.e7)([d.Z], () => (null != f && null != f.target_user ? d.Z.getStreamForUser(f.target_user.id, I) : null), [f, I]),
        b = null != f && f.target_type === _.Iq.STREAM && null != f.target_user && null != S,
        A = null != f && null != T && null != f.channel && null != f.guild && T.channelId === f.channel.id && T.guildId === f.guild.id;
    a()(null != f, 'Invite cannot be null');
    let { target_type: j, target_user: y } = f;
    a()(j === _.Iq.STREAM && null != y, 'invalid streaming invite');
    let Z = x === y.id,
        R = f.state === h.r2o.ACCEPTING,
        L = null != E;
    if (null == E) {
        if (null == f.guild) return (0, i.jsx)(m.Z, {});
        E = new c.ZP(f.guild);
    }
    let P = null != f.channel ? (0, o.jD)(f.channel) : null,
        k = b ? C : v;
    L && !A ? (l = Z ? p.intl.string(p.t.oBLoZG) : p.intl.formatToPlainString(p.t['0QJmAw'], { name: y.username })) : ((t = p.intl.string(p.t['I6JG4+'])), (n = s.Z.Button.Colors.GREEN), b && ((t = p.intl.string(p.t['Q1W99/'])), (n = s.Z.Button.Colors.PRIMARY)), (l = Z ? p.intl.string(p.t['4hyaHh']) : p.intl.formatToPlainString(p.t.QmlLEh, { name: y.username })));
    let M = N === E.id && null != P ? (0, i.jsx)(s.Z.Channel, { channel: P }) : p.intl.formatToPlainString(p.t.u0vaDA, { guildName: E.name });
    return (0, i.jsxs)(s.Z, {
        children: [
            (0, i.jsx)(s.Z.Header, { text: p.intl.string(p.t['wS+5WV']) }),
            (0, i.jsxs)(s.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.headerLine,
                        children: [
                            (0, i.jsx)(s.Z.Icon, {
                                guild: E,
                                onClick: L && A ? k : void 0
                            }),
                            (0, i.jsx)(s.Z.Info, {
                                title: l,
                                onClick: L && A ? k : void 0,
                                children: M
                            })
                        ]
                    }),
                    A
                        ? (0, i.jsx)(s.Z.Button, {
                              disabled: L && !A,
                              onClick: k,
                              submitting: R,
                              isDisabled: b && A,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
