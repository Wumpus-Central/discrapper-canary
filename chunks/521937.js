n.d(t, { v: () => p }), n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    l = n(593473),
    s = n(512969),
    c = n(481060),
    d = n(489863),
    u = n(511540),
    f = n(828878),
    h = n(388032),
    x = n(802969);
function p(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
        [o, p] = r.useState(() => {
            let { user_code: e } = l.parse(window.location.search);
            return n && null != e ? e : '';
        }),
        _ = (0, s.TH)(),
        C = r.useCallback(() => {
            (0, d.c$)(_);
        }, [_]),
        { manualSubmit: v, error: m, submitting: g } = (0, u.c)(o, t, C);
    return (0, a.jsxs)('div', {
        className: x.content,
        children: [
            (0, a.jsxs)('div', {
                className: x.innerContent,
                children: [
                    (0, a.jsx)(c.X6q, {
                        variant: 'heading-xl/extrabold',
                        className: x.text,
                        children: h.intl.string(h.t.KYPNUl)
                    }),
                    (0, a.jsx)(c.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: x.text,
                        children: h.intl.string(h.t.xRHk7e)
                    }),
                    (0, a.jsx)(c.oil, {
                        placeholder: h.intl.formatToPlainString(h.t['0tbz6+'], { number: f.A.USER_CODE_LENGTH }),
                        maxLength: f.A.USER_CODE_LENGTH,
                        className: x.textInputContainer,
                        inputClassName: i()(x.textInput, { [x.textInputError]: null != m }),
                        autoComplete: 'off',
                        autoFocus: !0,
                        value: o,
                        onChange: p,
                        error: m
                    })
                ]
            }),
            (0, a.jsx)(c.zxk, {
                fullWidth: !0,
                color: c.zxk.Colors.BRAND,
                onClick: v,
                submitting: g,
                disabled: o.length !== f.A.USER_CODE_LENGTH,
                children: (0, a.jsx)(c.Text, {
                    variant: 'text-md/medium',
                    children: h.intl.string(h.t['3PatS0'])
                })
            })
        ]
    });
}
