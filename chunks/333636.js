a.d(t, { default: () => A }), a(388685);
var n = a(54381),
    s = a(473749),
    l = a(199849),
    i = a(481060),
    r = a(238675),
    o = a(37291),
    c = a(75485);
let A = function (e) {
    let { onClose: t, transitionState: a } = e,
        [A, u] = s.useState(null),
        [d, C] = s.useState(null),
        [T, h] = s.useState(null),
        [p, f] = s.useState(""),
        R = async () => {
            if (A) {
                f("");
                try {
                    await (0, r.qy)(A, {
                        difficulty: null != d ? d : void 0,
                        should_serve_invisible: null != T ? T : void 0,
                    });
                } catch (e) {
                    f(e.message);
                }
            }
        };
    return (0, n.jsxs)(i.Y0X, {
        transitionState: a,
        parentComponent: "CaptchaTestModal",
        children: [
            (0, n.jsxs)(i.xBx, {
                className: c.header,
                children: [
                    (0, n.jsx)(i.Heading, {
                        variant: "heading-lg/semibold",
                        children: "Captcha Test Tool",
                    }),
                    (0, n.jsx)(i.olH, { onClick: t }),
                ],
            }),
            (0, n.jsxs)(i.hzk, {
                className: c.content,
                children: [
                    (0, n.jsx)(l.y6, {
                        value: A,
                        options: o.p,
                        onChange: (e) => {
                            e !== r.fw.HCAPTCHA_RQDATA && e !== r.fw.SMITE_RQDATA && h(null),
                                e !== r.fw.HCAPTCHA_RQDATA && C(null),
                                u(e),
                                f("");
                        },
                    }),
                    A === r.fw.HCAPTCHA_RQDATA &&
                        (0, n.jsx)(l.y6, {
                            value: d,
                            options: o.Z,
                            onChange: (e) => {
                                A === r.fw.HCAPTCHA_RQDATA && C(e);
                            },
                        }),
                    (A === r.fw.HCAPTCHA_RQDATA || A === r.fw.SMITE_RQDATA) &&
                        (0, n.jsx)(i.Checkbox, {
                            checked: null != T && T,
                            onChange: (e) => h(e),
                            label: "Should serve invisible?",
                        }),
                ],
            }),
            (0, n.jsxs)(i.mzw, {
                className: c.footer,
                children: [
                    (0, n.jsx)(i.Button, {
                        variant: "primary",
                        text: "Trigger Captcha",
                        onClick: R,
                        disabled: !A,
                    }),
                    "" !== p && (0, n.jsx)(i.pdY, { error: p }),
                ],
            }),
        ],
    });
};
