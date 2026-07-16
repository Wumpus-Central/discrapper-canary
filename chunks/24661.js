i.d(n, { A: () => A });
var e = i(627968);
i(64700);
var l = i(17928),
    a = i(192308),
    r = i(477782),
    s = i(931991),
    c = i(849736),
    o = i(698441),
    d = i(496092),
    u = i(988794),
    p = i(375708);
function A(t, n, A) {
    let { canManageGuildEvent: y } = (0, s.nr)(A ?? n),
        g = (0, l.bG)([o.Ay], () => o.Ay.isActive(t)),
        b = (0, l.bG)([o.Ay], () => o.Ay.getGuildScheduledEvent(t), [t]),
        E = y(b);
    if (null == t || !E || !g || b?.entity_type === u.Ps.EXTERNAL) return null;
    function h() {
        A?.isGuildStageVoice() ? (0, c.OE)(A) : null != t && d.default.endEvent(t, n.id), (0, a.closeAllModals)();
    }
    return (0, e.jsx)(r.Dr, {
        id: p.intl.string(p.t.qaYzPA),
        label: p.intl.string(p.t.qaYzPA),
        action: function () {
            (0, a.openModalLazy)(async () => {
                let { Modal: t } = await i.e("4823").then(i.bind(i, 158954));
                return (n) => {
                    let { onClose: i, transitionState: l } = n;
                    return (0, e.jsx)(t, {
                        transitionState: l,
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
}
