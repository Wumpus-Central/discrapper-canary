n.d(t, { Z: () => _ });
var i = n(200651);
n(192379);
var r = n(13245),
    o = n(45114),
    l = n(937889),
    a = n(864060),
    s = n(703656),
    c = n(460181),
    u = n(974180),
    d = n(358085),
    p = n(998502),
    h = n(145597),
    f = n(610394),
    m = n(516542),
    g = n(618373),
    y = n(620954),
    O = n(987650),
    v = n(981631),
    b = n(388032);
function _(e, t, n, _) {
    var E;
    let { icon: x, title: I, body: j } = (0, a.Xi)(e, t, n),
        { trackView: C, trackClick: S } = (0, y.R)(O.n0.TextChat, {
            notif_type: O.n0.TextChat,
            notif_user_id: null == (E = t.author) ? void 0 : E.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: x,
        title: I,
        body:
            t.content.length > 0
                ? (0, l.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : j,
        hint: (e, t) => (e && !t ? null : (0, g.Q)((0, y.P)(), b.t.ykjOAA, b.NW.string(b.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (n, r, o) =>
            n && !o
                ? (0, i.jsx)(m.Z, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => S('send')
                  })
                : null,
        onNotificationShow: () => {
            _ && (0, c.GN)(u.Ay, u.yk), C();
        },
        onNotificationClick: () => {
            let n = (0, h.getPID)();
            (0, o.In)(e.id, !0, !0, t.id, { section: v.jXE.OVERLAY }), f.ZP.isInputLocked(n) ? (S('unlock'), r.Z.setInputLocked(!1, n)) : (S('jump'), (0, s.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && p.ZP.focus());
        },
        onDismissClick: () => {
            S('dismiss');
        }
    };
}
