n.d(t, { A: () => b });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(442433),
    d = n(734057),
    s = n(576705),
    o = n(1193),
    u = n(589051),
    c = n(145567),
    A = n(34307),
    g = n(652215),
    f = n(895867),
    E = n(985018);
function b(e, t) {
    let { hasChat: n } = (0, u.M8)("useOverlayTextChatToggleMenuItem"),
        b = "DM_USER" === e.kind ? e.userId : null,
        h = (0, i.bG)([d.A], () => (null != b ? (d.A.getDMFromUserId(b) ?? null) : null), [b]),
        v = "CHANNEL" === e.kind ? e.channel.id : h,
        I = (0, i.bG)([o.A], () => {
            if (null == v) return !1;
            let [e] = o.A.getSessionEntries();
            for (let t of e) if (t.channelId === v) return !0;
            return o.A.getSelectedChannelId() === v;
        }, [v]),
        x = "CHANNEL" === e.kind ? e.channel : null,
        p = (0, i.bG)(
            [s.A],
            () =>
                !!(null == x || x.isDM() || x.isMultiUserDM() || x.isPrivate()) ||
                s.A.can(g.xBc.READ_MESSAGE_HISTORY, x),
            [x],
        );
    return I && null != v
        ? (0, l.jsx)(r.Drp, {
              id: "close-chat",
              label: E.intl.string(f.default.ERApc4),
              action: () => {
                  (0, c.lu)({ channelId: v, widgetType: t, secondaryValue: "context_menu_close_chat" }), (0, a.Z_)();
              },
          })
        : n && p
          ? (0, l.jsx)(r.Drp, {
                id: "open-chat",
                label: E.intl.string(f.default.KWrMk5),
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
                                            existingChannelId: h,
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
