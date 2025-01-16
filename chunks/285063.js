r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(916752),
    o = r(665162);
function l(e) {
    let { node: n } = e,
        r = (0, s.Z)(n);
    return (0, i.jsx)(a.Tooltip, {
        text: n.full,
        tooltipClassName: o.timestampTooltip,
        children: (e) =>
            (0, i.jsx)('span', {
                ...e,
                className: o.timestamp,
                children: r
            })
    });
}
