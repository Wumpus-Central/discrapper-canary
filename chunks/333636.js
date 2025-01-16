n.r(t), n(47120);
var a = n(200651),
    l = n(192379),
    r = n(481060),
    o = n(238675),
    s = n(217757);
let i = Object.entries(o.fw).map((e) => {
        let [t, n] = e;
        return {
            label: t,
            value: n
        };
    }),
    c = Object.entries(o.sJ)
        .map((e) => {
            let [t, n] = e;
            return {
                label: t,
                value: n
            };
        })
        .filter((e) => {
            let { value: t } = e;
            return 'number' == typeof t;
        });
t.default = function (e) {
    let { onClose: t, transitionState: n } = e,
        [u, d] = l.useState(null),
        [h, C] = l.useState(null),
        [A, T] = l.useState(null),
        [f, p] = l.useState(''),
        E = async () => {
            if (u) {
                p('');
                try {
                    await (0, o.qy)(u, {
                        difficulty: null != h ? h : void 0,
                        should_serve_invisible: null != A ? A : void 0
                    });
                } catch (e) {
                    p(e.message);
                }
            }
        };
    return (0, a.jsxs)(r.ModalRoot, {
        transitionState: n,
        children: [
            (0, a.jsxs)(r.ModalHeader, {
                className: s.header,
                children: [
                    (0, a.jsx)(r.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, a.jsx)(r.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, a.jsxs)(r.ModalContent, {
                className: s.content,
                children: [
                    (0, a.jsx)(r.SingleSelect, {
                        value: u,
                        options: i,
                        onChange: (e) => {
                            e !== o.fw.HCAPTCHA_RQDATA && (C(null), T(null)), d(e), p('');
                        }
                    }),
                    u === o.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(r.SingleSelect, {
                                    value: h,
                                    options: c,
                                    onChange: (e) => {
                                        u === o.fw.HCAPTCHA_RQDATA && C(e);
                                    }
                                }),
                                (0, a.jsx)(r.Checkbox, {
                                    value: null != A && A,
                                    onChange: (e, t) => T(t),
                                    children: (0, a.jsx)(r.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Should serve invisible?'
                                    })
                                })
                            ]
                        })
                ]
            }),
            (0, a.jsxs)(r.ModalFooter, {
                className: s.footer,
                children: [
                    (0, a.jsx)(r.Button, {
                        onClick: E,
                        disabled: !u,
                        children: 'Trigger Captcha'
                    }),
                    '' !== f && (0, a.jsx)(r.InputError, { error: f })
                ]
            })
        ]
    });
};
