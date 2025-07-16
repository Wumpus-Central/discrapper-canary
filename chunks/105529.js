(n.d(t, { Z: () => _ }), n(388685), n(953529));
var r = n(255367),
    i = n(793030),
    o = n(755721),
    a = n(481060),
    s = n(434404),
    l = n(485386),
    c = n(944888),
    d = n(234368),
    u = n(981631),
    p = n(921944),
    m = n(808353);
function _(e) {
    let { guildId: t, perk: n, markAsDismissed: _ } = e,
        f = d._[n],
        x = async () => {
            let e = null;
            for (let n of Object.values(l.Z.getRoles(t))) (0, c.YB)(n) && (e = n.id);
            (await s.Z.open(t, u.pNK.ROLES), null !== e && (await s.Z.selectRole(e)), _(p.L.SECONDARY));
        };
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: f.assetUrl,
                className: m.image
            }),
            (0, r.jsx)(a.olH, {
                className: m.close,
                innerClassName: m.innerClose,
                onClick: () => {
                    _(p.L.USER_DISMISS);
                }
            }),
            (0, r.jsx)(i.xv, {
                color: 'text-primary',
                variant: 'text-md/semibold',
                children: f.title
            }),
            (0, r.jsx)(i.xv, {
                className: m.description,
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: f.description
            }),
            (0, r.jsx)(o.zx, {
                className: m.button,
                onClick: x,
                children: f.cta
            })
        ]
    });
}
