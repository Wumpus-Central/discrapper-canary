n.d(t, { P: () => u });
var i = n(843472),
    s = n(567035),
    r = n(458294),
    a = n(320501),
    l = n(309010),
    o = n(967198),
    c = n(203982),
    d = n(652215);
let u = {
    binds: ["shift+esc"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.A.getGuildId();
        if (null == e || !r.default.getGuildHasUnreadIgnoreMuted(e)) return;
        (0, s.A)([e]);
        let t = l.A.getChannelId(e);
        null == t ||
            (a.A.getMessages(t).hasMoreAfter ? i.A.jumpToPresent(t, d.EMb) : c._.dispatch(d.jej.SCROLLTO_PRESENT));
    },
};
