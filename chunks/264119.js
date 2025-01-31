t.d(s, { Z: () => r });
var n = t(200651);
t(192379);
var l = t(481060),
    i = t(388032),
    a = t(981818);
function r(e) {
    let { email: s, onClose: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: a.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        className: a.title,
                        variant: 'heading-xl/semibold',
                        children: i.intl.string(i.t['8O+nFx'])
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: t,
                        className: a.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(l.hzk, {
                className: a.content,
                children: (0, n.jsx)(l.Text, {
                    className: a.description,
                    variant: 'text-md/normal',
                    children: i.intl.format(i.t.Zvx0Oz, { email: s })
                })
            }),
            (0, n.jsx)(l.hzk, {
                className: a.content,
                children: (0, n.jsx)(l.Text, {
                    className: a.tooltip,
                    variant: 'text-sm/normal',
                    children: i.intl.string(i.t.yb7itb)
                })
            }),
            (0, n.jsx)(l.mzw, {
                className: a.modalFooter,
                children: (0, n.jsx)(l.zxk, {
                    className: a.__invalid_submit,
                    color: l.zxk.Colors.BRAND,
                    size: l.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: i.intl.string(i.t.BddRzc)
                })
            })
        ]
    });
}
