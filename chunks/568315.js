n.d(t, { Z: () => s });
var r = n(106351),
    l = n(524437),
    i = n(695346),
    a = n(82554),
    o = n(388032);
let s = {
    getTitle: () => o.NW.string(o.t.vJOqMD),
    getDisabledTitle: () => o.NW.string(o.t.B5ZvY2),
    getDescription: () => o.NW.string(o.t['43UEUl']),
    eligibleReportSubtypes: [a.i5.SUB_SPAM],
    eligibleChannelTypes: [r.d.DM, r.d.GROUP_DM],
    onApply: () => i.Xr.updateSetting(l.Xr.NON_FRIENDS),
    predicate: () => i.Xr.getSetting() === l.Xr.DISABLED
};
