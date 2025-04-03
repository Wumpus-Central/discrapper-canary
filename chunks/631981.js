r.d(t, { default: () => f });
var n = r(200651);
r(192379);
var c = r(442837),
    o = r(481060),
    i = r(239091),
    a = r(883385),
    u = r(853856),
    l = r(117984),
    s = r(981631),
    b = r(388032);
let f = (0, a.Z)(
    function (e) {
        let { onSelect: t } = e,
            r = (0, c.e7)([u.Z], () => u.Z.favoriteServerMuted);
        return (0, n.jsx)(o.v2r, {
            navId: 'favorite-server-context',
            onClose: i.Zy,
            'aria-label': b.NW.string(b.t.liqwPD),
            onSelect: t,
            children: (0, n.jsx)(o.kSQ, {
                children: (0, n.jsx)(o.S89, {
                    id: 'mute-server',
                    label: b.NW.string(b.t.vRzp7O),
                    action: () => (0, l._Z)(),
                    checked: r
                })
            })
        });
    },
    { object: s.qAy.CONTEXT_MENU }
);
