n.d(t, { Z: () => p }), n(47120);
var i = n(200651);
n(192379);
var l = n(442837),
    a = n(481060),
    r = n(471445),
    s = n(456269),
    o = n(660189),
    c = n(257511),
    d = n(967128),
    u = n(388032),
    h = n(577612);
function p(e) {
    var t;
    let { channel: n } = e,
        p = (0, s.eV)(n),
        { firstMessage: m } = (0, l.cj)([o.Z], () => o.Z.getMessage(n.id)),
        f = new Set((0, s.kn)(n, p)),
        g = null !== (t = (0, r.KS)(n)) && void 0 !== t ? t : a.kBi;
    return (0, i.jsxs)(d.ZP, {
        channelId: n.id,
        className: h.container,
        children: [
            (0, i.jsx)('div', {
                className: h.iconWrapper,
                children: (0, i.jsx)(g, {
                    className: h.icon,
                    strokeWidth: 1.75
                })
            }),
            (0, i.jsx)(d.Ot, {
                className: h.header,
                children: n.name
            }),
            null == m &&
                (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: u.intl.string(u.t.mE3KJC)
                }),
            (0, i.jsx)(c.Z, { appliedTags: f })
        ]
    });
}
