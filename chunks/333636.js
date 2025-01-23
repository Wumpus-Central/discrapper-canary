n.r(t), n(47120);
var a = n(200651),
    r = n(192379),
    l = n(481060),
    o = n(238675),
    i = n(37291),
    s = n(217757);
t.default = function (e) {
    let { onClose: t, transitionState: n } = e,
        [c, u] = r.useState(null),
        [d, h] = r.useState(null),
        [C, f] = r.useState(null),
        [A, T] = r.useState(''),
        p = async () => {
            if (c) {
                T('');
                try {
                    await (0, o.qy)(c, {
                        difficulty: null != d ? d : void 0,
                        should_serve_invisible: null != C ? C : void 0
                    });
                } catch (e) {
                    T(e.message);
                }
            }
        };
    return (0, a.jsxs)(l.ModalRoot, {
        transitionState: n,
        children: [
            (0, a.jsxs)(l.ModalHeader, {
                className: s.header,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, a.jsx)(l.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, a.jsxs)(l.ModalContent, {
                className: s.content,
                children: [
                    (0, a.jsx)(l.SingleSelect, {
                        value: c,
                        options: i.p,
                        onChange: (e) => {
                            e !== o.fw.HCAPTCHA_RQDATA && (h(null), f(null)), u(e), T('');
                        }
                    }),
                    c === o.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(l.SingleSelect, {
                                    value: d,
                                    options: i.Z,
                                    onChange: (e) => {
                                        c === o.fw.HCAPTCHA_RQDATA && h(e);
                                    }
                                }),
                                (0, a.jsx)(l.Checkbox, {
                                    value: null != C && C,
                                    onChange: (e, t) => f(t),
                                    children: (0, a.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Should serve invisible?'
                                    })
                                })
                            ]
                        })
                ]
            }),
            (0, a.jsxs)(l.ModalFooter, {
                className: s.footer,
                children: [
                    (0, a.jsx)(l.Button, {
                        onClick: p,
                        disabled: !c,
                        children: 'Trigger Captcha'
                    }),
                    '' !== A && (0, a.jsx)(l.InputError, { error: A })
                ]
            })
        ]
    });
};
