n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var l = n(239091),
    r = n(396828),
    o = n(703656),
    a = n(434479),
    s = n(981631),
    c = n(176505),
    d = n(388032);
function u(e) {
    let { guild: t, selected: u } = e;
    return (0, i.jsx)(a.m, {
        id: 'subscriptions-'.concat(t.id),
        renderIcon: (e) => (0, i.jsx)(r.Z, { className: e }),
        text: d.intl.string(d.t['KzCF//']),
        selected: u,
        onClick: () => {
            (0, o.uL)(s.Z5c.CHANNEL(t.id, c.oC.ROLE_SUBSCRIPTIONS));
        },
        onContextMenu: (e) => {
            null != t &&
                (0, l.jW)(e, async () => {
                    let { default: e } = await n.e('28249').then(n.bind(n, 613329));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
        }
    });
}
