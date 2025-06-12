n.d(t, { v: () => o }), n(953529);
var i = n(255367);
n(73800);
var r = n(481060),
    s = n(921944),
    l = n(388032),
    a = n(443257);
function o(e) {
    let { markAsDismissed: t, onCTA: n } = e;
    return (0, i.jsx)('div', {
        className: a.popup,
        children: (0, i.jsxs)('div', {
            className: a.content,
            children: [
                (0, i.jsx)(r.P3F, {
                    className: a.closeIcon,
                    onClick: () => t(s.L.USER_DISMISS),
                    children: (0, i.jsx)(r.Dio, { size: 'xs' })
                }),
                (0, i.jsx)(r.Text, {
                    className: a.description,
                    variant: 'text-md/normal',
                    children: l.intl.string(l.t['Ny/0ur'])
                }),
                (0, i.jsx)(r.zxk, {
                    color: r.zxk.Colors.BRAND,
                    look: r.zxk.Looks.FILLED,
                    size: r.zxk.Sizes.SMALL,
                    fullWidth: !0,
                    onClick: () => {
                        t(s.L.TAKE_ACTION), n();
                    },
                    children: l.intl.string(l.t.TYo739)
                })
            ]
        })
    });
}
