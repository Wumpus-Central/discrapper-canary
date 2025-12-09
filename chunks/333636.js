a.d(t, { default: () => C }), a(388685);
var n = a(54381),
    l = a(473749),
    i = a(199849),
    s = a(159691),
    A = a(481060),
    u = a(238675),
    r = a(37291);
let C = function (e) {
    let { onClose: t, transitionState: a } = e,
        [C, c] = l.useState(null),
        [T, o] = l.useState(null),
        [p, d] = l.useState(null),
        [f, h] = l.useState(""),
        R = l.useCallback(async () => {
            if (C) {
                h("");
                try {
                    await (0, u.qy)(C, {
                        difficulty: null != T ? T : void 0,
                        should_serve_invisible: null != p ? p : void 0,
                    });
                } catch (e) {
                    h(e.message);
                }
            }
        }, [C, T, p]);
    return (0, n.jsxs)(s.u_l, {
        title: "Captcha Test Tool",
        actions: [
            {
                text: "Trigger Captcha",
                onClick: R,
                disabled: !C,
            },
        ],
        onClose: t,
        transitionState: a,
        children: [
            (0, n.jsx)(i.y6, {
                value: C,
                options: r.p,
                onChange: (e) => {
                    e !== u.fw.HCAPTCHA_RQDATA && e !== u.fw.SMITE_RQDATA && d(null),
                        e !== u.fw.HCAPTCHA_RQDATA && o(null),
                        c(e),
                        h("");
                },
            }),
            C === u.fw.HCAPTCHA_RQDATA &&
                (0, n.jsx)(i.y6, {
                    value: T,
                    options: r.Z,
                    onChange: (e) => {
                        C === u.fw.HCAPTCHA_RQDATA && o(e);
                    },
                }),
            (C === u.fw.HCAPTCHA_RQDATA || C === u.fw.SMITE_RQDATA) &&
                (0, n.jsx)(A.Checkbox, {
                    checked: null != p && p,
                    onChange: (e) => d(e),
                    label: "Should serve invisible?",
                }),
            "" !== f && (0, n.jsx)(A.pdY, { error: f }),
        ],
    });
};
