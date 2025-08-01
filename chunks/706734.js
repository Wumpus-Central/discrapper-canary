n.d(t, { Z: () => _ });
var s = n(255367);
n(73800);
var a = n(755721),
    r = n(481060),
    i = n(488889),
    l = n(226186),
    o = n(626135),
    c = n(981631),
    d = n(308569),
    x = n(388032),
    m = n(104772),
    u = n(652297);
function _(e) {
    let { onNext: t, onClose: n, reason: _, onReasonChange: E, freeTextResponse: N, setFreeTextResponse: h } = e,
        A = d.zf.map((e) => ({
            value: e,
            name: (0, i.S)(e)
        })),
        p = (0, l.u)('change_email_collect_reasons_slide');
    return (0, s.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, s.jsxs)(r.xBx, {
                separator: !1,
                className: u.header,
                children: [
                    (0, s.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: x.intl.string(x.t['41NIIi'])
                    }),
                    (0, s.jsx)(r.olH, {
                        onClick: n,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(r.hzk, {
                className: m.content,
                children: [
                    (0, s.jsx)(r.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: m.radioItem,
                        size: r.FXm.Sizes.NOT_SET,
                        value: _,
                        options: A,
                        onChange: (e) => {
                            let { value: t } = e;
                            (o.default.track(c.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), E(t), h(''), t === d.pw.SOMETHING_ELSE && l.Z.trackExposure({ location: 'change_email_collect_reasons_slide' }));
                        }
                    }),
                    p &&
                        _ === d.pw.SOMETHING_ELSE &&
                        (0, s.jsx)(r.xJW, {
                            children: (0, s.jsx)(a.iS, {
                                value: N,
                                maxLength: d.mF,
                                onChange: h,
                                className: m.textArea,
                                placeholder: x.intl.string(x.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, s.jsx)(r.mzw, {
                className: u.modalFooter,
                children: (0, s.jsxs)(r.hE2, {
                    direction: 'horizontal-reverse',
                    children: [
                        (0, s.jsx)(r.zxk, {
                            variant: 'primary',
                            text: x.intl.string(x.t['3PatS0']),
                            disabled: null == _,
                            onClick: t
                        }),
                        (0, s.jsx)(r.zxk, {
                            variant: 'secondary',
                            text: x.intl.string(x.t['ETE/oK']),
                            onClick: n
                        })
                    ]
                })
            })
        ]
    });
}
