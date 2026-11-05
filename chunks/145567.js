var i,
    r = n(73153),
    a = n(308528),
    s = n(684013),
    l = n(46653),
    o = n(734057),
    d = n(810412),
    c = n(288641),
    u = n(41984),
    _ = n(667419),
    E = n(652215),
    A = (((i = {}).CHANNEL = "CHANNEL"), (i.DM_USER = "DM_USER"), i);
n.d(
    t,
    {},
    {
        $p: function () {
            return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_ALL_CHANNELS" });
        },
        D$: async function (e) {
            let { target: t, source: n, widgetType: i } = e,
                A =
                    "CHANNEL" === t.kind
                        ? t.channelId
                        : await (async function (e) {
                              let { userId: t, existingChannelId: n } = e,
                                  i = n ?? o.A.getDMFromUserId(t) ?? null;
                              if (null != i) return i;
                              if (t === l.default.getId()) return null;
                              try {
                                  let e = await a.A.getDMChannel(t);
                                  if (null != e) return e;
                              } catch {}
                              try {
                                  let e = await a.A.ensurePrivateChannel(t);
                                  if (null != e) return e;
                              } catch {}
                              return null;
                          })(t);
            if (null == A) return null;
            let f = "CHANNEL" === t.kind ? t.guildId : null,
                h = t.messageId ?? null,
                I = c.A.getSelectedChannelId();
            return (
                null != i &&
                    n !== u.B9.AUTOMATIC_CHANNEL_SELECT &&
                    (null == I
                        ? (0, d.YX)(i, { type: d.Z5.TEXT_CHAT, value: d.IP.OPENED_TEXT_CHAT, secondaryValue: n })
                        : I !== A &&
                          (0, d.YX)(i, { type: d.Z5.TEXT_CHAT, value: d.IP.CHANNEL_SELECTED, secondaryValue: n })),
                null != I && s.A.ackTextChatChannel(I),
                n !== u.B9.AUTOMATIC_CHANNEL_SELECT && (0, _.JA)(E.uss.TEXT_CHAT_V3, !1),
                await r.h.dispatch({
                    type: "OVERLAY_TEXT_CHAT_SELECT_CHANNEL",
                    channelId: A,
                    source: n,
                    guildId: f,
                    messageId: h,
                }),
                A
            );
        },
        Ml: function (e) {
            let { channelId: t, source: n, lastActivityAtMs: i = Date.now(), lastMessageId: a } = e;
            return r.h.dispatch({
                type: "OVERLAY_TEXT_CHAT_ADD_OR_UPDATE_CHANNEL",
                channelId: t,
                source: n,
                lastActivityAtMs: i,
                lastMessageId: a,
            });
        },
        S$: function (e) {
            let { minimized: t } = e;
            return r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_SET_VOICE_CHAT_MINIMIZED", minimized: t });
        },
        bB: A,
        lu: function (e) {
            let { channelId: t, widgetType: n, secondaryValue: i = "remove_channel" } = e;
            return (
                (0, d.YX)(n, { type: d.Z5.TEXT_CHAT, value: d.IP.CLOSED_TEXT_CHAT, secondaryValue: i }),
                r.h.dispatch({ type: "OVERLAY_TEXT_CHAT_REMOVE_CHANNEL", channelId: t })
            );
        },
    },
);
