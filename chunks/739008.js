n.d(t, {
    P: () => d,
});
var r = n(843472),
    i = n(567035),
    a = n(458294),
    s = n(320501),
    o = n(309010),
    l = n(967198),
    c = n(203982),
    u = n(652215);
let d = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.A.getGuildId();
        if (null == e || !a.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, i.A)([e]);
        let t = o.A.getChannelId(e);
        null == t ||
            (s.A.getMessages(t).hasMoreAfter ? r.A.jumpToPresent(t, u.EMb) : c._.dispatch(u.jej.SCROLLTO_PRESENT));
    },
};
