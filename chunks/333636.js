l.d(t, { default: () => o }), l(388685);
var a = l(54381),
    i = l(473749),
    n = l(159691),
    s = l(481060),
    c = l(238675),
    A = l(37291);
let o = function (e) {
    let { onClose: t, transitionState: l } = e,
        [o, u] = i.useState(null),
        [r, C] = i.useState(null),
        [T, d] = i.useState(null),
        [h, f] = i.useState(""),
        p = i.useCallback(async () => {
            if (o) {
                f("");
                try {
                    await (0, c.qy)(o, {
                        difficulty: null != r ? r : void 0,
                        should_serve_invisible: null != T ? T : void 0,
                    });
                } catch (e) {
                    f(e.message);
                }
            }
        }, [o, r, T]);
    return (0, a.jsxs)(n.u_l, {
        title: "Captcha Test Tool",
        actions: [
            {
                text: "Trigger Captcha",
                onClick: p,
                disabled: !o,
            },
        ],
        onClose: t,
        transitionState: l,
        children: [
            (0, a.jsx)(s.PhF, {
                label: "Captcha Decider Type",
                hideLabel: !0,
                value: o,
                options: A.p,
                onSelectionChange: (e) => {
                    e !== c.fw.HCAPTCHA_RQDATA && e !== c.fw.SMITE_RQDATA && d(null),
                        e !== c.fw.HCAPTCHA_RQDATA && C(null),
                        u(e),
                        f("");
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            o === c.fw.HCAPTCHA_RQDATA &&
                (0, a.jsx)(s.PhF, {
                    label: "HCaptcha Difficulty",
                    hideLabel: !0,
                    value: r,
                    options: A.Z,
                    onSelectionChange: (e) => {
                        o === c.fw.HCAPTCHA_RQDATA && C(e);
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            (o === c.fw.HCAPTCHA_RQDATA || o === c.fw.SMITE_RQDATA) &&
                (0, a.jsx)(s.Checkbox, {
                    checked: null != T && T,
                    onChange: (e) => d(e),
                    label: "Should serve invisible?",
                }),
            "" !== h && (0, a.jsx)(s.pdY, { error: h }),
        ],
    });
};
