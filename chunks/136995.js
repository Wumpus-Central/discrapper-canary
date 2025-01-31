n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(287734),
    o = n(861254),
    l = n(585483),
    u = n(871499),
    c = n(981631),
    d = n(388032);
function f(e) {
    let { channel: t, centerButton: n = !1, ...f } = e,
        _ = n ? u.d : u.Z,
        p = t.isManaged() || !t.isPrivate() ? d.intl.string(d.t.S0W8Z2) : d.intl.string(d.t['0D/6R0']),
        { groupedButtons: h } = (0, o.ZP)({ location: 'JoinCallButton' }),
        m = r.useCallback(() => s.default.selectVoiceChannel(t.id), [t.id]);
    return (
        r.useEffect(
            () => (
                l.S.subscribe(c.CkL.CALL_ACCEPT, m),
                () => {
                    l.S.unsubscribe(c.CkL.CALL_ACCEPT, m);
                }
            ),
            [m]
        ),
        (0, i.jsx)(_, {
            ...f,
            iconComponent: a.Csw,
            label: p,
            onClick: m,
            fullRegionButton: h
        })
    );
}
