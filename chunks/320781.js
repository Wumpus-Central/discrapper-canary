(n.d(t, { Z: () => _ }), n(388685));
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(471445),
    s = n(456269),
    l = n(660189),
    c = n(257511),
    u = n(967128),
    d = n(388032),
    f = n(25949);
function _(e) {
    var t;
    let { channel: n } = e,
        _ = (0, s.eV)(n),
        { firstMessage: p } = (0, i.cj)([l.Z], () => l.Z.getMessage(n.id)),
        h = new Set((0, s.kn)(n, _)),
        m = null != (t = (0, a.KS)(n)) ? t : o.kBi;
    return (0, r.jsxs)(u.ZP, {
        channelId: n.id,
        className: f.container,
        children: [
            (0, r.jsx)('div', {
                className: f.iconWrapper,
                children: (0, r.jsx)(m, {
                    className: f.icon,
                    strokeWidth: 1.75
                })
            }),
            (0, r.jsx)(u.Ot, {
                className: f.header,
                children: n.name
            }),
            null == p &&
                (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    color: 'header-secondary',
                    children: d.intl.string(d.t.mE3KJC)
                }),
            (0, r.jsx)(c.Z, {
                appliedTags: h,
                wrap: n.isModeratorReportChannel()
            })
        ]
    });
}
