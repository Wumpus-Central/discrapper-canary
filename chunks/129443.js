"use strict";
n.d(t, { A: () => d });
var a = n(478437),
    i = n(873298),
    r = n(253932),
    l = n(17372),
    s = n(985018);
let d = {
    getTitle: () => s.intl.string(s.t.vJOqMB),
    getDisabledTitle: () => s.intl.string(s.t["B5ZvY+"]),
    getDescription: () => s.intl.string(s.t["43UEUh"]),
    eligibleReportSubtypes: [l.TS.SUB_SPAM],
    eligibleChannelTypes: [a.r.DM, a.r.GROUP_DM],
    onApply: () => r.he.updateSetting(i.he.NON_FRIENDS),
    predicate: () => r.he.getSetting() === i.he.DISABLED,
};
