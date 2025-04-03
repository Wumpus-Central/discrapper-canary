t.d(s, { Z: () => o }), t(266796);
var n = t(200651);
t(192379);
var r = t(481060),
    a = t(388032),
    l = t(652297);
function o(e) {
    let { email: s, onClose: t } = e;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(r.xBx, {
                separator: !1,
                className: l.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        className: l.title,
                        variant: 'heading-xl/semibold',
                        children: a.NW.string(a.t['8O+nFx'])
                    }),
                    (0, n.jsx)(r.olH, {
                        onClick: t,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, n.jsx)(r.hzk, {
                className: l.content,
                children: (0, n.jsx)(r.Text, {
                    className: l.description,
                    variant: 'text-md/normal',
                    children: a.NW.format(a.t.Zvx0Oz, { email: s })
                })
            }),
            (0, n.jsx)(r.hzk, {
                className: l.content,
                children: (0, n.jsx)(r.Text, {
                    className: l.tooltip,
                    variant: 'text-sm/normal',
                    children: a.NW.string(a.t.yb7itb)
                })
            }),
            (0, n.jsx)(r.mzw, {
                className: l.modalFooter,
                children: (0, n.jsx)(r.zxk, {
                    className: l.__invalid_submit,
                    color: r.zxk.Colors.BRAND,
                    size: r.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: a.NW.string(a.t.BddRzc)
                })
            })
        ]
    });
}
