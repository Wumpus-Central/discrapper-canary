(t.d(n, { Z: () => _ }), t(388685), t(953529));
var r = t(255367),
    i = t(793030),
    o = t(755721),
    a = t(481060),
    s = t(434404),
    l = t(485386),
    c = t(944888),
    d = t(234368),
    u = t(981631),
    m = t(921944),
    p = t(808353);
function _(e) {
    let { guildId: n, perk: t, markAsDismissed: _ } = e,
        f = d._[t],
        x = async () => {
            let e = null;
            for (let t of Object.values(l.Z.getRoles(n))) (0, c.YB)(t) && (e = t.id);
            (await s.Z.open(n, u.pNK.ROLES), null !== e && (await s.Z.selectRole(e)), _(m.L.SECONDARY));
        };
    return (0, r.jsxs)('div', {
        className: p.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: f.assetUrl,
                className: p.image
            }),
            (0, r.jsx)(a.olH, {
                className: p.close,
                innerClassName: p.innerClose,
                onClick: () => {
                    _(m.L.USER_DISMISS);
                }
            }),
            (0, r.jsx)(i.xv, {
                color: 'text-primary',
                variant: 'text-md/semibold',
                children: f.title
            }),
            (0, r.jsx)(i.xv, {
                className: p.description,
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: f.description
            }),
            (0, r.jsx)(o.zx, {
                className: p.button,
                onClick: x,
                children: f.cta
            })
        ]
    });
}
