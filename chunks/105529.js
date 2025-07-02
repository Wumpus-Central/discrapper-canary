(t.d(n, { Z: () => p }), t(388685), t(953529));
var r = t(255367),
    i = t(793030),
    o = t(481060),
    a = t(434404),
    s = t(485386),
    l = t(944888),
    c = t(234368),
    d = t(981631),
    u = t(921944),
    m = t(808353);
function p(e) {
    let { guildId: n, perk: t, markAsDismissed: p } = e,
        _ = c._[t];
    return (0, r.jsxs)('div', {
        className: m.container,
        children: [
            (0, r.jsx)('img', {
                alt: '',
                src: _.assetUrl,
                className: m.image
            }),
            (0, r.jsx)(o.olH, {
                className: m.close,
                innerClassName: m.innerClose,
                onClick: () => {
                    p(u.L.USER_DISMISS);
                }
            }),
            (0, r.jsx)(i.xv, {
                color: 'always-white',
                variant: 'text-md/semibold',
                children: _.title
            }),
            (0, r.jsx)(i.xv, {
                className: m.description,
                color: 'text-muted',
                variant: 'text-sm/medium',
                children: _.description
            }),
            (0, r.jsx)(o.zxk, {
                className: m.button,
                onClick: () => {
                    let e = null;
                    for (let t of Object.values(s.Z.getRoles(n))) (0, l.YB)(t) && (e = t.id);
                    (a.Z.open(n, d.pNK.ROLES), null !== e && a.Z.selectRole(e), p(u.L.SECONDARY));
                },
                children: _.cta
            })
        ]
    });
}
