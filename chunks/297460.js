n.d(t, { A: () => E });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(442433),
    d = n(734057),
    s = n(576705),
    u = n(1193),
    o = n(589051),
    c = n(145567),
    A = n(34307),
    g = n(652215),
    f = n(21197),
    h = n(985018);
function E(e, t) {
    let { hasChat: n } = (0, o.M8)("useOverlayTextChatToggleMenuItem"),
        E = "DM_USER" === e.kind ? e.userId : null,
        I = (0, i.bG)([d.A], () => (null != E ? (d.A.getDMFromUserId(E) ?? null) : null), [E]),
        v = "CHANNEL" === e.kind ? e.channel.id : I,
        _ = (0, i.bG)([u.A], () => {
            if (null == v) return !1;
            let [e] = u.A.getSessionEntries();
            for (let t of e) if (t.channelId === v) return !0;
            return u.A.getSelectedChannelId() === v;
        }, [v]),
        x = "CHANNEL" === e.kind ? e.channel : null,
        b = (0, i.bG)(
            [s.A],
            () =>
                !!(null == x || x.isDM() || x.isMultiUserDM() || x.isPrivate()) ||
                s.A.can(g.xBc.READ_MESSAGE_HISTORY, x),
            [x],
        );
    return _ && null != v
        ? (0, r.jsx)(l.Dr, {
              id: "close-chat",
              label: h.intl.string(f.default.ERApc4),
              action: () => {
                  (0, c.lu)({ channelId: v, widgetType: t, secondaryValue: "context_menu_close_chat" }), (0, a.Z_)();
              },
          })
        : n && b
          ? (0, r.jsx)(l.Dr, {
                id: "open-chat",
                label: h.intl.string(f.default.KWrMk5),
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
                                            existingChannelId: I,
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
