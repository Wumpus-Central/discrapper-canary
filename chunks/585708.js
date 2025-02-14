n.d(t, { Z: () => x });
var i = n(200651);
n(192379);
var l = n(13245),
    r = n(937889),
    o = n(703656),
    a = n(460181),
    s = n(974180),
    d = n(150097),
    u = n(358085),
    c = n(998502),
    h = n(145597),
    _ = n(610394),
    p = n(516542),
    f = n(380736),
    m = n(620954),
    g = n(987650),
    v = n(981631),
    E = n(388032);
function x(e, t, n, x) {
    var I;
    let { icon: C, title: S, body: Z } = (0, d.Xi)(e, t, n),
        { trackView: y, trackClick: O } = (0, m.R)(g.n0.TextChat, {
            notif_type: g.n0.TextChat,
            notif_user_id: null === (I = t.author) || void 0 === I ? void 0 : I.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: C,
        title: S,
        body:
            t.content.length > 0
                ? (0, r.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : Z,
        hint: (e) => (e ? null : (0, f.QR)((0, m.P)(), E.t.ykjOAA, E.intl.string(E.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(p.Z, {
                      id: n,
                      channel: e,
                      onSend: () => O('send')
                  })
                : null,
        onNotificationShow: () => {
            x && (0, a.GN)(s.Ay, s.yk), y();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            _.ZP.isInputLocked(n) ? (O('unlock'), l.Z.setInputLocked(!1, n)) : (O('jump'), (0, o.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && c.ZP.focus());
        },
        onDismissClick: () => {
            O('dismiss');
        }
    };
}
