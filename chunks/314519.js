n.d(t, { s: () => s });
var r = n(843472),
    i = n(222823),
    a = n(309010);
let s = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getChannelId();
        if (null != e) {
            let t = i.Ay.ackMessageId(e);
            null != t &&
                i.Ay.getOldestUnreadTimestamp(e) > 0 &&
                r.A.jumpToMessage({
                    channelId: e,
                    messageId: t,
                    offset: 1,
                    context: "Keyboard Shortcut",
                });
        }
        return !1;
    },
};
