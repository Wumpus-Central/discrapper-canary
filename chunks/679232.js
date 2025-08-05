(n.d(t, { Z: () => c }), n(388685));
var i = n(509613),
    o = n(960412),
    l = n(151662),
    a = n(352486),
    r = n(611811),
    s = n(388032);
let c = (0, i.k4)('NotificationsEmail', {
    useTitle: () => s.intl.string(s.t['w/qqKC']),
    init: function () {
        let { initialized: e } = l.Z.getEmailSettings();
        e || (0, o.Y7)();
    },
    layout: [...a.Z, r.Z]
});
