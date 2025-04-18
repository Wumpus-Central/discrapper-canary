n.d(t, { default: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(287734),
    c = n(313201),
    a = n(471253),
    o = n(939863),
    s = n(388032),
    d = n(548726);
function u(e) {
    let { channel: t, transitionState: n, onClose: u } = e,
        _ = (0, c.Dt)();
    function h() {
        l.default.disconnect(), u();
    }
    return (0, r.jsxs)(i.Y0X, {
        transitionState: n,
        'aria-labelledby': _,
        children: [
            (0, r.jsxs)(i.hzk, {
                className: d.content,
                children: [
                    (0, r.jsx)(o.Z, {
                        children: (0, r.jsx)('div', {
                            className: d.iconBackground,
                            children: (0, r.jsx)(i.XzT, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: d.headerIcon
                            })
                        })
                    }),
                    (0, r.jsx)(i.X6q, {
                        id: _,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: d.title,
                        children: s.NW.string(s.t.pADdJi)
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.subtitle,
                        children: s.NW.string(s.t.mT7jwM)
                    })
                ]
            }),
            (0, r.jsxs)(i.mzw, {
                children: [
                    (0, r.jsx)(i.zxk, {
                        color: i.zxk.Colors.RED,
                        onClick: function () {
                            (0, a.NZ)(t), h();
                        },
                        children: s.NW.string(s.t['sBP/1t'])
                    }),
                    (0, r.jsx)(i.zxk, {
                        color: i.zxk.Colors.PRIMARY,
                        className: d.cancelButton,
                        onClick: h,
                        children: s.NW.string(s.t.xTwqz8)
                    })
                ]
            })
        ]
    });
}
