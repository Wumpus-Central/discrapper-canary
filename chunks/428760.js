n.d(t, { Z: () => d });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(730671),
    c = n(388032),
    u = n(886678);
function d(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: d, subtitleText: m, initialValue: g } = e,
        p = i.useMemo(() => (null != g ? g : []), [g]),
        { value: h, onChange: f, errorMessage: x } = (0, o.Z)(t, g, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(u.keywordsContainer, l),
                children: [
                    (0, r.jsx)(a.lcI, {
                        className: s()(u.keywordsTextArea, d),
                        value: h,
                        onChange: f,
                        placeholder: c.intl.string(c.t.UyaxJy)
                    }),
                    (0, r.jsx)(a.Text, {
                        className: u.keywordsCounter,
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: ''.concat(p.length, ' / ').concat(n)
                    })
                ]
            }),
            null != x
                ? (0, r.jsx)(a.Text, {
                      className: s()(u.paddingTop, u.errorText),
                      variant: 'text-xs/medium',
                      color: 'text-danger',
                      children: x
                  })
                : (0, r.jsx)(a.Text, {
                      className: u.paddingTop,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: null != m ? m : c.intl.string(c.t['Gm6G5+'])
                  })
        ]
    });
}
