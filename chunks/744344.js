n.d(t, { r: () => m });
var i = n(311907),
    s = n(684013),
    l = n(592598),
    a = n(419954),
    r = n(780964),
    o = n(202949),
    d = n(985018);
let c = (0, o.z)(!0);
function u(e) {
    return (0, a.zD)(e.key, {
        useTitle: () => d.intl.string(e.title),
        useSubtitle: () => d.intl.string(e.description),
        useValue: () => !(0, i.bG)([l.A], () => l.A.getDisabledNotifications().has(e.disabledSetting)),
        setValue: (t) => {
            s.A.setNotificationDisabledSetting(e.disabledSetting, !t);
        },
        usePredicate: e.usePredicate,
    });
}
let m = (0, a.FW)(r.X.OVERLAY_NOTIFICATIONS_LIST, {
    variant: "compact",
    useTitle: () => d.intl.string(d.t.gnKWdS),
    isTitleHiddenVisually: !0,
    buildLayout: () => c.map(u),
});
