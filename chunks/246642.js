n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    o = n(44315),
    a = n(641033),
    s = n(989830),
    l = n(388032),
    c = n(931251);
function u(e) {
    let { channelId: t } = e,
        n = (0, s.Z)(t);
    if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
    let { multiplier: u } = n,
        { color: d } = (0, a.yz)(u);
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                children: l.NW.string(l.t.Jr2519)
            }),
            (0, r.jsx)(i.Exd, {
                foregroundColor: (0, o.Lq)(d),
                className: c.progress,
                size: i.Exd.Sizes.LARGE,
                percent: 100 * (0, a.nc)(n),
                animate: !0
            })
        ]
    });
}
