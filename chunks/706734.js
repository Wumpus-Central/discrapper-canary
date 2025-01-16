n.d(t, {
    Z: function () {
        return _;
    }
});
var s = n(200651);
n(192379);
var o = n(481060),
    l = n(488889),
    a = n(226186),
    i = n(626135),
    r = n(981631),
    d = n(308569),
    c = n(388032),
    u = n(511023),
    m = n(981818);
function _(e) {
    let { onNext: t, onClose: n, reason: _, onReasonChange: E, freeTextResponse: N, setFreeTextResponse: x } = e,
        A = d.zf.map((e) => ({
            value: e,
            name: (0, l.S)(e)
        })),
        C = (0, a.u)('change_email_collect_reasons_slide');
    return (0, s.jsxs)('form', {
        onSubmit: t,
        children: [
            (0, s.jsxs)(o.ModalHeader, {
                separator: !1,
                className: m.header,
                children: [
                    (0, s.jsx)(o.Heading, {
                        variant: 'heading-xl/extrabold',
                        children: c.intl.string(c.t['41NIIi'])
                    }),
                    (0, s.jsx)(o.ModalCloseButton, {
                        onClick: n,
                        className: m.modalCloseButton
                    })
                ]
            }),
            (0, s.jsxs)(o.ModalContent, {
                className: u.content,
                children: [
                    (0, s.jsx)(o.RadioGroup, {
                        radioPosition: 'right',
                        radioItemClassName: u.radioItem,
                        size: o.RadioGroup.Sizes.NOT_SET,
                        value: _,
                        options: A,
                        onChange: (e) => {
                            let { value: t } = e;
                            i.default.track(r.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: t }), E(t), x(''), t === d.pw.SOMETHING_ELSE && a.Z.trackExposure({ location: 'change_email_collect_reasons_slide' });
                        }
                    }),
                    C &&
                        _ === d.pw.SOMETHING_ELSE &&
                        (0, s.jsx)(o.FormItem, {
                            children: (0, s.jsx)(o.TextArea, {
                                value: N,
                                maxLength: d.mF,
                                onChange: x,
                                className: u.textArea,
                                placeholder: c.intl.string(c.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, s.jsxs)(o.ModalFooter, {
                className: m.modalFooter,
                children: [
                    (0, s.jsx)(o.Button, {
                        color: o.Button.Colors.BRAND,
                        disabled: null == _,
                        size: o.Button.Sizes.MEDIUM,
                        onClick: t,
                        children: c.intl.string(c.t['3PatS0'])
                    }),
                    (0, s.jsx)(o.Button, {
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: n,
                        children: c.intl.string(c.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
