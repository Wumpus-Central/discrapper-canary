n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(442433),
    d = n(734057),
    s = n(576705),
    u = n(589051),
    o = n(145567),
    c = n(187667),
    A = n(34307),
    g = n(652215),
    f = n(895867),
    E = n(985018);
function h(e, t) {
    let { hasChat: n } = (0, u.M8)("useOverlayTextChatToggleMenuItem"),
        h = "DM_USER" === e.kind ? e.userId : null,
        I = (0, i.bG)([d.A], () => (null != h ? (d.A.getDMFromUserId(h) ?? null) : null), [h]),
        p = "CHANNEL" === e.kind ? e.channel.id : I,
        _ = (0, i.bG)([c.A], () => {
            if (null == p) return !1;
            let [e] = c.A.getSessionEntries();
            for (let t of e) if (t.channelId === p) return !0;
            return c.A.getSelectedChannelId() === p;
        }, [p]),
        v = "CHANNEL" === e.kind ? e.channel : null,
        x = (0, i.bG)(
            [s.A],
            () =>
                !!(null == v || v.isDM() || v.isMultiUserDM() || v.isPrivate()) ||
                s.A.can(g.xBc.READ_MESSAGE_HISTORY, v),
            [v],
        );
    return _ && null != p
        ? (0, r.jsx)(l.Drp, {
              id: "close-chat",
              label: E.intl.string(f.default.ERApc4),
              action: () => {
                  (0, o.lu)({ channelId: p, widgetType: t, secondaryValue: "context_menu_close_chat" }), (0, a.Z_)();
              },
          })
        : n && x
          ? (0, r.jsx)(l.Drp, {
                id: "open-chat",
                label: E.intl.string(f.default.KWrMk5),
                action: () => {
                    switch (e.kind) {
                        case "CHANNEL":
                            (0, o.D$)({
                                target: {
                                    kind: o.bB.CHANNEL,
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
                                    await (0, o.D$)({
                                        target: {
                                            kind: o.bB.DM_USER,
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
