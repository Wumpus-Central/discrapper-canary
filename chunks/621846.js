"use strict";
s.d(t, { H: () => m });
var a = s(627968),
    r = s(64700),
    n = s(492462),
    i = s(873263),
    l = s(534514),
    o = s(331322),
    c = s(834730),
    d = s(292666),
    u = s(821609),
    h = s(716965),
    p = s(102028),
    x = s(533553),
    f = s(985018),
    _ = s(442205);
function m(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: s } = e,
        [m, g] = r.useState(() => {
            let { user_code: e } = n.parse(window.location.search);
            return s ? (e ?? "") : "";
        }),
        v = (0, i.zy)(),
        C = r.useCallback(() => {
            (0, h.Vh)(v, "user_code_input_unauthorized");
        }, [v]),
        { manualSubmit: N, error: y, submitting: b } = (0, p.e)(m, t, C);
    return (0, a.jsxs)("div", {
        className: _.Qs,
        children: [
            (0, a.jsxs)("div", {
                className: _.gx,
                children: [
                    (0, a.jsx)(l.D, {
                        variant: "heading-xl/extrabold",
                        className: _.Qq,
                        children: f.intl.string(f.t.KYPNUv),
                    }),
                    (0, a.jsxs)(o.B, {
                        gap: 24,
                        children: [
                            (0, a.jsx)(c.E, {
                                variant: "text-md/medium",
                                color: "text-default",
                                className: _.Qq,
                                children: f.intl.string(f.t.xRHk7f),
                            }),
                            (0, a.jsx)(d.k, {
                                placeholder: f.intl.formatToPlainString(f.t["0tbz6x"], {
                                    number: x.D.USER_CODE_LENGTH,
                                }),
                                maxLength: x.D.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: m,
                                onChange: g,
                                error: y,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(u.$, {
                fullWidth: !0,
                variant: "primary",
                text: f.intl.string(f.t["3PatSz"]),
                onClick: N,
                loading: b,
                disabled: m.length !== x.D.USER_CODE_LENGTH,
            }),
        ],
    });
}
