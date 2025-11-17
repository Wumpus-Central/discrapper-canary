n.d(e, { Z: () => o });
var i = n(509613),
    l = n(695346),
    u = n(313789),
    r = n(518596),
    s = n(981631),
    a = n(388032);
let o = (0, i.qs)(u.n.TEXT_TO_SPEECH_COMMAND, {
    useTitle: () => a.intl.string(a.t["btbS+Z"]),
    useSubtitle: () =>
        a.intl.format(a.t.Q5crhR, {
            onClick: () => (0, r.openUserSettings)(u.n.ACCESSIBILITY_PANEL, { section: s.oAB.ACCESSIBILITY }),
        }),
    useValue: l.OW.useSetting,
    setValue: l.OW.updateSetting,
});
