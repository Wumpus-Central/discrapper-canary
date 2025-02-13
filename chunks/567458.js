n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(921944),
    a = n(388032),
    s = n(18918);
function o(e) {
    let { markAsDismissed: t } = e;
    return (0, i.jsxs)('div', {
        className: s.container,
        children: [
            (0, i.jsx)('div', { className: s.pointer }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                className: s.content,
                children: a.intl.string(a.t.rdzeVF)
            }),
            (0, i.jsx)(l.zxk, {
                color: l.zxk.Colors.BRAND_INVERTED,
                fullWidth: !0,
                onClick: () => {
                    t(r.L.AUTO);
                },
                children: a.intl.string(a.t['NX+WJC'])
            })
        ]
    });
}
