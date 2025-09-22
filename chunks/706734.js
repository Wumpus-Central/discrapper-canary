n.d(t, { Z: () => _ });
var a = n(951288),
    s = n(755721),
    r = n(481060),
    i = n(488889),
    l = n(226186),
    o = n(626135),
    c = n(981631),
    d = n(308569),
    m = n(388032),
    x = n(583073),
    u = n(780187);
function _(e) {
    let { onNext: t, onClose: n, reason: _, onReasonChange: E, freeTextResponse: N, setFreeTextResponse: p } = e,
        h = d.zf.map((e) => ({
            value: e,
            name: (0, i.S)(e),
        })),
        A = (0, l.u)("change_email_collect_reasons_slide");
    return (0, a.jsxs)("form", {
        onSubmit: t,
        children: [
            (0, a.jsxs)(r.xBx, {
                separator: !1,
                className: u.header,
                children: [
                    (0, a.jsx)(r.X6q, {
                        variant: "heading-xl/extrabold",
                        children: m.intl.string(m.t["41NIIi"]),
                    }),
                    (0, a.jsx)(r.olH, {
                        onClick: n,
                        className: u.modalCloseButton,
                    }),
                ],
            }),
            (0, a.jsxs)(r.hzk, {
                className: x.content,
                children: [
                    (0, a.jsx)(s.Gu, {
                        radioPosition: "right",
                        radioItemClassName: x.radioItem,
                        size: s.l7.NOT_SET,
                        value: _,
                        options: h,
                        onChange: (e) => {
                            let { value: t } = e;
                            o.default.track(c.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, {
                                change_email_reason_enum: t,
                            }),
                                E(t),
                                p(""),
                                t === d.pw.SOMETHING_ELSE &&
                                    l.Z.trackExposure({ location: "change_email_collect_reasons_slide" });
                        },
                    }),
                    A &&
                        _ === d.pw.SOMETHING_ELSE &&
                        (0, a.jsx)(r.Kx8, {
                            value: N,
                            maxLength: d.mF,
                            onChange: p,
                            placeholder: m.intl.string(m.t.Q8Rk7O),
                        }),
                ],
            }),
            (0, a.jsx)(r.mzw, {
                className: u.modalFooter,
                children: (0, a.jsxs)(r.hE2, {
                    direction: "horizontal-reverse",
                    children: [
                        (0, a.jsx)(r.zxk, {
                            variant: "primary",
                            text: m.intl.string(m.t["3PatS0"]),
                            disabled: null == _,
                            onClick: t,
                        }),
                        (0, a.jsx)(r.zxk, {
                            variant: "secondary",
                            text: m.intl.string(m.t["ETE/oK"]),
                            onClick: n,
                        }),
                    ],
                }),
            }),
        ],
    });
}
