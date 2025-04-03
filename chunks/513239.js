s.d(e, { default: () => h });
var c = s(200651);
s(192379);
var n = s(780384),
    a = s(481060),
    i = s(410030),
    o = s(313201),
    l = s(388032),
    r = s(695357),
    d = s(167969),
    x = s(557256);
function h(t) {
    let { onClose: e, transitionState: s } = t,
        h = (0, o.Dt)(),
        m = (0, n.wj)((0, i.ZP)());
    return (0, c.jsxs)(a.Y0X, {
        transitionState: s,
        'aria-labelledby': h,
        size: a.CgR.SMALL,
        children: [
            (0, c.jsxs)(a.hzk, {
                className: r.content,
                children: [
                    (0, c.jsx)(a.olH, {
                        className: r.closeButton,
                        onClick: e
                    }),
                    (0, c.jsx)('img', {
                        className: r.image,
                        src: m ? d : x,
                        alt: ''
                    }),
                    (0, c.jsx)(a.Text, {
                        variant: 'text-lg/semibold',
                        color: 'header-primary',
                        className: r.title,
                        children: l.NW.string(l.t.wLrh09)
                    }),
                    (0, c.jsx)(a.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: r.body,
                        children: l.NW.string(l.t.DW9yJi)
                    })
                ]
            }),
            (0, c.jsx)(a.mzw, {
                children: (0, c.jsx)(a.zxk, {
                    className: r.button,
                    color: a.zxk.Colors.BRAND,
                    onClick: e,
                    size: a.zxk.Sizes.LARGE,
                    children: l.NW.string(l.t.BddRzc)
                })
            })
        ]
    });
}
