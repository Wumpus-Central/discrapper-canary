i.d(e, { Z: () => u });
var n = i(255367);
i(73800);
var r = i(481060),
    s = i(44315),
    o = i(641033),
    l = i(989830),
    a = i(388032),
    d = i(931251);
function u(t) {
    let { channelId: e } = t,
        i = (0, l.Z)(e);
    if (!(null != i && (i.value > 0 || (null == i ? void 0 : i.multiplier) > 1))) return null;
    let { multiplier: u } = i,
        { color: c } = (0, o.yz)(u);
    return (0, n.jsxs)('div', {
        className: d.container,
        children: [
            (0, n.jsx)(r.Text, {
                variant: 'text-xs/normal',
                children: a.intl.string(a.t.Jr2519)
            }),
            (0, n.jsx)(r.Exd, {
                foregroundColor: (0, s.Lq)(c),
                className: d.progress,
                size: r.Exd.Sizes.LARGE,
                percent: 100 * (0, o.nc)(i),
                animate: !0
            })
        ]
    });
}
