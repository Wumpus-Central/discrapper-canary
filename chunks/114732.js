n.d(t, { Z: () => d });
var r = n(255367);
n(73800);
var i = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(388032),
    l = n(638810),
    c = n(167969),
    u = n(557256);
let d = function (e) {
    let { onClose: t } = e,
        n = (0, o.ZP)(),
        d = (0, i.wj)(n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(a.xBx, {
                separator: !1,
                className: l.header,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: l.headerImage,
                        src: d ? c : u
                    }),
                    (0, r.jsx)(a.X6q, {
                        className: l.title,
                        variant: 'heading-xl/medium',
                        children: s.intl.string(s.t.tWYWJy)
                    }),
                    (0, r.jsx)(a.olH, {
                        onClick: t,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, r.jsx)(a.hzk, {
                className: l.content,
                scrollbarType: 'none',
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: s.intl.string(s.t.JNQRU1)
                })
            }),
            (0, r.jsx)(a.mzw, {
                className: l.modalFooter,
                children: (0, r.jsx)(a.zxk, {
                    color: a.zxk.Colors.BRAND,
                    size: a.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: s.intl.string(s.t.cpT0Cg)
                })
            })
        ]
    });
};
