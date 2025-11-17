n.d(t, { v: () => p }), n(388685), n(35282);
var r = n(54381),
    a = n(473749),
    i = n(593473),
    o = n(828700),
    s = n(481060),
    l = n(489863),
    c = n(511540),
    d = n(828878),
    u = n(388032),
    f = n(962514);
function p(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
        [p, h] = a.useState(() => {
            let { user_code: e } = i.parse(window.location.search);
            return n && null != e ? e : "";
        }),
        x = (0, o.TH)(),
        m = a.useCallback(() => {
            (0, l.c$)(x, "user_code_input_unauthorized");
        }, [x]),
        { manualSubmit: g, error: v, submitting: b } = (0, c.c)(p, t, m);
    return (0, r.jsxs)("div", {
        className: f.content,
        children: [
            (0, r.jsxs)("div", {
                className: f.innerContent,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "heading-xl/extrabold",
                        className: f.text,
                        children: u.intl.string(u.t.KYPNUv),
                    }),
                    (0, r.jsxs)(s.Kqy, {
                        gap: 24,
                        children: [
                            (0, r.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "header-secondary",
                                className: f.text,
                                children: u.intl.string(u.t.xRHk7f),
                            }),
                            (0, r.jsx)(s.oil, {
                                placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
                                    number: d.A.USER_CODE_LENGTH,
                                }),
                                maxLength: d.A.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: p,
                                onChange: h,
                                error: v,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(s.Button, {
                fullWidth: !0,
                variant: "primary",
                text: u.intl.string(u.t["3PatSz"]),
                onClick: g,
                loading: b,
                disabled: p.length !== d.A.USER_CODE_LENGTH,
            }),
        ],
    });
}
