(n.d(t, { Z: () => c }), n(388685));
var i = n(281215),
    a = n(960412),
    o = n(151662),
    s = n(352486),
    l = n(611811),
    r = n(388032);
let c = (0, i.k4)('NotificationsEmail', {
    useTitle: () => r.intl.string(r.t['w/qqKC']),
    init: function () {
        let { initialized: e } = o.Z.getEmailSettings();
        e || (0, a.Y7)();
    },
    layout: [...s.Z, l.Z]
});
