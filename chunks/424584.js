a.d(t, { default: () => c });
var l = a(627968),
    i = a(64700),
    n = a(732955),
    o = a(397927),
    s = a(943357),
    A = a(72817);
let c = function (e) {
    let { onClose: t, transitionState: a } = e,
        [c, r] = i.useState(null),
        [C, T] = i.useState(null),
        [u, d] = i.useState(null),
        [h, p] = i.useState(""),
        R = i.useCallback(async () => {
            if (c) {
                p("");
                try {
                    await (0, s.v$)(c, { difficulty: C ?? void 0, should_serve_invisible: u ?? void 0 });
                } catch (e) {
                    p(e.message);
                }
            }
        }, [c, C, u]);
    return (0, l.jsxs)(n.aFV, {
        title: "Captcha Test Tool",
        actions: [{ text: "Trigger Captcha", onClick: R, disabled: !c }],
        onClose: t,
        transitionState: a,
        children: [
            (0, l.jsx)(o.l6P, {
                label: "Captcha Decider Type",
                hideLabel: !0,
                value: c,
                options: A.m,
                onSelectionChange: (e) => {
                    e !== s.Fo.HCAPTCHA_RQDATA && e !== s.Fo.SMITE_RQDATA && d(null),
                        e !== s.Fo.HCAPTCHA_RQDATA && T(null),
                        r(e),
                        p("");
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            c === s.Fo.HCAPTCHA_RQDATA &&
                (0, l.jsx)(o.l6P, {
                    label: "HCaptcha Difficulty",
                    hideLabel: !0,
                    value: C,
                    options: A.K,
                    onSelectionChange: (e) => {
                        c === s.Fo.HCAPTCHA_RQDATA && T(e);
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            (c === s.Fo.HCAPTCHA_RQDATA || c === s.Fo.SMITE_RQDATA) &&
                (0, l.jsx)(o.Checkbox, { checked: u ?? !1, onChange: (e) => d(e), label: "Should serve invisible?" }),
            "" !== h && (0, l.jsx)(o.dzK, { error: h }),
        ],
    });
};
