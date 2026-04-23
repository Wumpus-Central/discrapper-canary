n.d(e, { A: () => E });
var l = n(627968);
n(64700);
var i = n(17928),
    r = n(192308),
    a = n(477782),
    d = n(931991),
    s = n(849736),
    u = n(698441),
    o = n(496092),
    c = n(988794),
    g = n(985018);
function E(t, e, E) {
    let { canManageGuildEvent: A } = (0, d.nr)(E ?? e),
        m = (0, i.bG)([u.Ay], () => u.Ay.isActive(t)),
        f = (0, i.bG)([u.Ay], () => u.Ay.getGuildScheduledEvent(t), [t]),
        y = A(f);
    if (null == t || !y || !m || f?.entity_type === c.Ps.EXTERNAL) return null;
    let _ = () => {
        E?.isGuildStageVoice() ? (0, s.OE)(E) : null != t && o.A.endEvent(t, e.id), (0, r.closeAllModals)();
    };
    return (0, l.jsx)(a.Dr, {
        id: g.intl.string(g.t.qaYzPA),
        label: g.intl.string(g.t.qaYzPA),
        action: function () {
            (0, r.openModalLazy)(async () => {
                let { Modal: t } = await n.e("4823").then(n.bind(n, 158954));
                return (e) => {
                    let { onClose: n, transitionState: i } = e;
                    return (0, l.jsx)(t, {
                        transitionState: i,
                        title: g.intl.string(g.t.qaYzPA),
                        subtitle: g.intl.string(g.t.bnDQ7E),
                        onClose: n,
                        actions: [
                            { onClick: n, variant: "secondary", text: g.intl.string(g.t["ETE/oC"]) },
                            { onClick: _, variant: "critical-primary", text: g.intl.string(g.t.mjB9pd) },
                        ],
                    });
                };
            });
        },
        color: "danger",
    });
}
