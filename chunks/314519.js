n.d(t, { s: () => s });
var i = n(493336),
    l = n(568548),
    r = n(309010);
let s = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getChannelId();
        if (null != e) {
            let t = l.Ay.ackMessageId(e);
            null != t &&
                l.Ay.getOldestUnreadTimestamp(e) > 0 &&
                i.A.jumpToMessage({ channelId: e, messageId: t, offset: 1, context: "Keyboard Shortcut" });
        }
        return !1;
    },
};
