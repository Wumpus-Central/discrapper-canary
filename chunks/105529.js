n.d(t, { Z: () => m }), n(953529);
var r = n(255367),
    o = n(793030),
    i = n(755721),
    l = n(481060),
    s = n(434404),
    a = n(485386),
    c = n(944888),
    u = n(234368),
    d = n(981631),
    p = n(921944),
    f = n(808353);
function m(e) {
    let { guildId: t, perk: n, markAsDismissed: m } = e,
        g = u._k[n],
        x = async () => {
            let e = a.Z.getSortedRoles(t).find(c.YB);
            await s.Z.open(t, d.pNK.ROLES), null != e && (await s.Z.selectRole(e.id)), m(p.L.SECONDARY);
        };
    return (0, r.jsxs)("div", {
        className: f.container,
        children: [
            (0, r.jsx)("img", {
                alt: "",
                src: g.assetUrl,
                className: f.image,
            }),
            (0, r.jsx)(l.olH, {
                className: f.close,
                innerClassName: f.innerClose,
                onClick: () => {
                    m(p.L.USER_DISMISS);
                },
            }),
            (0, r.jsx)(o.xv, {
                color: "text-primary",
                variant: "text-md/semibold",
                children: g.title,
            }),
            (0, r.jsx)(o.xv, {
                className: f.description,
                color: "text-muted",
                variant: "text-sm/medium",
                children: g.description,
            }),
            (0, r.jsx)(i.zx, {
                className: f.button,
                onClick: x,
                children: g.cta,
            }),
        ],
    });
}
