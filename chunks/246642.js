i.d(e, { Z: () => c });
var n = i(951288);
i(647438);
var r = i(481060),
    s = i(44315),
    o = i(641033),
    l = i(989830),
    a = i(388032),
    d = i(617296);
function c(t) {
    let { channelId: e } = t,
        i = (0, l.Z)(e);
    if (!(null != i && (i.value > 0 || (null == i ? void 0 : i.multiplier) > 1))) return null;
    let { multiplier: c } = i,
        { color: u } = (0, o.yz)(c);
    return (0, n.jsxs)("div", {
        className: d.container,
        children: [
            (0, n.jsx)(r.Text, {
                variant: "text-xs/normal",
                children: a.intl.string(a.t.Jr2519),
            }),
            (0, n.jsx)(r.Exd, {
                foregroundColor: (0, s.Lq)(u),
                className: d.progress,
                size: r.Exd.Sizes.LARGE,
                percent: 100 * (0, o.nc)(i),
                animate: !0,
            }),
        ],
    });
}
