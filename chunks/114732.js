n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(780384),
    a = n(481060),
    s = n(410030),
    o = n(388032),
    l = n(187262),
    u = n(167969),
    c = n(557256);
let d = function (e) {
    let { onClose: t } = e,
        n = (0, s.ZP)(),
        d = (0, r.wj)(n);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)(a.xBx, {
                separator: !1,
                className: l.header,
                children: [
                    (0, i.jsx)('img', {
                        alt: '',
                        className: l.headerImage,
                        src: d ? u : c
                    }),
                    (0, i.jsx)(a.X6q, {
                        className: l.title,
                        variant: 'heading-xl/medium',
                        children: o.intl.string(o.t.tWYWJy)
                    }),
                    (0, i.jsx)(a.olH, {
                        onClick: t,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, i.jsx)(a.hzk, {
                className: l.content,
                scrollbarType: 'none',
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: o.intl.string(o.t.JNQRU1)
                })
            }),
            (0, i.jsx)(a.mzw, {
                className: l.modalFooter,
                children: (0, i.jsx)(a.zxk, {
                    color: a.zxk.Colors.BRAND,
                    size: a.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: o.intl.string(o.t.cpT0Cg)
                })
            })
        ]
    });
};
