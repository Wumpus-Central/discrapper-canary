n.d(t, { q: () => d });
var i = n(506774),
    s = n(419954),
    l = n(661191),
    a = n(253932),
    r = n(780964);
let o = new Date("2018-01-01"),
    d = (0, s.Tf)(r.X.CHANGE_LOG_CLEAR, {
        useTitle: () => "Clear Change Log",
        useSubtitle: () => "Resets the change log state so that it will show again on the next startup.",
        useLabel: () => "Clear",
        useDisabled: () => a.pK.useSetting() === l.default.fromTimestamp(o.getTime()),
        onClick: () => (i.w.set("lastChangeLogDate", o), a.pK.updateSetting(l.default.fromTimestamp(o.getTime()))),
    });
