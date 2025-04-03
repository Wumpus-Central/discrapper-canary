n.d(t, { O: () => a });
var r = n(904245),
    i = n(306680),
    s = n(944486);
let a = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.Z.getChannelId();
        if (null != e) {
            let t = i.ZP.ackMessageId(e);
            null != t &&
                i.ZP.getOldestUnreadTimestamp(e) > 0 &&
                r.Z.jumpToMessage({
                    channelId: e,
                    messageId: t,
                    offset: 1,
                    context: 'Keyboard Shortcut'
                });
        }
        return !1;
    }
};
