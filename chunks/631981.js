n.d(t, { default: () => p });
var r = n(200651);
n(192379);
var c = n(442837),
    i = n(481060),
    o = n(239091),
    a = n(883385),
    s = n(853856),
    l = n(117984),
    u = n(981631),
    d = n(388032);
let p = (0, a.Z)(
    function (e) {
        let { onSelect: t } = e,
            n = (0, c.e7)([s.Z], () => s.Z.favoriteServerMuted);
        return (0, r.jsx)(i.v2r, {
            navId: 'favorite-server-context',
            onClose: o.Zy,
            'aria-label': d.intl.string(d.t.liqwPD),
            onSelect: t,
            children: (0, r.jsx)(i.kSQ, {
                children: (0, r.jsx)(i.S89, {
                    id: 'mute-server',
                    label: d.intl.string(d.t.vRzp7O),
                    action: () => (0, l._Z)(),
                    checked: n
                })
            })
        });
    },
    { object: u.qAy.CONTEXT_MENU }
);
