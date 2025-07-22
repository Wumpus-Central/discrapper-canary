(n.d(t, { Z: () => f }), n(388685), n(953529));
var r = n(255367),
    o = n(793030),
    i = n(755721),
    s = n(481060),
    l = n(434404),
    a = n(485386),
    c = n(944888),
    u = n(234368),
    d = n(981631),
    p = n(921944),
    m = n(808353);
function f(e) {
    let { guildId: t, perk: n, markAsDismissed: f } = e,
        _ = u._k[n],
        x = async () => {
            let e = null;
            for (let n of Object.values(a.Z.getRoles(t))) (0, c.YB)(n) && (e = n.id);
            (await l.Z.open(t, d.pNK.ROLES), null !== e && (await l.Z.selectRole(e)), f(p.L.SECONDARY));
        };
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: _.assetUrl,
                className: m.image
            }),
            (0, r.jsx)(s.olH, {
                className: m.close,
                innerClassName: m.innerClose,
                onClick: () => {
                    f(p.L.USER_DISMISS);
                }
            }),
            (0, r.jsx)(o.xv, {
                color: 'text-primary',
                variant: 'text-md/semibold',
                children: _.title
            }),
            (0, r.jsx)(o.xv, {
                className: m.description,
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: _.description
            }),
            (0, r.jsx)(i.zx, {
                className: m.button,
                onClick: x,
                children: _.cta
            })
        ]
    });
}
