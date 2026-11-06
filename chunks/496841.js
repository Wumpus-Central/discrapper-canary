var i = t(477900),
    l = t(582128),
    s = t(978940),
    a = t(597798),
    o = t(688810),
    c = t(384059),
    r = t(114129),
    u = t(442325),
    C = t(188567),
    d = t(693409),
    A = t(652215),
    b = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let { channel: e, centerButton: t = !1, onCallJoined: p, ...h } = n,
                { parentAnalyticsLocation: _ } = (0, o.Ay)(),
                j = t ? d.l : d.A,
                k = e.isManaged() || !e.isPrivate() ? b.intl.string(b.t.S0W8Z5) : b.intl.string(b.t["0D/6Rz"]),
                L = l.useCallback(() => {
                    (p?.(), (0, c.lO)(_, c.OP.JOIN_CALL, e.id));
                    let n = u.A.isEnabled() ? u.A.getTabForChannel(e.id) : null;
                    (null != n && (0, r.ZD)(n.id, "call", !0), a.default.selectVoiceChannel(e.id));
                }, [e.id, p, _]);
            return (
                l.useEffect(
                    () => (
                        C._.subscribe(A.jej.CALL_ACCEPT, L),
                        () => {
                            C._.unsubscribe(A.jej.CALL_ACCEPT, L);
                        }
                    ),
                    [L],
                ),
                (0, i.jsx)(j, { ...h, iconComponent: s.PhoneCallIcon, label: k, onClick: L, isTrayButton: !1 })
            );
        },
    },
);
