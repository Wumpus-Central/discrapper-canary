var i = n(138399),
    r = n(218461),
    a = n(309010);
n.d(
    t,
    {},
    {
        s: {
            binds: ["shift+pageup"],
            comboKeysBindGlobal: !0,
            action() {
                let e = a.Ay.getChannelId();
                if (null != e) {
                    let t = r.Ay.ackMessageId(e);
                    null != t &&
                        r.Ay.getOldestUnreadTimestamp(e) > 0 &&
                        i.A.jumpToMessage({ channelId: e, messageId: t, offset: 1, context: "Keyboard Shortcut" });
                }
                return !1;
            },
        },
    },
);
