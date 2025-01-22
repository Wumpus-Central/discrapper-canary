r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(287734),
    l = r(861254),
    u = r(585483),
    c = r(871499),
    d = r(981631),
    f = r(388032);
function p(e) {
    let { channel: n, centerButton: r = !1, ...p } = e,
        h = r ? c.d : c.Z,
        _ = n.isManaged() || !n.isPrivate() ? f.intl.string(f.t.S0W8Z2) : f.intl.string(f.t['0D/6R0']),
        { groupedButtons: m } = (0, l.ZP)({ location: 'JoinCallButton' }),
        g = a.useCallback(() => s.default.selectVoiceChannel(n.id), [n.id]);
    return (
        a.useEffect(
            () => (
                u.S.subscribe(d.CkL.CALL_ACCEPT, g),
                () => {
                    u.S.unsubscribe(d.CkL.CALL_ACCEPT, g);
                }
            ),
            [g]
        ),
        (0, i.jsx)(h, {
            ...p,
            iconComponent: o.PhoneCallIcon,
            label: _,
            onClick: g,
            fullRegionButton: m
        })
    );
}
