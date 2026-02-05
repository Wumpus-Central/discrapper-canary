"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(956793),
    o = n(688810),
    l = n(384059),
    u = n(203982),
    c = n(709562),
    d = n(652215),
    _ = n(985018);
function f(e) {
    let { channel: t, centerButton: n = !1, onCallJoined: f, ...p } = e,
        { parentAnalyticsLocation: h } = (0, o.Ay)(),
        m = n ? c.l : c.A,
        g = t.isManaged() || !t.isPrivate() ? _.intl.string(_.t.S0W8Z5) : _.intl.string(_.t["0D/6Rz"]),
        E = i.useCallback(() => {
            f?.(), (0, l.X)(h, l.O.JOIN_CALL), s.default.selectVoiceChannel(t.id);
        }, [t.id, f, h]);
    return (
        i.useEffect(
            () => (
                u._.subscribe(d.jej.CALL_ACCEPT, E),
                () => {
                    u._.unsubscribe(d.jej.CALL_ACCEPT, E);
                }
            ),
            [E],
        ),
        (0, r.jsx)(m, { ...p, iconComponent: a._jp, label: g, onClick: E, isTrayButton: !1 })
    );
}
