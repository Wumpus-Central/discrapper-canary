t.d(n, { A: () => E });
var r = t(627968);
t(64700);
var i = t(311907),
    l = t(397927),
    a = t(442433),
    d = t(734057),
    s = t(576705),
    u = t(1193),
    o = t(589051),
    c = t(145567),
    A = t(34307),
    g = t(652215),
    f = t(822889),
    h = t(985018);
function E(e, n) {
    let { hasChat: t } = (0, o.M8)("useOverlayTextChatToggleMenuItem"),
        E = "DM_USER" === e.kind ? e.userId : null,
        I = (0, i.bG)([d.A], () => (null != E ? (d.A.getDMFromUserId(E) ?? null) : null), [E]),
        p = "CHANNEL" === e.kind ? e.channel.id : I,
        v = (0, i.bG)([u.A], () => {
            if (null == p) return !1;
            let [e] = u.A.getSessionEntries();
            for (let n of e) if (n.channelId === p) return !0;
            return u.A.getSelectedChannelId() === p;
        }, [p]),
        _ = "CHANNEL" === e.kind ? e.channel : null,
        x = (0, i.bG)(
            [s.A],
            () =>
                !!(null == _ || _.isDM() || _.isMultiUserDM() || _.isPrivate()) ||
                s.A.can(g.xBc.READ_MESSAGE_HISTORY, _),
            [_],
        );
    return v && null != p
        ? (0, r.jsx)(l.Drp, {
              id: "close-chat",
              label: h.intl.string(f.default.ERApc4),
              action: () => {
                  (0, c.lu)({ channelId: p, widgetType: n, secondaryValue: "context_menu_close_chat" }), (0, a.Z_)();
              },
          })
        : t && x
          ? (0, r.jsx)(l.Drp, {
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
                                widgetType: n,
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
                                        widgetType: n,
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
