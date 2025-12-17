n.d(t, { Z: () => S });
var i = n(54381);
n(473749);
var r = n(13245),
    a = n(45114),
    l = n(937889),
    o = n(864060),
    s = n(703656),
    c = n(460181),
    u = n(974180),
    d = n(358085),
    f = n(998502),
    h = n(624864),
    p = n(610394),
    m = n(322155),
    g = n(516542),
    b = n(618373),
    y = n(620954),
    O = n(987650),
    v = n(981631),
    E = n(388032);
function S(e, t, n, S) {
    var x;
    if (h.Z.isNotificationDisabled(O.n0.TextChat)) return (0, c.GN)(u.Ay, u.yk), null;
    let { icon: I, title: C, body: j } = (0, o.Xi)(e, t, n),
        { trackView: _, trackClick: Z } = (0, y.Rg)(O.n0.TextChat, {
            notif_type: O.n0.TextChat,
            notif_user_id: null == (x = t.author) ? void 0 : x.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: I,
        title: C,
        body:
            t.content.length > 0
                ? (0, l.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1,
                  }).content
                : j,
        hint: (e, t) => (e && !t ? null : (0, b.QR)((0, y.Pb)(), E.t.ykjOAJ, E.intl.string(E.t.jZkzVJ))),
        maxBodyLines: 2,
        renderFooter: (n, r, a) =>
            n && !a
                ? (0, i.jsx)(g.Z, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => Z("send"),
                  })
                : null,
        onNotificationShow: () => {
            S && (0, c.GN)(u.Ay, u.yk), _();
        },
        onNotificationClick: () => {
            let n = p.Z.getTargetPID();
            (0, a.ack)(
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
                    ? (Z("unlock"), r.Z.setInputLocked(!1, n))
                    : (Z("jump"),
                      (0, s.uL)(v.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                      d.isPlatformEmbedded && f.ZP.focus());
        },
        onDismissClick: () => {
            Z("dismiss");
        },
    };
}
