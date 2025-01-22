n.d(t, {
    U: function () {
        return l;
    }
});
var i = n(592125),
    r = n(944486),
    s = n(585483),
    a = n(981631);
let l = {
    binds: ['mod+shift+u'],
    comboKeysBindGlobal: !0,
    action() {
        let e = i.Z.getChannel(r.Z.getChannelId());
        return null != e && !e.isManaged() && s.S.dispatch(a.CkL.UPLOAD_FILE), !1;
    }
};
