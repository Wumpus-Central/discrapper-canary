i.d(e, { r: () => A });
var n = i(311907),
    l = i(684013),
    s = i(592598),
    r = i(419954),
    a = i(780964),
    u = i(790076),
    o = i(985018);
let d = (0, u.ze)(!0);
function T(t) {
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
let A = (0, r.FW)(a.X.OVERLAY_NOTIFICATIONS_LIST, { buildLayout: () => d.map(T) });
