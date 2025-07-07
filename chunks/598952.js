n.d(t, { Z: () => o });
var a = n(255367);
n(73800);
var r = n(481060),
    l = n(170086);
function o(e) {
    var t;
    let { attachment: n } = e,
        o = Math.round(((null != (t = n.size) ? t : 0) / 1024 / 1024) * 100) / 100;
    return (0, a.jsxs)('div', {
        className: l.container,
        children: [
            (0, a.jsx)(r.ZKT, {
                size: 'xs',
                color: 'currentColor',
                className: l.fileIcon
            }),
            (0, a.jsx)(r.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)(r.Text, {
                variant: 'text-sm/normal',
                color: 'text-default',
                className: l.fileName,
                children: n.filename
            }),
            (0, a.jsx)(r.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)('div', { className: l.dot }),
            (0, a.jsx)(r.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsxs)(r.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [o, 'MB']
            })
        ]
    });
}
