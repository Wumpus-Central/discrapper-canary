t.d(e, { A: () => p });
var i = t(477900),
    s = t(582128),
    l = t(978940),
    a = t(730852),
    o = t(688810),
    c = t(384059),
    r = t(114129),
    u = t(442325),
    C = t(625494),
    d = t(204651),
    A = t(652215),
    b = t(105292);
function p(n) {
    let { channel: e, centerButton: t = !1, onCallJoined: p, ..._ } = n,
        { parentAnalyticsLocation: h } = (0, o.Ay)(),
        j = t ? d.l : d.A,
        k = e.isManaged() || !e.isPrivate() ? b.intl.string(b.t.S0W8Z5) : b.intl.string(b.t["0D/6Rz"]),
        L = s.useCallback(() => {
            (p?.(), (0, c.X)(h, c.O.JOIN_CALL));
            let n = u.A.isEnabled() ? u.A.getTabForChannel(e.id) : null;
            (null != n && (0, r.ZD)(n.id, !0), a.default.selectVoiceChannel(e.id));
        }, [e.id, p, h]);
    return (
        s.useEffect(
            () => (
                C._.subscribe(A.jej.CALL_ACCEPT, L),
                () => {
                    C._.unsubscribe(A.jej.CALL_ACCEPT, L);
                }
            ),
            [L],
        ),
        (0, i.jsx)(j, { ..._, iconComponent: l._, label: k, onClick: L, isTrayButton: !1 })
    );
}
