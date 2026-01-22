i.d(e, {
    q: () => o,
});
var n = i(506774),
    l = i(419954),
    s = i(661191),
    r = i(253932),
    u = i(780964);
let a = new Date("2018-01-01"),
    o = (0, l.Tf)(u.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => r.pK.useSetting() === s.default.fromTimestamp(a.getTime()),
        onClick: () => (n.w.set("lastChangeLogDate", a), r.pK.updateSetting(s.default.fromTimestamp(a.getTime()))),
    });
