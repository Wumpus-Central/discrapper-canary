n.d(t, { l: () => u });
var r = n(904245),
    i = n(181945),
    s = n(888369),
    a = n(375954),
    l = n(944486),
    o = n(914010),
    c = n(585483),
    d = n(981631);
let u = {
    binds: ['shift+esc'],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.Z.getGuildId();
        if (null == e || !s.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, i.Z)([e]);
        let t = l.Z.getChannelId(e);
        null != t && (a.Z.getMessages(t).hasMoreAfter ? r.Z.jumpToPresent(t, d.AQB) : c.S.dispatch(d.CkL.SCROLLTO_PRESENT));
    }
};
