n.d(t, { default: () => o }), n(47120);
var a = n(200651),
    l = n(192379),
    s = n(481060),
    i = n(238675),
    r = n(37291),
    c = n(332915);
let o = function (e) {
    let { onClose: t, transitionState: n } = e,
        [o, A] = l.useState(null),
        [d, u] = l.useState(null),
        [T, C] = l.useState(null),
        [h, f] = l.useState(''),
        p = async () => {
            if (o) {
                f('');
                try {
                    await (0, i.qy)(o, {
                        difficulty: null != d ? d : void 0,
                        should_serve_invisible: null != T ? T : void 0
                    });
                } catch (e) {
                    f(e.message);
                }
            }
        };
    return (0, a.jsxs)(s.Y0X, {
        transitionState: n,
        children: [
            (0, a.jsxs)(s.xBx, {
                className: c.header,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, a.jsx)(s.olH, { onClick: t })
                ]
            }),
            (0, a.jsxs)(s.hzk, {
                className: c.content,
                children: [
                    (0, a.jsx)(s.q4e, {
                        value: o,
                        options: r.p,
                        onChange: (e) => {
                            e !== i.fw.HCAPTCHA_RQDATA && e !== i.fw.SMITE_RQDATA && C(null), e !== i.fw.HCAPTCHA_RQDATA && u(null), A(e), f('');
                        }
                    }),
                    o === i.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsx)(s.q4e, {
                            value: d,
                            options: r.Z,
                            onChange: (e) => {
                                o === i.fw.HCAPTCHA_RQDATA && u(e);
                            }
                        }),
                    (o === i.fw.HCAPTCHA_RQDATA || o === i.fw.SMITE_RQDATA) &&
                        (0, a.jsx)(s.XZJ, {
                            value: null != T && T,
                            onChange: (e, t) => C(t),
                            children: (0, a.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: 'Should serve invisible?'
                            })
                        })
                ]
            }),
            (0, a.jsxs)(s.mzw, {
                className: c.footer,
                children: [
                    (0, a.jsx)(s.zxk, {
                        onClick: p,
                        disabled: !o,
                        children: 'Trigger Captcha'
                    }),
                    '' !== h && (0, a.jsx)(s.pdY, { error: h })
                ]
            })
        ]
    });
};
