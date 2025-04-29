n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(600164),
    o = n(112560),
    a = n(296665);
function s(e) {
    let { mainText: t, supportingText: n, errorCodeText: s, children: l, size: c } = e;
    return (0, r.jsxs)(i.Z, {
        className: a.root,
        justify: i.Z.Justify.CENTER,
        align: i.Z.Align.CENTER,
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, r.jsx)(o.Z, {
                header: t,
                description: n,
                errorCodeMessage: s,
                size: c
            }),
            l
        ]
    });
}
