n.d(t, { l: () => d });
var r = n(904245),
    i = n(181945),
    a = n(888369),
    o = n(375954),
    s = n(944486),
    l = n(914010),
    c = n(585483),
    u = n(981631);
let d = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.Z.getGuildId();
        if (null == e || !a.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, i.Z)([e]);
        let t = s.Z.getChannelId(e);
        null != t &&
            (o.Z.getMessages(t).hasMoreAfter ? r.Z.jumpToPresent(t, u.AQB) : c.S.dispatch(u.CkL.SCROLLTO_PRESENT));
    },
};
