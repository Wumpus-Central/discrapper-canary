e.d(n, { default: () => u });
var i = e(255367);
e(73800);
var r = e(481060),
    l = e(287734),
    a = e(313201),
    c = e(471253),
    s = e(939863),
    o = e(388032),
    d = e(548726);
function u(t) {
    let { channel: n, transitionState: e, onClose: u } = t,
        _ = (0, a.Dt)();
    function h() {
        (l.default.disconnect(), u());
    }
    return (0, i.jsxs)(r.Y0X, {
        transitionState: e,
        'aria-labelledby': _,
        parentComponent: 'EndStageModal',
        children: [
            (0, i.jsxs)(r.hzk, {
                className: d.content,
                children: [
                    (0, i.jsx)(s.Z, {
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
                        children: o.intl.string(o.t.pADdJi)
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: d.subtitle,
                        children: o.intl.string(o.t.mT7jwM)
                    })
                ]
            }),
            (0, i.jsxs)(r.mzw, {
                children: [
                    (0, i.jsx)(r.zxk, {
                        variant: 'critical-primary',
                        text: o.intl.string(o.t['sBP/1t']),
                        onClick: function () {
                            ((0, c.NZ)(n), h());
                        }
                    }),
                    (0, i.jsx)('div', {
                        'data-button-hoisted-classname-wrapper': !0,
                        className: d.cancelButton,
                        children: (0, i.jsx)(r.zxk, {
                            variant: 'secondary',
                            text: o.intl.string(o.t.xTwqz8),
                            onClick: h
                        })
                    })
                ]
            })
        ]
    });
}
