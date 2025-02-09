n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(44315),
    s = n(641033),
    o = n(989830),
    l = n(388032),
    u = n(283050);
function c(e) {
    let { channelId: t } = e,
        n = (0, o.Z)(t);
    if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
    let { multiplier: c } = n,
        { color: d } = (0, s.yz)(c);
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            (0, i.jsx)(r.Text, {
                variant: 'text-xs/normal',
                children: l.intl.string(l.t.Jr2519)
            }),
            (0, i.jsx)(r.Exd, {
                foregroundColor: (0, a.Lq)(d),
                className: u.progress,
                size: r.Exd.Sizes.LARGE,
                percent: 100 * (0, s.nc)(n),
                animate: !0
            })
        ]
    });
}
