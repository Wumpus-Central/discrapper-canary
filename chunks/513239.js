n.d(e, { default: () => m });
var s = n(255367);
n(73800);
var a = n(780384),
    i = n(481060),
    c = n(410030),
    l = n(313201),
    o = n(388032),
    r = n(695357),
    d = n(167969),
    u = n(557256);
function m(t) {
    let { onClose: e, transitionState: n } = t,
        m = (0, l.Dt)(),
        x = (0, a.wj)((0, c.ZP)());
    return (0, s.jsxs)(i.Y0X, {
        transitionState: n,
        'aria-labelledby': m,
        size: i.CgR.SMALL,
        parentComponent: 'UnavailableGuildProductModal',
        children: [
            (0, s.jsxs)(i.hzk, {
                className: r.content,
                children: [
                    (0, s.jsx)(i.olH, {
                        className: r.closeButton,
                        onClick: e
                    }),
                    (0, s.jsx)('img', {
                        className: r.image,
                        src: x ? d : u,
                        alt: ''
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-lg/semibold',
                        color: 'header-primary',
                        className: r.title,
                        children: o.intl.string(o.t.wLrh09)
                    }),
                    (0, s.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: r.body,
                        children: o.intl.string(o.t.DW9yJi)
                    })
                ]
            }),
            (0, s.jsx)(i.mzw, {
                children: (0, s.jsx)(i.zxk, {
                    className: r.button,
                    color: i.zxk.Colors.BRAND,
                    onClick: e,
                    size: i.zxk.Sizes.LARGE,
                    children: o.intl.string(o.t.BddRzc)
                })
            })
        ]
    });
}
