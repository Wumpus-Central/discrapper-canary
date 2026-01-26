i.d(e, {
    r: () => d,
}),
    i(228524);
var n = i(311907),
    l = i(684013),
    s = i(592598),
    r = i(419954),
    u = i(780964),
    a = i(790076),
    o = i(985018);
let T = (0, a.ze)(!0);

function A(t) {
    return (0, r.zD)(t.key, {
        useTitle: () => o.intl.string(t.title),
        useSubtitle: () => o.intl.string(t.description),
        useValue: () => !(0, n.bG)([s.A], () => s.A.getDisabledNotifications().has(t.disabledSetting)),
        setValue: (e) => {
            l.A.setNotificationDisabledSetting(t.disabledSetting, !e);
        },
        usePredicate: t.usePredicate,
    });
}
let d = (0, r.FW)(u.X.OVERLAY_NOTIFICATIONS_LIST, {
    buildLayout: () => T.map(A),
});
