n.d(t, { O: () => l });
var i = n(904245),
    s = n(306680),
    r = n(944486);
let l = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.Z.getChannelId();
        if (null != e) {
            let t = s.ZP.ackMessageId(e);
            null != t &&
                s.ZP.getOldestUnreadTimestamp(e) > 0 &&
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
