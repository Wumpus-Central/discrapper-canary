n.d(e, { Z: () => c }), n(388685);
var i = n(509613),
    r = n(960412),
    l = n(151662),
    s = n(313789),
    u = n(996231),
    a = n(663623),
    o = n(388032);
let c = (0, i.k4)(s.n.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => o.intl.string(o.t["w/qqKK"]),
    init: function () {
        let { initialized: t } = l.Z.getEmailSettings();
        t || (0, r.Y7)();
    },
    buildLayout: () => [...u.Z, a.Z],
});
