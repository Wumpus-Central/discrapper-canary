n.d(t, { Z: () => s });
var r = n(106351),
    a = n(524437),
    i = n(695346),
    l = n(82554),
    o = n(388032);
let s = {
    getTitle: () => o.intl.string(o.t.vJOqMD),
    getDisabledTitle: () => o.intl.string(o.t.B5ZvY2),
    getDescription: () => o.intl.string(o.t['43UEUl']),
    eligibleReportSubtypes: [l.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => i.Xr.updateSetting(a.Xr.NON_FRIENDS),
    predicate: () => i.Xr.getSetting() === a.Xr.DISABLED
};
