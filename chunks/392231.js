n.d(e, { Z: () => o });
var i = n(509613),
    r = n(695346),
    l = n(313789),
    s = n(518596),
    u = n(981631),
    a = n(388032);
let o = (0, i.qs)(l.n.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => a.intl.string(a.t["btbS+Z"]),
    useSubtitle: () =>
        a.intl.format(a.t.Q5crhR, {
            onClick: () => (0, s.openUserSettings)(l.n.ACCESSIBILITY_PANEL, { section: u.oAB.ACCESSIBILITY }),
        }),
    useValue: r.OW.useSetting,
    setValue: r.OW.updateSetting,
});
