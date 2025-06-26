a.d(t, { L: () => i });
var l = a(255367);
a(73800);
var r = a(481060),
    s = a(600164),
    n = a(424071),
    o = a(388032),
    c = a(475286);
function i(e) {
    let { onClose: t, img: a, title: i, body: d, content: x } = e;
    return (0, l.jsxs)(n.Z, {
        children: [
            (0, l.jsxs)(r.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, l.jsx)('div', {
                        className: c.illustration,
                        children: a
                    }),
                    (0, l.jsx)(r.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: i
                    }),
                    (0, l.jsx)(r.olH, {
                        className: c.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, l.jsxs)(r.hzk, {
                className: c.body,
                paddingFix: !1,
                children: [
                    (0, l.jsx)(r.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d
                    }),
                    x
                ]
            }),
            (0, l.jsx)(r.mzw, {
                className: c.footer,
                children: (0, l.jsx)(r.zxk, {
                    className: c.footerButton,
                    color: r.zxk.Colors.BRAND,
                    onClick: t,
                    children: o.intl.string(o.t.i4jeWV)
                })
            })
        ]
    });
}
