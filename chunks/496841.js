e.d(t, { A: () => p });
var i = e(627968),
    s = e(64700),
    c = e(978940),
    o = e(730852),
    r = e(688810),
    a = e(384059),
    l = e(625494),
    u = e(204651),
    C = e(652215),
    d = e(375708);
function p(n) {
    let { channel: t, centerButton: e = !1, onCallJoined: p, ...A } = n,
        { parentAnalyticsLocation: b } = (0, r.Ay)(),
        _ = e ? u.l : u.A,
        h = t.isManaged() || !t.isPrivate() ? d.intl.string(d.t.S0W8Z5) : d.intl.string(d.t["0D/6Rz"]),
        j = s.useCallback(() => {
            p?.(), (0, a.X)(b, a.O.JOIN_CALL), o.default.selectVoiceChannel(t.id);
        }, [t.id, p, b]);
    return (
        s.useEffect(
            () => (
                l._.subscribe(C.jej.CALL_ACCEPT, j),
                () => {
                    l._.unsubscribe(C.jej.CALL_ACCEPT, j);
                }
            ),
            [j],
        ),
        (0, i.jsx)(_, { ...A, iconComponent: c._, label: h, onClick: j, isTrayButton: !1 })
    );
}
