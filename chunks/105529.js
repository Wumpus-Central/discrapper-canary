(n.d(t, { Z: () => _ }), n(388685), n(953529));
var r = n(255367),
    o = n(793030),
    i = n(755721),
    s = n(481060),
    a = n(434404),
    l = n(485386),
    c = n(944888),
    u = n(234368),
    d = n(981631),
    p = n(921944),
    m = n(808353);
function _(e) {
    let { guildId: t, perk: n, markAsDismissed: _ } = e,
        f = u._k[n],
        x = async () => {
            let e = null;
            for (let n of Object.values(l.Z.getRoles(t))) (0, c.YB)(n) && (e = n.id);
            (await a.Z.open(t, d.pNK.ROLES), null !== e && (await a.Z.selectRole(e)), _(p.L.SECONDARY));
        };
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: f.assetUrl,
                className: m.image
            }),
            (0, r.jsx)(s.olH, {
                className: m.close,
                innerClassName: m.innerClose,
                onClick: () => {
                    _(p.L.USER_DISMISS);
                }
            }),
            (0, r.jsx)(o.xv, {
                color: 'text-primary',
                variant: 'text-md/semibold',
                children: f.title
            }),
            (0, r.jsx)(o.xv, {
                className: m.description,
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: f.description
            }),
            (0, r.jsx)(i.zx, {
                className: m.button,
                onClick: x,
                children: f.cta
            })
        ]
    });
}
