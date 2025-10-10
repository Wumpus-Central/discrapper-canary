n.d(t, { Z: () => s });
var r = n(106351),
    i = n(524437),
    l = n(695346),
    a = n(82554),
    o = n(388032);
let s = {
    getTitle: () => o.intl.string(o.t.vJOqMD),
    getDisabledTitle: () => o.intl.string(o.t.B5ZvY2),
    getDescription: () => o.intl.string(o.t["43UEUl"]),
    eligibleReportSubtypes: [a.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => l.Xr.updateSetting(i.Xr.NON_FRIENDS),
    predicate: () => l.Xr.getSetting() === i.Xr.DISABLED,
};
