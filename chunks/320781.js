n.d(t, { Z: () => f }), n(388685);
var i = n(54381);
n(473749);
var r = n(442837),
    l = n(481060),
    a = n(471445),
    o = n(456269),
    s = n(660189),
    c = n(257511),
    u = n(967128),
    d = n(388032),
    p = n(966635);
function f(e) {
    var t;
    let { channel: n } = e,
        f = (0, o.eV)(n),
        { firstMessage: h } = (0, r.cj)([s.Z], () => s.Z.getMessage(n.id)),
        m = new Set((0, o.kn)(n, f)),
        g = null != (t = (0, a.KS)(n)) ? t : l.kBi;
    return (0, i.jsxs)(u.ZP, {
        channelId: n.id,
        className: p.container,
        children: [
            (0, i.jsx)("div", {
                className: p.iconWrapper,
                children: (0, i.jsx)(g, {
                    className: p.icon,
                    strokeWidth: 1.75,
                }),
            }),
            (0, i.jsx)(u.Ot, {
                className: p.header,
                children: n.name,
            }),
            null == h &&
                (0, i.jsx)(l.Text, {
                    variant: "text-md/normal",
                    color: "text-default",
                    children: d.intl.string(d.t.mE3KJN),
                }),
            (0, i.jsx)(c.Z, {
                appliedTags: m,
                wrap: n.isModeratorReportChannel(),
            }),
        ],
    });
}
