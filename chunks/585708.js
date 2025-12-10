n.d(t, { Z: () => _ });
var i = n(54381);
n(473749);
var r = n(13245),
    l = n(45114),
    o = n(937889),
    a = n(864060),
    s = n(703656),
    c = n(460181),
    u = n(974180),
    d = n(358085),
    h = n(998502),
    p = n(624864),
    f = n(610394),
    m = n(322155),
    g = n(516542),
    y = n(618373),
    O = n(620954),
    v = n(987650),
    E = n(981631),
    b = n(388032);
function _(e, t, n, _) {
    var S;
    if (p.Z.isNotificationDisabled(v.n0.TextChat)) return (0, c.GN)(u.Ay, u.yk), null;
    let { icon: x, title: I, body: j } = (0, a.Xi)(e, t, n),
        { trackView: C, trackClick: Z } = (0, O.Rg)(v.n0.TextChat, {
            notif_type: v.n0.TextChat,
            notif_user_id: null == (S = t.author) ? void 0 : S.id,
            message_id: t.id,
            message_type: t.type,
            guild_id: e.guild_id,
            channel_id: e.id,
            channel_type: e.type,
        });
    return {
        icon: x,
        title: I,
        body:
            t.content.length > 0
                ? (0, o.ZP)(t, {
                      noStyleAndInteraction: !0,
                      formatInline: !0,
                      hideSimpleEmbedContent: !1,
                  }).content
                : j,
        hint: (e, t) => (e && !t ? null : (0, y.QR)((0, O.Pb)(), b.t.ykjOAJ, b.intl.string(b.t.jZkzVJ))),
        maxBodyLines: 2,
        renderFooter: (n, r, l) =>
            n && !l
                ? (0, i.jsx)(g.Z, {
                      id: r,
                      replyToMessageId: t.id,
                      channel: e,
                      onSend: () => Z("send"),
                  })
                : null,
        onNotificationShow: () => {
            _ && (0, c.GN)(u.Ay, u.yk), C();
        },
        onNotificationClick: () => {
            let n = f.Z.getTargetPID();
            (0, l.ack)(
                e.id,
                {
                    section: E.jXE.OVERLAY,
                    object: E.qAy.ACK_TEXT_CHAT_NOTIFICATION,
                    objectType: E.AnalyticsObjectTypes.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
                t.id,
            ),
                m.Z.isInputLocked(n)
                    ? (Z("unlock"), r.Z.setInputLocked(!1, n))
                    : (Z("jump"),
                      (0, s.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                      d.isPlatformEmbedded && h.ZP.focus());
        },
        onDismissClick: () => {
            Z("dismiss");
        },
    };
}
