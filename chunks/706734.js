n.d(t, { Z: () => x });
var a = n(951288),
    s = n(481060),
    r = n(488889),
    i = n(226186),
    l = n(626135),
    o = n(981631),
    c = n(308569),
    d = n(388032),
    u = n(583073),
    m = n(780187);
function x(e) {
    let { onNext: t, onClose: n, reason: x, onReasonChange: _, freeTextResponse: E, setFreeTextResponse: N } = e,
        p = c.zf.map((e) => ({
            value: e,
            name: (0, r.S)(e),
        })),
        h = (0, i.u)("change_email_collect_reasons_slide");
    return (0, a.jsxs)("form", {
        onSubmit: t,
        children: [
            (0, a.jsxs)(s.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: "heading-xl/extrabold",
                        children: d.intl.string(d.t["41NIIi"]),
                    }),
                    (0, a.jsx)(s.olH, {
                        onClick: n,
                        className: m.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsxs)(s.hzk, {
                className: u.content,
                children: [
                    (0, a.jsx)(s.FXm, {
                        value: x,
                        options: p,
                        onChange: (e) => {
                            l.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
                                change_email_reason_enum: e,
                            }),
                                _(e),
                                N(""),
                                e === c.pw.SOMETHING_ELSE &&
                                    i.Z.trackExposure({ location: "change_email_collect_reasons_slide" });
                        },
                    }),
                    h &&
                        x === c.pw.SOMETHING_ELSE &&
                        (0, a.jsx)(s.Kx8, {
                            value: E,
                            maxLength: c.mF,
                            onChange: N,
                            placeholder: d.intl.string(d.t.Q8Rk7O),
                        }),
                ],
            }),
            (0, a.jsx)(s.mzw, {
                className: m.modalFooter,
                children: (0, a.jsxs)(s.ButtonGroup, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, a.jsx)(s.Button, {
                            variant: "primary",
                            text: d.intl.string(d.t["3PatS0"]),
                            disabled: null == x,
                            onClick: t,
                        }),
                        (0, a.jsx)(s.Button, {
                            variant: "secondary",
                            text: d.intl.string(d.t["ETE/oK"]),
                            onClick: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
