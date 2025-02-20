n.d(t, { Z: () => _ });
var r = n(200651);
n(192379);
var i = n(512722),
    a = n.n(i),
    o = n(442837),
    l = n(955415),
    s = n(131704),
    c = n(601964),
    d = n(199902),
    u = n(914010),
    p = n(358595),
    m = n(981631),
    f = n(245335),
    h = n(388032),
    g = n(217480);
function _(e) {
    let t,
        n,
        i,
        { invite: _, currentUserId: b, guild: v, onTransitionToInviteChannel: y, onAcceptInstantInvite: x } = e,
        O = null == v ? void 0 : v.id,
        E = (0, o.e7)([u.Z], () => u.Z.getGuildId()),
        j = (0, o.e7)([d.Z], () => (null != _ && null != _.target_user ? d.Z.getActiveStreamForUser(_.target_user.id, O) : null), [_, O]),
        N = (0, o.e7)([d.Z], () => (null != _ && null != _.target_user ? d.Z.getStreamForUser(_.target_user.id, O) : null), [_, O]),
        C = null != _ && _.target_type === f.Iq.STREAM && null != _.target_user && null != j,
        I = null != _ && null != N && null != _.channel && null != _.guild && N.channelId === _.channel.id && N.guildId === _.guild.id;
    a()(null != _, 'Invite cannot be null');
    let { target_type: S, target_user: P } = _;
    a()(S === f.Iq.STREAM && null != P, 'invalid streaming invite');
    let T = b === P.id,
        A = _.state === m.r2o.ACCEPTING,
        w = null != v;
    if (null == v) {
        if (null == _.guild) return (0, r.jsx)(p.Z, {});
        v = new c.ZP(_.guild);
    }
    let Z = null != _.channel ? (0, s.jD)(_.channel) : null,
        k = C ? y : x;
    w && !I ? (i = T ? h.NW.string(h.t.oBLoZG) : h.NW.formatToPlainString(h.t['0QJmAw'], { name: P.username })) : ((t = h.NW.string(h.t['I6JG4+'])), (n = l.Z.Button.Colors.GREEN), C && ((t = h.NW.string(h.t['Q1W99/'])), (n = l.Z.Button.Colors.PRIMARY)), (i = T ? h.NW.string(h.t['4hyaHh']) : h.NW.formatToPlainString(h.t.QmlLEh, { name: P.username })));
    let R = E === v.id && null != Z ? (0, r.jsx)(l.Z.Channel, { channel: Z }) : h.NW.formatToPlainString(h.t.u0vaDA, { guildName: v.name });
    return (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsx)(l.Z.Header, { text: h.NW.string(h.t['wS+5WV']) }),
            (0, r.jsxs)(l.Z.Body, {
                children: [
                    (0, r.jsxs)('div', {
                        className: g.headerLine,
                        children: [
                            (0, r.jsx)(l.Z.Icon, {
                                guild: v,
                                onClick: w && I ? k : void 0
                            }),
                            (0, r.jsx)(l.Z.Info, {
                                title: i,
                                onClick: w && I ? k : void 0,
                                children: R
                            })
                        ]
                    }),
                    I
                        ? (0, r.jsx)(l.Z.Button, {
                              disabled: w && !I,
                              onClick: k,
                              submitting: A,
                              isDisabled: C && I,
                              color: n,
                              children: t
                          })
                        : null
                ]
            })
        ]
    });
}
