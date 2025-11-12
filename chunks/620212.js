n.d(t, { U: () => s });
var r = n(592125),
    i = n(944486),
    a = n(585483),
    o = n(981631);
let s = {
    binds: ["mod+shift+u"],
    comboKeysBindGlobal: !0,
    action() {
        let e = r.Z.getChannel(i.Z.getChannelId());
        return null == e || e.isManaged() || a.S.dispatch(o.CkL.UPLOAD_FILE, { channelId: e.id }), !1;
    },
};
