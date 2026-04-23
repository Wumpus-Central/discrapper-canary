n.d(t, { A: () => E });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(477782),
    a = n(442433),
    d = n(734057),
    s = n(576705),
    o = n(1193),
    u = n(589051),
    c = n(145567),
    A = n(34307),
    g = n(652215),
    f = n(499214),
    b = n(985018);
function E(e, t) {
    let { hasChat: n } = (0, u.M8)("useOverlayTextChatToggleMenuItem"),
        E = "DM_USER" === e.kind ? e.userId : null,
        v = (0, i.bG)([d.A], () => (null != E ? (d.A.getDMFromUserId(E) ?? null) : null), [E]),
        h = "CHANNEL" === e.kind ? e.channel.id : v,
        x = (0, i.bG)([o.A], () => {
            if (null == h) return !1;
            let [e] = o.A.getSessionEntries();
            for (let t of e) if (t.channelId === h) return !0;
            return o.A.getSelectedChannelId() === h;
        }, [h]),
        I = "CHANNEL" === e.kind ? e.channel : null,
        m = (0, i.bG)(
            [s.A],
            () =>
                !!(null == I || I.isDM() || I.isMultiUserDM() || I.isPrivate()) ||
                s.A.can(g.xBc.READ_MESSAGE_HISTORY, I),
            [I],
        );
    return x && null != h
        ? (0, l.jsx)(r.Dr, {
              id: "close-chat",
              label: b.intl.string(f.default.ERApc4),
              action: () => {
                  (0, c.lu)({ channelId: h, widgetType: t, secondaryValue: "context_menu_close_chat" }), (0, a.Z_)();
              },
          })
        : n && m
          ? (0, l.jsx)(r.Dr, {
                id: "open-chat",
                label: b.intl.string(f.default.KWrMk5),
                action: () => {
                    switch (e.kind) {
                        case "CHANNEL":
                            (0, c.D$)({
                                target: {
                                    kind: c.bB.CHANNEL,
                                    channelId: e.channel.id,
                                    guildId: e.guildId,
                                    messageId: null,
                                },
                                source: A.B.MANUAL,
                                widgetType: t,
                            });
                            break;
                        case "DM_USER":
                            if (null != e.onOpenOverride) {
                                try {
                                    e.onOpenOverride(e.userId);
                                } finally {
                                    (0, a.Z_)();
                                }
                                return;
                            }
                            (async () => {
                                try {
                                    await (0, c.D$)({
                                        target: {
                                            kind: c.bB.DM_USER,
                                            userId: e.userId,
                                            messageId: null,
                                            existingChannelId: v,
                                        },
                                        source: A.B.MANUAL,
                                        widgetType: t,
                                    });
                                } catch {
                                } finally {
                                    (0, a.Z_)();
                                }
                            })();
                            break;
                        default:
                            return e;
                    }
                },
            })
          : null;
}
