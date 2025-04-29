a.d(t, { L: () => i });
var r = a(255367);
a(73800);
var l = a(481060),
    s = a(600164),
    n = a(424071),
    o = a(388032),
    c = a(475286);
function i(e) {
    let { onClose: t, img: a, title: i, body: d, content: x } = e;
    return (0, r.jsxs)(n.Z, {
        children: [
            (0, r.jsxs)(l.xBx, {
                direction: s.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, r.jsx)('div', {
                        className: c.illustration,
                        children: a
                    }),
                    (0, r.jsx)(l.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: i
                    }),
                    (0, r.jsx)(l.olH, {
                        className: c.closeButton,
                        onClick: t
                    })
                ]
            }),
            (0, r.jsxs)(l.hzk, {
                className: c.body,
                paddingFix: !1,
                children: [
                    (0, r.jsx)(l.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d
                    }),
                    x
                ]
            }),
            (0, r.jsx)(l.mzw, {
                className: c.footer,
                children: (0, r.jsx)(l.zxk, {
                    className: c.footerButton,
                    color: l.zxk.Colors.BRAND,
                    onClick: t,
                    children: o.intl.string(o.t.i4jeWV)
                })
            })
        ]
    });
}
