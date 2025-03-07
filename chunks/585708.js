n.d(t, { Z: () => b });
var i = n(200651);
n(192379);
var r = n(13245),
    l = n(45114),
    o = n(937889),
    a = n(703656),
    s = n(460181),
    u = n(974180),
    c = n(150097),
    d = n(358085),
    p = n(998502),
    h = n(145597),
    f = n(610394),
    m = n(516542),
    g = n(618373),
    O = n(620954),
    v = n(987650),
    y = n(981631),
    E = n(388032);
function b(e, t, n, b) {
    var j;
    let { icon: x, title: I, body: S } = (0, c.Xi)(e, t, n),
        { trackView: C, trackClick: N } = (0, O.R)(v.n0.TextChat, {
            notif_type: v.n0.TextChat,
            notif_user_id: null === (j = t.author) || void 0 === j ? void 0 : j.id,
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
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1
                  }).content
                : S,
        hint: (e, t) => (e && !t ? null : (0, g.Q)((0, O.P)(), E.t.ykjOAA, E.NW.string(E.t.jZkzVF))),
        maxBodyLines: 2,
        renderFooter: (n, r, l) =>
            n && !l
                ? (0, i.jsx)(m.Z, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => N('send')
                  })
                : null,
        onNotificationShow: () => {
            b && (0, s.GN)(u.Ay, u.yk), C();
        },
        onNotificationClick: () => {
            let n = (0, h.getPID)();
            (0, l.In)(e.id, !0, !0, t.id, { section: y.jXE.OVERLAY }), f.ZP.isInputLocked(n) ? (N('unlock'), r.Z.setInputLocked(!1, n)) : (N('jump'), (0, a.uL)(y.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && p.ZP.focus());
        },
        onDismissClick: () => {
            N('dismiss');
        }
    };
}
