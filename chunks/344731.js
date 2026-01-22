n.d(t, { T: () => o });
var r = n(734057),
    i = n(309010),
    a = n(203982),
    s = n(652215);
let o = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.A.getChannel(i.A.getChannelId());
        return null == e || e.isManaged() || a._.dispatch(s.jej.UPLOAD_FILE, { channelId: e.id }), !1;
    },
};
