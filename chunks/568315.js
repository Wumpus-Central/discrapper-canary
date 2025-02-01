n.d(t, { Z: () => l });
var i = n(106351),
    r = n(524437),
    a = n(695346),
    s = n(82554),
    o = n(388032);
let l = {
    getTitle: () => o.intl.string(o.t.vJOqMD),
    getDisabledTitle: () => o.intl.string(o.t.B5ZvY2),
    getDescription: () => o.intl.string(o.t['43UEUl']),
    eligibleReportSubtypes: [s.i5.SUB_SPAM],
    eligibleChannelTypes: [i.d.DM, i.d.GROUP_DM],
    onApply: () => a.Xr.updateSetting(r.Xr.NON_FRIENDS),
    predicate: () => a.Xr.getSetting() === r.Xr.DISABLED
};
