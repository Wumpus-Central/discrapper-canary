var i = e(477900),
    s = e(582128),
    o = e(978940),
    c = e(597798),
    a = e(688810),
    l = e(384059),
    r = e(114129),
    u = e(188567),
    C = e(693409),
    d = e(652215),
    p = e(792996);
e.d(
    t,
    {},
    {
        A: function (n) {
            let { channel: t, centerButton: e = !1, onCallJoined: A, ...b } = n,
                { parentAnalyticsLocation: h } = (0, a.Ay)(),
                _ = e ? C.l : C.A,
                j = t.isManaged() || !t.isPrivate() ? p.intl.string(p.t.S0W8Z5) : p.intl.string(p.t["0D/6Rz"]),
                k = s.useCallback(() => {
                    (A?.(), (0, l.lO)(h, l.OP.JOIN_CALL, t.id), (0, r.oZ)(t.id), c.default.selectVoiceChannel(t.id));
                }, [t.id, A, h]);
            return (
                s.useEffect(
                    () => (
                        u._.subscribe(d.jej.CALL_ACCEPT, k),
                        () => {
                            u._.unsubscribe(d.jej.CALL_ACCEPT, k);
                        }
                    ),
                    [k],
                ),
                (0, i.jsx)(_, { ...b, iconComponent: o.PhoneCallIcon, label: j, onClick: k, isTrayButton: !1 })
            );
        },
    },
);
