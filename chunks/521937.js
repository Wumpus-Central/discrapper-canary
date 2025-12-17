n.d(t, { v: () => p }), n(388685), n(35282);
var a = n(54381),
    r = n(473749),
    o = n(593473),
    i = n(828700),
    s = n(481060),
    c = n(489863),
    l = n(511540),
    d = n(828878),
    u = n(388032),
    f = n(881003);
function p(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
        [p, h] = r.useState(() => {
            let { user_code: e } = o.parse(window.location.search);
            return n && null != e ? e : "";
        }),
        x = (0, i.TH)(),
        g = r.useCallback(() => {
            (0, c.c$)(x, "user_code_input_unauthorized");
        }, [x]),
        { manualSubmit: b, error: m, submitting: v } = (0, l.c)(p, t, g);
    return (0, a.jsxs)("div", {
        className: f.content,
        children: [
            (0, a.jsxs)("div", {
                className: f.innerContent,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-xl/extrabold",
                        className: f.text,
                        children: u.intl.string(u.t.KYPNUv),
                    }),
                    (0, a.jsxs)(s.Kqy, {
                        gap: 24,
                        children: [
                            (0, a.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                className: f.text,
                                children: u.intl.string(u.t.xRHk7f),
                            }),
                            (0, a.jsx)(s.oil, {
                                placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
                                    number: d.A.USER_CODE_LENGTH,
                                }),
                                maxLength: d.A.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: p,
                                onChange: h,
                                error: m,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(s.Button, {
                fullWidth: !0,
                variant: "primary",
                text: u.intl.string(u.t["3PatSz"]),
                onClick: b,
                loading: v,
                disabled: p.length !== d.A.USER_CODE_LENGTH,
            }),
        ],
    });
}
