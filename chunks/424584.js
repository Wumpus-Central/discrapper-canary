l.d(t, { default: () => c });
var a = l(627968),
    i = l(64700),
    n = l(732955),
    o = l(397927),
    s = l(943357),
    A = l(72817);
let c = function (e) {
    let { onClose: t, transitionState: l } = e,
        [c, r] = i.useState(null),
        [C, u] = i.useState(null),
        [T, d] = i.useState(null),
        [h, p] = i.useState(""),
        R = i.useCallback(async () => {
            if (null != c) {
                p("");
                try {
                    await (0, s.v$)(c, { difficulty: C ?? void 0, should_serve_invisible: T ?? void 0 });
                } catch (e) {
                    p(e.message);
                }
            }
        }, [c, C, T]);
    return (0, a.jsxs)(n.aFV, {
        title: "Captcha Test Tool",
        actions: [{ text: "Trigger Captcha", onClick: R, disabled: null == c }],
        onClose: t,
        transitionState: l,
        children: [
            (0, a.jsx)(o.l6P, {
                label: "Captcha Decider Type",
                hideLabel: !0,
                value: c,
                options: A.m,
                onSelectionChange: (e) => {
                    e !== s.Fo.HCAPTCHA_RQDATA && e !== s.Fo.SMITE_RQDATA && d(null),
                        e !== s.Fo.HCAPTCHA_RQDATA && u(null),
                        r(e),
                        p("");
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            c === s.Fo.HCAPTCHA_RQDATA &&
                (0, a.jsx)(o.l6P, {
                    label: "HCaptcha Difficulty",
                    hideLabel: !0,
                    value: C,
                    options: A.K,
                    onSelectionChange: (e) => {
                        c === s.Fo.HCAPTCHA_RQDATA && u(e);
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            (c === s.Fo.HCAPTCHA_RQDATA || c === s.Fo.SMITE_RQDATA) &&
                (0, a.jsx)(o.Checkbox, { checked: T ?? !1, onChange: (e) => d(e), label: "Should serve invisible?" }),
            "" !== h && (0, a.jsx)(o.dzK, { error: h }),
        ],
    });
};
