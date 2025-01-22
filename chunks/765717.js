r.d(n, {
    Z: function () {
        return l;
    }
});
var i = r(200651);
r(192379);
var a = r(512969),
    o = r(990547),
    s = r(213609);
function l(e) {
    var n;
    let { impressionName: r, impressionProperties: l, disableTrack: u, ...c } = e,
        d = l;
    return (
        'function' == typeof d && (d = d(c)),
        (0, s.Z)(
            {
                type: o.ImpressionTypes.PAGE,
                name: r,
                properties: d
            },
            { disableTrack: u },
            [null === (n = c.location) || void 0 === n ? void 0 : n.pathname]
        ),
        (0, i.jsx)(a.AW, { ...c })
    );
}
