n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(13245),
    o = n(45114),
    l = n(937889),
    a = n(622733),
    s = n(864060),
    c = n(703656),
    u = n(358085),
    d = n(998502),
    p = n(145597),
    h = n(610394),
    f = n(516542),
    m = n(618373),
    g = n(620954),
    y = n(987650),
    O = n(981631),
    v = n(388032);
function b(e, t, n, b) {
    var _;
    let { icon: E, title: x, body: I } = (0, s.Xi)(e, t, n),
        { trackView: j, trackClick: C } = (0, g.R)(y.n0.TextChat, {
            notif_type: y.n0.TextChat,
            notif_user_id: null == (_ = t.author) ? void 0 : _.id,
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
                ? (0, l.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : I,
        hint: (e, t) => (e && !t ? null : (0, m.Q)((0, g.P)(), v.t.ykjOAA, v.intl.string(v.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (n, r, o) =>
            n && !o
                ? (0, i.jsx)(f.Z, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => C('send')
                  })
                : null,
        onNotificationShow: () => {
            b && (0, a.t)(t), j();
        },
        onNotificationClick: () => {
            let n = (0, p.getPID)();
            (0, o.In)(e.id, !0, !0, t.id, { section: O.jXE.OVERLAY }), h.default.isInputLocked(n) ? (C('unlock'), r.Z.setInputLocked(!1, n)) : (C('jump'), (0, c.uL)(O.Z5c.CHANNEL(e.guild_id, e.id, t.id)), u.isPlatformEmbedded && d.ZP.focus());
        },
        onDismissClick: () => {
            C('dismiss');
        }
    };
}
