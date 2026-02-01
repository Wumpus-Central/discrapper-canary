r.d(t, {
    A: () => g,
}),
    r(896048);
var n = r(627968);
r(64700);
var i = r(311907),
    l = r(397927),
    o = r(308528),
    a = r(442433),
    c = r(734057),
    d = r(576705),
    s = r(145567),
    u = r(187667),
    A = r(34307),
    f = r(652215),
    p = r(895867),
    b = r(985018);

function g(e, t) {
    let r = "DM_USER" === e.kind ? e.userId : null,
        g = (0, i.bG)([c.A], () => {
            var e;
            return null != r && null != (e = c.A.getDMFromUserId(r)) ? e : null;
        }, [r]),
        y = "CHANNEL" === e.kind ? e.channel.id : g,
        O = "CHANNEL" === e.kind ? e.channel : null,
        v = (0, i.bG)(
            [d.A],
            () =>
                !!(null == O || O.isDM() || O.isMultiUserDM() || O.isPrivate()) ||
                d.A.can(f.xBc.READ_MESSAGE_HISTORY, O),
            [O],
        );
    return (0, i.bG)([u.A], () => {
        if (null == y) return !1;
        let [e] = u.A.getSessionEntries();
        for (let t of e) if (t.channelId === y) return !0;
        return u.A.getSelectedChannelId() === y;
    }, [y]) && null != y
        ? (0, n.jsx)(l.Drp, {
              id: "close-chat",
              label: b.intl.string(p.default.ERApc4),
              action: () => {
                  (0, s.lu)({
                      channelId: y,
                      widgetType: t,
                      secondaryValue: "context_menu_close_chat",
                  }),
                      (0, a.Z_)();
              },
          })
        : v
          ? (0, n.jsx)(l.Drp, {
                id: "open-chat",
                label: b.intl.string(p.default.KWrMk5),
                action: () => {
                    switch (e.kind) {
                        case "CHANNEL":
                            (0, s.D$)({
                                channelId: e.channel.id,
                                source: A.B.MANUAL,
                                guildId: e.guildId,
                                messageId: null,
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
                                    let r = null != g ? g : await o.A.getOrEnsurePrivateChannel(e.userId);
                                    (0, s.D$)({
                                        channelId: r,
                                        source: A.B.MANUAL,
                                        guildId: null,
                                        messageId: null,
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
