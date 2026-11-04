var e = i(477900);
i(582128);
var r = i(855986),
    l = i(192308),
    a = i(477782),
    s = i(931991),
    c = i(849736),
    u = i(698441),
    o = i(496092),
    d = i(988794),
    p = i(792996);
i.d(
    n,
    {},
    {
        A: function (t, n, A) {
            let { canManageGuildEvent: g } = (0, s.nr)(A ?? n),
                y = (0, r.bG)([u.Ay], () => u.Ay.isActive(t)),
                b = (0, r.bG)([u.Ay], () => u.Ay.getGuildScheduledEvent(t), [t]),
                E = g(b);
            if (null == t || !E || !y || b?.entity_type === d.Ps.EXTERNAL) return null;
            function h() {
                (A?.isGuildStageVoice() ? (0, c.OE)(A) : null != t && o.default.endEvent(t, n.id), (0, l.s7)());
            }
            return (0, e.jsx)(a.Dr, {
                id: p.intl.string(p.t.qaYzPA),
                label: p.intl.string(p.t.qaYzPA),
                action: function () {
                    (0, l.mM)(async () => {
                        let { Modal: t } = await Promise.all([i.e(304823), i.e(223976)]).then(i.bind(i, 732955));
                        return (n) => {
                            let { onClose: i, transitionState: r } = n;
                            return (0, e.jsx)(t, {
                                transitionState: r,
                                title: p.intl.string(p.t.qaYzPA),
                                subtitle: p.intl.string(p.t.bnDQ7E),
                                onClose: i,
                                actions: [
                                    { onClick: i, variant: "secondary", text: p.intl.string(p.t["ETE/oC"]) },
                                    { onClick: h, variant: "critical-primary", text: p.intl.string(p.t.mjB9pd) },
                                ],
                            });
                        };
                    });
                },
                color: "danger",
            });
        },
    },
);
