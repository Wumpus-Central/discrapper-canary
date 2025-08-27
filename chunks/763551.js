n.d(t, { Z: () => c }), n(388685);
var i = n(509613),
    l = n(960412),
    r = n(151662),
    s = n(869235),
    a = n(275948),
    o = n(77041),
    u = n(388032);
let c = (0, i.k4)(s.t.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => u.intl.string(u.t["w/qqKC"]),
    init: function () {
        let { initialized: e } = r.Z.getEmailSettings();
        e || (0, l.Y7)();
    },
    getLayout: () => [...a.Z, o.Z],
});
