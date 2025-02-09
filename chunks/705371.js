t.d(n, { l: () => u });
var i = t(904245),
    r = t(181945),
    s = t(888369),
    l = t(375954),
    o = t(944486),
    a = t(914010),
    d = t(585483),
    c = t(981631);
let u = {
    binds: ['shift+esc'],
    comboKeysBindGlobal: !0,
    action() {
        let e = a.Z.getGuildId();
        if (null == e || !s.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, r.Z)([e]);
        let n = o.Z.getChannelId(e);
        null != n && (l.Z.getMessages(n).hasMoreAfter ? i.Z.jumpToPresent(n, c.AQB) : d.S.dispatch(c.CkL.SCROLLTO_PRESENT));
    }
};
