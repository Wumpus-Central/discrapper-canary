n.d(t, { Z: () => s });
var r = n(106351),
    a = n(524437),
    i = n(695346),
    o = n(82554),
    l = n(388032);
let s = {
    getTitle: () => l.intl.string(l.t.vJOqMD),
    getDisabledTitle: () => l.intl.string(l.t.B5ZvY2),
    getDescription: () => l.intl.string(l.t['43UEUl']),
    eligibleReportSubtypes: [o.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => i.Xr.updateSetting(a.Xr.NON_FRIENDS),
    predicate: () => i.Xr.getSetting() === a.Xr.DISABLED
};
