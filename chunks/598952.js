n.d(e, { Z: () => l });
var r = n(200651);
n(192379);
var a = n(481060),
    o = n(170086);
function l(t) {
    var e;
    let { attachment: n } = t,
        l = Math.round(((null != (e = n.size) ? e : 0) / 1024 / 1024) * 100) / 100;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(a.ZKT, {
                size: 'xs',
                color: 'currentColor',
                className: o.fileIcon
            }),
            (0, r.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: o.fileName,
                children: n.filename
            }),
            (0, r.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)('div', { className: o.dot }),
            (0, r.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsxs)(a.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [l, 'MB']
            })
        ]
    });
}
