n.d(t, { Z: () => h }), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    o = n(471445),
    a = n(456269),
    s = n(660189),
    c = n(257511),
    u = n(967128),
    d = n(388032),
    p = n(25949);
function h(e) {
    var t;
    let { channel: n } = e,
        h = (0, a.eV)(n),
        { firstMessage: f } = (0, i.cj)([s.Z], () => s.Z.getMessage(n.id)),
        m = new Set((0, a.kn)(n, h)),
        g = null != (t = (0, o.KS)(n)) ? t : l.kBi;
    return (0, r.jsxs)(u.ZP, {
        channelId: n.id,
        className: p.container,
        children: [
            (0, r.jsx)('div', {
                className: p.iconWrapper,
                children: (0, r.jsx)(g, {
                    className: p.icon,
                    strokeWidth: 1.75
                })
            }),
            (0, r.jsx)(u.Ot, {
                className: p.header,
                children: n.name
            }),
            null == f &&
                (0, r.jsx)(l.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: d.NW.string(d.t.mE3KJC)
                }),
            (0, r.jsx)(c.Z, { appliedTags: m })
        ]
    });
}
