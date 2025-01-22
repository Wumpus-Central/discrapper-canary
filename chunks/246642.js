r.d(n, {
    Z: function () {
        return d;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    o = r(44315),
    s = r(641033),
    l = r(989830),
    u = r(388032),
    c = r(371611);
function d(e) {
    let { channelId: n } = e,
        r = (0, l.Z)(n);
    if (!(null != r && (r.value > 0 || (null == r ? void 0 : r.multiplier) > 1))) return null;
    let { multiplier: d } = r,
        { color: f } = (0, s.yz)(d);
    return (0, i.jsxs)('div', {
        className: c.container,
        children: [
            (0, i.jsx)(a.Text, {
                variant: 'text-xs/normal',
                children: u.intl.string(u.t.Jr2519)
            }),
            (0, i.jsx)(a.Progress, {
                foregroundColor: (0, o.Lq)(f),
                className: c.progress,
                size: a.Progress.Sizes.LARGE,
                percent: 100 * (0, s.nc)(r),
                animate: !0
            })
        ]
    });
}
