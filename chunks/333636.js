a.d(t, { default: () => A }), a(388685);
var n = a(951288),
    s = a(647438),
    l = a(755721),
    r = a(481060),
    i = a(238675),
    o = a(37291),
    c = a(130714);
let A = function (e) {
    let { onClose: t, transitionState: a } = e,
        [A, d] = s.useState(null),
        [u, T] = s.useState(null),
        [C, h] = s.useState(null),
        [p, f] = s.useState(""),
        R = async () => {
            if (A) {
                f("");
                try {
                    await (0, i.qy)(A, {
                        difficulty: null != u ? u : void 0,
                        should_serve_invisible: null != C ? C : void 0,
                    });
                } catch (e) {
                    f(e.message);
                }
            }
        };
    return (0, n.jsxs)(r.Y0X, {
        transitionState: a,
        parentComponent: "CaptchaTestModal",
        children: [
            (0, n.jsxs)(r.xBx, {
                className: c.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: "heading-lg/semibold",
                        children: "Captcha Test Tool",
                    }),
                    (0, n.jsx)(r.olH, { onClick: t }),
                ],
            }),
            (0, n.jsxs)(r.hzk, {
                className: c.content,
                children: [
                    (0, n.jsx)(r.q4e, {
                        value: A,
                        options: o.p,
                        onChange: (e) => {
                            e !== i.fw.HCAPTCHA_RQDATA && e !== i.fw.SMITE_RQDATA && h(null),
                                e !== i.fw.HCAPTCHA_RQDATA && T(null),
                                d(e),
                                f("");
                        },
                    }),
                    A === i.fw.HCAPTCHA_RQDATA &&
                        (0, n.jsx)(r.q4e, {
                            value: u,
                            options: o.Z,
                            onChange: (e) => {
                                A === i.fw.HCAPTCHA_RQDATA && T(e);
                            },
                        }),
                    (A === i.fw.HCAPTCHA_RQDATA || A === i.fw.SMITE_RQDATA) &&
                        (0, n.jsx)(l.$q, {
                            value: null != C && C,
                            onChange: (e, t) => h(t),
                            children: (0, n.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: "Should serve invisible?",
                            }),
                        }),
                ],
            }),
            (0, n.jsxs)(r.mzw, {
                className: c.footer,
                children: [
                    (0, n.jsx)(r.zxk, {
                        variant: "primary",
                        text: "Trigger Captcha",
                        onClick: R,
                        disabled: !A,
                    }),
                    "" !== p && (0, n.jsx)(r.pdY, { error: p }),
                ],
            }),
        ],
    });
};
