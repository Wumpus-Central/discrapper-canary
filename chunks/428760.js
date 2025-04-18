n.d(t, { Z: () => u });
var r = n(200651),
    i = n(192379),
    s = n(120356),
    l = n.n(s),
    a = n(481060),
    o = n(730671),
    c = n(388032),
    d = n(886678);
function u(e) {
    let { onChangeText: t, maxWordCount: n, className: s, textAreaClassName: u, subtitleText: m, initialValue: g } = e,
        p = i.useMemo(() => (null != g ? g : []), [g]),
        { value: h, onChange: f, errorMessage: x } = (0, o.Z)(t, g, n);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsxs)('div', {
                className: l()(d.keywordsContainer, s),
                children: [
                    (0, r.jsx)(a.lcI, {
                        className: l()(d.keywordsTextArea, u),
                        value: h,
                        onChange: f,
                        placeholder: c.NW.string(c.t.UyaxJy)
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
                      className: l()(d.paddingTop, d.errorText),
                      variant: 'text-xs/medium',
                      color: 'text-danger',
                      children: x
                  })
                : (0, r.jsx)(a.Text, {
                      className: d.paddingTop,
                      variant: 'text-xs/normal',
                      color: 'header-secondary',
                      children: null != m ? m : c.NW.string(c.t['Gm6G5+'])
                  })
        ]
    });
}
