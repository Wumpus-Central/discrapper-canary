n.d(t, { Z: () => o });
var l = n(106351),
    i = n(524437),
    r = n(695346),
    a = n(82554),
    s = n(388032);
let o = {
    getTitle: () => s.intl.string(s.t.vJOqMD),
    getDisabledTitle: () => s.intl.string(s.t.B5ZvY2),
    getDescription: () => s.intl.string(s.t['43UEUl']),
    eligibleReportSubtypes: [a.i5.SUB_SPAM],
    eligibleChannelTypes: [l.d.DM, l.d.GROUP_DM],
    onApply: () => r.Xr.updateSetting(i.Xr.NON_FRIENDS),
    predicate: () => r.Xr.getSetting() === i.Xr.DISABLED
};
