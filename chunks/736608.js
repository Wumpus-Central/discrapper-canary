n.d(t, { Z: () => c }), n(388685);
var i = n(509613),
    r = n(960412),
    l = n(151662),
    o = n(869235),
    a = n(996231),
    s = n(663623),
    u = n(388032);
let c = (0, i.k4)(o.t.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => u.intl.string(u.t["w/qqKC"]),
    init: function () {
        let { initialized: e } = l.Z.getEmailSettings();
        e || (0, r.Y7)();
    },
    getLayout: () => [...a.Z, s.Z],
});
