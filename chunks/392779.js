n.d(e, { O: () => c }), n(953529);
var i = n(442837),
    l = n(13245),
    s = n(624864),
    u = n(509613),
    r = n(313789),
    a = n(794704),
    o = n(388032);
let T = (0, a.Wb)(!0);
function S(t) {
    return (0, u.qs)(t.key, {
        useTitle: () => o.intl.string(t.title),
        useSubtitle: () => o.intl.string(t.description),
        useValue: () => !(0, i.e7)([s.Z], () => s.Z.getDisabledNotifications().has(t.disabledSetting)),
        setValue: (e) => {
            l.Z.setNotificationDisabledSetting(t.disabledSetting, !e);
        },
        usePredicate: t.usePredicate,
    });
}
let c = (0, u.Uc)(r.n.OVERLAY_NOTIFICATIONS_LIST, {
    variant: "separators",
    buildLayout: () => T.map(S),
});
