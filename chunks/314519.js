n.d(t, { s: () => r });
var i = n(493336),
    l = n(568548),
    s = n(309010);
let r = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.A.getChannelId();
        if (null != e) {
            let t = l.Ay.ackMessageId(e);
            null != t &&
                l.Ay.getOldestUnreadTimestamp(e) > 0 &&
                i.A.jumpToMessage({ channelId: e, messageId: t, offset: 1, context: "Keyboard Shortcut" });
        }
        return !1;
    },
};
