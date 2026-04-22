l.d(t, { default: () => C });
var a = l(627968),
    i = l(64700),
    n = l(189213),
    o = l(691885),
    s = l(150934),
    A = l(511274),
    c = l(943357),
    r = l(72817);
let C = function (e) {
    let { onClose: t, transitionState: l } = e,
        [C, u] = i.useState(null),
        [T, d] = i.useState(null),
        [h, p] = i.useState(null),
        [R, E] = i.useState(""),
        S = i.useCallback(async () => {
            if (null != C) {
                E("");
                try {
                    await (0, c.v$)(C, { difficulty: T ?? void 0, should_serve_invisible: h ?? void 0 });
                } catch (e) {
                    E(e.message);
                }
            }
        }, [C, T, h]);
    return (0, a.jsxs)(n.Modal, {
        title: "Captcha Test Tool",
        actions: [{ text: "Trigger Captcha", onClick: S, disabled: null == C }],
        onClose: t,
        transitionState: l,
        children: [
            (0, a.jsx)(o.l, {
                label: "Captcha Decider Type",
                hideLabel: !0,
                value: C,
                options: r.m,
                onSelectionChange: (e) => {
                    e !== c.Fo.HCAPTCHA_RQDATA && e !== c.Fo.SMITE_RQDATA && p(null),
                        e !== c.Fo.HCAPTCHA_RQDATA && d(null),
                        u(e),
                        E("");
                },
                selectionMode: "single",
                fullWidth: !0,
            }),
            C === c.Fo.HCAPTCHA_RQDATA &&
                (0, a.jsx)(o.l, {
                    label: "HCaptcha Difficulty",
                    hideLabel: !0,
                    value: T,
                    options: r.K,
                    onSelectionChange: (e) => {
                        C === c.Fo.HCAPTCHA_RQDATA && d(e);
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
            (C === c.Fo.HCAPTCHA_RQDATA || C === c.Fo.SMITE_RQDATA) &&
                (0, a.jsx)(s.S, { checked: h ?? !1, onChange: (e) => p(e), label: "Should serve invisible?" }),
            "" !== R && (0, a.jsx)(A.U, { error: R }),
        ],
    });
};
