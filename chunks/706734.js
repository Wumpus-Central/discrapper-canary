n.d(t, { Z: () => u });
var s = n(255367);
n(73800);
var a = n(481060),
    r = n(488889),
    i = n(226186),
    l = n(626135),
    o = n(981631),
    c = n(308569),
    d = n(388032),
    x = n(104772),
    m = n(652297);
function u(e) {
    let { onNext: t, onClose: n, reason: u, onReasonChange: _, freeTextResponse: E, setFreeTextResponse: N } = e,
        h = c.zf.map((e) => ({
            value: e,
            name: (0, r.S)(e)
        })),
        A = (0, i.u)('change_email_collect_reasons_slide');
    return (0, s.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, s.jsxs)(a.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, s.jsx)(a.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t['41NIIi'])
                    }),
                    (0, s.jsx)(a.olH, {
                        onClick: n,
                        className: m.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(a.hzk, {
                className: x.content,
                children: [
                    (0, s.jsx)(a.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: x.radioItem,
                        size: a.FXm.Sizes.NOT_SET,
                        value: u,
                        options: h,
                        onChange: (e) => {
                            let { value: t } = e;
                            (l.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), _(t), N(''), t === c.pw.SOMETHING_ELSE && i.Z.trackExposure({ location: 'change_email_collect_reasons_slide' }));
                        }
                    }),
                    A &&
                        u === c.pw.SOMETHING_ELSE &&
                        (0, s.jsx)(a.xJW, {
                            children: (0, s.jsx)(a.Kx8, {
                                value: E,
                                maxLength: c.mF,
                                onChange: N,
                                className: x.textArea,
                                placeholder: d.intl.string(d.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, s.jsx)(a.mzw, {
                className: m.modalFooter,
                children: (0, s.jsxs)(a.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, s.jsx)(a.zxk, {
                            variant: 'primary',
                            text: d.intl.string(d.t['3PatS0']),
                            disabled: null == u,
                            onClick: t
                        }),
                        (0, s.jsx)(a.zxk, {
                            variant: 'secondary',
                            text: d.intl.string(d.t['ETE/oK']),
                            onClick: n
                        })
                    ]
                })
            })
        ]
    });
}
