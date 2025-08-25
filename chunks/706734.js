n.d(t, { Z: () => u });
var a = n(951288);
n(647438);
var s = n(481060),
    r = n(488889),
    i = n(226186),
    l = n(626135),
    o = n(981631),
    c = n(308569),
    d = n(388032),
    m = n(583073),
    x = n(780187);
function u(e) {
    let { onNext: t, onClose: n, reason: u, onReasonChange: _, freeTextResponse: E, setFreeTextResponse: N } = e,
        h = c.zf.map((e) => ({
            value: e,
            name: (0, r.S)(e),
        })),
        p = (0, i.u)("change_email_collect_reasons_slide");
    return (0, a.jsxs)("form", {
        onSubmit: t,
        children: [
            (0, a.jsxs)(s.xBx, {
                separator: !1,
                className: x.header,
                children: [
                    (0, a.jsx)(s.X6q, {
                        variant: "heading-xl/extrabold",
                        children: d.intl.string(d.t["41NIIi"]),
                    }),
                    (0, a.jsx)(s.olH, {
                        onClick: n,
                        className: x.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsxs)(s.hzk, {
                className: m.content,
                children: [
                    (0, a.jsx)(s.FXm, {
                        radioPosition: "right",
                        radioItemClassName: m.radioItem,
                        size: s.FXm.Sizes.NOT_SET,
                        value: u,
                        options: h,
                        onChange: (e) => {
                            let { value: t } = e;
                            l.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
                                change_email_reason_enum: t,
                            }),
                                _(t),
                                N(""),
                                t === c.pw.SOMETHING_ELSE &&
                                    i.Z.trackExposure({ location: "change_email_collect_reasons_slide" });
                        },
                    }),
                    p &&
                        u === c.pw.SOMETHING_ELSE &&
                        (0, a.jsx)(s.xJW, {
                            children: (0, a.jsx)(s.Kx8, {
                                value: E,
                                maxLength: c.mF,
                                onChange: N,
                                placeholder: d.intl.string(d.t.Q8Rk7O),
                            }),
                        }),
                ],
            }),
            (0, a.jsx)(s.mzw, {
                className: x.modalFooter,
                children: (0, a.jsxs)(s.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, a.jsx)(s.zxk, {
                            variant: "primary",
                            text: d.intl.string(d.t["3PatS0"]),
                            disabled: null == u,
                            onClick: t,
                        }),
                        (0, a.jsx)(s.zxk, {
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
