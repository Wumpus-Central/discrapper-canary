n.d(t, { Z: () => c }), n(388685);
var r = n(509613),
    i = n(960412),
    l = n(151662),
    o = n(313789),
    s = n(996231),
    a = n(663623),
    u = n(388032);
let c = (0, r.k4)(o.n.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => u.intl.string(u.t["w/qqKC"]),
    init: function () {
        let { initialized: e } = l.Z.getEmailSettings();
        e || (0, i.Y7)();
    },
    buildLayout: () => [...s.Z, a.Z],
});
