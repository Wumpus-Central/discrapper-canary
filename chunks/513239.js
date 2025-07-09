n.d(e, { default: () => x });
var s = n(255367);
n(73800);
var a = n(780384),
    i = n(755721),
    c = n(481060),
    l = n(410030),
    o = n(313201),
    r = n(388032),
    d = n(695357),
    u = n(167969),
    m = n(557256);
function x(t) {
    let { onClose: e, transitionState: n } = t,
        x = (0, o.Dt)(),
        h = (0, a.wj)((0, l.ZP)());
    return (0, s.jsxs)(c.Y0X, {
        transitionState: n,
        'aria-labelledby': x,
        size: c.CgR.SMALL,
        parentComponent: 'UnavailableGuildProductModal',
        children: [
            (0, s.jsxs)(c.hzk, {
                className: d.content,
                children: [
                    (0, s.jsx)(c.olH, {
                        className: d.closeButton,
                        onClick: e
                    }),
                    (0, s.jsx)('img', {
                        className: d.image,
                        src: h ? u : m,
                        alt: ''
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-lg/semibold',
                        color: 'header-primary',
                        className: d.title,
                        children: r.intl.string(r.t.wLrh09)
                    }),
                    (0, s.jsx)(c.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.body,
                        children: r.intl.string(r.t.DW9yJi)
                    })
                ]
            }),
            (0, s.jsx)(c.mzw, {
                children: (0, s.jsx)(i.zx, {
                    className: d.button,
                    color: i.zx.Colors.BRAND,
                    onClick: e,
                    size: i.zx.Sizes.LARGE,
                    children: r.intl.string(r.t.BddRzc)
                })
            })
        ]
    });
}
