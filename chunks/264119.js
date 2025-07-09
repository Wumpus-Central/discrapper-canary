(n.d(t, { Z: () => l }), n(953529));
var s = n(255367);
n(73800);
var a = n(481060),
    r = n(388032),
    i = n(652297);
function l(e) {
    let { email: t, onClose: n } = e;
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)(a.xBx, {
                separator: !1,
                className: i.header,
                children: [
                    (0, s.jsx)(a.X6q, {
                        className: i.title,
                        variant: 'heading-xl/semibold',
                        children: r.intl.string(r.t['8O+nFx'])
                    }),
                    (0, s.jsx)(a.olH, {
                        onClick: n,
                        className: i.modalCloseButton
                    })
                ]
            }),
            (0, s.jsx)(a.hzk, {
                className: i.content,
                children: (0, s.jsx)(a.Text, {
                    className: i.description,
                    variant: 'text-md/normal',
                    children: r.intl.format(r.t.Zvx0Oz, { email: t })
                })
            }),
            (0, s.jsx)(a.hzk, {
                className: i.content,
                children: (0, s.jsx)(a.Text, {
                    className: i.tooltip,
                    variant: 'text-sm/normal',
                    children: r.intl.string(r.t.yb7itb)
                })
            }),
            (0, s.jsx)(a.mzw, {
                className: i.modalFooter,
                children: (0, s.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: i.__invalid_submit,
                    children: (0, s.jsx)(a.zxk, {
                        variant: 'primary',
                        text: r.intl.string(r.t.BddRzc),
                        onClick: n
                    })
                })
            })
        ]
    });
}
