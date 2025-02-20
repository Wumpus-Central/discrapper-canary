n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(13245),
    o = n(937889),
    l = n(703656),
    a = n(460181),
    s = n(974180),
    c = n(150097),
    u = n(358085),
    d = n(998502),
    p = n(145597),
    f = n(610394),
    h = n(516542),
    g = n(380736),
    _ = n(620954),
    m = n(987650),
    v = n(981631),
    O = n(388032);
function b(e, t, n, b) {
    var y;
    let { icon: E, title: x, body: I } = (0, c.Xi)(e, t, n),
        { trackView: S, trackClick: C } = (0, _.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null === (y = t.author) || void 0 === y ? void 0 : y.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: E,
        title: x,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : I,
        hint: (e) => (e ? null : (0, g.QR)((0, _.P)(), O.t.ykjOAA, O.NW.string(O.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(h.Z, {
                      id: n,
                      channel: e,
                      onSend: () => C('send')
                  })
                : null,
        onNotificationShow: () => {
            b && (0, a.GN)(s.Ay, s.yk), S();
        },
        onNotificationClick: () => {
            let n = (0, p.QF)();
            f.ZP.isInputLocked(n) ? (C('unlock'), r.Z.setInputLocked(!1, n)) : (C('jump'), (0, l.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && d.ZP.focus());
        },
        onDismissClick: () => {
            C('dismiss');
        }
    };
}
