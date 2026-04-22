t.d(n, { A: () => h });
var l = t(627968),
    i = t(64700),
    a = t(978940),
    s = t(956793),
    r = t(688810),
    o = t(384059),
    c = t(203982),
    u = t(709562),
    d = t(652215),
    A = t(985018);
function h(e) {
    let { channel: n, centerButton: t = !1, onCallJoined: h, ...p } = e,
        { parentAnalyticsLocation: m } = (0, r.Ay)(),
        g = t ? u.l : u.A,
        f = n.isManaged() || !n.isPrivate() ? A.intl.string(A.t.S0W8Z5) : A.intl.string(A.t["0D/6Rz"]),
        C = i.useCallback(() => {
            h?.(), (0, o.X)(m, o.O.JOIN_CALL), s.default.selectVoiceChannel(n.id);
        }, [n.id, h, m]);
    return (
        i.useEffect(
            () => (
                c._.subscribe(d.jej.CALL_ACCEPT, C),
                () => {
                    c._.unsubscribe(d.jej.CALL_ACCEPT, C);
                }
            ),
            [C],
        ),
        (0, l.jsx)(g, { ...p, iconComponent: a._, label: f, onClick: C, isTrayButton: !1 })
    );
}
