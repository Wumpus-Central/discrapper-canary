n.d(t, { Z: () => E });
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
    f = n(145597),
    h = n(610394),
    m = n(516542),
    g = n(618373),
    y = n(620954),
    O = n(987650),
    v = n(981631),
    b = n(388032);
function E(e, t, n, E) {
    var _;
    let { icon: I, title: x, body: j } = (0, a.Xi)(e, t, n),
        { trackView: S, trackClick: C } = (0, y.R)(O.n0.TextChat, {
            notif_type: O.n0.TextChat,
            notif_user_id: null == (_ = t.author) ? void 0 : _.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type
        });
    return {
        icon: I,
        title: x,
        body:
            t.content.length > 0
                ? (0, l.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : j,
        hint: (e, t) => (e && !t ? null : (0, g.Q)((0, y.P)(), b.t.ykjOAA, b.intl.string(b.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (n, r, o) =>
            n && !o
                ? (0, i.jsx)(m.Z, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => C('send')
                  })
                : null,
        onNotificationShow: () => {
            E && (0, c.GN)(u.Ay, u.yk), S();
        },
        onNotificationClick: () => {
            let n = (0, f.getPID)();
            (0, o.In)(e.id, !0, !0, t.id, { section: v.jXE.OVERLAY }), h.ZP.isInputLocked(n) ? (C('unlock'), r.Z.setInputLocked(!1, n)) : (C('jump'), (0, s.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && p.ZP.focus());
        },
        onDismissClick: () => {
            C('dismiss');
        }
    };
}
