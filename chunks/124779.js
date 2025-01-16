e.r(t),
    e.d(t, {
        default: function () {
            return d;
        }
    });
var i = e(200651);
e(192379);
var r = e(481060),
    l = e(287734),
    c = e(313201),
    o = e(471253),
    a = e(939863),
    s = e(388032),
    u = e(499274);
function d(n) {
    let { channel: t, transitionState: e, onClose: d } = n,
        _ = (0, c.Dt)();
    function h() {
        l.default.disconnect(), d();
    }
    return (0, i.jsxs)(r.ModalRoot, {
        transitionState: e,
        'aria-labelledby': _,
        children: [
            (0, i.jsxs)(r.ModalContent, {
                className: u.content,
                children: [
                    (0, i.jsx)(a.Z, {
                        children: (0, i.jsx)('div', {
                            className: u.iconBackground,
                            children: (0, i.jsx)(r.StageXIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 40,
                                height: 40,
                                className: u.headerIcon
                            })
                        })
                    }),
                    (0, i.jsx)(r.Heading, {
                        id: _,
                        variant: 'heading-xl/semibold',
                        color: 'header-primary',
                        className: u.title,
                        children: s.intl.string(s.t.pADdJi)
                    }),
                    (0, i.jsx)(r.Text, {
                        variant: 'text-md/normal',
                        color: 'header-secondary',
                        className: u.subtitle,
                        children: s.intl.string(s.t.mT7jwM)
                    })
                ]
            }),
            (0, i.jsxs)(r.ModalFooter, {
                children: [
                    (0, i.jsx)(r.Button, {
                        color: r.Button.Colors.RED,
                        onClick: function () {
                            (0, o.NZ)(t), h();
                        },
                        children: s.intl.string(s.t['sBP/1t'])
                    }),
                    (0, i.jsx)(r.Button, {
                        color: r.Button.Colors.PRIMARY,
                        className: u.cancelButton,
                        onClick: h,
                        children: s.intl.string(s.t.xTwqz8)
                    })
                ]
            })
        ]
    });
}
