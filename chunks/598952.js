e.d(n, {
    Z: function () {
        return r;
    }
});
var a = e(200651);
e(192379);
var o = e(481060),
    i = e(746163);
function r(t) {
    var n;
    let { attachment: e } = t,
        r = Math.round(((null !== (n = e.size) && void 0 !== n ? n : 0) / 1024 / 1024) * 100) / 100;
    return (0, a.jsxs)('div', {
        className: i.container,
        children: [
            (0, a.jsx)(o.ImageFileIcon, {
                size: 'xs',
                color: 'currentColor',
                className: i.fileIcon
            }),
            (0, a.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-normal',
                className: i.fileName,
                children: e.filename
            }),
            (0, a.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsx)('div', { className: i.dot }),
            (0, a.jsx)(o.Spacer, {
                size: 8,
                horizontal: !0
            }),
            (0, a.jsxs)(o.Text, {
                variant: 'text-sm/normal',
                color: 'text-muted',
                children: [r, 'MB']
            })
        ]
    });
}
