n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    a = n(44315),
    o = n(641033),
    s = n(989830),
    l = n(388032),
    c = n(931251);
function u(e) {
    let { channelId: t } = e,
        n = (0, s.Z)(t);
    if (!(null != n && (n.value > 0 || (null == n ? void 0 : n.multiplier) > 1))) return null;
    let { multiplier: u } = n,
        { color: d } = (0, o.yz)(u);
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-xs/normal',
                children: l.intl.string(l.t.Jr2519)
            }),
            (0, r.jsx)(i.Exd, {
                foregroundColor: (0, a.Lq)(d),
                className: c.progress,
                size: i.Exd.Sizes.LARGE,
                percent: 100 * (0, o.nc)(n),
                animate: !0
            })
        ]
    });
}
