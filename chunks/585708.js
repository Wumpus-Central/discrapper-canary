i.d(t, {
    Z: function () {
        return _;
    }
});
var n = i(200651);
i(192379);
var l = i(13245),
    o = i(937889),
    s = i(703656),
    r = i(974180),
    a = i(150097),
    u = i(358085),
    d = i(557177),
    c = i(998502),
    h = i(145597),
    f = i(610394),
    p = i(516542),
    E = i(380736),
    m = i(620954),
    v = i(987650),
    g = i(981631),
    S = i(388032);
function _(e, t, i, _) {
    var C;
    let { icon: Z, title: O, body: I } = (0, a.Xi)(e, t, i),
        { trackView: N, trackClick: y } = (0, m.R)(v.n0.TextChat, {
            notif_type: v.n0.TextChat,
            notif_user_id: null === (C = t.author) || void 0 === C ? void 0 : C.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: Z,
        title: O,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : I,
        hint: (e) => (e ? null : (0, E.Q)((0, m.P)(), S.t.ykjOAA, S.intl.string(S.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (t, i) =>
            t
                ? (0, n.jsx)(p.Z, {
                      id: i,
                      channel: e,
                      onSend: () => y('send')
                  })
                : null,
        onNotificationShow: () => {
            _ && (0, d.GN)(r.Ay, r.yk), N();
        },
        onNotificationClick: () => {
            let i = (0, h.QF)();
            f.ZP.isInputLocked(i) ? (y('unlock'), l.Z.setInputLocked(!1, i)) : (y('jump'), (0, s.uL)(g.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && c.ZP.focus());
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
