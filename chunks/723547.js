(n.d(t, { v: () => o }), n(953529));
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921944),
    a = n(388032),
    l = n(443257);
function o(e) {
    let { markAsDismissed: t, onCTA: n } = e;
    return (0, i.jsx)('div', {
        className: l.popup,
        children: (0, i.jsxs)('div', {
            className: l.content,
            children: [
                (0, i.jsx)(r.P3F, {
                    className: l.closeIcon,
                    onClick: () => t(s.L.USER_DISMISS),
                    children: (0, i.jsx)(r.Dio, { size: 'xs' })
                }),
                (0, i.jsx)(r.Text, {
                    className: l.description,
                    variant: 'text-md/normal',
                    children: a.intl.string(a.t['Ny/0ur'])
                }),
                (0, i.jsx)(r.zxk, {
                    variant: 'primary',
                    size: 'sm',
                    text: a.intl.string(a.t.TYo739),
                    fullWidth: !0,
                    onClick: () => {
                        (t(s.L.TAKE_ACTION), n());
                    }
                })
            ]
        })
    });
}
