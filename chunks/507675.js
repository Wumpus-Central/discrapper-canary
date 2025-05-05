n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var i = n(600164),
    a = n(112560),
    o = n(296665);
function s(e) {
    let { mainText: t, supportingText: n, errorCodeText: s, children: l, size: c } = e;
    return (0, r.jsxs)(i.Z, {
        className: o.root,
        justify: i.Z.Justify.CENTER,
        align: i.Z.Align.CENTER,
        direction: i.Z.Direction.VERTICAL,
        children: [
            (0, r.jsx)(a.Z, {
                header: t,
                description: n,
                errorCodeMessage: s,
                size: c
            }),
            l
        ]
    });
}
