n.d(t, { F: () => u });
var i = n(691540),
    l = n(857250),
    r = n(97483),
    s = n(734057),
    o = n(309010),
    a = n(147036),
    d = n(957565),
    c = n(985018);
let u = {
    binds: ["mod+shift+l"],
    comboKeysBindGlobal: !0,
    action() {
        let e = o.A.getChannelId();
        if (null == e) return !1;
        let t = s.A.getChannel(e);
        if (null == t) return !1;
        let n = s.A.getChannel(t.parent_id),
            u = (0, a.af)(t, n);
        return (0, d.C)(u, () => (0, i.P0)((0, l.o)(c.intl.string(c.t["+5kSoW"]), r.Ck.SUCCESS))), !1;
    },
};
