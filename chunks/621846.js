"use strict";
a.d(t, { H: () => p });
var s = a(627968),
    r = a(64700),
    n = a(492462),
    i = a(960488),
    l = a(397927),
    o = a(716965),
    c = a(102028),
    d = a(533553),
    u = a(985018),
    h = a(694900);
function p(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: a } = e,
        [p, x] = r.useState(() => {
            let { user_code: e } = n.parse(window.location.search);
            return a ? (e ?? "") : "";
        }),
        f = (0, i.zy)(),
        _ = r.useCallback(() => {
            (0, o.Vh)(f, "user_code_input_unauthorized");
        }, [f]),
        { manualSubmit: m, error: g, submitting: v } = (0, c.e)(p, t, _);
    return (0, s.jsxs)("div", {
        className: h.Qs,
        children: [
            (0, s.jsxs)("div", {
                className: h.gx,
                children: [
                    (0, s.jsx)(l.Heading, {
                        variant: "heading-xl/extrabold",
                        className: h.Qq,
                        children: u.intl.string(u.t.KYPNUv),
                    }),
                    (0, s.jsxs)(l.BJc, {
                        gap: 24,
                        children: [
                            (0, s.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                className: h.Qq,
                                children: u.intl.string(u.t.xRHk7f),
                            }),
                            (0, s.jsx)(l.ksK, {
                                placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
                                    number: d.D.USER_CODE_LENGTH,
                                }),
                                maxLength: d.D.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: p,
                                onChange: x,
                                error: g,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, s.jsx)(l.Button, {
                fullWidth: !0,
                variant: "primary",
                text: u.intl.string(u.t["3PatSz"]),
                onClick: m,
                loading: v,
                disabled: p.length !== d.D.USER_CODE_LENGTH,
            }),
        ],
    });
}
