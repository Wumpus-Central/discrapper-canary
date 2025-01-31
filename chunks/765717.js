n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var r = n(512969),
    a = n(990547),
    s = n(213609);
function o(e) {
    var t;
    let { impressionName: n, impressionProperties: o, disableTrack: l, ...u } = e,
        c = o;
    return (
        'function' == typeof c && (c = c(u)),
        (0, s.Z)(
            {
                type: a.ImpressionTypes.PAGE,
                name: n,
                properties: c
            },
            { disableTrack: l },
            [null === (t = u.location) || void 0 === t ? void 0 : t.pathname]
        ),
        (0, i.jsx)(r.AW, { ...u })
    );
}
