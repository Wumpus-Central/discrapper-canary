n.d(e, { A: () => E });
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(931991),
    d = n(849736),
    s = n(698441),
    u = n(496092),
    o = n(988794),
    c = n(985018);
function E(t, e, E) {
    let { canManageGuildEvent: A } = (0, a.nr)(E ?? e),
        g = (0, i.bG)([s.Ay], () => s.Ay.isActive(t)),
        _ = (0, i.bG)([s.Ay], () => s.Ay.getGuildScheduledEvent(t), [t]),
        h = A(_);
    if (null == t || !h || !g || _?.entity_type === o.Ps.EXTERNAL) return null;
    let T = () => {
        E?.isGuildStageVoice() ? (0, d.OE)(E) : null != t && u.A.endEvent(t, e.id), (0, r.s7G)();
    };
    return (0, l.jsx)(r.Drp, {
        id: c.intl.string(c.t.qaYzPA),
        label: c.intl.string(c.t.qaYzPA),
        action: function () {
            (0, r.mMO)(async () => {
                let { Modal: t } = await Promise.resolve().then(n.bind(n, 158954));
                return (e) => {
                    let { onClose: n, transitionState: i } = e;
                    return (0, l.jsx)(t, {
                        transitionState: i,
                        title: c.intl.string(c.t.qaYzPA),
                        subtitle: c.intl.string(c.t.bnDQ7E),
                        onClose: n,
                        actions: [
                            { onClick: n, variant: "secondary", text: c.intl.string(c.t["ETE/oC"]) },
                            { onClick: T, variant: "critical-primary", text: c.intl.string(c.t.mjB9pd) },
                        ],
                    });
                };
            });
        },
        color: "danger",
    });
}
