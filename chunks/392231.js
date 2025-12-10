n.d(e, { F: () => o });
var i = n(509613),
    l = n(695346),
    s = n(313789),
    u = n(518596),
    r = n(981631),
    a = n(388032);
let o = (0, i.qs)(s.n.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => a.intl.string(a.t["btbS+Z"]),
    useSubtitle: () =>
        a.intl.format(a.t.Q5crhR, {
            onClick: () => (0, u.openUserSettings)(s.n.ACCESSIBILITY_PANEL, { section: r.oAB.ACCESSIBILITY }),
        }),
    useValue: l.OW.useSetting,
    setValue: l.OW.updateSetting,
});
