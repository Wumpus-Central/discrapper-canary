n.d(e, { r: () => c }), n(388685);
var i = n(509613),
    l = n(960412),
    s = n(151662),
    r = n(313789),
    u = n(996231),
    a = n(663623),
    o = n(388032);
let c = (0, i.k4)(r.n.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => o.intl.string(o.t["w/qqKK"]),
    initialize: function () {
        let { initialized: t } = s.Z.getEmailSettings();
        t || (0, l.Y7)();
    },
    buildLayout: () => [...u.s, a.r],
});
