n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(780384),
    o = n(481060),
    a = n(410030),
    s = n(388032),
    l = n(638810),
    c = n(167969),
    u = n(557256);
let d = function (e) {
    let { onClose: t } = e,
        n = (0, a.ZP)(),
        d = (0, i.wj)(n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)(o.xBx, {
                separator: !1,
                className: l.header,
                children: [
                    (0, r.jsx)('img', {
                        alt: '',
                        className: l.headerImage,
                        src: d ? c : u
                    }),
                    (0, r.jsx)(o.X6q, {
                        className: l.title,
                        variant: 'heading-xl/medium',
                        children: s.NW.string(s.t.tWYWJy)
                    }),
                    (0, r.jsx)(o.olH, {
                        onClick: t,
                        className: l.modalCloseButton
                    })
                ]
            }),
            (0, r.jsx)(o.hzk, {
                className: l.content,
                scrollbarType: 'none',
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: s.NW.string(s.t.JNQRU1)
                })
            }),
            (0, r.jsx)(o.mzw, {
                className: l.modalFooter,
                children: (0, r.jsx)(o.zxk, {
                    color: o.zxk.Colors.BRAND,
                    size: o.zxk.Sizes.MEDIUM,
                    onClick: t,
                    children: s.NW.string(s.t.cpT0Cg)
                })
            })
        ]
    });
};
