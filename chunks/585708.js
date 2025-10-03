n.d(t, { Z: () => b });
var i = n(951288);
n(647438);
var r = n(13245),
    l = n(45114),
    o = n(937889),
    a = n(864060),
    s = n(703656),
    u = n(460181),
    c = n(974180),
    d = n(358085),
    h = n(998502),
    p = n(145597),
    f = n(624864),
    m = n(610394),
    g = n(516542),
    y = n(618373),
    O = n(620954),
    v = n(987650),
    E = n(981631),
    S = n(388032);
function b(e, t, n, b) {
    var x;
    if (f.Z.isNotificationDisabled(v.n0.TextChat)) return (0, u.GN)(c.Ay, c.yk), null;
    let { icon: j, title: I, body: C } = (0, a.Xi)(e, t, n),
        { trackView: Z, trackClick: N } = (0, O.R)(v.n0.TextChat, {
            notif_type: v.n0.TextChat,
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
        hint: (e, t) => (e && !t ? null : (0, y.Q)((0, O.P)(), S.t.ykjOAA, S.intl.string(S.t.jZkzVF))),
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
            b && (0, u.GN)(c.Ay, c.yk), Z();
        },
        onNotificationClick: () => {
            let n = (0, p.getPID)();
            (0, l.In)(
                e.id,
                {
                    section: E.jXE.OVERLAY,
                    object: E.qAy.ACK_TEXT_CHAT_NOTIFICATION,
                    objectType: E.Qqv.ACK_SEMI_AUTOMATIC,
                },
                !0,
                !0,
                t.id,
            ),
                m.ZP.isInputLocked(n)
                    ? (N("unlock"), r.Z.setInputLocked(!1, n))
                    : (N("jump"),
                      (0, s.uL)(E.Z5c.CHANNEL(e.guild_id, e.id, t.id)),
                      d.isPlatformEmbedded && h.ZP.focus());
        },
        onDismissClick: () => {
            N("dismiss");
        },
    };
}
