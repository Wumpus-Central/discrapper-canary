n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    s = n.n(l),
    a = n(481060),
    o = n(730671),
    c = n(388032),
    d = n(886678);
function u(e) {
    let { onChangeText: t, maxWordCount: n, className: l, textAreaClassName: u, subtitleText: m, initialValue: g } = e,
        p = i.useMemo(() => (null != g ? g : []), [g]),
        { value: h, onChange: f, errorMessage: x } = (0, o.Z)(t, g, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: s()(d.keywordsContainer, l),
                children: [
                    (0, r.jsx)(a.lcI, {
                        className: s()(d.keywordsTextArea, u),
                        value: h,
                        onChange: f,
                        placeholder: c.intl.string(c.t.UyaxJy)
                    }),
                    (0, r.jsx)(a.Text, {
                        className: d.keywordsCounter,
                        variant: 'text-xs/normal',
                        color: 'text-muted',
                        children: ''.concat(p.length, ' / ').concat(n)
                    })
                ]
            }),
            null != x
                ? (0, r.jsx)(a.Text, {
                      className: s()(d.paddingTop, d.errorText),
                      variant: 'text-xs/medium',
                      color: 'text-danger',
                      children: x
                  })
                : (0, r.jsx)(a.Text, {
                      className: d.paddingTop,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: null != m ? m : c.intl.string(c.t['Gm6G5+'])
                  })
        ]
    });
}
