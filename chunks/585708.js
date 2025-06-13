n.d(t, { Z: () => E });
var i = n(255367);
n(73800);
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
function E(e, t, n, E) {
    var _;
    let { icon: x, title: I, body: S } = (0, a.Xi)(e, t, n),
        { trackView: j, trackClick: C } = (0, y.R)(O.n0.TextChat, {
            notif_type: O.n0.TextChat,
            notif_user_id: null == (_ = t.author) ? void 0 : _.id,
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
                : S,
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
            E && (0, c.GN)(u.Ay, u.yk), j();
        },
        onNotificationClick: () => {
            let n = (0, h.getPID)();
            (0, o.In)(
                e.id,
                {
                    section: v.jXE.OVERLAY,
                    object: v.qAy.ACK_TEXT_CHAT_NOTIFICATION,
                    objectType: v.Qqv.ACK_SEMI_AUTOMATIC
                },
                !0,
                !0,
                t.id
            ),
                f.ZP.isInputLocked(n) ? (C('unlock'), r.Z.setInputLocked(!1, n)) : (C('jump'), (0, s.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)), d.isPlatformEmbedded && p.ZP.focus());
        },
        onDismissClick: () => {
            C('dismiss');
        }
    };
}
