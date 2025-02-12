t.d(s, { Z: () => u });
var n = t(200651);
t(192379);
var l = t(481060),
    i = t(488889),
    a = t(226186),
    r = t(626135),
    o = t(981631),
    c = t(308569),
    d = t(388032),
    x = t(885949),
    m = t(877749);
function u(e) {
    let { onNext: s, onClose: t, reason: u, onReasonChange: _, freeTextResponse: E, setFreeTextResponse: N } = e,
        A = c.zf.map((e) => ({
            value: e,
            name: (0, i.S)(e)
        })),
        C = (0, a.u)('change_email_collect_reasons_slide');
    return (0, n.jsxs)('form', {
        onSubmit: s,
        children: [
            (0, n.jsxs)(l.xBx, {
                separator: !1,
                className: m.header,
                children: [
                    (0, n.jsx)(l.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t['41NIIi'])
                    }),
                    (0, n.jsx)(l.olH, {
                        onClick: t,
                        className: m.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(l.hzk, {
                className: x.content,
                children: [
                    (0, n.jsx)(l.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: x.radioItem,
                        size: l.FXm.Sizes.NOT_SET,
                        value: u,
                        options: A,
                        onChange: (e) => {
                            let { value: s } = e;
                            r.default.track(o.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: s }), _(s), N(''), s === c.pw.SOMETHING_ELSE && a.Z.trackExposure({ location: 'change_email_collect_reasons_slide' });
                        }
                    }),
                    C &&
                        u === c.pw.SOMETHING_ELSE &&
                        (0, n.jsx)(l.xJW, {
                            children: (0, n.jsx)(l.Kx8, {
                                value: E,
                                maxLength: c.mF,
                                onChange: N,
                                className: x.textArea,
                                placeholder: d.intl.string(d.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, n.jsxs)(l.mzw, {
                className: m.modalFooter,
                children: [
                    (0, n.jsx)(l.zxk, {
                        color: l.zxk.Colors.BRAND,
                        disabled: null == u,
                        size: l.zxk.Sizes.MEDIUM,
                        onClick: s,
                        children: d.intl.string(d.t['3PatS0'])
                    }),
                    (0, n.jsx)(l.zxk, {
                        look: l.zxk.Looks.LINK,
                        color: l.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: d.intl.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
