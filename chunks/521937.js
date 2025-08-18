n.d(t, { v: () => h }), n(388685), n(35282);
var a = n(951288),
    r = n(647438),
    o = n(593473),
    i = n(843611),
    l = n(481060),
    s = n(489863),
    c = n(511540),
    d = n(828878),
    u = n(388032),
    f = n(962514);
function h(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
        [h, p] = r.useState(() => {
            let { user_code: e } = o.parse(window.location.search);
            return n && null != e ? e : "";
        }),
        x = (0, i.TH)(),
        m = r.useCallback(() => {
            (0, s.c$)(x, "user_code_input_unauthorized");
        }, [x]),
        { manualSubmit: v, error: b, submitting: g } = (0, c.c)(h, t, m);
    return (0, a.jsxs)("div", {
        className: f.content,
        children: [
            (0, a.jsxs)("div", {
                className: f.innerContent,
                children: [
                    (0, a.jsx)(l.X6q, {
                        variant: "heading-xl/extrabold",
                        className: f.text,
                        children: u.intl.string(u.t.KYPNUl),
                    }),
                    (0, a.jsxs)(l.Kqy, {
                        gap: 24,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "header-secondary",
                                className: f.text,
                                children: u.intl.string(u.t.xRHk7e),
                            }),
                            (0, a.jsx)(l.oil, {
                                placeholder: u.intl.formatToPlainString(u.t["0tbz6+"], {
                                    number: d.A.USER_CODE_LENGTH,
                                }),
                                maxLength: d.A.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: h,
                                onChange: p,
                                error: b,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(l.zxk, {
                fullWidth: !0,
                variant: "primary",
                text: u.intl.string(u.t["3PatS0"]),
                onClick: v,
                loading: g,
                disabled: h.length !== d.A.USER_CODE_LENGTH,
            }),
        ],
    });
}
