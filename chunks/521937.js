n.d(t, { v: () => x }), n(388685), n(35282);
var r = n(200651),
    a = n(192379),
    o = n(120356),
    l = n.n(o),
    i = n(593473),
    s = n(512969),
    c = n(481060),
    d = n(489863),
    u = n(511540),
    f = n(828878),
    p = n(388032),
    h = n(949463);
function x(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
        [o, x] = a.useState(() => {
            let { user_code: e } = i.parse(window.location.search);
            return n && null != e ? e : '';
        }),
        m = (0, s.TH)(),
        b = a.useCallback(() => {
            (0, d.c$)(m, 'user_code_input_unauthorized');
        }, [m]),
        { manualSubmit: v, error: _, submitting: C } = (0, u.c)(o, t, b);
    return (0, r.jsxs)('div', {
        className: h.content,
        children: [
            (0, r.jsxs)('div', {
                className: h.innerContent,
                children: [
                    (0, r.jsx)(c.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: h.text,
                        children: p.intl.string(p.t.KYPNUl)
                    }),
                    (0, r.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: h.text,
                        children: p.intl.string(p.t.xRHk7e)
                    }),
                    (0, r.jsx)(c.oil, {
                        placeholder: p.intl.formatToPlainString(p.t['0tbz6+'], { number: f.A.USER_CODE_LENGTH }),
                        maxLength: f.A.USER_CODE_LENGTH,
                        className: h.textInputContainer,
                        inputClassName: l()(h.textInput, { [h.textInputError]: null != _ }),
                        autoComplete: 'off',
                        autoFocus: !0,
                        value: o,
                        onChange: x,
                        error: _
                    })
                ]
            }),
            (0, r.jsx)(c.zxk, {
                fullWidth: !0,
                color: c.zxk.Colors.BRAND,
                onClick: v,
                submitting: C,
                disabled: o.length !== f.A.USER_CODE_LENGTH,
                children: (0, r.jsx)(c.Text, {
                    variant: 'text-md/medium',
                    children: p.intl.string(p.t['3PatS0'])
                })
            })
        ]
    });
}
