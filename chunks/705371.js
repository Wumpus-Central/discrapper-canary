n.d(t, { l: () => u });
var i = n(904245),
    s = n(181945),
    r = n(888369),
    l = n(375954),
    a = n(944486),
    o = n(914010),
    c = n(585483),
    d = n(981631);
let u = {
    binds: ['shift+esc'],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.Z.getGuildId();
        if (null == e || !r.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, s.Z)([e]);
        let t = a.Z.getChannelId(e);
        null != t && (l.Z.getMessages(t).hasMoreAfter ? i.Z.jumpToPresent(t, d.AQB) : c.S.dispatch(d.CkL.SCROLLTO_PRESENT));
    }
};
