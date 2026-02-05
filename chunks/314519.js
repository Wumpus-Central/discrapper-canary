n.d(t, { s: () => a });
var i = n(843472),
    s = n(222823),
    r = n(309010);
let a = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getChannelId();
        if (null != e) {
            let t = s.Ay.ackMessageId(e);
            null != t &&
                s.Ay.getOldestUnreadTimestamp(e) > 0 &&
                i.A.jumpToMessage({ channelId: e, messageId: t, offset: 1, context: "Keyboard Shortcut" });
        }
        return !1;
    },
};
