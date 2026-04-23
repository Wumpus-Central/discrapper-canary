l.d(t, { default: () => R });
var a,
    i,
    n = l(627968),
    s = l(64700),
    A = l(189213),
    c = l(691885),
    o = l(150934),
    r = l(511274),
    C = l(636537),
    u = l(652215),
    T =
        (((a = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata"),
        (a.SMITE_RQDATA = "SmiteRqdata"),
        (a.RECAPTCHA = "Recaptcha"),
        (a.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise"),
        a);
async function d(e, t) {
    await C.Bo.post({ url: u.Rsh.CAPTCHA_TEST, body: { decider: e, options: t }, rejectWithError: !1 });
}
let h = Object.entries(
        (((i = {})[(i.EASY = 1)] = "EASY"),
        (i[(i.MODERATE = 2)] = "MODERATE"),
        (i[(i.DIFFICULT = 3)] = "DIFFICULT"),
        (i[(i.VERY_DIFFICULT = 4)] = "VERY_DIFFICULT"),
        i),
    )
        .map((e) => {
            let [t, l] = e;
            return { id: l.toString(), label: t, value: l };
        })
        .filter(function (e) {
            return "string" != typeof e.value;
        }),
    p = Object.entries(T).map((e) => {
        let [t, l] = e;
        return { id: l, label: t, value: l };
    }),
    R = function (e) {
        let { onClose: t, transitionState: l } = e,
            [a, i] = s.useState(null),
            [C, u] = s.useState(null),
            [R, E] = s.useState(null),
            [S, D] = s.useState(""),
            _ = s.useCallback(async () => {
                if (null != a) {
                    D("");
                    try {
                        await d(a, { difficulty: C ?? void 0, should_serve_invisible: R ?? void 0 });
                    } catch (e) {
                        D(e.message);
                    }
                }
            }, [a, C, R]);
        return (0, n.jsxs)(A.Modal, {
            title: "Captcha Test Tool",
            actions: [{ text: "Trigger Captcha", onClick: _, disabled: null == a }],
            onClose: t,
            transitionState: l,
            children: [
                (0, n.jsx)(c.l, {
                    label: "Captcha Decider Type",
                    hideLabel: !0,
                    value: a,
                    options: p,
                    onSelectionChange: (e) => {
                        e !== T.HCAPTCHA_RQDATA && e !== T.SMITE_RQDATA && E(null),
                            e !== T.HCAPTCHA_RQDATA && u(null),
                            i(e),
                            D("");
                    },
                    selectionMode: "single",
                    fullWidth: !0,
                }),
                a === T.HCAPTCHA_RQDATA &&
                    (0, n.jsx)(c.l, {
                        label: "HCaptcha Difficulty",
                        hideLabel: !0,
                        value: C,
                        options: h,
                        onSelectionChange: (e) => {
                            a === T.HCAPTCHA_RQDATA && u(e);
                        },
                        selectionMode: "single",
                        fullWidth: !0,
                    }),
                (a === T.HCAPTCHA_RQDATA || a === T.SMITE_RQDATA) &&
                    (0, n.jsx)(o.S, { checked: R ?? !1, onChange: (e) => E(e), label: "Should serve invisible?" }),
                "" !== S && (0, n.jsx)(r.U, { error: S }),
            ],
        });
    };
