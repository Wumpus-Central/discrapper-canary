n.d(t, { T: () => o });
var i = n(734057),
    l = n(309010),
    r = n(203982),
    s = n(652215);
let o = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = i.A.getChannel(l.A.getChannelId());
        return null == e || e.isManaged() || r._.dispatch(s.jej.UPLOAD_FILE, { channelId: e.id }), !1;
    },
};
