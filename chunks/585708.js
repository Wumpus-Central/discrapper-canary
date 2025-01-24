i.d(e, {
    Z: function () {
        return v;
    }
});
var n = i(200651);
i(192379);
var l = i(13245),
    o = i(937889),
    r = i(703656),
    s = i(974180),
    a = i(150097),
    u = i(358085),
    d = i(557177),
    c = i(998502),
    h = i(145597),
    E = i(610394),
    p = i(516542),
    f = i(380736),
    S = i(620954),
    _ = i(987650),
    g = i(981631),
    m = i(388032);
function v(t, e, i, v) {
    var I;
    let { icon: Z, title: O, body: C } = (0, a.Xi)(t, e, i),
        { trackView: N, trackClick: y } = (0, S.R)(_.n0.TextChat, {
            notif_type: _.n0.TextChat,
            notif_user_id: null === (I = e.author) || void 0 === I ? void 0 : I.id,
            message_id: e.id,
            message_type: e.type,
            guild_id: t.guild_id,
            channel_id: t.id,
            channel_type: t.type
        });
    return {
        icon: Z,
        title: O,
        body:
            e.content.length > 0
                ? (0, o.ZP)(e, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : C,
        hint: (t) => (t ? null : (0, f.QR)((0, S.P)(), m.t.ykjOAA, m.intl.string(m.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (e, i) =>
            e
                ? (0, n.jsx)(p.Z, {
                      id: i,
                      channel: t,
                      onSend: () => y('send')
                  })
                : null,
        onNotificationShow: () => {
            v && (0, d.GN)(s.Ay, s.yk), N();
        },
        onNotificationClick: () => {
            let i = (0, h.QF)();
            E.ZP.isInputLocked(i) ? (y('unlock'), l.Z.setInputLocked(!1, i)) : (y('jump'), (0, r.uL)(g.Z5c.CHANNEL(t.guild_id, t.id, e.id)), u.isPlatformEmbedded && c.ZP.focus());
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
