n.d(e, { Z: () => o });
var a = n(200651);
n(192379);
var i = n(481060),
    l = n(746163);
function o(t) {
    var e;
    let { attachment: n } = t,
        o = Math.round(((null !== (e = n.size) && void 0 !== e ? e : 0) / 1024 / 1024) * 100) / 100;
    return (0, a.jsxs)('div', {
        className: l.container,
        children: [
            (0, a.jsx)(i.ZKT, {
                size: 'xs',
                color: 'currentColor',
                className: l.fileIcon
            }),
            (0, a.jsx)(i.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)(i.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: l.fileName,
                children: n.filename
            }),
            (0, a.jsx)(i.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)('div', { className: l.dot }),
            (0, a.jsx)(i.LZC, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsxs)(i.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [o, 'MB']
            })
        ]
    });
}
