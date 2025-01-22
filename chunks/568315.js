var i = r(106351),
    a = r(524437),
    o = r(695346),
    s = r(82554),
    l = r(388032);
let u = {
    getTitle: () => l.intl.string(l.t.vJOqMD),
    getDisabledTitle: () => l.intl.string(l.t.B5ZvY2),
    getDescription: () => l.intl.string(l.t['43UEUl']),
    eligibleReportSubtypes: [s.i5.SUB_SPAM],
    eligibleChannelTypes: [i.d.DM, i.d.GROUP_DM],
    onApply: () => o.Xr.updateSetting(a.Xr.NON_FRIENDS),
    predicate: () => o.Xr.getSetting() === a.Xr.DISABLED
};
n.Z = u;
