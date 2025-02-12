s.d(e, { default: () => h });
var n = s(200651);
s(192379);
var c = s(780384),
    i = s(481060),
    a = s(410030),
    l = s(313201),
    o = s(388032),
    r = s(370407),
    d = s(167969),
    x = s(557256);
function h(t) {
    let { onClose: e, transitionState: s } = t,
        h = (0, l.Dt)(),
        m = (0, c.wj)((0, a.ZP)());
    return (0, n.jsxs)(i.Y0X, {
        transitionState: s,
        'aria-labelledby': h,
        size: i.CgR.SMALL,
        children: [
            (0, n.jsxs)(i.hzk, {
                className: r.content,
                children: [
                    (0, n.jsx)(i.olH, {
                        className: r.closeButton,
                        onClick: e
                    }),
                    (0, n.jsx)('img', {
                        className: r.image,
                        src: m ? d : x,
                        alt: ''
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-lg/semibold',
                        color: 'header-primary',
                        className: r.title,
                        children: o.intl.string(o.t.wLrh09)
                    }),
                    (0, n.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: r.body,
                        children: o.intl.string(o.t.DW9yJi)
                    })
                ]
            }),
            (0, n.jsx)(i.mzw, {
                children: (0, n.jsx)(i.zxk, {
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
