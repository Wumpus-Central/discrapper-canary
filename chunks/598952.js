n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(170086);
function s(e) {
    var t;
    let { attachment: n } = e,
        s = Math.round(((null != (t = n.size) ? t : 0) / 1024 / 1024) * 100) / 100;
    return (0, r.jsxs)('div', {
        className: i.container,
        children: [
            (0, r.jsx)(a.ZKT, {
                size: 'xs',
                color: 'currentColor',
                className: i.fileIcon
            }),
            (0, r.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)(a.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: i.fileName,
                children: n.filename
            }),
            (0, r.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsx)('div', { className: i.dot }),
            (0, r.jsx)(a.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, r.jsxs)(a.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [s, 'MB']
            })
        ]
    });
}
