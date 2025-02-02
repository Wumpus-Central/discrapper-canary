n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var l = n(13245),
    r = n(937889),
    o = n(703656),
    a = n(460181),
    s = n(974180),
    d = n(150097),
    c = n(358085),
    u = n(998502),
    h = n(145597),
    _ = n(610394),
    p = n(516542),
    g = n(380736),
    f = n(620954),
    m = n(987650),
    v = n(981631),
    x = n(388032);
function E(e, t, n, E) {
    var Z;
    let { icon: C, title: I, body: S } = (0, d.Xi)(e, t, n),
        { trackView: b, trackClick: y } = (0, f.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null === (Z = t.author) || void 0 === Z ? void 0 : Z.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: C,
        title: I,
        body:
            t.content.length > 0
                ? (0, r.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : S,
        hint: (e) => (e ? null : (0, g.QR)((0, f.P)(), x.t.ykjOAA, x.intl.string(x.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (t, n) =>
            t
                ? (0, i.jsx)(p.Z, {
                      id: n,
                      channel: e,
                      onSend: () => y('send')
                  })
                : null,
        onNotificationShow: () => {
            E && (0, a.GN)(s.Ay, s.yk), b();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            _.ZP.isInputLocked(n) ? (y('unlock'), l.Z.setInputLocked(!1, n)) : (y('jump'), (0, o.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), c.isPlatformEmbedded && u.ZP.focus());
        },
        onDismissClick: () => {
            y('dismiss');
        }
    };
}
