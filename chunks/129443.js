n.d(t, { A: () => d });
var l = n(478437),
    a = n(873298),
    i = n(253932),
    r = n(17372),
    s = n(985018);
let d = {
    getTitle: () => s.intl.string(s.t.vJOqMB),
    getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
    getDescription: () => s.intl.string(s.t["43UEUh"]),
    eligibleReportSubtypes: [r.TS.SUB_SPAM],
    eligibleChannelTypes: [l.r.DM, l.r.GROUP_DM],
    onApply: () => i.he.updateSetting(a.he.NON_FRIENDS),
    predicate: () => i.he.getSetting() === a.he.DISABLED,
};
