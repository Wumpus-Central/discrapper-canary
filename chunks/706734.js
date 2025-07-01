n.d(t, { Z: () => u });
var s = n(255367);
n(73800);
var r = n(481060),
    l = n(488889),
    i = n(226186),
    a = n(626135),
    o = n(981631),
    c = n(308569),
    x = n(388032),
    d = n(104772),
    m = n(652297);
function u(e) {
    let { onNext: t, onClose: n, reason: u, onReasonChange: E, freeTextResponse: _, setFreeTextResponse: N } = e,
        A = c.zf.map((e) => ({
            value: e,
            name: (0, l.S)(e)
        })),
        h = (0, i.u)('change_email_collect_reasons_slide');
    return (0, s.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, s.jsxs)(r.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, s.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: x.intl.string(x.t['41NIIi'])
                    }),
                    (0, s.jsx)(r.olH, {
                        onClick: n,
                        className: m.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(r.hzk, {
                className: d.content,
                children: [
                    (0, s.jsx)(r.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: d.radioItem,
                        size: r.FXm.Sizes.NOT_SET,
                        value: u,
                        options: A,
                        onChange: (e) => {
                            let { value: t } = e;
                            (a.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), E(t), N(''), t === c.pw.SOMETHING_ELSE && i.Z.trackExposure({ location: 'change_email_collect_reasons_slide' }));
                        }
                    }),
                    h &&
                        u === c.pw.SOMETHING_ELSE &&
                        (0, s.jsx)(r.xJW, {
                            children: (0, s.jsx)(r.Kx8, {
                                value: _,
                                maxLength: c.mF,
                                onChange: N,
                                className: d.textArea,
                                placeholder: x.intl.string(x.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, s.jsxs)(r.mzw, {
                className: m.modalFooter,
                children: [
                    (0, s.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        disabled: null == u,
                        size: r.zxk.Sizes.MEDIUM,
                        onClick: t,
                        children: x.intl.string(x.t['3PatS0'])
                    }),
                    (0, s.jsx)(r.zxk, {
                        look: r.zxk.Looks.LINK,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: n,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
