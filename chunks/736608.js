n.d(t, { Z: () => c }), n(388685);
var l = n(509613),
    i = n(960412),
    r = n(151662),
    s = n(869235),
    a = n(996231),
    o = n(663623),
    u = n(388032);
let c = (0, l.k4)(s.t.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => u.intl.string(u.t["w/qqKC"]),
    init: function () {
        let { initialized: e } = r.Z.getEmailSettings();
        e || (0, i.Y7)();
    },
    getLayout: () => [...a.Z, o.Z],
});
