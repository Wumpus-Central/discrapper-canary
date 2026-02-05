n.d(t, { T: () => l });
var i = n(734057),
    s = n(309010),
    r = n(203982),
    a = n(652215);
let l = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = i.A.getChannel(s.A.getChannelId());
        return null == e || e.isManaged() || r._.dispatch(a.jej.UPLOAD_FILE, { channelId: e.id }), !1;
    },
};
