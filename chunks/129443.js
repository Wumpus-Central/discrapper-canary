n.d(t, {
    A: () => o,
});
var l = n(478437),
    r = n(873298),
    a = n(253932),
    i = n(17372),
    s = n(985018);
let o = {
    getTitle: () => s.intl.string(s.t.vJOqMB),
    getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
    getDescription: () => s.intl.string(s.t["43UEUh"]),
    eligibleReportSubtypes: [i.TS.SUB_SPAM],
    eligibleChannelTypes: [l.r.DM, l.r.GROUP_DM],
    onApply: () => a.he.updateSetting(r.he.NON_FRIENDS),
    predicate: () => a.he.getSetting() === r.he.DISABLED,
};
