r.d(a, { L: () => i });
var s = r(200651);
r(192379);
var t = r(481060),
    l = r(600164),
    n = r(424071),
    o = r(388032),
    c = r(475286);
function i(e) {
    let { onClose: a, img: r, title: i, body: d, content: x } = e;
    return (0, s.jsxs)(n.Z, {
        children: [
            (0, s.jsxs)(t.xBx, {
                direction: l.Z.Direction.VERTICAL,
                className: c.header,
                separator: !1,
                children: [
                    (0, s.jsx)('div', {
                        className: c.illustration,
                        children: r
                    }),
                    (0, s.jsx)(t.X6q, {
                        className: c.title,
                        variant: 'heading-xl/extrabold',
                        children: i
                    }),
                    (0, s.jsx)(t.olH, {
                        className: c.closeButton,
                        onClick: a
                    })
                ]
            }),
            (0, s.jsxs)(t.hzk, {
                className: c.body,
                paddingFix: !1,
                children: [
                    (0, s.jsx)(t.Text, {
                        tag: 'p',
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        children: d
                    }),
                    x
                ]
            }),
            (0, s.jsx)(t.mzw, {
                className: c.footer,
                children: (0, s.jsx)(t.zxk, {
                    className: c.footerButton,
                    color: t.zxk.Colors.BRAND,
                    onClick: a,
                    children: o.NW.string(o.t.i4jeWV)
                })
            })
        ]
    });
}
