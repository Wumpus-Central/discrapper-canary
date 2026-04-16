n.d(t, { F: () => d });
var i = n(397927),
    r = n(734057),
    l = n(309010),
    s = n(147036),
    o = n(957565),
    a = n(985018);
let d = {
    binds: ["mod+shift+l"],
    comboKeysBindGlobal: !0,
    action() {
        let e = l.A.getChannelId();
        if (null == e) return !1;
        let t = r.A.getChannel(e);
        if (null == t) return !1;
        let n = r.A.getChannel(t.parent_id),
            d = (0, s.af)(t, n);
        return (
            (0, o.C)(d, () => (0, i.showToast)((0, i.createToast)(a.intl.string(a.t["+5kSoW"]), i.ToastType.SUCCESS))),
            !1
        );
    },
};
