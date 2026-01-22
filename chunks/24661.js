n.d(e, { A: () => g });
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    u = n(931991),
    o = n(849736),
    a = n(698441),
    c = n(496092),
    s = n(988794),
    d = n(985018);
function g(t, e, g) {
    let { canManageGuildEvent: y } = (0, u.nr)(null != g ? g : e),
        f = (0, r.bG)([a.Ay], () => a.Ay.isActive(t)),
        b = (0, r.bG)([a.Ay], () => a.Ay.getGuildScheduledEvent(t), [t]),
        p = y(b);
    if (null == t || !p || !f || (null == b ? void 0 : b.entity_type) === s.Ps.EXTERNAL) return null;
    let A = () => {
        (null == g ? void 0 : g.isGuildStageVoice()) ? (0, o.OE)(g) : null != t && c.A.endEvent(t, e.id), (0, i.s7G)();
    };
    return (0, l.jsx)(i.Drp, {
        id: d.intl.string(d.t.qaYzPA),
        label: d.intl.string(d.t.qaYzPA),
        action: function () {
            (0, i.mMO)(async () => {
                let { Modal: t } = await Promise.resolve().then(n.bind(n, 158954));
                return (e) => {
                    let { onClose: n, transitionState: r } = e;
                    return (0, l.jsx)(t, {
                        transitionState: r,
                        title: d.intl.string(d.t.qaYzPA),
                        subtitle: d.intl.string(d.t.bnDQ7E),
                        onClose: n,
                        actions: [
                            {
                                onClick: n,
                                variant: "secondary",
                                text: d.intl.string(d.t["ETE/oC"]),
                            },
                            {
                                onClick: A,
                                variant: "critical-primary",
                                text: d.intl.string(d.t.mjB9pd),
                            },
                        ],
                    });
                };
            });
        },
        color: "danger",
    });
}
