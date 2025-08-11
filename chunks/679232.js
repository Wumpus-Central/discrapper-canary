n.d(t, { Z: () => u }), n(388685);
var i = n(509613),
    l = n(960412),
    s = n(151662),
    o = n(352486),
    a = n(611811),
    r = n(388032);
let u = (0, i.k4)("NotificationsEmail", {
    useTitle: () => r.intl.string(r.t["w/qqKC"]),
    init: function () {
        let { initialized: e } = s.Z.getEmailSettings();
        e || (0, l.Y7)();
    },
    layout: [...o.Z, a.Z],
});
