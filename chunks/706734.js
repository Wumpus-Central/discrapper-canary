t.d(s, { Z: () => m });
var n = t(200651);
t(192379);
var r = t(481060),
    a = t(488889),
    l = t(226186),
    o = t(626135),
    i = t(981631),
    c = t(308569),
    d = t(388032),
    x = t(379211),
    N = t(925495);
function m(e) {
    let { onNext: s, onClose: t, reason: m, onReasonChange: u, freeTextResponse: _, setFreeTextResponse: E } = e,
        A = c.zf.map((e) => ({
            value: e,
            name: (0, a.S)(e)
        })),
        h = (0, l.u)('change_email_collect_reasons_slide');
    return (0, n.jsxs)('form', {
        onSubmit: s,
        children: [
            (0, n.jsxs)(r.xBx, {
                separator: !1,
                className: N.header,
                children: [
                    (0, n.jsx)(r.X6q, {
                        variant: 'heading-xl/extrabold',
                        children: d.NW.string(d.t['41NIIi'])
                    }),
                    (0, n.jsx)(r.olH, {
                        onClick: t,
                        className: N.modalCloseButton
                    })
                ]
            }),
            (0, n.jsxs)(r.hzk, {
                className: x.content,
                children: [
                    (0, n.jsx)(r.FXm, {
                        radioPosition: 'right',
                        radioItemClassName: x.radioItem,
                        size: r.FXm.Sizes.NOT_SET,
                        value: m,
                        options: A,
                        onChange: (e) => {
                            let { value: s } = e;
                            o.default.track(i.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum: s }), u(s), E(''), s === c.pw.SOMETHING_ELSE && l.Z.trackExposure({ location: 'change_email_collect_reasons_slide' });
                        }
                    }),
                    h &&
                        m === c.pw.SOMETHING_ELSE &&
                        (0, n.jsx)(r.xJW, {
                            children: (0, n.jsx)(r.Kx8, {
                                value: _,
                                maxLength: c.mF,
                                onChange: E,
                                className: x.textArea,
                                placeholder: d.NW.string(d.t.Q8Rk7O)
                            })
                        })
                ]
            }),
            (0, n.jsxs)(r.mzw, {
                className: N.modalFooter,
                children: [
                    (0, n.jsx)(r.zxk, {
                        color: r.zxk.Colors.BRAND,
                        disabled: null == m,
                        size: r.zxk.Sizes.MEDIUM,
                        onClick: s,
                        children: d.NW.string(d.t['3PatS0'])
                    }),
                    (0, n.jsx)(r.zxk, {
                        look: r.zxk.Looks.LINK,
                        color: r.zxk.Colors.PRIMARY,
                        onClick: t,
                        children: d.NW.string(d.t['ETE/oK'])
                    })
                ]
            })
        ]
    });
}
