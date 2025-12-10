n.d(e, { r: () => c }), n(388685);
var i = n(509613),
    l = n(960412),
    s = n(151662),
    u = n(313789),
    r = n(996231),
    a = n(663623),
    o = n(388032);
let c = (0, i.k4)(u.n.NOTIFICATIONS_EMAIL_CATEGORY, {
    useTitle: () => o.intl.string(o.t["w/qqKK"]),
    initialize: function () {
        let { initialized: t } = s.Z.getEmailSettings();
        t || (0, l.Y7)();
    },
    buildLayout: () => [...r.s, a.r],
});
