n.d(t, { Z: () => S });
var i = n(54381);
n(473749);
var r = n(13245),
    l = n(45114),
    o = n(937889),
    a = n(864060),
    s = n(703656),
    u = n(460181),
    c = n(974180),
    d = n(358085),
    h = n(998502),
    p = n(624864),
    f = n(610394),
    m = n(322155),
    g = n(516542),
    O = n(618373),
    y = n(620954),
    E = n(987650),
    v = n(981631),
    b = n(388032);
function S(e, t, n, S) {
    var x;
    if (p.Z.isNotificationDisabled(E.n0.TextChat)) return (0, u.GN)(c.Ay, c.yk), null;
    let { icon: j, title: I, body: C } = (0, a.Xi)(e, t, n),
        { trackView: Z, trackClick: N } = (0, y.Rg)(E.n0.TextChat, {
            notif_type: E.n0.TextChat,
            notif_user_id: null == (x = t.author) ? void 0 : x.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: j,
        title: I,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1,
                  }).content
                : C,
        hint: (e, t) => (e && !t ? null : (0, O.QR)((0, y.Pb)(), b.t.ykjOAJ, b.intl.string(b.t.jZkzVJ))),
        maxBodyLines: 2,
        renderFooter: (n, r, l) =>
            n && !l
                ? (0, i.jsx)(g.Z, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => N("send"),
                  })
                : null,
        onNotificationShow: () => {
            S && (0, u.GN)(c.Ay, c.yk), Z();
        },
        onNotificationClick: () => {
            let n = f.Z.getTargetPID();
            (0, l.ack)(
                e.id,
                {
                    section: v.jXE.OVERLAY,
                    object: v.qAy.ACK_TEXT_CHAT_NOTIFICATION,
                    objectType: v.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
                t.id,
            ),
                m.Z.isInputLocked(n)
                    ? (N("unlock"), r.Z.setInputLocked(!1, n))
                    : (N("jump"),
                      (0, s.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                      d.isPlatformEmbedded && h.ZP.focus());
        },
        onDismissClick: () => {
            N("dismiss");
        },
    };
}
