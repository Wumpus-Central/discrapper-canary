s.d(t, { Z: () => u });
var n = s(255367);
s(73800);
var r = s(481060),
    l = s(488889),
    i = s(226186),
    a = s(626135),
    o = s(981631),
    c = s(308569),
    x = s(388032),
    d = s(104772),
    m = s(652297);
function u(e) {
    let { onNext: t, onClose: s, reason: u, onReasonChange: _, freeTextResponse: E, setFreeTextResponse: N } = e,
        A = c.zf.map((e) => ({
            value: e,
            name: (0, l.S)(e)
        })),
        h = (0, i.u)('change_email_collect_reasons_slide');
    return (0, n.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, n.jsxs)(r.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: x.intl.string(x.t['41NIIi'])
                    }),
                    (0, n.jsx)(r.olH, {
                        onClick: s,
                        className: m.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(r.hzk, {
                className: d.content,
                children: [
                    (0, n.jsx)(r.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: d.radioItem,
                        size: r.FXm.Sizes.NOT_SET,
                        value: u,
                        options: A,
                        onChange: (e) => {
                            let { value: t } = e;
                            a.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), _(t), N(''), t === c.pw.SOMETHING_ELSE && i.Z.trackExposure({ location: 'change_email_collect_reasons_slide' });
                        }
                    }),
                    h &&
                        u === c.pw.SOMETHING_ELSE &&
                        (0, n.jsx)(r.xJW, {
                            children: (0, n.jsx)(r.Kx8, {
                                value: E,
                                maxLength: c.mF,
                                onChange: N,
                                className: d.textArea,
                                placeholder: x.intl.string(x.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, n.jsxs)(r.mzw, {
                className: m.modalFooter,
                children: [
                    (0, n.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        disabled: null == u,
                        size: r.zxk.Sizes.MEDIUM,
                        onClick: t,
                        children: x.intl.string(x.t['3PatS0'])
                    }),
                    (0, n.jsx)(r.zxk, {
                        look: r.zxk.Looks.LINK,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: s,
                        children: x.intl.string(x.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
