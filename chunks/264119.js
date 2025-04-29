s.d(t, { Z: () => a }), s(953529);
var n = s(255367);
s(73800);
var r = s(481060),
    l = s(388032),
    i = s(652297);
function a(e) {
    let { email: t, onClose: s } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.xBx, {
                separator: !1,
                className: i.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        className: i.title,
                        variant: 'heading-xl/semibold',
                        children: l.intl.string(l.t['8O+nFx'])
                    }),
                    (0, n.jsx)(r.olH, {
                        onClick: s,
                        className: i.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(r.hzk, {
                className: i.content,
                children: (0, n.jsx)(r.Text, {
                    className: i.description,
                    variant: 'text-md/normal',
                    children: l.intl.format(l.t.Zvx0Oz, { email: t })
                })
            }),
            (0, n.jsx)(r.hzk, {
                className: i.content,
                children: (0, n.jsx)(r.Text, {
                    className: i.tooltip,
                    variant: 'text-sm/normal',
                    children: l.intl.string(l.t.yb7itb)
                })
            }),
            (0, n.jsx)(r.mzw, {
                className: i.modalFooter,
                children: (0, n.jsx)(r.zxk, {
                    className: i.__invalid_submit,
                    color: r.zxk.Colors.BRAND,
                    size: r.zxk.Sizes.MEDIUM,
                    onClick: s,
                    children: l.intl.string(l.t.BddRzc)
                })
            })
        ]
    });
}
