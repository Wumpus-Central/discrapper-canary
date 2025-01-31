e.d(t, { default: () => u });
var i = e(200651);
e(192379);
var l = e(481060),
    r = e(287734),
    a = e(313201),
    s = e(471253),
    c = e(939863),
    o = e(388032),
    d = e(499274);
function u(n) {
    let { channel: t, transitionState: e, onClose: u } = n,
        _ = (0, a.Dt)();
    function h() {
        r.default.disconnect(), u();
    }
    return (0, i.jsxs)(l.Y0X, {
        transitionState: e,
        'aria-labelledby': _,
        children: [
            (0, i.jsxs)(l.hzk, {
                className: d.content,
                children: [
                    (0, i.jsx)(c.Z, {
                        children: (0, i.jsx)('div', {
                            className: d.iconBackground,
                            children: (0, i.jsx)(l.XzT, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: d.headerIcon
                            })
                        })
                    }),
                    (0, i.jsx)(l.X6q, {
                        id: _,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: d.title,
                        children: o.intl.string(o.t.pADdJi)
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.subtitle,
                        children: o.intl.string(o.t.mT7jwM)
                    })
                ]
            }),
            (0, i.jsxs)(l.mzw, {
                children: [
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.RED,
                        onClick: function () {
                            (0, s.NZ)(t), h();
                        },
                        children: o.intl.string(o.t['sBP/1t'])
                    }),
                    (0, i.jsx)(l.zxk, {
                        color: l.zxk.Colors.PRIMARY,
                        className: d.cancelButton,
                        onClick: h,
                        children: o.intl.string(o.t.xTwqz8)
                    })
                ]
            })
        ]
    });
}
