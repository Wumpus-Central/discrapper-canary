n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(13245),
    o = n(937889),
    l = n(703656),
    a = n(974180),
    s = n(150097),
    d = n(358085),
    c = n(557177),
    u = n(998502),
    h = n(145597),
    _ = n(610394),
    p = n(516542),
    f = n(380736),
    g = n(620954),
    m = n(987650),
    v = n(981631),
    x = n(388032);
function E(e, t, n, E) {
    var C;
    let { icon: Z, title: S, body: I } = (0, s.Xi)(e, t, n),
        { trackView: y, trackClick: b } = (0, g.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null === (C = t.author) || void 0 === C ? void 0 : C.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: Z,
        title: S,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : I,
        hint: (e) => (e ? null : (0, f.QR)((0, g.P)(), x.t.ykjOAA, x.intl.string(x.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(p.Z, {
                      id: n,
                      channel: e,
                      onSend: () => b('send')
                  })
                : null,
        onNotificationShow: () => {
            E && (0, c.GN)(a.Ay, a.yk), y();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            _.ZP.isInputLocked(n) ? (b('unlock'), r.Z.setInputLocked(!1, n)) : (b('jump'), (0, l.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && u.ZP.focus());
        },
        onDismissClick: () => {
            b('dismiss');
        }
    };
}
