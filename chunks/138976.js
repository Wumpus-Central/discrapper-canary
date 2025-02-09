t.d(n, { O: () => l });
var i = t(904245),
    r = t(306680),
    s = t(944486);
let l = {
    binds: ['shift+pageup'],
    comboKeysBindGlobal: !0,
    action() {
        let e = s.Z.getChannelId();
        if (null != e) {
            let n = r.ZP.ackMessageId(e);
            null != n &&
                r.ZP.getOldestUnreadTimestamp(e) > 0 &&
                i.Z.jumpToMessage({
                    channelId: e,
                    messageId: n,
                    offset: 1,
                    context: 'Keyboard Shortcut'
                });
        }
        return !1;
    }
};
