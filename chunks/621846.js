r.d(t, {
    H: () => p,
}),
    r(896048),
    r(747238);
var a = r(627968),
    n = r(64700),
    s = r(492462),
    i = r(960488),
    l = r(397927),
    c = r(716965),
    o = r(102028),
    d = r(533553),
    u = r(985018),
    f = r(694900);

function p(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: r } = e,
        [p, h] = n.useState(() => {
            let { user_code: e } = s.parse(window.location.search);
            return r && null != e ? e : "";
        }),
        x = (0, i.zy)(),
        b = n.useCallback(() => {
            (0, c.Vh)(x, "user_code_input_unauthorized");
        }, [x]),
        { manualSubmit: m, error: g, submitting: y } = (0, o.e)(p, t, b);
    return (0, a.jsxs)("div", {
        className: f.Qs,
        children: [
            (0, a.jsxs)("div", {
                className: f.gx,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: "heading-xl/extrabold",
                        className: f.Qq,
                        children: u.intl.string(u.t.KYPNUv),
                    }),
                    (0, a.jsxs)(l.BJc, {
                        gap: 24,
                        children: [
                            (0, a.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                className: f.Qq,
                                children: u.intl.string(u.t.xRHk7f),
                            }),
                            (0, a.jsx)(l.ksK, {
                                placeholder: u.intl.formatToPlainString(u.t["0tbz6x"], {
                                    number: d.D.USER_CODE_LENGTH,
                                }),
                                maxLength: d.D.USER_CODE_LENGTH,
                                autoComplete: "off",
                                autoFocus: !0,
                                value: p,
                                onChange: h,
                                error: g,
                                fullWidth: !0,
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)(l.Button, {
                fullWidth: !0,
                variant: "primary",
                text: u.intl.string(u.t["3PatSz"]),
                onClick: m,
                loading: y,
                disabled: p.length !== d.D.USER_CODE_LENGTH,
            }),
        ],
    });
}
