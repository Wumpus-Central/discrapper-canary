"use strict";
n.d(t, { s: () => s });
var i = n(493336),
    r = n(568548),
    a = n(309010);
let s = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.A.getChannelId();
        if (null != e) {
            let t = r.Ay.ackMessageId(e);
            null != t &&
                r.Ay.getOldestUnreadTimestamp(e) > 0 &&
                i.A.jumpToMessage({ channelId: e, messageId: t, offset: 1, context: "Keyboard Shortcut" });
        }
        return !1;
    },
};
