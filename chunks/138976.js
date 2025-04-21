n.d(t, { O: () => l });
var i = n(904245),
    r = n(306680),
    s = n(944486);
let l = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.Z.getChannelId();
        if (null != e) {
            let t = r.ZP.ackMessageId(e);
            null != t &&
                r.ZP.getOldestUnreadTimestamp(e) > 0 &&
                i.Z.jumpToMessage({
                    channelId: e,
                    messageId: t,
                    offset: 1,
                    context: 'Keyboard Shortcut'
                });
        }
        return !1;
    }
};
