n.d(t, { Z: () => a }), n(953529);
var s = n(255367);
n(73800);
var r = n(481060),
    l = n(388032),
    i = n(652297);
function a(e) {
    let { email: t, onClose: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(r.xBx, {
                separator: !1,
                className: i.header,
                children: [
                    (0, s.jsx)(r.X6q, {
                        className: i.title,
                        variant: 'heading-xl/semibold',
                        children: l.intl.string(l.t['8O+nFx'])
                    }),
                    (0, s.jsx)(r.olH, {
                        onClick: n,
                        className: i.modalCloseButton
                    })
                ]
            }),
            (0, s.jsx)(r.hzk, {
                className: i.content,
                children: (0, s.jsx)(r.Text, {
                    className: i.description,
                    variant: 'text-md/normal',
                    children: l.intl.format(l.t.Zvx0Oz, { email: t })
                })
            }),
            (0, s.jsx)(r.hzk, {
                className: i.content,
                children: (0, s.jsx)(r.Text, {
                    className: i.tooltip,
                    variant: 'text-sm/normal',
                    children: l.intl.string(l.t.yb7itb)
                })
            }),
            (0, s.jsx)(r.mzw, {
                className: i.modalFooter,
                children: (0, s.jsx)(r.zxk, {
                    className: i.__invalid_submit,
                    color: r.zxk.Colors.BRAND,
                    size: r.zxk.Sizes.MEDIUM,
                    onClick: n,
                    children: l.intl.string(l.t.BddRzc)
                })
            })
        ]
    });
}
