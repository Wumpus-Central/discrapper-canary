t.d(n, { A: () => f });
var r = t(627968);
t(64700);
var l = t(17928),
    i = t(477782),
    a = t(442433),
    u = t(734057),
    s = t(576705),
    d = t(140069),
    c = t(589051),
    o = t(145567),
    A = t(34307),
    E = t(652215),
    I = t(499214),
    v = t(375708);
function f(e, n) {
    let { hasChat: t } = (0, c.M8)("useOverlayTextChatToggleMenuItem"),
        f = "DM_USER" === e.kind ? e.userId : null,
        N = (0, l.bG)([u.A], () => (null != f ? (u.A.getDMFromUserId(f) ?? null) : null), [f]),
        g = "CHANNEL" === e.kind ? e.channel.id : N,
        S = (0, l.bG)([d.A], () => {
            if (null == g) return !1;
            let [e] = d.A.getSessionEntries();
            for (let n of e) if (n.channelId === g) return !0;
            return d.A.getSelectedChannelId() === g;
        }, [g]),
        D = "CHANNEL" === e.kind ? e.channel : null,
        h = (0, l.bG)(
            [s.A],
            () =>
                !!(null == D || D.isDM() || D.isMultiUserDM() || D.isPrivate()) ||
                s.A.can(E.xBc.READ_MESSAGE_HISTORY, D),
            [D],
        );
    return S && null != g
        ? (0, r.jsx)(i.Dr, {
              id: "close-chat",
              label: v.intl.string(I.default.ERApc4),
              action: () => {
                  (0, o.lu)({ channelId: g, widgetType: n, secondaryValue: "context_menu_close_chat" }), (0, a.Z_)();
              },
          })
        : t && h
          ? (0, r.jsx)(i.Dr, {
                id: "open-chat",
                label: v.intl.string(I.default.KWrMk5),
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
                                    await (0, o.D$)({
                                        target: {
                                            kind: o.bB.DM_USER,
                                            userId: e.userId,
                                            messageId: null,
                                            existingChannelId: N,
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
