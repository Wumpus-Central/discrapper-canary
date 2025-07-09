(n.d(t, { v: () => m }), n(388685), n(35282));
var a = n(255367),
    r = n(73800),
    o = n(120356),
    i = n.n(o),
    l = n(593473),
    s = n(114858),
    c = n(755721),
    d = n(481060),
    u = n(489863),
    f = n(511540),
    p = n(828878),
    h = n(388032),
    x = n(949463);
function m(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
        [o, m] = r.useState(() => {
            let { user_code: e } = l.parse(window.location.search);
            return n && null != e ? e : '';
        }),
        b = (0, s.TH)(),
        v = r.useCallback(() => {
            (0, u.c$)(b, 'user_code_input_unauthorized');
        }, [b]),
        { manualSubmit: _, error: g, submitting: C } = (0, f.c)(o, t, v);
    return (0, a.jsxs)('div', {
        className: x.content,
        children: [
            (0, a.jsxs)('div', {
                className: x.innerContent,
                children: [
                    (0, a.jsx)(d.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: x.text,
                        children: h.intl.string(h.t.KYPNUl)
                    }),
                    (0, a.jsx)(d.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.text,
                        children: h.intl.string(h.t.xRHk7e)
                    }),
                    (0, a.jsx)(d.oil, {
                        placeholder: h.intl.formatToPlainString(h.t['0tbz6+'], { number: p.A.USER_CODE_LENGTH }),
                        maxLength: p.A.USER_CODE_LENGTH,
                        className: x.textInputContainer,
                        inputClassName: i()(x.textInput, { [x.textInputError]: null != g }),
                        autoComplete: 'off',
                        autoFocus: !0,
                        value: o,
                        onChange: m,
                        error: g
                    })
                ]
            }),
            (0, a.jsx)(c.zx, {
                fullWidth: !0,
                color: c.zx.Colors.BRAND,
                onClick: _,
                submitting: C,
                disabled: o.length !== p.A.USER_CODE_LENGTH,
                children: (0, a.jsx)(d.Text, {
                    variant: 'text-md/medium',
                    children: h.intl.string(h.t['3PatS0'])
                })
            })
        ]
    });
}
