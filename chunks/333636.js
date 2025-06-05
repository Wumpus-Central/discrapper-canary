a.d(t, { default: () => c }), a(388685);
var n = a(255367),
    l = a(73800),
    s = a(481060),
    r = a(238675),
    i = a(37291),
    o = a(332915);
let c = function (e) {
    let { onClose: t, transitionState: a } = e,
        [c, A] = l.useState(null),
        [d, u] = l.useState(null),
        [T, C] = l.useState(null),
        [h, p] = l.useState(''),
        f = async () => {
            if (c) {
                p('');
                try {
                    await (0, r.qy)(c, {
                        difficulty: null != d ? d : void 0,
                        should_serve_invisible: null != T ? T : void 0
                    });
                } catch (e) {
                    p(e.message);
                }
            }
        };
    return (0, n.jsxs)(s.Y0X, {
        transitionState: a,
        parentComponent: 'CaptchaTestModal',
        children: [
            (0, n.jsxs)(s.xBx, {
                className: o.header,
                children: [
                    (0, n.jsx)(s.X6q, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, n.jsx)(s.olH, { onClick: t })
                ]
            }),
            (0, n.jsxs)(s.hzk, {
                className: o.content,
                children: [
                    (0, n.jsx)(s.q4e, {
                        value: c,
                        options: i.p,
                        onChange: (e) => {
                            e !== r.fw.HCAPTCHA_RQDATA && e !== r.fw.SMITE_RQDATA && C(null), e !== r.fw.HCAPTCHA_RQDATA && u(null), A(e), p('');
                        }
                    }),
                    c === r.fw.HCAPTCHA_RQDATA &&
                        (0, n.jsx)(s.q4e, {
                            value: d,
                            options: i.Z,
                            onChange: (e) => {
                                c === r.fw.HCAPTCHA_RQDATA && u(e);
                            }
                        }),
                    (c === r.fw.HCAPTCHA_RQDATA || c === r.fw.SMITE_RQDATA) &&
                        (0, n.jsx)(s.XZJ, {
                            value: null != T && T,
                            onChange: (e, t) => C(t),
                            children: (0, n.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: 'Should serve invisible?'
                            })
                        })
                ]
            }),
            (0, n.jsxs)(s.mzw, {
                className: o.footer,
                children: [
                    (0, n.jsx)(s.zxk, {
                        onClick: f,
                        disabled: !c,
                        children: 'Trigger Captcha'
                    }),
                    '' !== h && (0, n.jsx)(s.pdY, { error: h })
                ]
            })
        ]
    });
};
