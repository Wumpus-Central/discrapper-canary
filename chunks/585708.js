n.d(t, { Z: () => I });
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
    f = n(380736),
    g = n(620954),
    m = n(987650),
    v = n(981631),
    E = n(388032);
function I(e, t, n, I) {
    var x;
    let { icon: C, title: S, body: Z } = (0, d.Xi)(e, t, n),
        { trackView: y, trackClick: b } = (0, g.R)(m.n0.TextChat, {
            notif_type: m.n0.TextChat,
            notif_user_id: null === (x = t.author) || void 0 === x ? void 0 : x.id,
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
        hint: (e) => (e ? null : (0, f.QR)((0, g.P)(), E.t.ykjOAA, E.intl.string(E.t.jZkzVF))),
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
            I && (0, a.GN)(s.Ay, s.yk), y();
        },
        onNotificationClick: () => {
            let n = (0, h.QF)();
            _.ZP.isInputLocked(n) ? (b('unlock'), l.Z.setInputLocked(!1, n)) : (b('jump'), (0, o.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), c.isPlatformEmbedded && u.ZP.focus());
        },
        onDismissClick: () => {
            b('dismiss');
        }
    };
}
