n.d(e, { default: () => d });
var a = n(200651);
n(192379);
var c = n(481060),
    s = n(313201),
    l = n(388032),
    o = n(354648);
let d = (t) => {
    let { onClose: e } = t,
        n = (0, s.Dt)();
    return (0, a.jsxs)(c.Y0X, {
        ...t,
        'aria-labelledby': n,
        children: [
            (0, a.jsxs)(c.xBx, {
                separator: !1,
                className: o.modalHeader,
                children: [
                    (0, a.jsx)(c.X6q, {
                        id: n,
                        variant: 'heading-xl/extrabold',
                        children: l.intl.string(l.t.EouHws)
                    }),
                    (0, a.jsx)(c.olH, {
                        className: o.closeButton,
                        onClick: e
                    })
                ]
            }),
            (0, a.jsx)(c.hzk, {
                className: o.modalContent,
                children: (0, a.jsx)(c.Text, {
                    variant: 'text-md/normal',
                    className: o.contentText,
                    children: l.intl.string(l.t.zNPBMD)
                })
            }),
            (0, a.jsx)(c.mzw, {
                children: (0, a.jsx)(c.zxk, {
                    className: o.button,
                    size: c.zxk.Sizes.MIN,
                    onClick: e,
                    children: l.intl.string(l.t.BddRzc)
                })
            })
        ]
    });
};
