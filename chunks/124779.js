e.d(n, { default: () => u });
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(287734),
    c = e(313201),
    a = e(471253),
    o = e(939863),
    s = e(388032),
    d = e(548726);
function u(t) {
    let { channel: n, transitionState: e, onClose: u } = t,
        _ = (0, c.Dt)();
    function h() {
        l.default.disconnect(), u();
    }
    return (0, i.jsxs)(r.Y0X, {
        transitionState: e,
        'aria-labelledby': _,
        children: [
            (0, i.jsxs)(r.hzk, {
                className: d.content,
                children: [
                    (0, i.jsx)(o.Z, {
                        children: (0, i.jsx)('div', {
                            className: d.iconBackground,
                            children: (0, i.jsx)(r.XzT, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: d.headerIcon
                            })
                        })
                    }),
                    (0, i.jsx)(r.X6q, {
                        id: _,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: d.title,
                        children: s.intl.string(s.t.pADdJi)
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.subtitle,
                        children: s.intl.string(s.t.mT7jwM)
                    })
                ]
            }),
            (0, i.jsxs)(r.mzw, {
                children: [
                    (0, i.jsx)(r.zxk, {
                        color: r.zxk.Colors.RED,
                        onClick: function () {
                            (0, a.NZ)(n), h();
                        },
                        children: s.intl.string(s.t['sBP/1t'])
                    }),
                    (0, i.jsx)(r.zxk, {
                        color: r.zxk.Colors.PRIMARY,
                        className: d.cancelButton,
                        onClick: h,
                        children: s.intl.string(s.t.xTwqz8)
                    })
                ]
            })
        ]
    });
}
