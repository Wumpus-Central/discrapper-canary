"use strict";
n.d(t, { s: () => a });
var i = n(720149),
    r = n(222823),
    s = n(309010);
let a = {
    binds: ["shift+pageup"],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.A.getChannelId();
        if (null != e) {
            let t = r.Ay.ackMessageId(e);
            null != t &&
                r.Ay.getOldestUnreadTimestamp(e) > 0 &&
                i.A.jumpToMessage({ channelId: e, messageId: t, offset: 1, context: "Keyboard Shortcut" });
        }
        return !1;
    },
};
