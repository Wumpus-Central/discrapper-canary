n.d(t, { Z: () => u }), n(388685);
var i = n(509613),
    l = n(960412),
    o = n(151662),
    r = n(352486),
    s = n(611811),
    a = n(388032);
let u = (0, i.k4)("NotificationsEmail", {
    useTitle: () => a.intl.string(a.t["w/qqKC"]),
    init: function () {
        let { initialized: e } = o.Z.getEmailSettings();
        e || (0, l.Y7)();
    },
    getLayout: () => [...r.Z, s.Z],
});
