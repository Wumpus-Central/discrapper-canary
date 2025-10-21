n.d(t, { Z: () => o });
var r = n(106351),
    i = n(524437),
    l = n(695346),
    a = n(82554),
    s = n(388032);
let o = {
    getTitle: () => s.intl.string(s.t.vJOqMB),
    getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
    getDescription: () => s.intl.string(s.t["43UEUh"]),
    eligibleReportSubtypes: [a.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => l.Xr.updateSetting(i.Xr.NON_FRIENDS),
    predicate: () => l.Xr.getSetting() === i.Xr.DISABLED,
};
