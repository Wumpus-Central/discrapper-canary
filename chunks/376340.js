t.d(a, { L: () => c });
var r = t(255367);
t(73800);
var s = t(481060),
    n = t(600164),
    l = t(424071),
    i = t(388032),
    o = t(475286);
function c(e) {
    let { onClose: a, img: t, title: c, body: d, content: x } = e;
    return (0, r.jsxs)(l.Z, {
        children: [
            (0, r.jsxs)(s.xBx, {
                direction: n.Z.Direction.VERTICAL,
                className: o.header,
                separator: !1,
                children: [
                    (0, r.jsx)('div', {
                        className: o.illustration,
                        children: t
                    }),
                    (0, r.jsx)(s.X6q, {
                        className: o.title,
                        variant: 'heading-xl/extrabold',
                        children: c
                    }),
                    (0, r.jsx)(s.olH, {
                        className: o.closeButton,
                        onClick: a
                    })
                ]
            }),
            (0, r.jsxs)(s.hzk, {
                className: o.body,
                paddingFix: !1,
                children: [
                    (0, r.jsx)(s.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d
                    }),
                    x
                ]
            }),
            (0, r.jsx)(s.mzw, {
                className: o.footer,
                children: (0, r.jsx)('div', {
                    'data-button-hoisted-classname-wrapper': !0,
                    className: o.footerButton,
                    children: (0, r.jsx)(s.zxk, {
                        variant: 'primary',
                        text: i.intl.string(i.t.i4jeWV),
                        onClick: a
                    })
                })
            })
        ]
    });
}
