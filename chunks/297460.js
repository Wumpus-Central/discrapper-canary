n.d(t, {
    A: () => p,
}),
    n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(442433),
    o = n(734057),
    u = n(576705),
    s = n(589051),
    d = n(145567),
    c = n(187667),
    A = n(34307),
    f = n(652215),
    b = n(895867),
    g = n(985018);

function p(e, t) {
    let { hasChat: n } = (0, s.M8)("useOverlayTextChatToggleMenuItem"),
        p = "DM_USER" === e.kind ? e.userId : null,
        v = (0, i.bG)([o.A], () => {
            var e;
            return null != p && null != (e = o.A.getDMFromUserId(p)) ? e : null;
        }, [p]),
        O = "CHANNEL" === e.kind ? e.channel.id : v,
        y = (0, i.bG)([c.A], () => {
            if (null == O) return !1;
            let [e] = c.A.getSessionEntries();
            for (let t of e) if (t.channelId === O) return !0;
            return c.A.getSelectedChannelId() === O;
        }, [O]),
        E = "CHANNEL" === e.kind ? e.channel : null,
        m = (0, i.bG)(
            [u.A],
            () =>
                !!(null == E || E.isDM() || E.isMultiUserDM() || E.isPrivate()) ||
                u.A.can(f.xBc.READ_MESSAGE_HISTORY, E),
            [E],
        );
    return y && null != O
        ? (0, r.jsx)(l.Drp, {
              id: "close-chat",
              label: g.intl.string(b.default.ERApc4),
              action: () => {
                  (0, d.lu)({
                      channelId: O,
                      widgetType: t,
                      secondaryValue: "context_menu_close_chat",
                  }),
                      (0, a.Z_)();
              },
          })
        : n && m
          ? (0, r.jsx)(l.Drp, {
                id: "open-chat",
                label: g.intl.string(b.default.KWrMk5),
                action: () => {
                    switch (e.kind) {
                        case "CHANNEL":
                            (0, d.D$)({
                                target: {
                                    kind: d.bB.CHANNEL,
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
                                    await (0, d.D$)({
                                        target: {
                                            kind: d.bB.DM_USER,
                                            userId: e.userId,
                                            messageId: null,
                                            existingChannelId: v,
                                        },
                                        source: A.B.MANUAL,
                                        widgetType: t,
                                    });
                                } catch (e) {
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
