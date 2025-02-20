n.d(t, { default: () => o }), n(47120);
var a = n(200651),
    s = n(192379),
    l = n(481060),
    r = n(238675),
    i = n(37291),
    c = n(183716);
let o = function (e) {
    let { onClose: t, transitionState: n } = e,
        [o, d] = s.useState(null),
        [u, h] = s.useState(null),
        [A, C] = s.useState(null),
        [T, p] = s.useState(''),
        f = async () => {
            if (o) {
                p('');
                try {
                    await (0, r.qy)(o, {
                        difficulty: null != u ? u : void 0,
                        should_serve_invisible: null != A ? A : void 0
                    });
                } catch (e) {
                    p(e.message);
                }
            }
        };
    return (0, a.jsxs)(l.Y0X, {
        transitionState: n,
        children: [
            (0, a.jsxs)(l.xBx, {
                className: c.header,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, a.jsx)(l.olH, { onClick: t })
                ]
            }),
            (0, a.jsxs)(l.hzk, {
                className: c.content,
                children: [
                    (0, a.jsx)(l.q4e, {
                        value: o,
                        options: i.p,
                        onChange: (e) => {
                            e !== r.fw.HCAPTCHA_RQDATA && (h(null), C(null)), d(e), p('');
                        }
                    }),
                    o === r.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(l.q4e, {
                                    value: u,
                                    options: i.Z,
                                    onChange: (e) => {
                                        o === r.fw.HCAPTCHA_RQDATA && h(e);
                                    }
                                }),
                                (0, a.jsx)(l.XZJ, {
                                    value: null != A && A,
                                    onChange: (e, t) => C(t),
                                    children: (0, a.jsx)(l.Text, {
                                        variant: 'text-md/normal',
                                        children: 'Should serve invisible?'
                                    })
                                })
                            ]
                        })
                ]
            }),
            (0, a.jsxs)(l.mzw, {
                className: c.footer,
                children: [
                    (0, a.jsx)(l.zxk, {
                        onClick: f,
                        disabled: !o,
                        children: 'Trigger Captcha'
                    }),
                    '' !== T && (0, a.jsx)(l.pdY, { error: T })
                ]
            })
        ]
    });
};
